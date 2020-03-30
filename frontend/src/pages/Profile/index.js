import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import './styles.css';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      },
    }).then((res) => {
      setIncidents(res.data);
    });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((i) => i.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>
          Bem vinda,
          {' '}
          {ongName}
        </span>

        <Link className="button" to="/incidents/new"> Cadastrar novo caso </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map((i) => (
          <li key={i.id}>
            <strong>CASO: </strong>
            <p>{i.title}</p>

            <strong>DESCRIÇÃO: </strong>
            <p>{i.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR',
                {
                  style: 'currency',
                  currency: 'BRL',
                }).format(i.value)}
            </p>

            <button type="button" onClick={() => handleDeleteIncident(i.id)}>
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
          </li>
        ))}

      </ul>
    </div>
  );
}
