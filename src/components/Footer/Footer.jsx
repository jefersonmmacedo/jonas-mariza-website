﻿import "./footer.css";
import logoSuaChave from '../../assets/images/LogoSuaChave2.png';
import logo from '../../assets/images/logo2.png'
import styled from 'styled-components';
import {IoCallOutline, IoLogoWhatsapp, IoMailOutline, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin, IoLogoYoutube, IoLocationOutline, IoSendOutline, IoPhonePortraitOutline} from 'react-icons/io5';
import {AiOutlineSend} from 'react-icons/ai';
import { useEffect } from "react";
import api from "../../services/api";
import { useState } from "react";

export function Footer() {
    const idCompany = process.env.REACT_APP_CODEUSER;

    const [company, setCompany] = useState();
    useEffect(() => {
      async function loadUser() {
          await api.get(`/company/unic/${idCompany}`).then((res) => {
            setCompany(res.data[0]);
            console.log(res.data)
          }).catch((err) => {
            console.log(err);
          })
      }
  
      loadUser()
    }, [])


      const Div = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        padding: 20px;
        border: none;
        background-color: var(--Primary);
        color: var(--White);
        border-top: 2px solid var(--BorderInput);
     
    .sections {
        display: flex;
        align-items: flex-start;
        justify-content:space-between;
        flex-direction: row;
        width: 85%;
        padding: 10px;
        flex-wrap: wrap;
    }
    
    .sections .sectionUnic {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        width: 30%;
        text-align: left;
        padding: 10px;
    }
    
    .sections .sectionUnic img {
        height: 70px;
        margin-bottom: 10px;
    }
    
    .sections .sectionUnic2 {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        width: 20%;
        text-align: left;
        padding: 10px;
    }
    
    .sections .sectionUnic2 img {
        height: 70px;
        margin-bottom: 10px;
    }
    
    .sections .sectionUnic h3 {
        margin-bottom: 10px;
        font-weight:800;
    }
    .sections .sectionUnic p {
        margin-bottom: 10px;
        font-weight:700;
    }
    .sections .sectionUnic h4 {
        font-weight:500;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        margin-bottom: 5px;
        font-weight: 700;
    }
    .sections .sectionUnic h4 a {
        font-weight:400;
        text-decoration: none;
        color: var(--White);
        font-weight: 700;
    }
    .sections .sectionUnic h4 svg {
        font-weight:400;
        margin-right: 5px;
        color: var(--White);
    }
    .sections .sectionUnic h5 a:hover {
        color: rgb(199,151,55);;
    }
    .sections .sectionUnic .newsletter {
        display: flex;
        align-items: center;
        justify-content:flex-start;
        flex-direction: row;
        width: 100%;
    }
    
    .sections .sectionUnic .newsletter input {
        border: none;
        padding: 5px 10px;
        color: var(--Primary);
        border-radius: 6px 0 0 6px;
        height: 30px;
        width: 100%;
        box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.3);
        -webkit-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.3);
    }
    .sections .sectionUnic .newsletter button {
        border: none;
        padding: 10px;
        color: var(--Primary);
        border-radius:  0  6px 6px 0;
        height: 30px;
        background-color: var(--Primary);
        color: var(--White);
        display: flex;
        align-items: center;
        justify-content:center;
        flex-direction: row;
        box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.3);
        -webkit-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.3);
    }
    .sections .sectionUnic .apps {
        display: flex;
        align-items: flex-start;
        justify-content:space-between;
        flex-direction: row;
        width: 100%;
    }
    .sections .sectionUnic .apps .app {
        display: flex;
        align-items: flex-start;
        justify-content:center;
        flex-direction: column;
        width: 50%;
    }
    
    .sections .sectionUnic .apps .app .logos {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }
    .sections .sectionUnic .apps .app .logos img {
        width: 90%;
    }
    
    .sections .sectionUnic .network {
        display: flex;
        align-items: center;
        justify-content:flex-start;
        flex-direction: row;
        width: 100%;
        margin-bottom: 25px;
    }
    .sections .sectionUnic .network a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        border: none;
        border-radius: 6px;
        padding: 5px;
        cursor: pointer;
        background-color: var(--BorderHover);
        color: var(--Primary);
        font-size: 20px;
        margin-right: 5px;
        text-decoration: none;
    }
    .sections .sectionUnic .network .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        border: none;
        border-radius: 6px;
        padding: 10px 20px;
        cursor: pointer;
        background-color: var(--Primary);
        color: var(--White);
        font-size: 16px;
    }
    .sections .sectionUnic .network a:hover {
        background-color: rgb(199,151,55);;
        color: var(--White);
    }
    .copy {
        display: flex;
        align-items: center;
        justify-content:space-between;
        flex-direction: row;
        width: 90%;
        border: none;
        border-top: 2px solid var(--BorderInput);
        padding: 5px 40px;
    }
    
    .copy h5 {
        color: var(--White);
        font-weight: 700;
        
    }
    .copy h5 a {
        color: var(--Primary);
        text-decoration: none;
        font-weight: 560;
    
    }
    .copy h5 a:hover {
        color: rgb(199,151,55);;
    }
    
    .copy .dev {
        display: flex;
        align-items: center;
        justify-content:center;
        flex-direction: row;
        border: none;
        padding: 10px;
    }
    .copy .dev h5 {
        color: var(--White);
        font-weight: 700;
        margin-right: 5px;
        
    }
    .copy .dev h5 a {
        color: var(--Primary);
        text-decoration: none;
        font-weight: 560;
    
    }
    .copy .dev h5 a:hover {
        color: rgb(199,151,55);;
    }
    
    .copy .dev a img {
        height: 25px;
    }
    
    
    @media (max-width: 1280px) {
        .sections {
            justify-content:space-between;
            width: 100%;
        }
        .sections .sectionUnic {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            width: 200px;
            text-align: left;
        }
        .sections .sectionUnic2 {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            width: 200px;
            text-align: left;
        }
        @media (max-width: 1200px) {
            .sections {
                justify-content:space-between;
                width: 100%;
            }
        @media (max-width: 900px) {
            padding: 5px;

            .sections {
                justify-content:space-around;
            }
        
            .sections .sectionUnic {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: 300px;
                text-align: left;
                margin: 20px 10px;
            }
            .sections .sectionUnic2 {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: 300px;
                text-align: left;
                margin: 20px 10px;
            }
    
            @media (max-width: 750px) {

                .sections .sectionUnic {
                    width: 95%;
                    margin:15px 5px;
                    padding: 0px;
                    justify-content: center;
                }
                .sections .sectionUnic2 {
                    width: 95%;
                    margin:15px 5px;
                    padding: 0px;
                    justify-content: center;
                }

                .copy {
                    display: flex;
                    align-items: center;
                    justify-content:center;
                    flex-direction: column;
                    width: 100%;
                    border: none;
                    border-top: 1px solid var(--White);
                    padding: 10px 0px;
                    text-align: center;
                }
                .copy h5 {
                    margin: 10px 0px;
                    text-align: center;
                }
                
                @media (max-width: 450px) {
                    .sections .sectionUnic {
                        width: 95%;
                        padding: 0px;
                    }
                    .sections .sectionUnic {
                        width: 95%;
                        padding: 0px;
                    }
                    
                }
    
            }
            }
        }
        }    
    `

    const date = new Date().getFullYear();
    return (
        <Div>
                <div className="sections">
                        <div className="sectionUnic2">
                        <a href="/"><img src={logo} alt="" /></a>
                            <h4 style={{textAlign: 'center'}}><b>Emanuel Dario Alves</b></h4>
                            <h4> CRECI: <b>{company?.creci}</b></h4>
                            <br />
                            <div className="network">
                                {company?.facebook === "" ? ""
                                :
                                <a href={company?.facebook} target="_blank" rel="noreferrer" className="networkButton"><IoLogoFacebook/></a>
                                } 
                                 {company?.instagram === "" ? ""
                                :
                                <a href={company?.instagram} target="_blank" rel="noreferrer" className="networkButton"><IoLogoInstagram/></a>
                               } 
                               {company?.linkedin === "" ? ""
                                :
                                <a href={company?.linkedin} target="_blank" rel="noreferrer" className="networkButton"><IoLogoLinkedin/></a>
                               } 
                                {company?.youtube === "" ? ""
                                :
                                <a href={company?.youtube} target="_blank" rel="noreferrer" className="networkButton"><IoLogoYoutube/></a>
                               } 
                            </div>
                        </div>
                        <div className="sectionUnic">
                            <h3>NAVEGAÇÃO</h3>
                                <h4><a href="/sobre">Quem somos</a></h4>
                                <h4><a href="/imoveis/all">Imóveis</a></h4>
                                <h4><a href="/corretores">Legalização</a></h4>
                                <h4><a href="/financiamento">Administração de Condomínios</a></h4>
                                <h4><a href="/faleconosco">Fale conosco</a></h4>
                        </div>

                        <div className="sectionUnic">
                        <h3>ATENDIMENTO</h3>
                            <h4><IoLogoWhatsapp />{company?.whatsapp} - Venda de Imóveis</h4>
                            <h4><IoLogoWhatsapp />{company?.phone} - Admin. Condomínios</h4>
                            <h4><IoMailOutline />{company?.email}</h4>
                            <h4><IoLocationOutline />XV de Novembro, Nº {company?.number}, {company?.complement} - {company?.district}</h4>
                            <h4>{company?.city} - {company?.uf}</h4>
                        </div>
                        {/* <div className="sectionUnic">
                        <h3>Newsletter</h3>
                            <h5>Receba imóveis em seu whatsapp</h5>
                            <div className="newsletter">
                                <input type="text" placeholder="(XX)XXXXX-XXXX" />
                                <button><AiOutlineSend /></button>
                            </div>
                        </div> */}

                </div>
                <div className="copy">
                    <h5>© {company?.fantasyName} {date}. Todos os direitos reservados</h5>

                    <div className="dev">
                    <h5>Feito por:</h5>
                    <a href="https://suachave.com.br" target="_blank" rel="noreferrer">
                        <img src={logoSuaChave} alt="Logo Sua chave" />
                    </a>
                    </div>
                </div>
        </Div>
    )
}
