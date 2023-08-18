import "./sliderHome2.css";
import {IoCrop, IoArrowBack, IoArrowForward, IoLocationOutline, IoBedOutline, IoCarSportOutline, IoHomeOutline} from 'react-icons/io5';
import {MdOutlineShower} from 'react-icons/md';
import { TbBath, TbBone, TbSofa } from "react-icons/tb";
import { GiHomeGarage } from "react-icons/gi";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

function SliderHome2() {
   const idCompany = process.env.REACT_APP_CODEUSER
   console.log(idCompany);


    const {data} = useFetch( `property/company/${idCompany}`);

    if(data) {
        console.log(data);
    }

    if(!data) {
        return (
            <h5>Carregando...</h5>
        )
    }

    const filterData = data?.slice(0, 8);

const buttonStyle = {
  padding: '10px',
  borderRadius: '50%',
  background: 'rgba(128,128,128, 0.5)',
  color: '#fff',
  border: '0px',
  margin: '10px'
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><IoArrowBack/></button>,
  nextArrow: <button style={{ ...buttonStyle }}><IoArrowForward/></button>
}
   
    return (
      <Slide {...properties}>
          {filterData?.map((property) => {
            return (
                property?.availability !== "Disponível" ? "" :
                <div className="each-slide-effect" key={property.id}>
          <div className="imageTop2">
            <div className="image">
                 <a href={`/imovel/${property.id}`}>
                    <img src={property.featuredImage} alt="" />
                </a>
            </div>
                <div className="blockSlider2">
                {new Date(property?.created_at).getDate() === new Date().getDate() &&
                    new Date(property?.created_at).getMonth() === new Date().getMonth() &&
                    new Date(property?.created_at).getFullYear() === new Date().getFullYear()
                    ?
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    : ""
                    } 
                    <h4>{property.subType}</h4>
                     <a href={`/imovel/${property.id}`}>
                    <h3>{property.district} - {property.city} - {property.uf}</h3>
                    </a>
                    {
                    property?.type === "Terrenos e Lotes" ?
                     <div className="iconsBox">                  
                        {property?.totalArea === "" ? "" :
                        <div className="iconUnicBox">
                                <TfiRulerAlt2 />
                            <div className="simbolBox">
                                <p>{property?.totalArea} M<sup>2</sup></p>
                            </div>
                        </div>
                            }
                        {property?.buildingArea === "" ? "" :
                        <div className="iconUnicBox">
                                <IoCrop />
                            <div className="simbolBox">
                                <p>{property?.buildingArea} M<sup>2</sup></p>
                            </div>
                        </div>
                        }

                     </div>
                     :
                    property?.type === "Rural" ?
                     <div className="iconsBox">  
                      {property?.bedroom === "" || property?.bedroom === "0"? "" :
                        <div className="iconUnicBox">
                                <IoBedOutline />
                            <div className="simbolBox">
                                <p>{property?.bedroom} {property?.bedroom === "1" ? " Quarto" : " Quartos"}</p>
                            </div>
                        </div>
                        }                
                        {property?.totalArea === "" ? "" :
                        <div className="iconUnicBox">
                                <TfiRulerAlt2 />
                            <div className="simbolBox">
                                <p>{property?.totalArea} M<sup>2</sup></p>
                            </div>
                        </div>
                            }
                        {property?.buildingArea === "" ? "" :
                        <div className="iconUnicBox">
                                <IoCrop />
                            <div className="simbolBox">
                                <p>{property?.buildingArea} M<sup>2</sup></p>
                            </div>
                        </div>
                        }

                     </div>
                     :
                    property?.type === "Comercial" || property?.type === "Industrial" ?
                     <div className="iconsBox">  
                      {property?.restroom === "" || property?.restroom === "0"? "" :
                        <div className="iconUnicBox">
                                <MdOutlineShower />
                            <div className="simbolBox">
                                <p>{property?.restroom} {property?.restroom === "1"  ? " Banheiro" : " Banheiros"}</p>
                            </div>
                        </div>
                        }               
                        {property?.totalArea === "" ? "" :
                        <div className="iconUnicBox">
                                <TfiRulerAlt2 />
                            <div className="simbolBox">
                                <p>{property?.totalArea} M<sup>2</sup></p>
                            </div>
                        </div>
                            }
                        {property?.buildingArea === "" ? "" :
                        <div className="iconUnicBox">
                                <IoCrop />
                            <div className="simbolBox">
                                <p>{property?.buildingArea} M<sup>2</sup></p>
                            </div>
                        </div>
                        }

                     </div>
                     :
                    <div className="iconsBox">
                    {property?.bedroom === "" || property?.bedroom === "0"? "" :
                        <div className="iconUnicBox">
                                <IoBedOutline />
                            <div className="simbolBox">
                                <p>{property?.bedroom} {property?.bedroom === "1" ? " Quarto" : " Quartos"}</p>
                            </div>
                        </div>
                        }
                        {property?.restroom === "" || property?.restroom === "0"? "" :
                        <div className="iconUnicBox">
                                <MdOutlineShower />
                            <div className="simbolBox">
                                <p>{property?.restroom} {property?.restroom === "1" ? " Banheiro" : " Banheiros"}</p>
                            </div>
                        </div>
                        }
                        {/* {property?.suite === "" || property?.suite === "0" ? "" :
                        <div className="iconUnicBox">
                                <TbBath />
                            <div className="simbolBox">
                                <p>{property?.suite} Suítes</p>
                            </div>
                        </div>
                        } */}
                         {property?.garage === "" || property?.garage === "0" ? "" :
                        <div className="iconUnicBox">
                                <GiHomeGarage />
                            <div className="simbolBox">
                                <p>{property?.garage} {property?.garage === "1" ? " Vaga" : " Vagas"}</p>
                            </div>
                        </div>
                        }
                        {/* {property?.pets === "Não" || property?.pets === "" ? "" :
                        <div className="iconUnicBox">
                                <TbBone />
                            <div className="simbolBox">
                            <p>Aceita pets</p>
                            </div>
                        </div>
                        }
                         {property?.furnished === "Não" || property?.furnished === ""? "" :
                        <div className="iconUnicBox">
                                <TbSofa />
                            <div className="simbolBox">
                                <p>Mobilhado</p>
                            </div>
                        </div>
                        } */}



                    </div>
                    }
                    <div className="pricing">
                        <h5>{property?.status}</h5>
                        {property?.priceSale === "" && property?.priceRent === ""  ?
                        <h4><span>Consultar valor</span></h4>
                        :
                        property?.status === "Venda" ?
                        <h4>R$ <span>{property?.priceSale}</span></h4>
                        : property?.status === "Aluguel" ?
                        <h4>R$ <span>{property?.priceRent}</span></h4>
                        :  <h4>{property?.priceRent === "" ? "Consultar" : "R$"} <span>{property?.priceRent === "" ? "Consultar" : property?.priceRent}</span> /
                        {property?.priceSale === "" ? " Consultar" : " R$"} <span>{property?.priceSale === "" ? "Consultar" : property?.priceSale}</span></h4>
                        }
                    </div>
                </div>
            </div>
          </div>
            )
          })
          }
      </Slide>
  );
};
  

  export { SliderHome2 }