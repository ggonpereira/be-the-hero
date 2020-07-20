import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
      e.preventDefault();

      const data = {
        title,
        description,
        value,
      };

      try {
        await api.post('incidents', data, {
          headers: {
            Authorization: ongId,
          }
        })

        history.push('/profile');
      } catch (err) {
        alert('Erro ao cadastrar caso, tente novamente.')
      }
    }

    return (
        <div className="new-incident-container">
        <div className="content">
          <section>
            <img src={ logoImg } alt="Be The Hero" />

            <h1>Cadastrar novo caso</h1>
            <p>Descreva detalhadamente seu caso para encontrar um herói para resolvê-lo.</p>

            <Link to="/profile" className="back-link">
                <FiArrowLeft size={16} color="#E02041"/>
                Voltar para home
            </Link>
          </section>

          <form onSubmit={handleNewIncident}>
            <input type="text"
              placeholder="Título do caso" maxLength="200"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Descrição" 
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            
            <input type="number"
              placeholder="Valor em reais" 
              value={value}
              onChange={e => setValue(e.target.value)}
            />


            <button className="button" type="submit">Cadastrar</button>
          </form>
        </div>
    </div>


    );
}