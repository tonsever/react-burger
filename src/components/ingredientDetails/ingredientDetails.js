import React from 'react';
import ingredientDetailsStyles from './ingredientDetails.module.css';
import Modal from '../modal/modal';
import {IngredientDetailstPropsType} from '../../utils/types';


function IngredientDetails(props) {
  return (
    <div className={ingredientDetailsStyles.details}>
      <img src={props.ingredientData.image_large} alt="ингредиент" />
      <h3 className="text text_type_main-medium">{props.ingredientData.name}</h3>
      <div style={{ backgroundColor: '#4c4cff' }} className="mt-8"></div>
      <div className={ingredientDetailsStyles.nutritionists}>
        <div className={ingredientDetailsStyles.nutritionist}>
          <p className={`text text_type_main-default text_color_inactive ${ingredientDetailsStyles.text__center}`}>Калории,ккал</p>
          <p className={`text text_type_digits-default text_color_inactive ${ingredientDetailsStyles.text__center}`}>{props.ingredientData.calories}</p>
        </div>
        <div className={ingredientDetailsStyles.nutritionist}>
          <p className={`text text_type_main-default text_color_inactive ${ingredientDetailsStyles.text__center}`}>Белки, г</p>
          <p className={`text text_type_digits-default text_color_inactive ${ingredientDetailsStyles.text__center}`}>{props.ingredientData.proteins}</p>

        </div>
        <div className={ingredientDetailsStyles.nutritionist}>
          <p className={`text text_type_main-default text_color_inactive ${ingredientDetailsStyles.text__center}`}>Жиры, г</p>
          <p className={`text text_type_digits-default text_color_inactive ${ingredientDetailsStyles.text__center}`}>{props.ingredientData.fat}</p>
        </div>
        <div className={ingredientDetailsStyles.nutritionist}>
          <p className={`text text_type_main-default text_color_inactive ${ingredientDetailsStyles.text__center}`}>Углеводы, г</p>
          <p className={`text text_type_digits-default text_color_inactive ${ingredientDetailsStyles.text__center}`}>{props.ingredientData.carbohydrates}</p>
        </div>
      </div>
      <div style={{ backgroundColor: '#4c4cff' }} className="mt-15"></div>
    </div>
  );
}

IngredientDetails.propTypes = IngredientDetailstPropsType;

export default IngredientDetails;
