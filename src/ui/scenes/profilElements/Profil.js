import React from 'react'
import CardView from '../../components/CardView'

export default class Profil extends React.Component{

  render(){
    console.log(this.props)
    return(
      <CardView>
        <h3>First Name : {this.props.informations.name}</h3>
        <h3>Last Name : {this.props.informations.lastName}</h3>
        <h3>Email : {this.props.informations.email}</h3>
        <h3>Address : {this.props.informations.address}</h3>
      </CardView>
    )
  }
}
