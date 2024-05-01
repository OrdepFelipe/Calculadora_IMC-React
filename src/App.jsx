import React, { useState } from 'react';
import Calculadora from './components/Calculadora/Calculadora';
import Tabela from './components/Tabela/Tabela';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);

  const handleBtn = () => {
    // Converte altura e peso para números
    const alturaNumero = parseFloat(altura);
    const pesoNumero = parseFloat(peso);

    const alturaMetros = alturaNumero / 100; // Convertendo altura para metros
    const calculaImc = pesoNumero / (alturaMetros * alturaMetros);

    // Atualiza o estado do IMC
    setImc(calculaImc);
  }

  return (
<div className='container'>
      <Calculadora altura={altura} setAltura={setAltura} peso={peso} setPeso={setPeso} handleBtn={handleBtn} />
      <div className='container__resultado'>
      {imc !== null && <p>O seu IMC é: {imc.toFixed(2)}</p>}
      {imc !== null && <Tabela imc={imc} />}
      </div>
</div>
  );
}

export default App;
