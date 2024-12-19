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
      "Postagem legal."
  ])

  // É importante inicializar o useState com o tipo de dado que será armazenado, exemplo = String = '', array = []
  const [newCommentText, setNewCommentText] = useState('')

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
  function handleCreateNewComment(event) {
    // Precisamos impedir que a página seja recarregada quando o formulário for enviado.
    event.preventDefault()

    // event.target.comment.value recupera o valor da propriedade "comment" que está na textarea dentro do formulário abaixo.
    const newCommentText = event.target.comment.value

    // ...comments -> spread operator copia o valor atual da variável
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Refere
    // newCommentText -> novo conteúdo do comentário
   setComments([...comments, newCommentText]);

   // Abaixo vemos uma forma de limpar o textarea utilizando programação IMPERATIVA, devemos evitar utilizar esse tipo.
   // event.target.comment.value = ''

   // O ideal é utilizar programação DECLARATIVA no React, então veja como limpar o textarea. Sendo assim essa informação passa a ficar na propriedade value da textarea 
      /*
        1 - Crie a função handleNewCommentChange para receber o valor do textarea.
        2 - Adicione a propriedade value={newCommentText} ao textarea
        3 - Retorne o valor da textarea para vazio setNewCommentText('')
      */
      setNewCommentText('')
  }

  // Essa função receberá o textarea e não o formulário 
  function handleNewCommentChange(event){
    // Com o comando abaixo conseguiremos recuperar o valor digitado na textarea.
    setNewCommentText(event.target.value)
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
        <textarea 
          name="comment"
          placeholder="Deixe um comentário."
          value={newCommentText} // Chama a função para limparmos o textarea
          onChange={handleNewCommentChange} // Irá monitorar toda vez que ocorrer uma alteração no conteúdo da textarea. 
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment}/>
        })}
      </div>

    </article>
  )
}