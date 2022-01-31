import React from 'react';
import ReactDOM from 'react-dom';
import orderDetailsStyles from './orderDetails.module.css';
import done from '../../images/done.png';
import Modal from '../modal/modal';

function OrderDetails(props) {

  return (
    <>
      <h3 className="text text_type_digits-large">034536</h3>
      <div style={{ backgroundColor: '#4c4cff' }} className="mt-8"></div>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <div style={{ backgroundColor: '#4c4cff' }} className="mt-15"></div>
      <img src={done} alt="заказ оформлен" />
      <div style={{ backgroundColor: '#4c4cff' }} className="mt-15"></div>
      <p className="text text_type_main-small">Ваш заказ начали готовить</p>
      <div style={{ backgroundColor: '#4c4cff' }} className="mt-2"></div>
      <p className="text text_type_main-small text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      <div style={{ backgroundColor: '#4c4cff' }} className="mt-20"></div>
    </>
  );
}

export default OrderDetails;
