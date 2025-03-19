import React, { useState, useCallback } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    return (
        <>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
        </>
    );
}
