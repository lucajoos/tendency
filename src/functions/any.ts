import { Flag, Parameter } from '../types'

/**
 * Appends parameters independently of the conditions.
 * @function
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Flag} - Corresponding Flag
 *
 * @example
 *
 *    any('a', 'b')
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
