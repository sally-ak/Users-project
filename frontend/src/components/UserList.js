import React, { useEffect, useState } from 'react';
import api from '../api';

const UserList = ({ onEdit, onDelete, refresh }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/');
      setUsers(response.data);
    } catch (err) {
      console.error('Erreur lors du chargement des utilisateurs:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [refresh]); // recharge quand refresh change

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
          <div className="user-info">
            <strong>{user.name}</strong> — {user.email}
          </div>
          <div className="button-group">
            <button onClick={() => onEdit(user)}>Modifier</button>
            <button onClick={() => onDelete(user.id)}>Supprimer</button>
          </div>
        </li>
        
        ))}
      </ul>
    </div>
  );
};

export default UserList;
