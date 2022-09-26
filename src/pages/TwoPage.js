import { useContext } from "react";
import { CounterContext } from "./components/CounterContext";

export function TwoPage() {
  const { value } = useContext(CounterContext);
  return <h1>{value}</h1>;
}
