import React, { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState(null);
    
    useEffect(() => {
        fetcher().then(res => setData(res));
    }, []);
    
  return <div>{data}</div>;
}

async function fetcher() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    return JSON.stringify(data);
}
