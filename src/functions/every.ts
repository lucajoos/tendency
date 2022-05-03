import { Parameter } from '../types/index'

/**
 * Appends parameters if all conditions are true.
 * @function
 * @param parameters {...Parameter} - Multiple parameters
 * @return {Parameter[]} - Specified parameters
 *
 * @example
 *
 *    tendency(true, true, false, every('a', 'b'))
 *    returns: ''
 *
 *    tendency(true, true, every('a', 'b'))
 *    returns: 'a b'
 */
const every = (...parameters: Parameter[]): Parameter[] => parameters
export default every
