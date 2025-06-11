import { useState, useMemo } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(1);
    // Your solution starts here
    // It will redenr only for changed value in input
    const expensiveValue = useMemo(() => {
        let fact = 1;
        if (input === 0)
            return fact;
        for (let i = 1; i <= input; i++) {
            fact = fact * i;
        }
        return fact;
    }, [input]);
    // Your solution ends here


    return (
        <div>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}