import React, { useActionState } from "react";

const increment = async (previousState) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return previousState + 1;
};

export default function App() {
    const [count, formAction, isPending] = useActionState(increment, 0);

    return (
        <form action={formAction}>
            <p>Count: {count}</p>
            <button type="submit" disabled={isPending}>
                {isPending ? "Incrementing..." : "Increment"}
            </button>
        </form>
    );
}
