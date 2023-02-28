import { useState } from "react";

function Form() {
  // State para los campos del formualario
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [note, setNote] = useState("");

  if([name,phone,date,hour,note].includes("")){
    console.log("Campos vacios zorraaaaaaaaaaa");
  }
  else{
    console.log("Uwu rey eres un crack");
  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="text-center font-black text-fuchsia-900 uppercase">
        Añade tus <span className="">Citas</span>
      </h2>
      <form className="shadow hover:shadow-lg shadow-black rounded-2xl p-5">
        <div className="mt-3">
          <label htmlFor="name">Nombre:</label>
          <input
            id="name"
            className="block w-full p-1 border-solid border-2 border-black"
            type="text"
            placeholder="Escriba el nombre del cliente(a)"
            value={name}
            onChange = { e => setName(e.target.value)}
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
            onChange = { e => setPhone(e.target.value)}
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
            onChange = { e => setDate(e.target.value)}
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
            onChange = { e => setHour(e.target.value)}
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
            onChange = { e => setNote(e.target.value)}
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
