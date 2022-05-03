import { Flag, Parameter } from '../types/index'

/**
 * Appends parameters if at least one condition is true.
 * @function
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Flag} - Corresponding Flag
 *
 * @example
 *
 *    some('a', 'b')
 *    // returns: ''
 *
 *    some(true, 'a', 'b')
 *    // returns: 'a b'
 *
 *    some(true, false, false, 'a', 'b')
 *    // returns: 'a b'
 */
const some = (...parameters: Parameter[]): Flag => {
  return {
    type: 'flag',
    options: {
      isSome: true
    },
    parameters
  }
}

export default some
