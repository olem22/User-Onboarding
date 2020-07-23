import React from 'react'

function Member(props) {
  const { details } = props
  console.log(props)
  return (
    <div className='member container'>
      <h2>{details.data.username}</h2>
      <p>Email: {details.data.email}</p>
      <p>Password: {details.data.password}</p>
    </div>
  )
}
export default Member