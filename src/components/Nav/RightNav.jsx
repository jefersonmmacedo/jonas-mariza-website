import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';
import api from '../../services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import Zap from '../../assets/images/zap.png'
import { ContactModal } from '../ContactModal/ContactModal';

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


  .buttonsAccount {
    display: none;
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




    .buttonsAccount {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      font-weight:600;
      color: var(--Text2);
      text-decoration: none;
      list-style: none;
    }

    .buttonsAccount .iconButtonAccount {
      width: 95%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 25px;
      padding: 10px 20px;
      background-color: var(--White);
      font-weight:600;
      color: var(--Primary);
      font-size:14px;
      margin:5px 5px;
      box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.3);
  -webkit-box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.3);
  }
    .buttonsAccount .iconButtonAccount2 {
      width: 95%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 25px;
      padding: 10px 20px;
      background-color: var(--White);
      font-weight:600;
      color: var(--Primary);
      font-size:14px;
      margin:5px 5px;
      box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.3);
  -webkit-box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.3);
  }
  
  .buttonsAccount .iconButtonAccount img {
   height: 20px;
   margin-right: 5px;
  }
  
  .buttonsAccount .iconButtonAccount2 img {
   height: 20px;
   margin-right: 5px;
  }
  
  .buttonsAccount .iconButtonAccount:hover {
    background-color: var(--BorderInput2);
  }
  .buttonsAccount .iconButtonAccount2:hover {
    background-color: var(--PrimaryHover);
  }
  }

  }
`;

function HandleOpenLink(data) {
  window.open(`${data}`, "_self")
}
function HandleOpenLink2(data) {
  window.open(`${data}`)
}


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
          <li className='nav-item'>
            <a href='/legalizacao' >
            Legalizacao
            </a>
          </li>
          <li className='nav-item'>
            <a href='/administracao-de-condiminios' >
            Administração de Condomínios
            </a>
          </li>

          <div className="buttonsAccount">
      <ContactModal />               
      <button className='iconButtonAccount2' onClick={() => HandleOpenLink2(`https://www.immobileweb.com.br/login/jonasemariza`)}> Meu condomínio</button>               
      </div>
         
    </Ul>
  )
}

export default RightNav
