import React from 'react'
import {AiOutlinePlus} from "react-icons/ai"
import { Link } from 'react-router-dom'

const AddButton = () => {
  return (
    <div>
        <Link to="note/new" className="floating-button">
            <AiOutlinePlus/>
        </Link>
    </div>
  )
}

export default AddButton
