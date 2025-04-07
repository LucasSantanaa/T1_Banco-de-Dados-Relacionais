import React, { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import { getUser, updateUser } from '../api/api';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    getUser(id).then((res) => setInitialData(res.data));
  }, [id]);

  const handleUpdate = async (user) => {
    await updateUser(id, user);
    navigate('/');
  };

  return initialData ? <UserForm initialData={initialData} onSubmit={handleUpdate} /> : <p>Carregando...</p>;
};

export default EditUser;
