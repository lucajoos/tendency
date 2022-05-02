import Parameter from './Parameter'
import Options from './Options'

interface Flag {
  type: 'flag'
  options: Options
  parameters: Parameter[]
}

export default Flag
