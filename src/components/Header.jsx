import {Link, Links} from 'react-router-dom'
 
const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-[5%] bg-black">
      <h1 className="logo p-2 text-[1.7rem] font-bold text-white transition-all">LOJA <span className="text-[#ff00c8] p-1">GAMER</span></h1>
      <nav>
        <ul className='flex list-none items-center gap-8'>
            <li>
                      <Link to="/" className="text-white text-lg no-underline hover:text-[#ff3ad4]">Home</Link>
            </li>
            <li>
                <Link to="/jogos">Jogos</Link>
            </li>
            <li>
                <Link to="/contato">Contato</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
