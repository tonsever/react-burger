import React from 'react';
import IngredientElementStyles from './ingredientElement.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientElementPropsType} from '../../utils/types';


function IngredientElement(props) {
    function handleDelete() {
        props.handleDelete(props.id);
      }

    return (
        <div className={IngredientElementStyles.container__item}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={props.text}
                price={props.price}
                thumbnail={props.thumbnail}
                handleClose={handleDelete}
            />
        </div>
    )
}

IngredientElement.propTypes = IngredientElementPropsType;

export default IngredientElement;
