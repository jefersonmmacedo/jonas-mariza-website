import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import Zap from '../../assets/images/zap.png'
import "./legalization.css";
import {BiCheckDouble} from "react-icons/bi";
import { useParams } from "react-router-dom";

export function Legalization() {
    const {idCompany} = useParams();

    function handleContact(e) {
        window.open(`https://wa.me/5521997476045`)
    }

    return (
        <div className="Legalization">
            <Navbar2 idCompany={idCompany}/>
            <div className="topImageLegalization">
                <div className="back">
            <h1>Legalização de imóveis</h1>
                <h3>Conheça como podemos te ajudar e cada passo da legalização</h3>
                </div>
            </div>

          

            <div className="stepesFinances">
                            <h2>LEGALIZAÇÃO DE   <span>IMÓVEIS</span></h2>
                <h4>
                    <br />
<b>Nossos Serviços</b>
        <br />
        <br />
PREFEITURA<br />
	Averbação<br />
	Habite-se<br />
	Demolição<br />
	Fracionamento<br />
	IPTU<br />
    <br /><br />
<b>RECEITA FEDERAL</b><br />
	CNO<br />
	SERO<br />
	Certidões<br />
    <br /><br />
<b>CARTÓRIO</b><br />
Escrituras<br />
	Registro de Imóveis -RGI<br />
	Averbações<br />
    <br /><br />
<b>-- BENEFÍCIOS --</b><br />
<br />
<b>TRANQUILIDADE</b><br />
Regularizar seu imóvel junto aos órgãos competentes, evitando notificações, multas e processos desnecessários;
<br /><br />

<b>VALORIZAÇÃO DO PATRIMÔNIO</b><br />

Qualquer imóvel fica mais valorizado se estiver devidamente regularizado;
<br />
Quando se negocia uma propriedade, qualquer agente financeiro (banco) exige a documentação em dia.
<br /><br />
<b>ASSEGURAR O FUTURO</b><br />
O pior momento em que a regularização também se faz necessária é a hora do inventário.
<br />
Deixar tudo regularizado agora evita grandes dores de cabeça para os herdeiros no futuro.</h4>

              

                {/* <div className="stepesList">
                <div className="stepeUnic">
                    <h1>1</h1>
                    <div className="textStepe">
                        <h4>Simulação e aprovação de crédito </h4>
                        <h5>Preencha os seus dados e os do imóvel para simular e solicitar a análise de crédito. </h5>
                    </div>
                </div>
                <div className="stepeUnic2">
                    <div className="textStepe2">
                        <h4>Cadastro e documentação</h4>
                        <h5>Cadastre as informações da proposta e envie os documentos solicitados. </h5>
                    </div>
                    <h1>2</h1>
                </div>
                <div className="stepeUnic">
                    <h1>3</h1>
                    <div className="textStepe">
                        <h4>Análise de documentos e vistoria do imóvel</h4>
                        <h5>Após enviar seus documentos, é hora de acompanhar a análise técnica e marcar a vistoria. </h5>
                    </div>
                </div>
                <div className="stepeUnic2">
                    <div className="textStepe2">
                        <h4>Contrato</h4>
                        <h5>Após a conclusão das análises, você irá até a agência assinar o contrato.</h5>
                    </div>
                    <h1>4</h1>
                </div>
                <div className="stepeUnic">
                    <h1>5</h1>
                    <div className="textStepe">
                        <h4>Liberação de crédito</h4>
                        <h5>Após a entrega ao Santander do contrato registrado e matrícula atualizada, o crédito será liberado ao vendedor.</h5>
                    </div>
                </div>
                </div> */}
            </div>

                <Footer idCompany={idCompany}/>
        </div>
    )
}