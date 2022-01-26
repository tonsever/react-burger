import React from 'react';
import BurgerConstructorStyles from './burgerConstructorStyles.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import bun02 from '../../images/bun-02.png';
import subtract from '../../images/Subtract.png';
import PropTypes from 'prop-types';
import BurgerPropsType from '../../utils/types';


function BurgerConstructor(props) {

    return (
        <div className={BurgerConstructorStyles.BurgerConstructor}>
            <section className={BurgerConstructorStyles.ingredients}>
                <div className={BurgerConstructorStyles.container__item}>
                    <div style={{ backgroundColor: '#4c4cff' }} className="ml-6"></div>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={bun02}
                    />
                </div>
                <div className={BurgerConstructorStyles.ingredients__container}>
                    {props.data.map(
                        ({ name, price, image, type, _id }) => {
                            if (type !== "bun") {
                                return (
                                    <div className={BurgerConstructorStyles.container__item} key={_id}>
                                        <DragIcon type="primary" />
                                        <ConstructorElement
                                            text={name}
                                            price={price}
                                            thumbnail={image}
                                        />
                                    </div>
                                );
                            }
                        })
                    }
                </div>
                <div className={BurgerConstructorStyles.container__item}>
                    <div style={{ backgroundColor: '#4c4cff' }} className="ml-6"></div>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={bun02}
                    />
                </div>
            </section>
            <div className={BurgerConstructorStyles.place__order}>
                <div className={BurgerConstructorStyles.cost}>
                    <p className="text text_type_digits-medium mr-2">610</p>
                    {/* <CurrencyIcon className={BurgerConstructorStyles.icons} type="primary" /> */}
                    <img className={BurgerConstructorStyles.icon} src={subtract} alt="Большая иконка валюты" />
                </div>
                <Button type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </div>

    );
}

BurgerConstructor.propTypes = BurgerPropsType;

export default BurgerConstructor;
