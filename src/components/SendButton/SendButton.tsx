import { Icon } from '../Icon/Icon'
import './SendButton.less'

export const SendButton = () => {
  return (
    <button className='send-button'>
      Send <Icon id='arrow-up' />
    </button>
  )
}
