import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./Post"
import "./global.css";
import styles from "./App.module.css"
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Diego" 
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore rerum corporis, saepe magni aperiam quam quaerat ipsa. Nemo porro natus quas fugit, voluptas ad, quae, nesciunt magnam laborum placeat aspernatur."
          />

          <Post 
            author="Bianca" 
            content="Um novo post."
          />
        </main>
      </div>
    </div>
  )
}

