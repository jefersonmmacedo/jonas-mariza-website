import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import Zap from '../../assets/images/zap.png'
import "./administration.css";
import {BiCheckDouble} from "react-icons/bi";
import { useParams } from "react-router-dom";

export function Administration() {
    const {idCompany} = useParams();

    function handleContact(e) {
        window.open(`https://wa.me/5521997476045`)
    }

    return (
        <div className="Administration">
            <Navbar2 idCompany={idCompany}/>
            <div className="topImageAdministration">
                <div className="back">
            <h1>Administração de condomínios</h1>
                <h3>Tenha a tranquilidade de ter seu condomínio gerido por quem é referencia na região.</h3>
                </div>
            </div>

 

            <div className="stepesFinances">
                            <h2>ADMINISTRAÇÃO DE   <span>CONDOMÍNIOS</span></h2>
                <h4>
A administração de condomínios é a gestão e coordenação das atividades relacionadas à manutenção e operação de um condomínio residencial ou comercial. O objetivo principal é garantir o bem-estar e a segurança dos moradores ou proprietários, bem como a conservação e valorização do patrimônio do condomínio.
<br /><br /><br />
<b>ALGUNS DE NOSSOS SERVIÇOS</b>
<br /><br />
- Atendimento em sua sede, no horário comercial. <br />
- Convocação por ordem do Síndico ou dos Condôminos, através de editais.<br />
- Lavratura de atas das Assembleias. <br />
- Elaboração de editais, atas e correspondências.<br />
- Elaboração de balancete mensal de receitas e despesas.<br />
- Emissão dos boletos bancários mensais<br />
- Pagamento de todos os compromissos assumidos pelo Condomínio.<br />
- Elaboração das previsões orçamentárias.<br />
- Posição financeira eletrônica dos saldos de conta corrente.<br />
- Cobrança das Cotas Condominiais em atraso.<br />
</h4>
<br /><br />

              

            </div>
            {/* <div className="stepesFinances">
                            <h2>ADMINISTRAÇÃO DE   <span>CONDOMÍNIOS</span></h2>
                <h4>
A administração de condomínios é a gestão e coordenação das atividades relacionadas à manutenção e operação de um condomínio residencial ou comercial. O objetivo principal é garantir o bem-estar e a segurança dos moradores ou proprietários, bem como a conservação e valorização do patrimônio do condomínio.
<br /><br /><br />
<b>ALGUNS DE NOSSOS SERVIÇOS</b>
<br /><br />
- Atendimento em sua sede, no horário comercial ao Síndico ou Sub-Síndico e Conselheiros, bem como aos Condôminos, sobre qualquer assunto ou dúvida pertinente à administração do prédio. <br /> <br />
- Convocação por ordem do Síndico ou dos Condôminos, através de editais e nos termos estabelecidos na Convenção, de Assembleias Gerais Ordinárias e Extraordinárias. <br /><br />
- Lavratura de atas das Assembleias, efetivando os seus respectivos registros nos Cartórios de Títulos e Documentos. <br /><br />
- Elaboração das pastas de prestação de contas mensais, providenciando seu encaminhamento para que o Síndico as examine e as encaminhe ao Conselho Fiscal para aprovação. <br /><br />
- Emissão dos avisos bancários para a arrecadação das cotas condominiais mensais, fundos de reserva e/ou de obras, que deverão ser pagáveis na rede bancária.<br /><br />
- Guarda de todos os documentos do Condomínio que estejam em seu poder, tais como, jogos de plantas, livro de atas, apólices de seguro, etc, até a sua efetiva entrega ao Síndico. <br /><br />
- Pagamento de todos os compromissos assumidos pelo Condomínio, desde que haja disponibilidade financeira.<br /><br />
- Elaboração das previsões orçamentárias e envio para aprovação do Síndico e Conselheiros. <br /><br />
- Posição financeira eletrônica dos saldos de conta corrente e aplicações financeiras, sempre que solicitados pelo Síndico. <br /><br />
- Cobrança das cotas condominiais em atraso, acrescidas de multa, juros, correção monetária, as quais serão creditadas ao Condomínio. <br /><br />
- Atendimento sempre que se faça necessário, a fiscalização do Ministério do Trabalho, Prefeitura Municipal, Corpo de Bombeiros, Sindicato da categoria, etc.<br /><br />
- Elaboração de balancete mensal de receitas e despesas, inclusive financeiras, com conciliação bancária.<br /><br />
- Cobrança com emissão de boleto bancário e controle de pagamento. <br /><br />
- Elaboração de editais, atas e correspondências. <br /><br />
- Elaboração da prestação de contas do Síndico, no encerramento de gestão.</h4>
<br /><br />

              

            </div> */}

                <Footer idCompany={idCompany}/>
        </div>
    )
}