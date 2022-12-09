import React, { useState } from 'react'
import styles from './ImagensProdutos.module.css'
import { produto } from "../data.json"


export function ImagensProdutos(props) {
  const imagens = produto[props.idProduto].imagensAlternativas;
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(produto[props.idProduto].imagemPrincipal);

  return (
    <>
      <img src={image} className={styles.imagemPrincipalProduto} />
      <div className={styles.imagensPequenasContainer}>
        {imagens?.map((item, i) => (
          <img
            key={i}
            src={item}
            className={i === index ? styles.selectedimage : styles.imagemPequena}
            alt={props.descricaoImg ? props.descricaoImg : "Descrição da imagem indisponível"}
            onClick={() => {
              setIndex(i);
              setImage(imagens[i]);
              console.log(i);
            }}
          />
        ))}
      </div>
    </>
  )
}

export default ImagensProdutos;