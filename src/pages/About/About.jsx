import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import Image1 from '../../assets/images/background10.jpg'
import Image2 from '../../assets/images/background12.jpg'
import corretor1 from '../../assets/images/corretor1.jpg'
import corretor2 from '../../assets/images/corretor2.jpg'
import corretor3 from '../../assets/images/corretor3.jpg'
import {FiCheckCircle} from "react-icons/fi"
import "./about.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import api from "../../services/api";
import { useState } from "react";


export function About() {
    const idCompany = process.env.REACT_APP_CODEUSER;

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

    return (
        <div className="About">
            <Navbar2 />
            <div className="topImageAbout">
                <div className="back">
            <h1>{company?.fantasyName}</h1>
                <h3>Conheça mais sobre serviços e atuações.</h3>
                </div>
            </div>

            <div className="aboutInfos">
                <div className="ImagesAbout">
                    <div className="imageAbout1">
                        <img src={Image1} alt="" />
                    </div>
                    <div className="imageAbout2">
                    <img src={Image2} alt="" />
                    </div>
                </div>
                <div className="TextAboutInfo">
                    <h2>Saiba mais</h2>
                    <h5>{webSiteClient?.history}</h5>
                        <div className="BlockInfosAbout">
                            <div className="svgInfo">
                                <FiCheckCircle />
                            </div>
                            <div className="BlockInfosText">
                                <h4>Nossa missão</h4>
                                <h5>{webSiteClient?.mission}</h5>
                                </div>
                        </div>
                        <div className="BlockInfosAbout">
                            <div className="svgInfo">
                            <FiCheckCircle />
                            </div>
                            <div className="BlockInfosText">
                                <h4>Nossa visão</h4>
                                <h5>{webSiteClient?.vision}</h5>
                                </div>
                        </div>
                        <div className="BlockInfosAbout">
                            <div className="svgInfo">
                            <FiCheckCircle />
                            </div>
                            <div className="BlockInfosText">
                                <h4>Nossos valores</h4>
                                <h5>{webSiteClient?.values}</h5>
                                </div>
                        </div>
                </div>
            </div>



                <Footer idCompany={idCompany}/>
        </div>
    )
}