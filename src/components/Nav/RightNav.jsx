import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';
import api from '../../services/api';
import { useEffect } from 'react';
import { useState } from 'react';


const RightNav = ({ open }) => {
  const idCompany = process.env.REACT_APP_CODEUSER;

  const { logout } = useContext(AuthContext);

  const [company, setCompany] = useState();
  const [webSiteClient, setWebSiteClient] = useState();
  useEffect(() => {
    async function loadwebSiteClient() {
        await api.get(`/webSiteClient/company/${idCompany}`).then((res) => {
          setWebSiteClient(res.data[0]);
          console.log(res.data)
        }).catch((err) => {
          console.log(err);
        })
    }
    async function loadUser() {
        await api.get(`/company/unic/${idCompany}`).then((res) => {
          setCompany(res.data[0]);
          console.log(res.data)
        }).catch((err) => {
          console.log(err);
        })
    }

    loadwebSiteClient()
    loadUser()
  }, [])


  const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    font-weight: 500;
    font-size: 14px;
  }
  li a{
    text-decoration: none;
    color: var(--Description)
    font-weight: 500;
  }
  li a:hover{
    color: var(--PrimaryHover);
  }
  button {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background-color: var(--Primary);
    border-radius: 25px;
    margin: 5px 0;
    color: var(--White);
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;

  }

  button:hover{
    background-color: var(--ButtonHover);
    color: var(--White);
  }
  .btn {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background-color: rgba(237, 50, 55, 0.95);
    border-radius: 25px;
    margin: 5px 0;
    color: var(--White);
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;

  }

  btn:hover{
    background-color: var(--Blue);
  }


  @media (max-width: 950px) {
    flex-flow: column nowrap;
    background: rgba(15, 24, 87, 0.95);
    backdrop-filter: blur(4px);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 5px;
      margin: 10px;
    }
    li a {
      color: var(--White);
    }
    li a:hover {
      color: var(--Magenta);
    }

    button{
      display: block;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: var(--White);
      color: var(--Primary);
      margin-left: 10px;
      margin-right: 10px;
      padding: 10px 0;
    }
    button svg {
      margin-right: 1px;
    }

    button:hover{
      background-color: var(--ButtonHover);
    }
    .btn{
      display: block;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color:  rgba(237, 50, 55, 0.1);
      margin-left: 10px;
      margin-right: 10px;
      padding: 10px 0;
    }
    .btn svg {
      margin-right: 1px;
    }

    .btn:hover{
      background-color: var(--Blue);
    }
  }

  }
`;


  return (
    <Ul open={open}>
          <li className='nav-item'>
            <a href={`/imoveis`} >
            Imóveis
            </a>
          </li>
          <li className='nav-item'>
            <a href={`/sobre`} >
            Quem somos
            </a>
          </li>
          {/* <li className='nav-item'>
            <a href={`/avaliacao`} >
            Avaliação
            </a>
          </li> */}
          {/* <li className='nav-item'>
            <a href={`/financiamento`} >
            Financiamento
            </a>
          </li> */}
          {/* <li className='nav-item'>
            <a href='/legalizacao' >
            Legalizacao
            </a>
          </li> */}
          <li className='nav-item'>
            <a href='/administracao-de-condiminios' >
            Administração de Condomínios
            </a>
          </li>
         
    </Ul>
  )
}

export default RightNav
