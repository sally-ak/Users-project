import React, { useState } from 'react'; 
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import api from './api';
import './App.css';


const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [refresh, setRefresh] = useState(false); // pour rafraîchir la liste après ajout/modif

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/${id}`);
      setRefresh(!refresh); // trigger refresh
    } catch (err) {
      console.error('Erreur lors de la suppression:', err);
    }
  };

  const handleSuccess = () => {
    setRefresh(!refresh); // trigger refresh après ajout/modif
    setSelectedUser(null); // reset form
  };

  return (
    <div className="App">
      <h1>Gestion des Utilisateurs</h1>
      <UserForm selectedUser={selectedUser} onSuccess={handleSuccess} />
      <UserList onEdit={handleEdit} onDelete={handleDelete} refresh={refresh} />
    </div>
  );
};

export default App;
