import React from 'react';
import modalOverlayStyles from './modalOverlay.module.css';

function ModalOverlay(props) {
  return (
    <div onClick={props.closeModal} className={modalOverlayStyles.modalOverlayStyles}>
      {props.children}
    </div>
  );
}

export default ModalOverlay;
