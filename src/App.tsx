import { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const defaultContent =
    ";=mqis nonnnonon Lorem ipsum dolor okokk sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  let top = "good news"
  return (
    <>
      <Accordion style={{ width: '500px', backgroundColor: 'green' }}>
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1" style={{ width: '500px' }}>
          {defaultContent}  
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
          Edit coucou<code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
