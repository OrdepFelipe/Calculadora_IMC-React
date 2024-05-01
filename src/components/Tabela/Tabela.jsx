import styles from './Tabela.module.css'

const Tabela = () => {
    return(
        <table className={styles.table}>
            <thead>
            <tr>
                <th>IMC</th>
                <th>Classificação</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                <td>Menor que 16.9</td>
                <td>Muito abaixo do peso</td>
                </tr>
                <tr>
                <td>17 a 18.4</td>
                <td>Abaixo do peso</td>
                </tr>
                <tr>
                <td>18.5 a 24.9</td>
                <td>Peso normal</td>
                </tr>
                <tr>
                <td>25 a 29.9</td>
                <td>Acima do peso</td>
                </tr>
                <tr>
                <td>30 a 34.9</td>
                <td>Obsidade grau I</td>
                </tr>
                <tr>
                <td>35 a 40</td>
                <td>Obsidade grau II</td>
                </tr>
                <tr>
                <td>Maior que 40</td>
                <td>Obsidade grau III</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabela