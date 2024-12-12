import { Post } from "./Post"
export function App() {
  return (
    <div>
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

