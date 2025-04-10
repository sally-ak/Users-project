import React, { useState, useEffect } from 'react';
import api from '../api';



const UserForm = ({ selectedUser, onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [selectedUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedUser) {
        // modification
        await api.put(`/${selectedUser.id}`, { name, email });
      } else {
        // ajout
        await api.post('/', { name, email });
      }
      onSuccess(); // pour rafraîchir la liste
      setName('');
      setEmail('');
    } catch (err) {
      console.error('Erreur lors de l’envoi du formulaire :', err);
    }
  };

  return (
    <div>
      <h2>{selectedUser ? 'Modifier un utilisateur' : 'Ajouter un utilisateur'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">{selectedUser ? 'Mettre à jour' : 'Ajouter'}</button>
      </form>
    </div>
  );
};

export default UserForm;
