import { Flag, Parameter } from '../types'

/**
 * Appends parameters if the given maximum number of valid conditions is not exceeded.
 * @function
 * @param count {number} - Maximum number of valid conditions
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Flag} - Corresponding Flag
 *
 * @example
 *
 *    max(1, 'a', 'b')
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
