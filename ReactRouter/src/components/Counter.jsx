import React from 'react'
import { useContext } from 'react'
import { CountContext } from './contextAPI'

const Count = ({ setCount }) => {
    console.log("Render")
    return (
        <div>
            <CountRerender />
            <div>
                <Button setCount={setCount} />
            </div>
        </div>
    )
}

const CountRerender = () => {
    const count = useContext(CountContext)
    return (
        <div>
            {count}
        </div>
    )
}

const Button = ({ setCount }) => {
    const count = useContext(CountContext) 
    return (
        <>
            <button onClick={() => {
                setCount(count + 1)
            }}>
                Increment
            </button>
            <button onClick={() => {
                setCount(count - 1)
            }}>
                Decrement
            </button>
        </>
    )
}

export { Count, Button }