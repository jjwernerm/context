import { useContext, useState } from 'react'; // Importar useContext y useState desde React
import { NameContext } from '../context/NameContext.jsx'; // Importar NameContext
import { AgeContext } from '../context/AgeContext.jsx'; // Importar AgeContext

const MsgUseContext = () => {
  // Obtener los valores y las funciones para actualizar los valores de los contextos NameContext y AgeContext
  const { name, setName, lastName, setLastName } = useContext(NameContext);
  const { age, setAge } = useContext(AgeContext);

  const currentYear = new Date().getFullYear(); // Obtener el año actual
  const [msg, setMsg] = useState(false); // Estado para mostrar el mensaje

  // Manejar el evento de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    setMsg(true); // Mostrar el mensaje
  };

  // Función para resetear los valores
  const reset = () => {
    setName(''); // Resetear el estado name
    setLastName(''); // Resetear el estado lastName
    setAge(''); // Resetear el estado age
    setMsg(false); // Ocultar el mensaje
  };

  return (
    <>
      <div className='flex flex-col'>
        <div className='flex justify-center'>
          <button
            type="button"
            className='bg-blue-50 text-blue-700 border rounded-md m-2 px-3 py-1 cursor-pointer hover:bg-blue-100 uppercase font-semibold'
            onClick={handleSubmit} // Asignar la función handleSubmit al evento onClick del botón
          >
            Listo
          </button>

          <button
            type="button"
            className='bg-red-50 text-red-700 border rounded-md m-2 px-3 py-1 cursor-pointer hover:bg-red-100 uppercase font-semibold'
            onClick={reset} // Asignar la función reset al evento onClick del botón
          >
            Resetear
          </button>
        </div>

        <div className='m-10 text-center'>
          <p className={`${msg ? 'block' : 'hidden'}`}> {/* Mostrar u ocultar el mensaje según el estado msg */}
            Hola! Tu nombre es <span className='font-bold text-sky-600'>{name}</span>
            , tu apellido es <span className='font-bold text-sky-600'>{lastName}</span>
            {' '} y tienes <span className='font-bold text-sky-600'>{currentYear - age}</span>
            {' '} años de edad.
          </p>
        </div>
      </div>
    </>
  );
};

export default MsgUseContext;