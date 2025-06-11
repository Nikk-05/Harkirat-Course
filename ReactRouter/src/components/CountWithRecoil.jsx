import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from '../store/CountState.jsx'


const CountRecoil = () => {
    // console.log("Render")
    return (
        <div>
            <CountRerender />
            <div>
                <Button />
            </div>
            <Message />
        </div>
    )
}

const CountRerender = () => {
    const count = useRecoilValue(countAtom)
    return (
        <div>
            {count}
        </div>
    )
}

const Button = () => {
    // console.log("Button Re-render")
    const setCount = useSetRecoilState(countAtom)
    return (
        <>
            <button onClick={() => {
                setCount(count => count + 1)
            }}>
                Increment
            </button>
            <button onClick={() => {
                setCount(count => count - 1)
            }}>
                Decrement
            </button>
        </>
    )
}

const Message = () => {
    const isEven = useRecoilValue(evenSelector)
    return (
        <>
            {isEven === 0 ? <h4>It is Even</h4> : null}
        </>
    )
}

export default CountRecoil