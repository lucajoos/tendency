import { Flag, Parameter } from '../types/index'

/**
 * Appends parameters if at least one condition is valid.
 * @function
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Flag} - Corresponding Flag
 *
 * @example
 *
 *    some('a', 'b')
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
