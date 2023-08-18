import "./contactModal.css"
import { IoCall, IoChatboxEllipses, IoClose, IoHeart, IoLogoWhatsapp, IoMail, IoSend } from "react-icons/io5";
import { useState } from "react";
import Modal from 'react-modal';
import Zap from '../../assets/images/zap.png'

export function ContactModal() {
    const [isOpenModal, setIsOpenModa] = useState(false);
    function handleOpenModal(e) {
        e.preventDefault();
          setIsOpenModa(true)
        }
      
        function handleCloseModal(e) {
          e.preventDefault();
          setIsOpenModa(false);
        }

        function HandleOpenLink2(data) {
            console.log(data);
            window.open(`${data}`)
          }
        function HandleCall(data) {
            console.log(data);
            window.open(`tel:+${data}`, "_self");
          }
          function handleMail(data) {
            console.log(data);
            window.open(`mailto:${data}`)
          }
          

    Modal.setAppElement('#root');

    return (
        <>
        <button className="faleConosco" onClick={handleOpenModal}><IoLogoWhatsapp/> Fale conosco</button>

        <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModal}>
            <IoClose /> 
            </button>
            <div className="content-modal-FaleConosco">
            <div className="itensModalFaleConosco">
                    <IoChatboxEllipses />

                    <h1>Fale conosco</h1>

                    <div className="ButtonsFaleConosco">
                        <div className="buttonUnicFaleConosco">
                            <div className="text">
                            <h3>Vendas</h3>
                            <h2>(21) 99606-5213</h2>
                            </div>
                            <div className="buttonsFale">
                            <button className="btn1" onClick={() => HandleOpenLink2(`https://wa.me/5521996065213`)}><IoLogoWhatsapp/></button>
                            <button className="btn2" onClick={() => HandleCall(`5521996065213`)}><IoCall/></button>
                            </div>
                        </div>
                        <div className="buttonUnicFaleConosco">
                            <div className="text">
                        <h3>Administração de Condomínios</h3>
                        <h2>(21) 99747-6045</h2>
                            </div>
                            <div className="buttonsFale">
                            <button className="btn1" onClick={() => HandleOpenLink2(`https://wa.me/5521997476045`)}><IoLogoWhatsapp/></button>
                            <button className="btn2" onClick={() => HandleCall(`5521997476045`)}><IoCall/></button>
                            </div>
                        </div>
                        <div className="buttonUnicFaleConosco">
                            <div className="text">
                        <h3>Email</h3>
                        <h2>emanuelalvesrb@gmail.com</h2>
                            </div>
                            <div className="buttonsFale">
                            <button className="btn2" onClick={() => handleMail("emanuelalvesrb@gmail.com")}><IoMail/></button>
                            </div>
                        </div>
                    </div>



            </div>
            </div>
            </Modal>
        </>
    )
}
