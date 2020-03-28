import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();


    async function handleRegister(e) {
      e.preventDefault();

      const data = {
        name,
        email,
        whatsapp,
        city,
        uf,
      };

      try {
        const response = await api.post('ongs', data);

        alert(`Seu ID de acesso: ${response.data.id}. Por favor, guarde-o em um local seguro pois não será possível resgatá-lo em caso de perda.`);
        history.push('/')
      } catch (err) {
        alert('Erro no cadastro, tente novamente.')
      }
    }


    return (
        <div className="register-container">
            <div className="content">
              <section>
                <img src={logoImg} alt="Be The Hero" />

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre em nossa plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                <Link to="/" className="back-link">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Não tenho cadastro
                </Link>
              </section>

              <form onSubmit={handleRegister}>
                <input 
                  placeholder="Nome da ONG" maxLength="200"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <input 
                  type="email" placeholder="E-mail" maxLength="110"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <input 
                  placeholder="WhatsApp" maxLength="25" 
                  value={whatsapp}
                  onChange={e => setWhatsapp(e.target.value)}
                />
                
                <div className="input-group">
                    <input 
                      placeholder="Cidade" maxLength="30"
                      value={city}
                      onChange={e => setCity(e.target.value)}
                    />
                    <select 
                      name="estados-brasil" style={{ width: 195 }}
                      value={uf}
                      onChange={e => setUf(e.target.value)}
                      >
                        <option value="">Selecione</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </div>

                <button className="button" type="submit">Cadastrar</button>
              </form>
            </div>
        </div>
    );
}