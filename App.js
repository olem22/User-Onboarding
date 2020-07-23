import React, { useState } from 'react';
import Form from './Form'
import { v4 as uuid } from 'uuid'
import axios from 'axios'
import * as yup from 'yup';
import Member from './Member'
 
const initialFormValues = {
  username: '',
  email: '',
  password:'',
  tos:false
}
 
function App() {
  const [members, setMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
 
 
  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue }
    setFormValues(updatedFormValues)
  }
 
const submitForm = () => {
 
 
  const newMember = {
    id:uuid(),
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    password: formValues.password,
    tos:formValues.tos
  }
 
  formSchema.validate(newMember,options)
    .then(function(response) {
      axios.post('https://reqres.in/api/users',newMember)
      .then(function (response) {
        console.log(response);
        setMembers([response,...members]);
      })
      .catch(function (error) {
        console.log(error);
      });
    })
    .catch(function (response){
      var err="";
      response.errors.map(x=> err=err+x+"\n")
      window.alert(err)
        console.log(response)})
 
 
  //setMembers([newMember, ...members])
    setFormValues(initialFormValues)
  }
 
  //YUP
  const formSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required('No email provided.'),
    username: yup
        .string()
        .required('No username provided.'),
    password: yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    tos:yup.boolean()
    .required()
    .oneOf([true], 'Must Accept Terms of Service'),
 
  });
 
var options ={
  abortEarly:false,
}
  //-------------------------------

return(
  <div className='container' >
    <h1>Team Members</h1>
 
<Form
values = {formValues}
update = {updateForm}
submit = {submitForm}
/>
{members.map(member =>    
      <Member key = {member.id} details = {member}/>
  )
}
 
</div>)}
 
export default App;