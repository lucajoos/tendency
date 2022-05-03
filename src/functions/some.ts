import { Flag, Parameter } from '../types/index'

/**
 * Appends parameters if at least one condition is `true`.
 * This always refers to the current environment.
 * @function
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Flag} - Corresponding flag
 *
 * @example
 *
 * tendency(some('a', 'b'))
 * // returns: ''
 *
 * tendency(true, some('a', 'b'))
 * // returns: 'a b'
 *
 * tendency(true, false, some('a', 'b'))
 * // returns: 'a b'
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
