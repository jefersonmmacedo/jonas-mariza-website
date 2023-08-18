import "./contact.css";
import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import {IoMailOpenOutline, IoCallOutline, IoPhonePortraitOutline, IoLogoWhatsapp} from "react-icons/io5"
import { useParams } from "react-router-dom";

export function Contact() {
    const {idCompany} = useParams();
    
    return (
        <div className="Contact">
            <Navbar2 idCompany={idCompany}/>
                <h2>Fale conosco</h2>
                <h4>Entre em contato conosco, estamos prontos para atendê-lo.</h4>


            <div className="form">
                <div className="inputsContact">               
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Empresa (Opcional)"/>
                </div>
                <div className="inputsContact">               
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Telefone"/>
                </div>
                <select name="" id="">
                    <option value="">Assunto</option>
                    <option value="">Dúvida</option>
                    <option value="">Dica</option>
                    <option value="">Sujestão</option>
                    <option value="">Solução de problemas </option>
                </select>

                <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>

                <button>Enviar mensagem</button>
            </div>

            <div className="BlocksContact">
                <div className="blockContact">
                        <h3><IoMailOpenOutline /> Email</h3>
                        <h5>emanuelalvesrb@gmail.com</h5>
                </div>
                <div className="blockContact">
                        <h3><IoLogoWhatsapp  /> Vendas</h3>
                        <h5>(21) 99606-5213</h5>
                </div>
                <div className="blockContact">
                    <h3><IoLogoWhatsapp /> Adm. Condomínios </h3>
                    <h5>(21) 99747-6045</h5>
                </div>
            </div> 

            <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.484279987611!2d-42.623626699999996!3d-22.7102346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99d98c6589fa2f%3A0x5448bc1778ae9390!2sR.%20Quinze%20de%20Novembro%2C%2049%20-%20Centro%2C%20Rio%20Bonito%20-%20RJ%2C%2028800-000!5e0!3m2!1spt-BR!2sbr!4v1692381867939!5m2!1spt-BR!2sbr" 
                    width="100%" height="400" style={{border:"0px", borderRadius: "6px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

            <Footer idCompany={idCompany}/>
        </div>
    )
}