import React, { useContext, createContext } from "react";

const ThemeContext = createContext("light");

const ThemedButton = () => {
    const theme = useContext(ThemeContext);
    return <button style={{ backgroundColor: theme === "light" ? "#fff" : "#333" }}>click me</button>;
};

export default function App() {
    return (
        <ThemeContext.Provider value="dark">
            <ThemedButton />
        </ThemeContext.Provider>
    );
}
