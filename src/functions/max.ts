import { Flag, Parameter } from '../types/index'

/**
 * Appends parameters if the given maximum number of true conditions is not exceeded.
 * Parameters are also appended if the given count is exactly equal to the number of conditions.
 * @function
 * @param count {number} - Maximum number of valid conditions
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Flag} - Corresponding Flag
 *
 * @example
 *
 *    tendency(max(1, 'a', 'b'))
 *    // returns: 'a b'
 *
 *    tendency(true, max(1, 'a', 'b'))
 *    // returns: 'a b'
 *
 *    tendency(true, true, max(1, 'a', 'b'))
 *    // returns: ''
 */
const max = (count: number, ...parameters: Parameter[]): Flag => {
  return {
    type: 'flag',
    options: {
      max: count
    },
    parameters
  }
}

export default max
