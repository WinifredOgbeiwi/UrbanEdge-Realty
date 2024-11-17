import React from 'react'
import { FooterLinks } from '../../utils/data-arrays'

const Footer = () => {
  return (
  <footer className='flex flex-col md:flex-row justify-between px-10 md:px-20 py-10'>
    <div className='mb-5 md:mb-0'>UrbanEdge</div>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-10 '>

{
  FooterLinks.map((item)=>(
    <div>
      <h3 className='mb-5 uppercase font-bold'>{item.title}</h3>
     <ul> {
        item.list.map((listItem)=>(
          <li className="flex flex-col capitalize mb-2">{listItem}</li>
        ))
      }</ul>
    </div>
  ))
}
    </div>
  </footer>
  )
}

export default Footer