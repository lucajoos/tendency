import { Flag, Parameter } from '../types/index'
import match from './match'
import some from './some'
import min from './min'
import max from './max'

const invert = (flag: Flag): Flag => ({
  type: 'flag',
  options: Object.assign(flag.options, { isNot: true }),
  parameters: flag.parameters
})

const not = {
  /**
   * Appends parameters if all conditions are false.
   * Inversion of the function every().
   * @function
   * @param parameters {...Parameter} - Multiple parameters
   * @return {Parameter[]} - Specified parameters
   *
   * @example
   *
   *   tendency(false, false, true, not.every('a', 'b'))
   *   returns: ''
   *
   *   tendency(false, false, not.every('a', 'b'))
   *   returns: 'a b'
   */
  every: (...parameters: Parameter[]): Flag => ({
    type: 'flag',
    options: { isNot: true },
    parameters
  }),

  /**
   * Appends parameters if the given count of conditions are false.
   * Inversion of the function match().
   * @function
   * @param count {number} - Exact number of invalid conditions
   * @param parameters {...Parameter} - Multiple parameters
   * @return {Flag} - Corresponding Flag
   *
   * @example
   *
   *    tendency(true, false, not.match(2, 'a', 'b'))
   *    // returns: ''
   *
   *    tendency(false, false, not.match(2, 'a', 'b'))
   *    // returns: 'a b'
   */
  match: (count: number, ...parameters: Parameter[]): Flag => invert(match(count, ...parameters)),

  /**
   * Appends parameters if the given maximum number of false conditions is not exceeded.
   * Parameters are also appended if the given count is exactly equal to the number of conditions.
   * Inversion of the function max().
   * @function
   * @param count {number} - Maximum number of invalid conditions
   * @param parameters {...Parameter} - Multiple parameters
   * @return {Flag} - Corresponding Flag
   *
   * @example
   *
   *    tendency(not.max(1, 'a', 'b'))
   *    // returns: 'a b'
   *
   *    tendency(false, not.max(1, 'a', 'b'))
   *    // returns: 'a b'
   *
   *    tendency(false, false, not.max(1, 'a', 'b'))
   *    // returns: ''
   */
  max: (count: number, ...parameters: Parameter[]): Flag => invert(max(count, ...parameters)),

  /**
   * Appends parameters if the minimum number of valid conditions are false.
   * Parameters are also appended if the given count is exactly equal to the number of conditions.
   * Inversion of the function min().
   * @function
   * @param count {number} - Minimum number of invalid conditions
   * @param parameters {...Parameter} - Multiple parameters
   * @return {Flag} - Corresponding Flag
   *
   * @example
   *
   *    tendency(not.min(1, 'a', 'b'))
   *    // returns: ''
   *
   *    tendency(false, not.min(1, 'a', 'b'))
   *    // returns: 'a b'
   *
   *    tendency(false, false, not.min(1, 'a', 'b'))
   *    // returns: 'a b'
   */
  min: (count: number, ...parameters: Parameter[]): Flag => invert(min(count, ...parameters)),

  /**
   * Appends parameters if at least one condition is invalid.
   * @function
   * @param parameters {...Parameter} - Multiple parameters
   * @return {Flag} - Corresponding Flag
   *
   * @example
   *
   *    not.some('a', 'b')
   */
  some: (...parameters: Parameter[]): Flag => invert(some(...parameters))
}

export default not
