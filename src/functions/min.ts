import { Flag, Parameter } from '../types/index'

/**
 * Appends parameters if the minimum number of valid conditions are true.
 * Parameters are also appended if the given count is exactly equal to the number of conditions.
 * @function
 * @param count {number} - Minimum number of valid conditions
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Flag} - Corresponding Flag
 *
 * @example
 *
 *    min(1, 'a', 'b')
 *    // returns: ''
 *
 *    min(1, true, 'a', 'b')
 *    // returns: 'a b'
 *
 *    min(1, true, true, 'a', 'b')
 *    // returns: 'a b'
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
