import { useEffect, useState } from "react";
import { greet } from "../../pkg/lib";

export default function Home() {
  const [message, setMessage] = useState("");
  const [fib, setFib] = useState(0);

  useEffect(() => {
    setMessage(greet("Next.js and WebAssembly"));
   //  setFib(fibonacci(10));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      {/* <p>The 10th Fibonacci number is: {fib}</p> */}
    </div>
  );
}