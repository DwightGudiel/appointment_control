function Appointment({ appointment }) {
  const { name, phone, date, hour, note } = appointment;
  return (
    <div className="my-5 border-8 rounded-2xl p-5">
      <div className="flex justify-between mt-5 border-b-2">
        <p className="text-lg">
          <span className="font-bold">Fecha </span>
          {date}
        </p>
        <p className="text-lg">
          <span className="font-bold">Hora: </span>
          {hour}
        </p>
      </div>
      <p className="my-5">
        <span className="font-bold">Nombre Cliente(a): </span>
        {name}
      </p>
      <p className="my-3">
        <span className="font-bold">Teléfono: </span> {phone}
      </p>
      <p className="my-3">
        <span className="font-bold">Nota: </span>
        {note}
      </p>

      <div className="mt-10 flex gap-10">
        <button className="bg-red-600 text-white py-2 w-full" type="button">
          Editar
        </button>
        <button className="bg-green-600 text-white py-2 w-full" type="button">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Appointment;
