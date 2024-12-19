import styles from "./Post.module.css"
import { format, formatDistanceToNow } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import { useState } from "react"

export function Post({ author, publishedAt, content }) {

  /* 
    Criar um array de comentários para simularmos que estamos consumindo uma API.

    O useState irá fazer com que o React descubra se houve alterações na variável comments, por exemplo quando adicionarmos um novo comentário a partir do formulário.

    O useState sempre retorna um vetor com dois parâmentros, o primeiro é a variável e o segundo é uma função que avisa ao React que a variável foi alterada.

    Abaixo para facilitar, fizemos a desestrutruração do array [comments, setComments].
  */
  const [comments, setComments] = useState([
      1,
      2
  ])

  // Utilizando o Intl do Javascript para formatar a data 
  /*
    const publishedDateFormatted = new Intl.DateTimeFormat(
      'pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
    ).format(publishedAt)
  */

  // Utilizando a biblioteca date-fns para formatar a data
  // https://date-fns.org/docs/format
  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'de' Y 'às' HH:mm'h'", {locale: ptBR})

  // A função formatDistanceToNow do date-fns recebe uma data e compara com o agora
  const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR})


  // Função utilizada para capturar dados de envio do formulário
  function handleCreateNewComment() {
    // Precisamos impedir que a página seja recarregada quando o formulário for enviado.
    event.preventDefault()
    
    // O spread operator copia o valor atual da variável
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // O comments.length + 1 é a próxima posição disponível do vetor.
   setComments([...comments, comments.length + 1]);
  }


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          {/* No React quando queremos enviar uma propriedade com valor TRUE, podemos omitir o true, bas informar o nome da propriedade, exempo o hasBorder abaixo. */}
          <Avatar 
            hasBorder
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time 
          title={publishedDateFormatted} 
          dateTime={publishedAt.toISOString()}>
          Há {publishDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line => {

/*
          if (line.type === 'paragraph'){
            return <p>{line.content}</p>
          } else if (line.type === 'link'){
            return <p><a href="#">{line.content}</a></p>
          }
*/ 
          switch(line.type) {
            case 'paragraph':
              return <p>{line.content}</p>
            case 'link':
              return <p><a href="#">{line.content}</a></p>
          }

        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário."/>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment />
        })}
      </div>

    </article>
  )
}