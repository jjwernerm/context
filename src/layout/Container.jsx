import { NameProvider } from '../context/NameContext.jsx'; // Importar el proveedor de NameContext
import { AgeProvider } from '../context/AgeContext.jsx'; // Importar el proveedor de AgeContext

import Name from '../pages/Name.jsx'; // Importar el componente Name
import Age from '../pages/Age.jsx'; // Importar el componente Age
import MsgUseContext from '../pages/MsgUseContext.jsx'; // Importar el componente MsgUseContext

const Container = () => {
  return (
    <>

      {/* Proveer el contexto de nombre a los componentes hijos */}
      <NameProvider>
        {/* Proveer el contexto de edad a los componentes hijos */}
        <AgeProvider>
          <div className="flex flex-col justify-center p-5 w-full">
            <Name /> {/* Componente para ingresar el nombre y apellido */}
            <Age /> {/* Componente para ingresar la edad */}
          </div>
          <div className="flex justify-center mb-10">
            <MsgUseContext /> {/* Componente para mostrar el mensaje */}
          </div>
        </AgeProvider>
      </NameProvider>

    </>
  );
};

export default Container;

// En este archivo, el componente Container utiliza los proveedores de contexto NameProvider y AgeProvider para envolver los componentes Name, Age y MsgUseContext. De esta manera, estos componentes tienen acceso a los contextos NameContext y AgeContext, permitiendo compartir y manejar estados de forma global en la aplicación.