import React from 'react'
import Input from '../../components/Input'
import Botton from '../../components/Botton'


export default class Submit extends React.Component{
  state={
    name: '',
    lastName:'',
    email:'',
    address:''
  }

  handleChange = (e, input)=> {
      e.preventDefault();
      const tmp=e.target.value
      this.setState({[input]:tmp})
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.changeCurrentUser(this.state)
    this.setState({name:'',lastName:'',address:'',email:''})
  }

  render(){
    const{name,lastName,address,email}=this.state
    return(
      <div>
        <Input type="text" placeholder="Name" value={name} onChange={(e)=>{this.handleChange(e,"name")}} />
        <Input type="text" placeholder="Last Name" value={lastName} onChange={(e)=>{this.handleChange(e,"lastName")}} />
        <Input type="text" placeholder="email" value={email} onChange={(e)=>{this.handleChange(e,"email")}} />
        <Input type="text" placeholder="Address" value={address} onChange={(e)=>{this.handleChange(e,"address")}} />
        <Botton type="Submit" text="Change !" onClick={(e)=>this.handleSubmit(e)}/>

      </div>
    )
  }
}
