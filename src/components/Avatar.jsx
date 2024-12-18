import styles from "./Avatar.module.css"
// Podemos usar a desestruturação do Javascript para separar as propriedades e definir o valor padrão delas
export function Avatar({hasBorder = true, src}) {
  return (
    <img  
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src}
    />
  )
}

/*
Exemplo de Desestruturação Javascript

Criando um objeto:

    const user = {
      name: Diego,
      idade: 41
    }

desestruturando:

    const {name, idade } = user

*/