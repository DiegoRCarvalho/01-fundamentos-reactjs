import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import "./global.css";
import styles from "./App.module.css"

/* Para simular  dados que estaríamos recebendo de uma API, vamos criar os Post abaixo*/
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'src/assets/profile-jane.svg',
      name: 'Jane Cooper',
      role: 'Dev Front-End'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto'},
      {type: 'link', content: '#nlw'},
      {type: 'link', content: '#rocketseat'},

    ],
    publishedAt: new Date('2024-12-18 10:25:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'src/assets/profile-devon.svg',
      name: 'Devon Lane',
      role: 'Dev Front-End'
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      {type: 'link', content: 'Acesse e deixe seu feedback 👉 devonlane.design'},
      {type: 'link', content: '#uiux'},
      {type: 'link', content: '#userexperience'}
    ],
    publishedAt: new Date('2024-12-17 08:06:00')
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}