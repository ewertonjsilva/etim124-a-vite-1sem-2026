
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router";

import './index.css';

function Home() {

  const navigate = useNavigate();

  return (
    <div className='containerHome'>
      <div className='containerAlinhamento'>
        <h1>Aula de React com Vite JS</h1>
        <div className='containerCards'>
          <button
            onClick={() => navigate('/exemplo/1')}
          >
            Exemplo 1
          </button>

          <Link to="/exemplo/2">Exemplo 2</Link>
        </div>



      </div>

    </div>
  )
}

export default Home;
