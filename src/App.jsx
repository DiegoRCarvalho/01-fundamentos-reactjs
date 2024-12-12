import { Header } from "./components/Header"
import { Post } from "./Post"
import "./global.css";
export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Diego" 
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore rerum corporis, saepe magni aperiam quam quaerat ipsa. Nemo porro natus quas fugit, voluptas ad, quae, nesciunt magnam laborum placeat aspernatur."
      />

      <Post 
        author="Bianca" 
        content="Um novo post."
      />
    </div>
  )
}

