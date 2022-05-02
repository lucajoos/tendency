import { Flag, Parameter } from '../types/index'

/**
 * Appends parameters if the minimum number of valid conditions are true.
 * @function
 * @param count {number} - Minimum number of valid conditions
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Flag} - Corresponding Flag
 *
 * @example
 *
 *    min(1, 'a', 'b')
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
