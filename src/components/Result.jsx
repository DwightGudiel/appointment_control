import Appointment from "./Appointment";

function Result({ appointmentsArray, setAppointment}) {
  return (
    <div className="lg:w-2/3 xl:w-3/5 p-5 lg:h-screen lg:overflow-y-scroll mt-10 lg:mt-0">
      <h3 className="text-center font-black text-fuchsia-900 uppercase">
        Tus Citas
      </h3>
      {appointmentsArray.map((appointment) => (
        <Appointment
          key={appointment.id}
          appointment={appointment}
          setAppointment={setAppointment}
        />
      ))}
    </div>
  );
}

export default Result;
