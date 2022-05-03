import { Parameter } from '../types/index'

/**
 * Groups parameters into independent environment.
 * Alternatively, parameters can be moved into a separate array.
 * @function
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Parameter[]} - Specified parameters
 *
 * @example
 *
 *    tendency(true, group(false, 'a', 'b'))
 *    returns: ''
 *
 * Alternatively:
 *    tendency(true, [false, 'a', 'b'])
 *    returns: ''
 */
const group = (...parameters: Parameter[]): Parameter[] => parameters
export default group
