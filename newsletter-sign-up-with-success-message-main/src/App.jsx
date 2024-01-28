/** @format */

import { useEffect, useState } from "react";
import "./App.css";
import { FormCard, TyCard } from "./components";

function App() {
  const [email, setEmail] = useState("");
  const [isSigned, setIsSigned] = useState(false);

  useEffect(() => {
    // this variable can be posted on API
    console.log("email: ", email);
    setIsSigned(true);
  }, [email]);

  return (
    <>
      <div className=''>
        {!isSigned ? (
          <FormCard setForm={(value) => setEmail(value)} />
        ) : (
          <TyCard
            email={email}
            setFormOpen={() => {
              setIsSigned(false);
              // setEmail("");
            }}
          />
        )}
      </div>
    </>
  );
}

export default App;
