import "./searchPropertyHomeCenter.css";
import { useState } from "react";
import {IoSearch, IoAddOutline, IoRemoveOutline} from "react-icons/io5";
import { useFetch } from "../../hooks/useFetch";
import { toast } from "react-toastify";
import { TbBone, TbSofa } from "react-icons/tb";

export function SearchPropertyHomeCenter() {
    const [isCheckedPets, setIsCheckedPets] = useState(false);
    const [isCheckedFurnished, setIsCheckedFurnished] = useState(false);

    const [pets, setPets] = useState("não");
    const [furnished, setFurnished] = useState("não");
    const [code, setCode] = useState(false);
    const [status, setStatus] = useState("Venda");
    const [subType, setSubType] = useState("");
    const [type, setType] = useState("");
    const [bedroom, setBedroom] = useState("0");
    const [suite, setSuite] = useState("0");
    const [garage, setGarage] = useState("0");
    const [restroom, setRestroom] = useState("0");
    const [viewFilter, setViewFilter] = useState(true);
    const [filter, setFilter] = useState(false);

    const [AdressSelected, setAdressSelected] = useState("");

    const dataAdress = AdressSelected.split(" - ");
    console.log(dataAdress)

    const districtNew = dataAdress.length === 3 ? dataAdress[0] : ""
    const cityNew = dataAdress.length === 3 ? dataAdress[1] : dataAdress[0]
    const ufNew = dataAdress.length === 3 ? dataAdress[2] : dataAdress[1]


    const availability = "Disponível";
    const {data} = useFetch(`/property/all/${availability}`);

    var districtList = [];
    var cityList = [];

    data?.forEach((item) => {
        var duplicated  = districtList.findIndex(redItem => {
            return item.district === redItem.district;
        }) > -1;
    
        if(!duplicated) {
            districtList.push(item);
        }
    });
    data?.forEach((item) => {
        var duplicated  = cityList.findIndex(redItem => {
            return item.city === redItem.city;
        }) > -1;
    
        if(!duplicated) {
            cityList.push(item);
        }
    });


    if(districtList) {
        districtList.sort(function(a,b) {
            if(a.uf < b.uf ) {
                return -1
            } else {
                return true
            }
        })
        }
    if(cityList) {
        cityList.sort(function(a,b) {
            if(a.uf < b.uf ) {
                return -1
            } else {
                return true
            }
        })
        }

        function handleType(e) {
            setType(e.target.value)
            console.log(e.target.value)
        }
        function handleSubType(e) {
            setSubType(e.target.value)
            console.log(e.target.value)
        }

        function handleBedroom(e) {
            setBedroom(e.target.value)
            console.log(e.target.value)
        }
        function handleSuite(e) {
            setSuite(e.target.value)
            console.log(e.target.value)
        }
        function handleRestroom(e) {
            setRestroom(e.target.value)
            console.log(e.target.value)
        }
    
        function handleGarage(e) {
            setGarage(e.target.value)
            console.log(e.target.value)
        }

      function handleActiveCode(data, status, filter) {
        setCode(data)
        setStatus(status)
        setViewFilter(filter)
      }

      function handleSelectAddress(e) {
        setAdressSelected(e.target.value)
        console.log(e.target.value)    
      }


      function handleFilter(e) {
        e.preventDefault()
        setFilter(!filter)
      }

      function handleSelectPets(e) {
        e.preventDefault();
        setIsCheckedPets(!isCheckedPets);
        if(pets === "não") {
            setPets("sim");
        } else {
            setPets("não");
        }
        console.log(pets)
      };

      function handleSelectFurnished(e) {
        e.preventDefault();
        setIsCheckedFurnished(!isCheckedFurnished);
        if(furnished === "não") {
            setFurnished("sim");
        } else {
            setFurnished("não");
        }
        console.log(furnished)
      };
    
      function handleLinkSearchProperty(e) {
        if(status === ""){
            toast.error("Venda ou aluguel?");
            return
        }
        if(type === "" || subType === "") {
            toast.error("Selecione tipo de imóvel");
            return
        }
        if(cityNew === "" || ufNew === "") {
            toast.error("Selecione o local desejado");
            return
        }
        e.preventDefault();
       //window.open(`/imoveis/${status}?cityNew=${cityNew}&ufNew=${ufNew}&tipo=${type}&subtipo=${subType}&quartos=${bedroom}&suites=${suite}&banheiros=${restroom}&garagem=${garage}`,"_self")
       window.open(`/imoveis/${status}?uf=${ufNew}&city=${cityNew}&district=${districtNew}&tipo=${type}&subtipo=${subType}&quartos=${bedroom}&suites=${suite}&banheiros=${restroom}&garagem=${garage}&pets=${pets}&mobilha=${furnished}`,"_self")
    }

    return (
        <div className="SearchPropertyHomeCenter">
            {/* <div className="selectButtonsHomeTop">
            <button className={status === "Venda" ? "btn" : "btn1"} onClick={() => handleActiveCode(false, "Venda", true)}>Venda</button>
            <button className={status === "Aluguel" ? "btn2" : ""} onClick={() => handleActiveCode(false, "Aluguel", true)}>Aluguel</button>
            <button className={status === "Locação" ? "btn2" : ""} onClick={() => handleActiveCode(false, "Locação", true)}>Locação</button>
            <button className={status === "Codigo" ? "btn3" : "btn4"} onClick={() => handleActiveCode(true, "Codigo", false)}>Código</button>
                </div>    */}
            <div className="search">
                {code === false ?
                <>
            <select className="primary" value={type} onChange={handleType}>
                        <option value="">Tipo</option>
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Rural">Rural</option>
                        <option value="Terrenos e Lotes">Terrenos e Lotes</option>
                    </select>
                    <select value={subType} onChange={handleSubType} className={subType === "" ? "" : "select"}>
                        {type === "Residencial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Casa">Casa</option>
                        <option value="Casa geminada">Casa geminada</option>
                        <option value="Sobrado">Sobrado</option>
                        <option value="Bangalô">Bangalô</option>
                        <option value="Edícula">Edícula</option>
                        <option value="Flat">Flat</option>
                        <option value="Casa de vila">Casa de vila</option>
                        <option value="Condomínio fechado">Condomínio fechado</option>
                        <option value="Apartamento">Apartamento</option>
                        <option value="Apartamento duplex">Apartamento duplex</option>
                        <option value="Cobertura">Cobertura</option>
                        <option value="Cobertura duplex">Cobertura duplex</option>
                        <option value="Loft">Loft</option>
                        <option value="Kitnet">Kitnet</option>
                        <option value="Mansão">Mansão</option>
                        <option value="Stúdio">Stúdio</option>
                        </>
                        : type === "Comercial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Loja">Loja</option>
                        <option value="Conjunto comercial">Conjunto comercial</option>
                        <option value="Ponto comercial">Ponto comercial</option>
                        <option value="Sala Comercial">Sala Comercial</option>
                        <option value="Prédio">Prédio</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Stúdio">Stúdio</option>
                        </>
                        : type === "Industrial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Galpão">Galpão</option>
                        <option value="Área industrial">Área industrial</option>
                        </>
                        : type === "Rural" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Chácara">Chácara</option>
                        <option value="Fazenda">Fazenda</option>
                        <option value="Sítio">Sítio</option>
                        </>
                        : type === "Terrenos e Lotes" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Área">Área</option>
                        <option value="Terreno/Lote">Terreno/Lote</option>
                        </>
                        :  <option value="">Subtipo</option>
                        }
                    </select>


                    <input type="text" placeholder="Digite bairro, cidade ou estado" list="brow" value={AdressSelected} onChange={handleSelectAddress} />
                    <datalist id="brow" >
                    {districtList?.map((district) => {
                            return (
                                <>
                                <option autocomplete="off" key={district.id} value={`${district.district} - ${district.city} - ${district.uf}`}></option>
                                </>
                            )
                        })}
                    {cityList?.map((district) => {
                            return (
                                <>
                                <option autocomplete="off" key={district.id} value={`${district.city} - ${district.uf}`}></option>
                                </>
                            )
                        })}
                    </datalist>
                </>
                    :
                    <>
                    <input type="text" className="inputCode" placeholder="Digite o código" />
                    </>
                }

                     <button className="btnSearch" onClick={handleLinkSearchProperty}><IoSearch /></button>
                    
                    <button className="mobile" onClick={handleLinkSearchProperty}><IoSearch /></button>
            </div>



            
      

        </div>
    )
}
