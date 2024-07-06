import { createContext, useState } from 'react'; // Importar createContext y useState desde React

// Crear el contexto NameContext
export const NameContext = createContext();

// Definir el proveedor del contexto NameProvider
export const NameProvider = ({ children }) => {
  const [name, setName] = useState(''); // Estado para almacenar el nombre
  const [lastName, setLastName] = useState(''); // Estado para almacenar el apellido

  return (
    // Proporcionar el contexto NameContext a los componentes hijos
    <NameContext.Provider value={{ name, setName, lastName, setLastName }}>
      {children}
    </NameContext.Provider>
  );
};