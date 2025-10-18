import React, { useEffect, useRef, useState } from 'react'
import { LuClipboardList } from "react-icons/lu";
import { RiAddBoxLine } from "react-icons/ri";
import Liste from './Liste';

const Todo = () => {
    const[todos,setTodos]=useState(localStorage.getItem("listem") ? JSON.parse(localStorage.getItem("listem")) : []);

    const data =useRef();

    const add = () => {
        const newMission = data.current.value.trim();
        data.current.value = "";

        if (newMission==""){
            return null;
        }

        
    const yapilacaklar={
        id: todos.length + 1,
        text: newMission,
        isSelected: false
    }

    setTodos((prev) =>[...prev, yapilacaklar]);
    }
    
    const toggle = (id) => {
        setTodos((prevTodos) =>{
            return prevTodos.map((todo) => {
                if(todo.id == id){
                    return {...todo, isSelected: !todo.isSelected}
                }
                return todo;
            })
        } )
    }

    const deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        })
    }

    useEffect(() =>{
        localStorage.setItem("listem", JSON.stringify(todos))
    },[todos]);

  return (
    <div className='place-self-center bg-[#ECEFCA] w-[450px] h-[600px] p-10 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold flex items-center justify-center gap-1'> 
            <LuClipboardList /> Yapilacaklar Listesi</h1>
        <hr />
        <div className='flex justify-center items-center'>
            <input ref={data} className='flex-1 m-1 border p-1 h-6' type="text" placeholder='Yeni bir gorev...'/>
            <RiAddBoxLine onClick={() => add()} className='size-7 cursor-pointer'/>
            
        </div>
        <div>
            {
                todos.map(todo => (
                    <Liste key={todo.id} todo={todo} toggle={toggle} deleteTodo={deleteTodo} />
                ))
            }
        </div>
    </div>
  )
}

export default Todo