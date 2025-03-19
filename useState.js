import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prev => prev + 1);
    };

    return (
        <>
            <p>{count}</p>
            <button onClick={handleIncrement}>increment</button>
        </>
    );
}

