import React from 'react'

function Form (props){

const { values, update, submit } = props

const onChange = evt => {
const name = evt.target.name
var val=evt.target.value;
if(name==='tos')
{
  if(evt.target.checked)
  val=true;

  else 
  val=false;

  console.log (val)
}
const value = val;
update(name, value)
}

const onSubmit = evt => {
evt.preventDefault()
submit()
}

return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>New Member</h2>
        <button>submit</button>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>
        <label htmlFor='usernameInput'>Username:&nbsp;
       
          <input
            id='usernameInput'
            name='username'
            type='text'
            placeholder='Enter username'
            maxLength='18'
           
            value={values.username}
            onChange={onChange}
          />
        </label>

        <label htmlFor='emailInput'>Email:&nbsp;
          
          <input
            id='emailInput'
            name='email'
            type='email'
            placeholder='Enter email'
            maxLength='18'
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label htmlFor='passwordInput'>Password:&nbsp;
          
          <input
            id='passwordInput'
            name='password'
            type='password'
            placeholder='Enter your password'
            maxLength='18'
            value={values.password}
            onChange={onChange}
          />
        </label>
        <label htmlFor='tosInput'>Tearms of Service:&nbsp;
          
          <input
            id='tosInput'
            name='tos'
            type='checkbox'
            onChange={onChange}
          />
        </label>
      </div>
    </form>
  )}

export default Form

