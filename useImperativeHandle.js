import React, { useRef, useImperativeHandle, forwardRef } from "react";

const CustomInput = ({ ref }) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () =>  ({
        focus: () => inputRef.current.focus(),
        clear: () => (inputRef.current.value = ""),
    }));

    return <input ref={inputRef} type="text" />;
};

export default function App() {
    const inputRef = useRef();

    return (
        <>
            <CustomInput ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>Focus</button>
            <button onClick={() => inputRef.current.clear()}>Clear</button>
        </>
    );
}


