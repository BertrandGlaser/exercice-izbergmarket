import {connect} from 'react-redux'
import Profil from './Profil'

const ProfilConnected = connect(
  state=>({informations: state.informations})
)(Profil)

export default ProfilConnected
