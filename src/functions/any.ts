import { Flag, Parameter } from '../types/index'

/**
 * Appends parameters independently of the conditions.
 * @function
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Flag} - Corresponding Flag
 *
 * @example
 *
 *    tendency(true, false, any('a', 'b'))
 *    // returns: 'a b'
 */
const any = (...parameters: Parameter[]): Flag => {
  return {
    type: 'flag',
    options: {
      isAny: true
    },
    parameters
  }
}

export default any
