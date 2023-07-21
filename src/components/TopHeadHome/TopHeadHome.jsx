import "./topHeadHome.css"
import { SearchPropertyHomeTop } from "../SearchPropertyHomeTop/SearchPropertyHomeTop";
import image1 from "../../assets/images/background13.jpg";
import image2 from "../../assets/images/background11.jpg";
import image3 from "../../assets/images/background18.jpg";
import image4 from "../../assets/images/background10.jpg";
import { SliderHome } from "../SliderHome/SliderHome";
import { SearchPropertyHomeTop2 } from "../SearchPropertyHomeTop2/SearchPropertyHomeTop2";
import { SliderHome2 } from "../SliderHome2/SliderHome2";

export function TopHeadHome() {
    return (
        <div className="TopHeadHome">
            <div className="blockTop">
            <div className="SearchText">
                <div className="TextTopSearch">
                <h1><span>Imobiliária e </span>administradora <span>de condomínios</span></h1>
                <h4>Atuando tradicionalmente na cidade de Rio Bonito-RJ</h4>
                </div>

                <SearchPropertyHomeTop2 />
            </div>

            <div className="ImagesTop">
                <div className="imagemSlider">
            <SliderHome2 />
                </div>
            </div>
            </div>
        </div>
    )
}