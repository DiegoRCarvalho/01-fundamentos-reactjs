// Importa o pacote responsável pelo core do React, possui as funcionalidades que são compartilhadas entre todas as interfaces (Web, Native, VR, TV, etc.)
import { StrictMode } from 'react'

// Importa o pacote que faz a integração do React com a DOM (Document Object Model), que é a representação do HTML através Javascript
import { createRoot } from 'react-dom/client'

import { App } from './App.jsx'

// Função utilizada pelo Javascript para criar o HTML, CSS e Javascript da aplicação SPA. Ela irá criar os elementos informados aqui, no elemento root do aequivo index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
