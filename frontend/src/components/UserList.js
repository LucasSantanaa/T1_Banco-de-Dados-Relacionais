import { useEffect, useState } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users/')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Usuários</h2>
      <Link to="/create">Cadastrar novo usuário</Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.nome} - {user.email}
            <Link to={`/edit/${user.id}`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
