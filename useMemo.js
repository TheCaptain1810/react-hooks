import React, { useState, useMemo } from "react";

export default function ExpensiveComponent() {
    const [count, setCount] = useState(0);

    const expensiveCalculation = useMemo(() => {
        console.log("Calculating...");
        return Array(1000000).fill(count).reduce((a, b) => a + b, 0);
    }, [count]);

    return (
        <>
            <p>Result: {expensiveCalculation}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
}
