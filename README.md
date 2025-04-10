# Users-project 

# Auteure
Salma Akjij

Projet Fullstack développé dans le cadre d'un TP de déploiement intitulé :  
**"Développement Fullstack + CI/CD avec GitHub Actions"**

Ce projet met en œuvre une application de gestion d'utilisateurs avec un **backend Node.js + MySQL**, un **frontend React**, une **dockerisation complète** via Docker & Docker Compose, et des **tests automatisés** avec intégration continue via **GitHub Actions**.

---

##  Stack utilisée

- **Backend** : Node.js, Express.js, MySQL
- **Frontend** : React.js
- **Tests** :
  - Backend : Mocha, Chai, Supertest
  - Frontend : React JS, Testing Library
- **DevOps** :
  - Docker + Docker Compose
  - GitHub Actions (CI)
- **Autres** :
  - Couverture de code : `nyc` / `istanbul`
  - Linting, bonne organisation des fichiers

---

## Structure du projet

Users-project/ 
├── backend/ # API Node.js + Express + MySQL 
├── frontend/ # Frontend React 
├── docker-compose.yml # Docker orchestration


---

### Backend

Le backend gère toutes les opérations CRUD sur les utilisateurs.  
Il est connecté à une base de données MySQL et inclut :

- des **routes REST** (`/api/users`)
- un système de **tests automatisés** (Mocha + Chai)
- un script `init.sql` pour la création automatique des tables
- un fichier `.env` pour la configuration

---

### Frontend

Le frontend est une application React permettant de :

- visualiser la liste des utilisateurs
- ajouter / modifier / supprimer un utilisateur
- se connecter à l'API backend via un fichier `api.js`
- inclut des tests unitaires via **Jest**

---

### Docker & CI/CD

- L'application est dockerisée (frontend + backend)
- Utilise `docker-compose.yml` pour tout orchestrer
- Un **pipeline GitHub Actions** est utilisé pour :
  - exécuter les tests automatiquement
  - vérifier la couverture
  - s’assurer que le build est valide

---

## Tests

| Côté        | Outils               | Commande                   |
|-------------|----------------------|-----------------------------|
| Backend     | Mocha + Chai         | `npm test` dans `backend/` |
| Couverture  | nyc + mocha          | `npm run coverage`         |
| Frontend    | Jest + React Testing Library | `npm test` dans `frontend/` |

---

## Lancer le projet

### 1 Cloner le repo

git clone https://github.com/sally-ak/Users-project.git
cd Users-project

### 2 Lancer avec Docker
docker-compose up --build

Les services frontend et backend seront disponibles respectivement sur :
http://localhost:3000 (frontend)
http://localhost:5000/api/users (backend)

## Remarques
.env n’est pas commité, utilisez env.example pour le recréer.

Pensez à mapper les ports Docker si un service ne se lance pas.

Couverture (exemple)
Un dossier /coverage/ est généré après les tests backend.
