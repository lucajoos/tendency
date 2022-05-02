import Flag from './Flag'
import Config from './Config'

type Parameter = boolean | string | number | undefined | null | Flag | Parameter[] | Config
export default Parameter
