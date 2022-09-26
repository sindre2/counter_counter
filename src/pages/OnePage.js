import { CounterContext } from "./components/CounterContext"
import { useContext } from "react";

export function OnePage ()
{
    const {value, setValue} = useContext(CounterContext)
    const add = () =>
    {
        setValue(value => value + 1);
    }

    return(
        <div>
            <h1>{value}</h1>
            <button onClick={add}>Add</button>
        </div>
    )
}