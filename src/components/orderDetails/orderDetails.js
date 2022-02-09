import React from 'react';
import orderDetailsStyles from './orderDetails.module.css';
import done from '../../images/done.png';
import {OrderDetailsPropsType} from '../../utils/types';

function OrderDetails(props) {

  return (
    <>
      <h3 className="text text_type_digits-large">{props.orderNumber}</h3>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img className="mt-15" src={done} alt="заказ оформлен" />
      <p className="text text_type_main-small mt-15">Ваш заказ начали готовить</p>
      <p className="text text_type_main-small text_color_inactive mt-2 mb-20">Дождитесь готовности на орбитальной станции</p>
    </>
  );
}

OrderDetails.propTypes = OrderDetailsPropsType;
export default OrderDetails;
