import styles from './Calculadora.module.css'

const Calculadora = ({altura, setAltura, peso, setPeso, handleBtn}) =>{
    return(
        <div className={styles.container}>
        <header>
            <h1>Calculadora IMC</h1>
        </header>
        <div className={styles.container__inputs}>
        <input className={styles.inAltura} type="number" placeholder="Insira sua altura em centímetros" value={altura} onChange={e => setAltura(e.target.value)}/>
        <input className={styles.inPeso} type="number" placeholder="Insira seu peso" value={peso} onChange={e => setPeso(e.target.value)}/>
        </div>
        <button className={styles.btn} onClick={handleBtn}>Calcular</button>
        </div>
    )
}

export default Calculadora