import React from 'react'
import { FaRegSquare } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import { FaRegSquareCheck } from "react-icons/fa6";


const Liste = ({todo, toggle, deleteTodo}) => {
  return (
    <div onClick={() => toggle(todo.id)} className='py-2 border-b w-full flex items-center cursor-pointer gap-1 select-none'>
        {
          todo.isSelected ? <FaRegSquareCheck />  : <FaRegSquare />
        }
         <p className={`flex-1 ${todo.isSelected ? 'line-through' : ""}`}>{todo.text}</p>
         <IoTrashOutline onClick={()=>deleteTodo(todo.id)} className='text-red-700 hover:scale-120 transition-all'/>
    </div>
  )
}

export default Liste