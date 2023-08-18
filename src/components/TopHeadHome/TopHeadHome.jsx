import "./topHeadHome.css"
import { SearchPropertyHomeTop } from "../SearchPropertyHomeTop/SearchPropertyHomeTop";
import logo from "../../assets/images/logo2.png";
import Zap from '../../assets/images/zap.png'
import { SliderHome } from "../SliderHome/SliderHome";
import { SearchPropertyHomeTop2 } from "../SearchPropertyHomeTop2/SearchPropertyHomeTop2";
import { SliderHome2 } from "../SliderHome2/SliderHome2";
import { SearchPropertyHomeCenter } from "../SearchPropertyHomeCenter/SearchPropertyHomeCenter";
import { ContactModal } from "../ContactModal/ContactModal";

export function TopHeadHome() {

    function HandleOpenLink(data) {
        window.open(`${data}`, "_self")
      }
      function HandleOpenLink2(data) {
        window.open(`${data}`)
      }


    return (
        <div className="TopHeadHome">
            <div className="blockTop">
            <div className="SearchText">
            <div className="image">
                <img src={logo} alt="" />
            </div>

                <div className="TextTopSearch">
                <h1><span>Imobiliária e </span>Administração <span>de Condomínio</span></h1>

                <div className="textServices">
                    <h3>Administração de Condomínios</h3>
                    <h3>Compra e Venda de Imóveis</h3>
                    <h3>Financiamento Imobiliário</h3>
                    <h3>Legalização de Imóveis</h3>
                </div>
                </div>

               
            </div>

            <div className="ImagesTop">
              <div className="topData">
                    <div className="links">
                        <h5>
                              <a href="/imoveis">Imóveis</a>
                        </h5>
                        <h5>
                              <a href="/sobre">Quem somos</a>
                        </h5>
                        <h5>
                              <a href="/legalizacao">Legalização</a>
                        </h5>
                        <h5>
                              <a href="/administracao-de-condiminios">Administração de Condomínios</a>
                        </h5>
                    </div>

                    <div className="buttons">
                        <ContactModal />               
                        <button className='iconUnicAdm2' onClick={() => HandleOpenLink2(`https://www.immobileweb.com.br/login/jonasemariza`)}> Meu Condomínio</button>               
                    </div>
                </div> 
                <div className="imagemSlider">
            <SliderHome2 />
            <br />
                 <SearchPropertyHomeCenter />
                </div>
            </div>
            </div>
        </div>
    )
}