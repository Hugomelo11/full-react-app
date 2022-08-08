import { useState } from "react";



function Main() {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1);
  return (
    <main>
      <h2>
        Main sectino here... </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          praesentium beatae! Fuga ullam ex nihil rem, repellendus blanditiis
          accusamus corrupti asperiores iusto nostrum delectus beatae saepe,
          dolor tempore ea a!
        </p>
        <h3>Counter: {count}</h3>
        <button onClick={handleClick}>Click Me!</button>
    </main>
  );
}

export default Main;
