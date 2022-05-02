import { Flag, Parameter } from '../types/index'
import match from './match'
import some from './some'
import min from './min'
import max from './max'
import any from './any'

const invert = (flag: Flag): Flag => ({
  type: 'flag',
  options: Object.assign(flag.options, { isNot: true }),
  parameters: flag.parameters
})

const not = {
  /**
   * Appends parameters if all conditions are false.
   * @function
   * @param parameters {...Parameter} - Multiple parameters
   * @return {Parameter[]} - Specified parameters
   *
   * @example
   *
   *    not.every('a', 'b')
   */
  every: (...parameters: Parameter[]): Flag => ({
    type: 'flag',
    options: { isNot: true },
    parameters
  }),

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
  some: (...parameters: Parameter[]): Flag => invert(some(...parameters)),

  /**
   * Appends parameters if the given count of conditions are false.
   * @function
   * @param count {number} - Exact number of invalid conditions
   * @param parameters {...Parameter} - Multiple parameters
   * @return {Flag} - Corresponding Flag
   *
   * @example
   *
   *    not.match(1, 'a', 'b')
   */
  match: (count: number, ...parameters: Parameter[]): Flag => invert(match(count, ...parameters)),

  /**
   * Appends parameters if the minimum number of conditions are false.
   * @function
   * @param count {number} - Minimum number of invalid conditions
   * @param parameters {...Parameter} - Multiple parameters
   * @return {Flag} - Corresponding Flag
   *
   * @example
   *
   *    not.min(1, 'a', 'b')
   */
  min: (count: number, ...parameters: Parameter[]): Flag => invert(min(count, ...parameters)),

  /**
   * Appends parameters if the given maximum number of invalid conditions is not exceeded.
   * @function
   * @param count {number} - Maximum number of invalid conditions
   * @param parameters {...Parameter} - Multiple parameters
   * @return {Flag} - Corresponding Flag
   *
   * @example
   *
   *    not.max(1, 'a', 'b')
   */
  max: (count: number, ...parameters: Parameter[]): Flag => invert(max(count, ...parameters)),

  /**
   * Appends parameters independently of the conditions.
   * @function
   * @param parameters {...Parameter} - Multiple parameters
   * @return {Flag} - Corresponding Flag
   *
   * @example
   *
   *    not.any('a', 'b')
   */
  any: (...parameters: Parameter[]): Flag => any(...parameters)
}

export default not
