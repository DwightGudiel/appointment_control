import { useState } from "react";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

function Form({ setAppointmentsArray, appointmentsArray }) {
  // State para los campos del formualario
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [note, setNote] = useState("");

  function generateId() {
    const random = Math.random().toString(36).slice(2);
    const date = Date.now().toString(36);
    return random + date;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if ([name, phone, date, hour, note].includes("")) {
      // Alerta
      Swal.fire({
        title: "Error!",
        text: "Todos los campos son obligatorios",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    // Objeto cita
    const appointmentObj = {
      name,
      phone,
      date,
      hour,
      note,
      id: generateId(),
    };

    // Añadir objeto al areglo citas
    setAppointmentsArray([...appointmentsArray, appointmentObj]);

    setName("");
    setPhone("");
    setDate("");
    setHour("");
    setNote("");
  }

  return (
    <div className="lg:w-1/2 xl:w-2/5">
      <h2 className="text-center font-black text-fuchsia-900 uppercase">
        Añade tus <span className="">Citas</span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className="shadow hover:shadow-lg shadow-black rounded-2xl p-5"
      >
        <div className="mt-3">
          <label htmlFor="name">Nombre:</label>
          <input
            id="name"
            className="block w-full p-1 border-solid border-2 border-black"
            type="text"
            placeholder="Escriba el nombre del cliente(a)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* end of field */}
        <div className="mt-3">
          <label htmlFor="phone">Teléfono:</label>
          <input
            id="phone"
            className="block w-full p-1 border-solid border-2 border-black"
            type="tel"
            placeholder="Escriba su número de teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {/* end of field */}
        <div className="mt-3">
          <label htmlFor="date">Fecha: </label>
          <input
            id="date"
            className="block w-full p-1 border-solid border-2 border-black"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        {/* end of field */}
        <div className="mt-3">
          <label htmlFor="hour">Hora:</label>
          <input
            id="hour"
            className="block w-full p-1 border-solid border-2 border-black"
            type="time"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />
        </div>
        {/* end of field */}
        <div className="mt-3">
          <label htmlFor="note">Nota: </label>
          <textarea
            className="block w-full p-1 border-solid border-2 border-black"
            id="note"
            rows="5"
            placeholder="Escriba una nota sobre el cliente"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>
        {/* end of field */}
        <div className="mt-5">
          <button
            className="bg-fuchsia-900 w-full text-white py-2"
            type="submit"
          >
            Añadir Cita
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
