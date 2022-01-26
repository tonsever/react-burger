import React from 'react';
import BurgerIngredientsStyles from './burgerIngredientsStyles.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import BurgerPropsType from '../../utils/types';


function BurgerIngredients(props) {
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
                                    <div className={BurgerIngredientsStyles.list__item} key={_id}>
                                        <img className={BurgerIngredientsStyles.image} src={image} alt="Булка" />
                                        <Counter count={1} size="default" />
                                        <div className={BurgerIngredientsStyles.cost}>
                                            <p className="text text_type_main-medium mr-2">{price}</p>
                                            <CurrencyIcon type="primary" />
                                        </div>
                                        <p className={`text text_type_main-small ${BurgerIngredientsStyles.text__center}`}>{name}</p>
                                    </div>
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
                                    <div className={BurgerIngredientsStyles.list__item} key={_id}>
                                        <img className={BurgerIngredientsStyles.image} src={image} alt="Булка" />
                                        <Counter count={1} size="default" />
                                        <div className={BurgerIngredientsStyles.cost}>
                                            <p className="text text_type_main-medium mr-2">{price}</p>
                                            <CurrencyIcon type="primary" />
                                        </div>
                                        <p className={`text text_type_main-small ${BurgerIngredientsStyles.text__center}`}>{name}</p>
                                    </div>
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
                                    <div className={BurgerIngredientsStyles.list__item} key={_id}>
                                        <img className={BurgerIngredientsStyles.image} src={image} alt="Булка" />
                                        <Counter count={1} size="default" />
                                        <div className={BurgerIngredientsStyles.cost}>
                                            <p className="text text_type_main-medium mr-2">{price}</p>
                                            <CurrencyIcon type="primary" />
                                        </div>
                                        <p className={`text text_type_main-small ${BurgerIngredientsStyles.text__center}`}>{name}</p>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            </section>
        </div>
    );
}

BurgerIngredients.propTypes = BurgerPropsType

export default BurgerIngredients;