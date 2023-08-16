import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {IoSpeedometerOutline, IoPersonOutline, IoHeart, IoNotificationsOutline, IoLogOutOutline, IoChatboxEllipsesOutline,
        IoHomeOutline, IoLaptopOutline, IoCalendarOutline, IoOptionsOutline, IoFunnelOutline, IoSearchOutline, IoQrCodeOutline, IoMailOutline, IoPhonePortraitOutline, IoLogoInstagram, IoLogoWhatsapp, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io5';
        import LogoImg from '../../assets/images/logo1.png'

const UlAdm = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  flex-direction: column;

 .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    padding: 10px 40px;
 }
 .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    border-top: 1px solid var(--Border);
    height: 50px;

 }
 .top .itensMenu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50%;
 }

 .menu .buttonsMenu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
 }
 .menu .buttonsMenu .iconsMenu{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
 }
 .menu .buttonsMenu .iconsMenu .unicIconMenu{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding:5px;
  background-color: var(--BorderHover);
  color: var(--Primary);
  border-radius: 6px;
  margin: 0 3px;
  border: none;
  font-size: 16px;
  text-decoration: none;
 }
 .menu .buttonsMenu .iconsMenu .unicIconMenu:hover {
  background-color: var(--Primary);
  color: var(--White);
 }
 .menu .buttonsMenu .contactWhatsapp {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 7px 15px;
  background-color: var(--Aproved);
  color: var(--White);
  border-radius: 20px;
  margin: 0 3px;
  border: none;
  font-size: 14px;
 }
 .menu .buttonsMenu .contactWhatsapp svg {
  font-size: 14px;
  margin-right: 5px;
 }
 .top .logo {
    padding: 15px 0;
  }
  .top .logo a img {
    height: 50px;
  }

  .contact {
     display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
.contact .contactUnic {
   display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 5px;
    padding: 0px 20px;
    border-right: 1px solid var(--Border);
}

.contact .contactUnic svg {
  font-size: 40px;
  color: var(--Primary);
  margin: 0 10px;
}
.contact .contactUnic .text{
   display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: var(--Description);
}

.contact .contactUnic .text h4 {
  font-weight: 600;
}
.contact .contactUnic .text h5 {
  font-weight: 700;
  color: var(--Gray);
}
.contact .contactUnic2 {
   display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 5px;
}

.contact .contactUnic2 svg {
  font-size: 40px;
  color: var(--Primary);
  margin: 0 5px;
}
.contact .contactUnic2 .text{
   display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: var(--Description);
}
.contact .contactUnic2 .text h4 {
  font-weight: 600;
}

.contact .contactUnic2 .text h5 {
  font-weight: 700;
  color: var(--Gray);
}

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding:5px;
    font-weight: 700;
  }
  .nav-item2 {
    display: none;
  }
  li a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: 600;
    color: var(--Description);
    padding: 5px;
    border-radius: 6px;
    margin-left:;
  }
  li a svg {

    margin-bottom: 2px;
    font-size: 16px;
  }
  li a p {
    font-size: 14px;
    font-weight: 700;
  }
  li a:hover{
    padding: 5px;
    color: var(--Primary);
  }

  .nav-item {
    display: flex;
    margin: 2px;
    padding: 5px 10px;
    border-radius: 20px;
  }


 

  @media (max-width: 900px) {
    flex-flow: column nowrap;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 90%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    background-color: rgba(255,255,255);
    z-index: 98;


    
 .top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 300px;
  padding: 0px 20px;
}
.menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 0 20px;
  border-top: 1px solid var(--Border);
  height: 100%;

}
.top .itensMenu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}

.menu .buttonsMenu {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
width: 100%;
margin-top: 20px;
}
.menu .buttonsMenu .iconsMenu{
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 0px;
}
.menu .buttonsMenu .iconsMenu .unicIconMenu{
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding:5px;
background-color: var(--BorderHover);
color: var(--Primary);
border-radius: 6px;
margin: 5px;
border: none;
font-size: 20px;
text-decoration: none;
}
.menu .buttonsMenu .iconsMenu .unicIconMenu:hover {
background-color: var(--Primary);
color: var(--White);
}
.menu .buttonsMenu .contactWhatsapp {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 10px 20px;
background-color: var(--Aproved);
color: var(--White);
border-radius: 20px;
margin: 20px 3px;
border: none;
font-size: 14px;
}
.menu .buttonsMenu .contactWhatsapp svg {
font-size: 14px;
margin-right: 5px;
}
.top .logo {
  padding: 15px 0;
}
.top .logo a img {
  height: 40px;
}

.contact {
   display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}
.contact .contactUnic {
 display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 0px;
  border-right: none;
}

.contact .contactUnic svg {
font-size: 40px;
color: var(--Primary);
margin: 0 10px 0 0;
}
.contact .contactUnic .text{
 display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--Description);
}

.contact .contactUnic2 {
 display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 0px;
}

.contact .contactUnic2 svg {
font-size: 40px;
color: var(--Primary);
margin: 0 5px 0 0;
}
.contact .contactUnic2 .text{
 display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--Description);
}


li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 7px 0px;
  font-weight: 700;
}
.nav-item2 {
  display: none;
}
li a{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 600;
  color: var(--Description);
  padding: 7px 0px;
  border-radius: 6px;
  margin-left:;
}
li a svg {

  margin-bottom: 2px;
  font-size: 16px;
}
li a p {
  font-size: 14px;
  font-weight: 700;
}
li a:hover{
  padding: 7px 0px;
  color: var(--Primary);
}

.nav-item {
  display: flex;
  margin: 2px;
  padding: 5px 10px;
  border-radius: 20px;
}

  }

  }
`;


const RightNav2 = ({ open }) => {


    function handleContact() {
      window.open("https://wa.me/+5521984129435")
    }
    
  return (
    <UlAdm open={open}>
      <div className="top">
      <div className="logo">
      <Link to='/'>
      <img src={LogoImg} alt="Logo Sua Chave" />
      </Link>
      </div>

      <div className="itensMenu">
          <li className='nav-item'>
                <Link to='/'>
             <p>Início</p> 
                </Link>
              </li> 
              <li className='nav-item'>
                <Link to='/quemsomos' >
              <p>Sobre nós</p>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/servicos' >
               <p>Serviços</p>
                </Link>
              </li>
                          
              {/* <li className='nav-item'>
                <Link to='#' >
              <p>Como atuamos</p> 
                </Link>
              </li>  */}
              <li className='nav-item'>
                <Link to='/contato' >
              <p>Contato</p> 
                </Link>
              </li> 
        </div>

      <div className="contact">
        <div className="contactUnic">
          <IoLogoWhatsapp />
          <div className="text">
            <h5>Venda de imóveis</h5>
            <h4>21 98412943</h4>
          </div>
        </div>
        <div className="contactUnic2">
        <IoLogoWhatsapp />
          <div className="text">
            <h5>Condimínios</h5>
            <h4> 21 984129435</h4>
          </div>
        </div>
      </div>
      </div>
      <div className="menu">


          <div className="buttonsMenu">
            <div className="iconsMenu">
            <a className="unicIconMenu" href="https://instagram.com/powerstartenergy" target='_Blank'><IoLogoInstagram /></a>
                <a className="unicIconMenu" href="https://facebook.com/powerstartenergy" target='_Blank'><IoLogoFacebook /></a>
                <a className="unicIconMenu" href="https://linkedin.com/company/power-start-energy" target='_Blank'><IoLogoLinkedin /></a>
            </div>
           <button className="contactWhatsapp" onClick={handleContact}>Meu condomínio</button>
          </div>       
      </div>





    </UlAdm>
  )
}

export default RightNav2
