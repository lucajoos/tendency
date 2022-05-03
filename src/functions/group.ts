import { Parameter } from '../types/index'

/**
 * Groups parameters into independent environment.
 * All previously set conditions will be reset as a result.
 * Alternatively, parameters can be moved into a separate array.
 * @function
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Parameter[]} - Specified parameters
 *
 * @example
 *
 * tendency(true, group(false, 'a', 'b'))
 * // returns: ''
 *
 * tendency(false, group(true, 'a', 'b'))
 * // returns: ''
 *
 * tendency(true, group('a', 'b'))
 * // returns: 'a b'
 *
 * tendency(true, group(true, 'a', 'b'))
 * // returns: 'a b'
 *
 *
 * // Alternatively:
 * tendency(true, [false, 'a', 'b'])
 * // returns: ''
 */
const group = (...parameters: Parameter[]): Parameter[] => parameters
export default group
