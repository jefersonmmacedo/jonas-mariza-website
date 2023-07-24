import "./topHeadHome.css"
import { SearchPropertyHomeTop } from "../SearchPropertyHomeTop/SearchPropertyHomeTop";
import logo from "../../assets/images/logo1.png";
import Zap from '../../assets/images/zap.png'
import { SliderHome } from "../SliderHome/SliderHome";
import { SearchPropertyHomeTop2 } from "../SearchPropertyHomeTop2/SearchPropertyHomeTop2";
import { SliderHome2 } from "../SliderHome2/SliderHome2";

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
                <h1><span>Imobiliária e </span>administradora <span>de condomínios</span></h1>
                <h4>Atuando tradicionalmente na cidade de Rio Bonito-RJ</h4>

                <div className="textServices">
                    <h3>Compra</h3>
                    <h3>Venda</h3>
                    <h3>Financiamento</h3>
                    <h3>Legalização</h3>
                    <h3>Administração de condomínios</h3>
                </div>
                </div>

                {/* <SearchPropertyHomeTop2 /> */}
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
                              <a href="/administracao-de-condiminios">Administração de condomínios</a>
                        </h5>
                    </div>

                    <div className="buttons">
                        <button className='iconUnicAdm' onClick={() => HandleOpenLink2(`https://wa.me/5521997476045`)}> <img src={Zap} alt="" /> Fale conosco</button>               
                        <button className='iconUnicAdm2' onClick={() => HandleOpenLink2(`https://www.immobileweb.com.br/login/jonasemariza`)}> Meu condomínio</button>               
                    </div>
                </div>
                <div className="imagemSlider">
            <SliderHome2 />
                </div>
            </div>
            </div>
        </div>
    )
}