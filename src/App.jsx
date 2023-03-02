import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {

  const [appointmentsArray, setAppointmentsArray] = useState([]);

  console.log(appointmentsArray);

  return (
    <>
      <Header />
      <div className="container mx-auto p-5">
        <div className="lg:flex">
          <Form
            setAppointmentsArray={setAppointmentsArray}
            appointmentsArray={appointmentsArray}
          />
          <Result appointmentsArray={appointmentsArray}/>
        </div>
      </div>
    </>
  );
}

export default App;
