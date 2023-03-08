import React from 'react'
import { Link } from 'react-router-dom'
const List = ({contact})=>{
   return <>
        <div className="ui relaxed divided list"> </div>

<div style={{padding:'10px'}} className="item">
 <img className ="ui avatar image" src="images.png" alt="avatar" srcset="" />
 
  <div className="content">
   <div  className="description"> {contact.name}</div>
    <div className="description">{contact.email}</div>
    <button className=''> Delete </button>
  </div>
</div>
   </>
}

const ContactList = ({contacts}) => {
  return (
   <div>
    <Link to ='/addContacts'>
    <button className='ui button right blue'> Add Contact</button>
    </Link>
{contacts.map(contact=>{
    return( <>
<List contact ={contact}/>
    </>)
})}
   </div>
  )
}

export default ContactList