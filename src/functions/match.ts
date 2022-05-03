import { Flag, Parameter } from '../types/index'

/**
 * Appends parameters if the given count of conditions are true.
 * @function
 * @param count {number} - Exact number of valid conditions
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Flag} - Corresponding Flag
 *
 * @example
 *
 *    tendency(true, false, match(2, 'a', 'b'))
 *    returns: ''
 *
 *    tendency(true, true, match(2, 'a', 'b'))
 *    returns: 'a b'
 */
const match = (count: number, ...parameters: Parameter[]): Flag => {
  return {
    type: 'flag',
    options: {
      match: count
    },
    parameters
  }
}

export default match
