import React from 'react'

function VebsiteComponent({contactHendler1,item,ValueHendler,i}) {
  return (
  <div className="watsApp">
       <label className="img-label1" htmlFor=""><img className='write-contact-image' src={item.img} alt=""/></label>
       <input onChange={(e)=>ValueHendler(e)} type="text" id={i} className="form-control inputs-all1 all-inputs-class mt-4" placeholder="Provide a link to your wats app account "/>
       <div onClick={() => contactHendler1(item)} className="x-img" id="xImg"><img src="image/Vector 2.png" alt=""/></div>
   </div>
  )
}

export default VebsiteComponent