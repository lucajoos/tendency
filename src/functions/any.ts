import { Flag, Parameter } from '../types/index'

/**
 * Appends parameters independently of the conditions.
 * These parameters are always appended.
 * @function
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Flag} - Corresponding flag
 *
 * @example
 *
  * tendency(true, any('a', 'b'))
  * // returns: 'a b'
  *
  * tendency(false, any('a', 'b'))
  * // returns: ''
  *
  * tendency(true, false, any('a', 'b'))
  * // returns: 'a b'
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
