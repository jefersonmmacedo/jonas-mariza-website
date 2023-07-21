import "./properties.css";
import Navbar2 from "../../components/Nav/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { FiArrowUpCircle } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import notFoundImage from "../../assets/images/svg/404property.svg";
import loader from "../../assets/images/gif/loader.gif";
import { PropertyUnicBlockLoader } from "../../components/PropertyUnicBlockLoader/PropertyUnicBlockLoader";
import { useFetch } from "../../hooks/useFetch";
import { PropertyUnicBlock } from "../../components/PropertyUnicBlock/PropertyUnicBlock";
import { FilterPropertiesList } from "../../components/FilterPropertiesList/FilterPropertiesList";
import { useEffect, useState } from "react";
import api from "../../services/api";


export function Properties(){
    const {status} = useParams();
    console.log(status)
    const query = useQuery();

    const idCompany = process.env.REACT_APP_CODEUSER
    console.log(idCompany);

    const availability = "Disponível";
    const type = query.get("tipo") === null ? "" : query.get("tipo")
    const subType = query.get("subtipo") === null ? "" : query.get("subtipo")
    const bedroom = query.get("quartos") === null ? "0" : query.get("quartos")
    const garage = query.get("garagem") === null ? "0" : query.get("garagem")
    const suite = query.get("suites") === null ? "0" : query.get("suites")
    const restroom = query.get("banheiros") === null ? "0" : query.get("banheiros")

    const district = query.get("district") === null ? "" : query.get("district");
    const city = query.get("city") ;
    const uf = query.get("uf") ;

    const [propertyNotFound, setPropertyNotFound] = useState(false);

    const [properties, setProperties] = useState([]);
    const [enphasisProperties, setEnphasisProperties] = useState([]);
    const [ currentPage, setCurrentPage] = useState(0);
    const perPage = 200;

    const {data} = useFetch(`/property/all/${availability}?emphasis=false&page=${currentPage}&limit=${perPage}`);

    if(data) {
        console.log(data)
    }

    setTimeout(() => {
        if(data?.length === 0) {
            console.log("Nada aqui!")
            setPropertyNotFound(true)
        }
    }, "3000")

        useEffect(() => {
            if(data) {
                 setProperties(oldProperties => [...oldProperties, ...data])
            }
      }, [data]);
  
    
      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
            console.log('Sentinela appears!', currentPage + 1)
            setCurrentPage((currentValue) => currentValue + 1);
          }
        })
        intersectionObserver.observe(document.querySelector('#sentinela'));
        return () => intersectionObserver.disconnect();
      }, []);
  
      if(!properties) {
        return (
            <div className="loader">
            <PropertyUnicBlockLoader />
            <PropertyUnicBlockLoader />
            <PropertyUnicBlockLoader />
            <PropertyUnicBlockLoader />
            </div>
        )
    }

    function handleTop(e) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    function handleSelectStatu(data) {
        window.open(`/imoveis/${data}`, "_self")
    }

    return (
        <div className="Properties">
        <Navbar2 />
        <div className="listPage">
        {/* <DownloadApp2 /> */}
        <div className="ListProperty">
            <div className="topList">
                <div className="textItens">
                {properties?.length === 0 ?
                  ""                   
                : properties?.length === 1 ?
                <h3>{status === "Venda" ? `Imóvel à ${status}` : `Imóvel para ${status}`}</h3>
                : status === undefined ?
                <h3>Imóveis disponíveis</h3>
                :
                <h3>{status === "Venda" ? `Imóveis à ${status}` : `Imóveis para ${status}`}</h3>
                }
                </div>
                {/* <FilterPropertiesList status={status} typeProperty={type} subTypeProperty={subType} district={district} city={city} uf={uf} quarto={bedroom} banheiro={restroom} suítes={suite} garagem={garage}/> */}
           
                <div className="statusPropertiesSelect">
                    <button className={status === "Venda" ? "select" : ""} onClick={() => handleSelectStatu("Venda")}>Venda</button>
                    <button className={status === "Aluguel" ? "select" : ""} onClick={() => handleSelectStatu("Aluguel")}>Aluguel</button>
                </div>
            </div>

        {properties?.length > 0 ?
         <div className="itens">
            {enphasisProperties?.map((property) => {
                    return (
                        <PropertyUnicBlock id={property.id} key={property.id} style="Emphasis"/>
                    )
                })}
            {properties?.map((property) => {
                    return (
                        <PropertyUnicBlock id={property.id} key={property.id}/>
                    )
                })}
                          
            </div> 
            :
                <div className="MainAbout">
                    {propertyNotFound === false ? "" :
                    <>
                    <img src={notFoundImage} alt="" />
                    <h3>Nenhum imóvel localizado</h3>
                    </>
                    }
                </div>
        }

                    {data?.length < 12 || data?.length === 0 ? "":
                <div className="sentinela" id="sentinela"> 
                         <div className="itens">          
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                        </div>  
                        <img src={loader} alt="Gif LOader more posts" width={20}/>
                </div>   
                }
              
        </div>
            <button className="topScroll" onClick={handleTop}><FiArrowUpCircle /></button>
        </div>
        <Footer />
        </div>
    )
}