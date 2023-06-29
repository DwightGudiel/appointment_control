function Appointment({ appointment, setAppointment, deleteAppointment }) {
  // Object Desctructuring
  const { name, phone, date, hour, note, id } = appointment;

  const handleDeleteAppointment = () => {
    const confirmDelete = confirm(
      "¿Está seguro de eliminar el siguente registro?"
    );

    // confirmDelete = true
    if (confirmDelete) {
      // We pass the id
      deleteAppointment(id);
    }
  };

  return (
    <div className="my-5 border-8 rounded-2xl p-5 md:p-10">
      <div className="md:flex md:justify-between mt-5 border-b-2 text-lg ">
        <p className=" mb-2 md:mb-0">
          <span className="font-bold">Fecha </span>
          {date}
        </p>
        <p>
          <span className="font-bold">Hora: </span>
          {hour}
        </p>
      </div>
      <p className="my-5 text-lg">
        <span className="font-bold">Nombre Cliente(a): </span>
        {name}
      </p>
      <p className="my-3 text-lg">
        <span className="font-bold">Teléfono: </span> {phone}
      </p>
      <p className="my-3 text-lg">
        <span className="font-bold">Nota: </span>
        {note}
      </p>

      <div className="mt-10 md:flex md:gap-10">
        <button
          onClick={() => setAppointment(appointment)}
          className="font-bold rounded-2xl bg-blue-500 text-white mb-5 md:mb-0 py-2 w-full"
          type="button"
        >
          Editar
        </button>
        <button
          onClick={() => handleDeleteAppointment()}
          className=" font-bold rounded-2xl bg-red-500 text-white py-2 w-full"
          type="button"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Appointment;
