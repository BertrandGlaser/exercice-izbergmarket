import {connect} from 'react-redux'
import {changeInformations} from '../../../actions/Action'
import Submit from './Submit'

const SubmitConnected = connect(
  state=>({informations: state.informations}),
  (dispatch) => (
    {
      changeCurrentUser: (informations)=> dispatch(changeInformations(informations))
    }
  )
)(Submit)

export default SubmitConnected
