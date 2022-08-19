import './App.css';
import { useState } from "react";



function App() {
  const [unidad, setUnidad] = useState(0);
  const [decena, setDecena] = useState(0);
  const [centena, setCentena] = useState(0);
  const [unidadDeMil, setUnidadDeMil] = useState(0);
  const [decenaDeMil, setdecenaDeMil] = useState(0);
  const [CentenaDeMil, setcentenaDeMil] = useState(0);

  setTimeout(() => {
    if (unidad < 9) {
      setUnidad(unidad + 1);
    } else {
      setUnidad(0);
      if (decena < 9) {
        setDecena(decena + 1);
      } else {
        setDecena(0);
        if (centena < 9) {
          setCentena(centena + 1);
        } else {
          setCentena(0);
          if (unidadDeMil < 9) {
            setUnidadDeMil(unidadDeMil + 1);
          } else {
            setUnidadDeMil(0);
            if (decenaDeMil < 9) {
              setdecenaDeMil(decenaDeMil + 1);
            } else {
              setdecenaDeMil(0);
              setcentenaDeMil(CentenaDeMil + 1);
            }
          }
        }
      }
    }

  }, 1000);

  return (
    <div className='contador'>
      
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
      </svg>  . {CentenaDeMil}  {decenaDeMil} {unidadDeMil} {centena} {decena} {unidad}






    </div>
  );
}

export default App;
