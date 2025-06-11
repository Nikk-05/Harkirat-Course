import React from 'react'
import {useRecoilValue} from 'recoil'
import { todoAtomFamily } from './TodoAtomFamily'

const TodoComponent = ({id}) => {
    const todoTask = useRecoilValue(todoAtomFamily(id))
  return (
    <div>
        {todoTask.title}
        <br></br>
        {todoTask.description}
    </div>
  )
}

export default TodoComponent