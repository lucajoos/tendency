import Parameter from '../types/Parameter'

/**
 * Appends parameters if all conditions are true.
 * @function
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Parameter[]} - Specified parameters
 *
 * @example
 *
 *    every('a', 'b')
 */
const every = (...parameters: Parameter[]): Parameter[] => parameters
export default every
