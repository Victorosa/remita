import React from 'react'
import elements from '../resource/element'

console.log(elements)
const el = elements.map((item,index)=> (
        <div key={index} className="tooltip-item">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
        </div>
    ))

console.log(el)
function Tooltip() {
  return (
    <div className='tooltip'>
      {el}
    </div>
  )
}

export default Tooltip
