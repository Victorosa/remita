import React from 'react'

function Form({ children, value}) {
  return (
    <div className='form'>
      {children}
      <div className='bold'>
        {value}
      </div>
    </div>
  )
}

export default Form
