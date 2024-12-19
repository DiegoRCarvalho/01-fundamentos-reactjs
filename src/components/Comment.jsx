import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"
export function Comment(props) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="src/assets/profile-leslie.svg"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Lane</strong>
              <time 
                title="16 de Dezembro às 19:37h" 
                datetime="2024-12-16 19:37:30">Publicado há 1h
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          {/* Esse content é a propriedade que inventamos para o componente Comment, quando ele foi chamado dentro do componente Post.  Também poderíamos desestruturar essa propriedade, mas preferi deixar apenas para eu me lembrar de onde essa informação está vindo*/}
          <p>{props.content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}