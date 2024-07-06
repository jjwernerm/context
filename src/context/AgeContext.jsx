import { createContext, useState } from 'react'; // Importar createContext y useState desde React

// Crear el contexto AgeContext
export const AgeContext = createContext();

// Definir el proveedor del contexto AgeProvider
export const AgeProvider = ({ children }) => {
  const [age, setAge] = useState(''); // Estado para almacenar la edad

  return (
    // Proporcionar el contexto AgeContext a los componentes hijos
    <AgeContext.Provider value={{ age, setAge }}>
      {children}
    </AgeContext.Provider>
  );
};