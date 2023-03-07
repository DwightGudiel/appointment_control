import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import Footer from "./components/Footer";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

function App() {
  // LS = localStorage
  const getAppointmentsArrayLS =
    JSON.parse(localStorage.getItem("appointmentsArray")) ?? [];
  
  const [appointmentsArray, setAppointmentsArray] =
    useState(getAppointmentsArrayLS);
  
  // Object for storing the data of an updated appointment
  const [appointment, setAppointment] = useState({});

  // add appointments array to Local Storage
  useEffect(() => {
    localStorage.setItem(
      "appointmentsArray",
      JSON.stringify(appointmentsArray)
    );
  }, [appointmentsArray]);


  function deleteAppointment(id) {
    /* Filtering the appointmentsArray and returning a new array with the appointment that has the id
    that is not equal to the id that is being passed. */
    const newAppointmenArray = appointmentsArray.filter(
      (appointment) => appointment.id !== id
    );

    // Update the Use State
    setAppointmentsArray(newAppointmenArray);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Cita Eliminada con éxito',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-5">
        <div className="lg:flex">
          <Form
            // Props 
            setAppointmentsArray={setAppointmentsArray}
            appointmentsArray={appointmentsArray}
            appointment={appointment}
            setAppointment={setAppointment}
          />
          <Result
            // Props
            appointmentsArray={appointmentsArray}
            setAppointment={setAppointment}
            deleteAppointment={deleteAppointment}
          />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
