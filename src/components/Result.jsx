import Appointment from "./Appointment";

function Result({ appointmentsArray, setAppointment, deleteAppointment }) {
  return (
    <div className="lg:w-2/3 xl:w-3/5 p-5 lg:h-screen lg:overflow-y-scroll">
      <h3 className="text-center my-5 font-black text-fuchsia-900 uppercase text-2xl">
        Tus Citas
      </h3>

      {/* We check that the array is not empty */}
      {appointmentsArray.length > 0 ? (
        <>
          {/* The array has elements*/}
          <p className="capitalize text-center font-bold my-10 text-xl  text-fuchsia-900 ">
            Gestiona tus citas pendientes
          </p>
          {appointmentsArray.map((appointment) => (
            <Appointment
              // Note: When we add a new record to the DOM, we need it to carry an id
              key={appointment.id}
              // Props
              appointment={appointment}
              setAppointment={setAppointment}
              deleteAppointment={deleteAppointment}
            />
          ))}
        </>
      ) : (
        // The array is empty
        <p className="capitalize text-center font-bold my-10 text-xl  text-fuchsia-900 ">
          Sin citas en el salón empieza por añadir una cita
        </p>
      )}
    </div>
  );
}

export default Result;
