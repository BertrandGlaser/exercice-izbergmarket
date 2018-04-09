const initialState = {
  informations:{
    name:'Bertrand',
    lastName:'Glaser',
    address:'26 rue du général Clavery',
    email:'bertrandglaser@gmail.com'
  }
}

const Reducer = (state = initialState, action) => {
  switch(action.type){

    case 'CHANGE_INFORMATIONS':
      return{
        ...state,
        informations:action.payload
      }

    default:
      return state
  }
}

export default Reducer
