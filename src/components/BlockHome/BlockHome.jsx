import "./blockHome.css";
import Casa from "../../assets/images/house6.jpg"
import Fazenda from "../../assets/images/house4.jpg"
import Predio from "../../assets/images/predio.jpg"
import terreno from "../../assets/images/house3.jpg"
import industria from "../../assets/images/house9.jpg"
import {IoChevronForwardOutline} from "react-icons/io5"

export function BlockHome() {
    return (
        <div className="BlockHome">
            <div className="BlockHomeUnic">
                <div className="textBlockHome">
                    <h3>Residencial</h3>
                    <h5>Casas, apartamentos, kitnets... </h5>

                    <button>Ver todos <IoChevronForwardOutline /></button>
                </div>
                <div className="imageBlockHome">
                    <img src={Casa} alt="Imagem de uma casa com carro na garagem" />
                </div>
            </div>

            <div className="BlockHomeUnic">
                <div className="textBlockHome">
                    <h3>Comercial</h3>
                    <h5>Sala comerciis, lojas, studio... </h5>

                    <button>Ver todos <IoChevronForwardOutline /></button>
                </div>
                <div className="imageBlockHome">
                    <img src={Predio} alt="Imagem de prédios vistos de baixo" />
                </div>
            </div>
            <div className="BlockHomeUnic">
                <div className="textBlockHome">
                    <h3>Rural</h3>
                    <h5>Casas, apartamentos, kitnets... </h5>

                    <button>Ver todos <IoChevronForwardOutline /></button>
                </div>
                <div className="imageBlockHome">
                    <img src={Fazenda} alt="Imagem de uma casa com carro na garagem" />
                </div>
            </div>

            <div className="BlockHomeUnic">
                <div className="textBlockHome">
                    <h3>Industrial</h3>
                    <h5>Sala comerciis, lojas, studio... </h5>

                    <button>Ver todos <IoChevronForwardOutline /></button>
                </div>
                <div className="imageBlockHome">
                    <img src={industria} alt="Imagem de prédios vistos de baixo" />
                </div>
            </div>

            <div className="BlockHomeUnic">
                <div className="textBlockHome">
                    <h3>Terrenos e Lotes</h3>
                    <h5>Sala comerciis, lojas, studio... </h5>

                    <button>Ver todos <IoChevronForwardOutline /></button>
                </div>
                <div className="imageBlockHome">
                    <img src={terreno} alt="Imagem de prédios vistos de baixo" />
                </div>
            </div>
        </div>
    )
}