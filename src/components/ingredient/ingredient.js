import React from 'react';
import ingredientsStyles from './ingredient.module.css';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientPropsType} from '../../utils/types';


function Ingredient(props) {

  function handleClick() {
    props.onOpen(props.id);
  }

  return (
    <div onClick={handleClick} className={ingredientsStyles.list__item}>
      <img className={ingredientsStyles.image} src={props.image} alt="Булка" />
      <Counter count={1} size="default" />
      <div className={ingredientsStyles.cost}>
        <p className="text text_type_main-medium mr-2">{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-small ${ingredientsStyles.text__center}`}>{props.name}</p>
    </div>

  );
}

Ingredient.propTypes = IngredientPropsType;

export default Ingredient;
