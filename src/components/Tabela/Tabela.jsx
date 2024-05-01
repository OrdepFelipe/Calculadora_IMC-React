import React from 'react';
import styles from './Tabela.module.css';

const classificacaoIMC = [
  { imc: 16.9, classificacao: 'Muito abaixo do peso' },
  { imc: 18.4, classificacao: 'Abaixo do peso' },
  { imc: 24.9, classificacao: 'Peso normal' },
  { imc: 29.9, classificacao: 'Acima do peso' },
  { imc: 34.9, classificacao: 'Obesidade grau I' },
  { imc: 40, classificacao: 'Obesidade grau II' },
];

const Tabela = ({ imc }) => {
    return (
      <table className={styles.table}>
        <thead className={styles.theade}>
          <tr>
            <th>IMC</th>
            <th>Classificação</th>
          </tr>
        </thead>
        <tbody>

        {classificacaoIMC.map((item, index) => {
          const nextItem = classificacaoIMC[index + 1];
          let rowClass = '';
          if (imc !== null && imc >= item.imc) {
            if (nextItem !== undefined) {
              if (imc < nextItem.imc) {
                rowClass = styles.destacado;
              }
            } else {
              rowClass = styles.destacado;
            }
          }
          
            {
                /*
                    Pecorre cada intervalo de classificação de IMC na tabela.
                    Para cada intervalo, verificamos se o IMC calculado está dentro desse intervalo.
                    Se o IMC estiver dentro do intervalo, destacamos a linha na tabela.
                    Para determinar se o IMC está dentro do intervalo, comparamos o IMC com o limite inferior do intervalo e também com o limite superior do próximo intervalo (se houver).
                */
            }
            return (
              <tr key={index} className={rowClass}>
                <td>{item.imc}</td>
                <td>{item.classificacao}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  

export default Tabela;
