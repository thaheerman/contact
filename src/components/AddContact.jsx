import React from 'react'
import { Link } from 'react-router-dom'
const AddContact = ({addContactHandler}) => {
    const state={
        name :'',
        email:''
    }
async function submitter(e) {
    e.preventDefault()
   await addContactHandler(state)
    state.name=''
    state.email=''
}
function changer(e){
  state[e.target.name]=e.target.value
}
  return (
    <div>
        <div className="formContainer">
{console.log('hui')}
        <form className="ui form" onSubmit={submitter}>
  <div className="field">
    <label>Name</label>
    <input type="text" name="name" onChange = {changer}placeholder="First Name" />
  </div>
  <div className="field">
    <label>Email</label>
    <input type="text" name="email" onChange = {changer} placeholder="Last Name"/>
  </div>
  <button color='blue'className="ui button" type="submit">Submit</button>
  <Link to ='/contactList'>
  <button color='blue'className="ui button" type="submit">Show Contacts</button>
  </Link>
  
</form>
        </div>
    </div>
  )
}

export default AddContact