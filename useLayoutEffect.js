import React, { useLayoutEffect, useRef } from "react";

export default function App() {
    const divRef = useRef();

    useLayoutEffect(() => {
        const div = divRef.current;
        div.style.height = `${div.offsetWidth}px`;
    }, []);

    return <div ref={divRef} style={{ width: "100px", backgroundColor: "blue"}} />;
}

