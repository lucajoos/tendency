import { Flag, Parameter } from '../types/index'

/**
 * Appends the parameters if the given minimum `count` of `true` conditions is met.
 * Parameters are also appended if `count` is exactly equal to the number of conditions.
 * @function
 * @param count {number} - Minimum number of `true` conditions
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Flag} - Corresponding flag
 *
 * @example
 *
 * tendency(min(1, 'a', 'b'))
 * // returns: ''
 *
 * tendency(true, min(1, 'a', 'b'))
 * // returns: 'a b'
 *
 * tendency(true, true, min(1, 'a', 'b'))
 * // returns: 'a b'
 */
const min = (count: number, ...parameters: Parameter[]): Flag => {
  return {
    type: 'flag',
    options: {
      min: count
    },
    parameters
  }
}

export default min
