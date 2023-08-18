import styled from 'styled-components';
import Burger from './Burger';
import Zap from '../../assets/images/zap.png'
import logo from '../../assets/images/logo1.png'
import { AuthContext } from '../../contexts/Auth';
import { useContext, useEffect, useState } from 'react';
import api from '../../services/api';
import { ContactModal } from '../ContactModal/ContactModal';

const Navbar2 = () => {
  const { logout } = useContext(AuthContext);

  const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 97;
  // background: rgba(255, 255, 255);
  background: rgba(255, 255, 255);
  backdrop-filter: blur(4px);
  font-size: 14px;
  color: var(--Description)



  .logo {
    padding: 15px 0;
  }
  .logo a img {
    height: 55px;
  }
  .logo2 {
    display: none;
  }

  .account {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    font-weight:600;
    color: var(--Text2);
    text-decoration: none;
    list-style: none;
  }

  .account li {
    padding: 18px 10px;
    font-weight: 500;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--Paragraph);
  }
  .account li a{
    text-decoration: none;
    color: var(--Gray)
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .account li a svg{
    margin-right: 2px;
  }
  .account li a:hover{
    color: var(--Primaey);
  }

  .account button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 25px;
    padding: 9px 19px;
    background-color: rgba(255, 255, 255, 0.01);
    border: 1px solid var(--Primaey);
    font-weight:600;
    color: var(--Primaey);
}
  .account .iconUnic {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    background-color: none;
    font-weight:500;
    color: var(--Paragraph);
    font-size:14px;
    margin:5px 5px;
}
  .account .iconUnicAdm {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    background-color: var(--White);
    font-weight:600;
    color: var(--Primaey);
    font-size:14px;
    margin:5px 5px;
    box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.3);
-webkit-box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.3);
-moz-box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.3);
}
  .account .iconUnicAdm2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    background-color: var(--Primary);
    font-weight:600;
    color: var(--White);
    font-size:14px;
    margin:5px 5px;
    box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.3);
-webkit-box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.3);
-moz-box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.3);
}

.account .iconUnicAdm img {
 height: 20px;
 margin-right: 5px;
}

.account .iconUnicAdm2 img {
 height: 20px;
 margin-right: 5px;
}

.account .iconUnicAdm:hover {
  background-color: var(--BorderInput2);
}
.account .iconUnicAdm2:hover {
  background-color: var(--PrimaryHover);
}
  .account .iconOut {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    padding: 10px;
    background-color: rgba(238,238,238,0.5);
    font-weight:600;
    color: var(--Primaey);
    font-size:18px;
    margin:5px 5px;
}


@media (max-width: 950px) {
  padding: 0 10px;
  .account {
    margin-right:40px;
    justify-content: flex-end;
  }


  @media (max-width: 650px) {

  .logo a img {
    height: 25px;
  }

  @media (max-width: 600px) {
    .account {
      justify-content: flex-end;
    }
    .account .iconOut {
      display: none;
  }

  .account .iconUnicAdm {
    font-size:10px;
    padding: 10px 20px;
    margin: 3px;
}

.account .iconUnicAdm img {
  height: 15px;
  margin-right: 3px;
 }

.account .iconUnicAdm2 {
  font-size:10px;
  padding: 10px 20px;
  margin: 3px;
}

  }
  }
}

`
  
  function handleLogOut() {
    logout()
  }
  function HandleOpenLink(data) {
    window.open(`${data}`, "_self")
  }
  function HandleOpenLink2(data) {
    window.open(`${data}`)
  }

  return (
    <Nav>
      <div className="logo">
        <a href={`/`}>
      <img src={logo} alt="" />
        </a>
      </div>
      <Burger/>
      <div className="account">
      <ContactModal />               
      <button className='iconUnicAdm2' onClick={() => HandleOpenLink2(`https://www.immobileweb.com.br/login/jonasemariza`)}> Meu condomínio</button>               
      </div>
    </Nav>
  )
}

export default Navbar2
