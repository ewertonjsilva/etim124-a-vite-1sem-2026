
import styles from './index.module.css';

export default function Exemplo03() {

    return (
        <div className={styles.container}>
            <label className={styles.texto}>Contador</label>
            <label                
                className={styles.botao}
            >+1</label>
        </div>
    );
}