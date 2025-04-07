import { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [form, setForm] = useState({ nome: '', email: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/users/', form);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Usuário</h2>
      <input type="text" placeholder="Nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
      <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default CreateUser;
