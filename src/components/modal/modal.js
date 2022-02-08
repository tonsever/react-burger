import React from 'react';
import ReactDOM from 'react-dom';
import modalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modalOverlay/modalOverlay';
import {ModalPropsType} from '../../utils/types';
const modalRoot = document.getElementById("modal-root");

function Modal(props) {

  function handleClose() {
    props.closeModal();
  }

  function handleEsc(e) {
    if (e.key === 'Escape') {
      props.closeModal();
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay closeModal={props.closeModal}>
        <div className={modalStyles.modal} onKeyDown={handleEsc}>
          <div className={modalStyles.header}>
            <h3 className="text text_type_main-large">{props.title}</h3>
            <div className={modalStyles.icon}><CloseIcon type="primary" onClick={handleClose} /></div>
          </div>
          <div className={modalStyles.content}>
            {props.children}
          </div>
        </div>
      </ModalOverlay>
    </>, modalRoot
  );
}

Modal.propTypes = ModalPropsType;
export default Modal;
