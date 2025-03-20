import React, { useState, useDebugValue } from "react";

const customHook = (initialValue) => {
    const [value] = useState(initialValue);
    useDebugValue(`Custom hook value: ${value}`);
    return value;
};

export default function App() {
    const customValue = customHook(69);
    return <p>{customValue}</p>;
}
