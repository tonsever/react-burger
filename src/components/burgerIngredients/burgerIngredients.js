import React from 'react';
import BurgerIngredientsStyles from './burgerIngredientsStyles.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import BurgerPropsType from '../../utils/types';
import IngredientDetails from '../ingredientDetails/ingredientDetails';
import Ingredient from '../ingredient/ingredient';


function BurgerIngredients(props) {
    const [isIngredientDetailsOpen, setisIngredientDetailsOpen] = React.useState(false);
    const [ingredient, setIngredient] = React.useState();

    function handleIngredientDetailsClick() {
        setisIngredientDetailsOpen(!isIngredientDetailsOpen);
    }

    function handleIngredientClick(id) {
        handleIngredientDetailsClick()
        const ingredientData = props.data.find((ingredient) => {
            return ingredient._id === id
        });
        setIngredient(ingredientData);
      }

    return (
        <div className={BurgerIngredientsStyles.BurgerIngredients}>
            <h1 className="text text_type_main-large mt-40">Соберите бургер</h1>
            <div className={BurgerIngredientsStyles.tab__container}>
                <Tab>Булки</Tab>
                <Tab>Соусы</Tab>
                <Tab>Начинки</Tab>
            </div>
            <section className={BurgerIngredientsStyles.ingredients__container}>
                <h2 className="text text_type_main-medium">Булки</h2>
                <div className={BurgerIngredientsStyles.list}>
                    {props.data.map(
                        ({ name, price, image, type, _id }) => {
                            if (type === "bun") {
                                return (
                                    <Ingredient
                                        image={image}
                                        name={name}
                                        price={price}
                                        id={_id}
                                        key={_id}
                                        onOpen={handleIngredientClick}
                                    />
                                );
                            }
                        })
                    }
                </div>
                <h2 className="text text_type_main-medium">Соусы</h2>
                <div className={BurgerIngredientsStyles.list}>
                    {props.data.map(
                        ({ name, price, image, type, _id }) => {
                            if (type === "sauce") {
                                return (
                                    <Ingredient
                                        image={image}
                                        name={name}
                                        price={price}
                                        id={_id}
                                        key={_id}
                                        onOpen={handleIngredientClick}
                                    />
                                );
                            }
                        })
                    }
                </div>
                <h2 className="text text_type_main-medium">Начинки</h2>
                <div className={BurgerIngredientsStyles.list}>
                    {props.data.map(
                        ({ name, price, image, type, _id }) => {
                            if (type === "main") {
                                return (
                                    <Ingredient
                                        image={image}
                                        name={name}
                                        price={price}
                                        id={_id}
                                        key={_id}
                                        onOpen={handleIngredientClick}
                                    />
                                );
                            }
                        })
                    }
                </div>
            </section>
            {isIngredientDetailsOpen && <IngredientDetails ingredientData={ingredient} onСlose={handleIngredientDetailsClick} />}
        </div>
    );
}

BurgerIngredients.propTypes = BurgerPropsType

export default BurgerIngredients;