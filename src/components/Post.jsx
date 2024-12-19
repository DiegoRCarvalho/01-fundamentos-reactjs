import styles from "./Post.module.css"
import { format, formatDistanceToNow } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
export function Post({ author, publishedAt, content }) {


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
          datetime={publishedAt.toISOString()}>
          Há {publishDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          
          // if (line.type === 'paragraph'){
          //   return <p>{line.content}</p>
          // } else if (line.type === 'link'){
          //   return <p><a href="#">{line.content}</a></p>
          // }

          switch(line.type) {
            case 'paragraph':
              return <p>{line.content}</p>
            case 'link':
              return <p><a href="#">{line.content}</a></p>
          }

        })}
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário."/>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )
}