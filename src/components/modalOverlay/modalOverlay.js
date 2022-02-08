import React from 'react';
import modalOverlayStyles from './modalOverlay.module.css';
import {ModalOverlayPropsType} from '../../utils/types';

function ModalOverlay(props) {
  function handleClose (e) {
    if (e.target.id === 'ModalOverlay') {
      props.closeModal();
    }
  }
  return (
    <div id="ModalOverlay" onClick={handleClose} className={modalOverlayStyles.modalOverlayStyles}>
      {props.children}
    </div>
  );
}

ModalOverlay.propTypes = ModalOverlayPropsType;
export default ModalOverlay;
