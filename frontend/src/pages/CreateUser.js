import React from 'react';
import UserForm from '../components/UserForm';
import { createUser } from '../api/api';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();

  const handleCreate = async (user) => {
    await createUser(user);
    navigate('/');
  };

  return <UserForm onSubmit={handleCreate} />;
};

export default CreateUser;
