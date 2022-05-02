import { Config, Flag, Options, Parameter, State } from './types/index'
import { any, every, group, match, max, min, not, some } from './functions/index'

const resolve = (state: State, { options: template, parameters }: Flag): Parameter[] => {
  const options = Object.assign({
    isAny: false,
    isNot: false,
    isSome: false,
    match: -1,
    min: -1,
    max: -1
  }, template) as Required<Options>

  const focus = options.isNot ? state.negative : state.positive

  if (options.isAny) return parameters
  else if (options.isSome && focus > 0) return parameters
  else if (options.match > -1 ? focus === options.match : false) return parameters
  else if (options.min > -1 ? focus >= options.min : false) return parameters
  else if (options.max > -1 ? focus <= options.max : false) return parameters
  else if (!options.isSome && options.match === -1 && options.min === -1 && options.max === -1 && focus === state.all) return parameters

  return []
}

const parse = (parameters: Parameter[]): string => {
  let config: Config = {
    separator: ' '
  }

  const transformedParameters = parameters.filter(parameter => parameter !== null && parameter !== undefined).map(parameter => typeof parameter === 'number' ? (parameter).toString() : parameter)

  transformedParameters.filter((parameter) => typeof parameter === 'object' ? (typeof (parameter as Flag).type === 'undefined') : false).forEach(currentConfig => {
    config = Object.assign(config, currentConfig)
  })

  const booleans = transformedParameters.filter((parameter) => typeof parameter === 'boolean') as Boolean[]

  const all = booleans.length
  const positive = booleans.filter(Boolean).length
  const negative = all - positive
  const state = {
    all, positive, negative
  }

  const contents = transformedParameters.map(parameter => {
    let current = parameter
    let isFlag = false

    if (typeof current === 'object' ? (current as Flag).type === 'flag' : false) {
      current = resolve(state, current as Flag)
      isFlag = true
    }

    if (all !== positive && !isFlag) return null

    if (Array.isArray(current) ? current.length > 0 : false) return parse([config, ...(current as Parameter[])])
    return current
  }).filter(content => typeof content === 'string' ? content.length > 0 : false)

  return contents.join(config.separator)
}

/**
 * Transforms specified parameters into joined string based on conditions.
 * @function
 * @param parameters {...Parameter} - Multiple parameters
 * @return {string} - Converted result
 *
 * @example
 *
 *    tendency(true, 'a', 'b')
 */
const tendency = (...parameters: Parameter[]): string => parse(parameters)
export default tendency

export {
  not, some, match, min, max, every, any, group
}
