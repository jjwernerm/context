import { useContext } from 'react'; // Importar useContext desde React
import { AgeContext } from '../context/AgeContext.jsx'; // Importar AgeContext

const Age = () => {
  // Obtener el valor y la función para actualizar el valor del contexto AgeContext
  const { age, setAge } = useContext(AgeContext);

  return (
    <>
      <input
        type="text"
        placeholder="Escribe tu año de nacimiento"
        className='inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 m-2'
        value={age} // Asignar el valor del input al estado age
        onChange={e => setAge(e.target.value)} // Actualizar el estado age cuando el valor del input cambia
      />
    </>
  );
};

export default Age;