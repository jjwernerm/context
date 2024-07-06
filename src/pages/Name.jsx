import { useContext } from 'react'; // Importar useContext desde React
import { NameContext } from '../context/NameContext.jsx'; // Importar NameContext

const Name = () => {
  // Obtener los valores y las funciones para actualizar los valores del contexto NameContext
  const { name, setName, lastName, setLastName } = useContext(NameContext);

  return (
    <>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        className='inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 m-2'
        value={name} // Asignar el valor del input al estado name
        onChange={e => setName(e.target.value)} // Actualizar el estado name cuando el valor del input cambia
      />
      <input
        type="text"
        placeholder="Escribe tu apellido"
        className='inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 m-2'
        value={lastName} // Asignar el valor del input al estado lastName
        onChange={e => setLastName(e.target.value)} // Actualizar el estado lastName cuando el valor del input cambia
      />
    </>
  );
};

export default Name;