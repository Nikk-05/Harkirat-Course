import React, { useState, useCallback, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    // Just updating the state to re-render the component 
    const [, forceRender] = useState(0);
    // Now for getting count how many re- render happens we can't take state variable because to set state variable it will re-render again.
    // We need to create a persistent variable which will not change after re-rendering
    const countRendering = useRef(0)

    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());
    };

    countRendering.current = countRendering.current + 1

    return (
        <div>
            <p>This component has rendered {countRendering.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};