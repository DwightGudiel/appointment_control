import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [appointmentsArray, setAppointmentsArray] = useState([]);
  const [appointment, setAppointment] = useState({});

  // console.log(appointmentObj);

  return (
    <>
      <Header />
      <div className="container mx-auto p-5">
        <div className="lg:flex">
          <Form
            setAppointmentsArray={setAppointmentsArray}
            appointmentsArray={appointmentsArray}
            appointment={appointment}
          />
          <Result
            appointmentsArray={appointmentsArray}
            setAppointment={setAppointment}
          />
        </div>
      </div>
    </>
  );
}

export default App;
