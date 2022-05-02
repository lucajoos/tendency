import Parameter from '../types/Parameter'

/**
 * Groups parameters into independent environment.
 * @function
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Parameter[]} - Specified parameters
 *
 * @example
 *
 *    group('a', 'b')
 */
const group = (...parameters: Parameter[]): Parameter[] => parameters
export default group
