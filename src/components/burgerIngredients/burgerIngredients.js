import React from 'react';
import BurgerIngredientsStyles from './burgerIngredientsStyles.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {BurgerIngredientsPropsType} from '../../utils/types';
import IngredientDetails from '../ingredientDetails/ingredientDetails';
import Ingredient from '../ingredient/ingredient';
import { DataContext } from '../../utils/dataContext.js';


function BurgerIngredients(props) {
    const { data } = React.useContext(DataContext); 
    const [current, setCurrent] = React.useState('buns')
    function handlesetCurrent(e) {
        if (e === 'buns') {setCurrent('buns')};
        if (e === 'sauces') {setCurrent('sauces')};
        if (e === 'mains') {setCurrent('mains')};
    }

    return (
        <div className={BurgerIngredientsStyles.BurgerIngredients}>
            <h1 className="text text_type_main-large mt-40">Соберите бургер</h1>
            <div className={BurgerIngredientsStyles.tab__container}>
                <Tab value="buns" active={current === 'buns'} onClick={handlesetCurrent}>
                    Булки
                </Tab>
                <Tab value="sauces" active={current === 'sauces'} onClick={handlesetCurrent}>
                    Соусы
                </Tab>
                <Tab value="mains" active={current === 'mains'} onClick={handlesetCurrent}>
                    Начинки
                </Tab>
            </div>
            <section className={BurgerIngredientsStyles.ingredients__container}>
                <h2 className="text text_type_main-medium">Булки</h2>
                <div className={BurgerIngredientsStyles.list}>
                    {data.map(
                        ({ name, price, image, type, _id }) => {
                            if (type === "bun") {
                                return (
                                    <Ingredient
                                        image={image}
                                        name={name}
                                        price={price}
                                        id={_id}
                                        key={_id}
                                        onOpen={props.ingredientDetail}
                                    />
                                );
                            }
                        })
                    }
                </div>
                <h2 className="text text_type_main-medium">Соусы</h2>
                <div className={BurgerIngredientsStyles.list}>
                    {data.map(
                        ({ name, price, image, type, _id }) => {
                            if (type === "sauce") {
                                return (
                                    <Ingredient
                                        image={image}
                                        name={name}
                                        price={price}
                                        id={_id}
                                        key={_id}
                                        onOpen={props.ingredientDetail}
                                    />
                                );
                            }
                        })
                    }
                </div>
                <h2 className="text text_type_main-medium">Начинки</h2>
                <div className={BurgerIngredientsStyles.list}>
                    {data.map(
                        ({ name, price, image, type, _id }) => {
                            if (type === "main") {
                                return (
                                    <Ingredient
                                        image={image}
                                        name={name}
                                        price={price}
                                        id={_id}
                                        key={_id}
                                        onOpen={props.ingredientDetail}
                                    />
                                );
                            }
                        })
                    }
                </div>
            </section>
        </div>
    );
}

BurgerIngredients.propTypes = BurgerIngredientsPropsType

export default BurgerIngredients;