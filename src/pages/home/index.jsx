
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Aula de React com Vite JS</h1>

      <button
        onClick={() => navigate('/exemplo/1')}
      >
        Exemplo 1
      </button>

    </div>
  )
}

export default Home;
