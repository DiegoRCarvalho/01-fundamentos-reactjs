import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="src/assets/profile-leslie.svg" />
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
          <p>Muito bom Devon, parabéns!! 👏👏</p>
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