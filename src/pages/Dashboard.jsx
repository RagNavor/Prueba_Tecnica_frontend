import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Dashboard(){
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/LogIn');
    }
  }, [navigate]);
  return (
    <h1>Dashboard</h1>
  );
};


