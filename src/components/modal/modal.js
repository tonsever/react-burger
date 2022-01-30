import React from 'react';
import ReactDOM from 'react-dom';
import modalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modalOverlay/modalOverlay';
const modalRoot = document.getElementById("modal-root");

function Modal(props) {
  
  function handleEsc(e) {
    if (e.keyCode == 27) {
      props.closeModal();
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });

 return ReactDOM.createPortal (
      <>
      <ModalOverlay>
        <div className={modalStyles.modal} onKeyDown={handleEsc}>
          <div className={modalStyles.header}>
            <h3 className="text text_type_main-large">{props.title}</h3>
            <div className={modalStyles.icon}><CloseIcon type="primary" onClick={props.closeModal} /></div>
          </div>
          <div className={modalStyles.content}>
            {props.children}
          </div>
        </div>
      </ModalOverlay>
    </>, modalRoot
    );
 


/*   return (
    <>
      <ModalOverlay>
        <div tabIndex="0" className={modalStyles.modal}>
          <div className={modalStyles.header}>
            <h3 className="text text_type_main-large">{props.title}</h3>
            <div className={modalStyles.icon}><CloseIcon type="primary" onClick={props.closeModal} /></div>
          </div>
          <div className={modalStyles.content}>
            {props.children}
          </div>
        </div>
      </ModalOverlay>
    </>
  ); */
} 

export default Modal;
