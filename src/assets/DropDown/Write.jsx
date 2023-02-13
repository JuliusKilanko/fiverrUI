import React, {useState} from 'react'
import DropdownItems from '../../component/DropdownItems'
import '../../component/NabLinks.css'

function Write() {
  const [openWrite, setOpenWrite]= useState(false)

  function handleMouseOn(){
    setOpenWrite(true)

}
function handleMouseOut(){
    setOpenWrite(false)

}
  return (
    <div className='relative'>
        <li>
                <p className=' text-[14px] cursor-pointer' onMouseOver={handleMouseOn} onMouseOut={handleMouseOut} >Writing and Translation</p>
            </li>
            <div className={`dropdown-Write ${openWrite ? 'active' : 'inactive'}`}>
            <ul>
            <DropdownItems text = {"Development"}/>
            <DropdownItems text = {"Business"}/>
            <DropdownItems text = {"Finance and Accounting"}/>
            <DropdownItems text = {"IT & Software"}/>
            <DropdownItems text = {"Office Productivity"}/>
            <DropdownItems text = {"Personal Development"}/>
            <DropdownItems text = {"Design"}/>
            <DropdownItems text = {"Marketing"}/>
            <DropdownItems text = {"Lifestyle"}/>
            <DropdownItems text = {"Photography & Video"}/>
            <DropdownItems text = {"Health & Fitness"}/>
            <DropdownItems text = {"Music"}/>
        </ul>
            </div>
    </div>
  )
}

export default Write