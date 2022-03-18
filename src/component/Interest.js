import React from 'react'
import blocks from '../resource/block.js'

const el = blocks.map((item, index)=>{
    return(
      <div className="block" key={index}>
          <div className='icon'><div>{item.icon}</div></div>
          <p>{item.text}</p>
      </div>
    )
})
function Interest() {
  return (
    <div className='interest'>
      {el}
    </div>
  )
}

export default Interest
