import { useState, useEffect } from 'react';
import api from '../api/api';
import { useParams, useNavigate } from 'react-router-dom';

function EditUser() {
  const { id } = useParams();
  const [form, setForm] = useState({ nome: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/users/${id}`)
      .then(response => setForm(response.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/users/${id}`, form);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Usuário</h2>
      <input type="text" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <button type="submit">Atualizar</button>
    </form>
  );
}

export default EditUser;
