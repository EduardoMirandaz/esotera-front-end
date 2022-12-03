import styles from './DetalhesProduto.module.css'
import { produto } from "../data.json";



export function DetalhesProduto(props) {
    return (
        <div className={styles.detalhesProduto}>
            <h1 className={styles.tituloDetalhes}>Detalhes do produto</h1>
            <p>{produto[props.idProduto].descricaoDetalhadaMaior}</p>
        </div>
    )
}

