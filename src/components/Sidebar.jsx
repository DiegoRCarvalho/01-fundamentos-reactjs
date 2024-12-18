import styles from "./Sidebar.module.css"
import { Avatar } from "./Avatar"
import { PencilLine } from "phosphor-react"
export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="src/assets/cover.svg"
      />
      <div className={styles.profile}>
        <Avatar 
          // hasBorder={true} // Com a desestruturação que fizemos nesse commit, não é mais necessário informar essa propriedade caso ela seja true.
          src="src/assets/profile-leslie.svg"
        />
        <strong>Leslie Alexander</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}