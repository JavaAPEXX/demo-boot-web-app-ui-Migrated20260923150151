import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Registration: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setGeneralError('');
    try {
      const params = new URLSearchParams();
      params.append('username', formData.username);
      params.append('password', formData.password);
      params.append('passwordConfirm', formData.passwordConfirm);
      // Endpoint /registration is UNCONFIRMED
      await axios.post('/registration', params, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      navigate('/welcome');
    } catch (err: any) {
      if (err.response && err.response.data) {
        const data = err.response.data;
        if (data.errors && typeof data.errors === 'object') {
          setErrors(data.errors);
        } else if (data.message) {
          setGeneralError(data.message);
        } else {
          setGeneralError('An unexpected error occurred.');
        }
      } else {
        setGeneralError('Network error. Please try again.');
      }
    }
  };

  return