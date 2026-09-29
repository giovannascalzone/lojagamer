import { Link } from "react-router-dom"

const Error = () => {
  return (
    <main>
      <h2>404</h2>
      <p>OPS! Página não encontrada</p>
      <p>Parece que você se perdeu no Mapa do Jogo. A página que você está procurando não existe ou foi removida.</p>
      <Link to="/">Voltar pra a Home</Link>
    </main>
  )
}

export default Error
