import React from 'react';
import BurgerConstructorStyles from './burgerConstructorStyles.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
/* import {BurgerPropsType} from '../../utils/types'; */
import { BurgerConstructorPropsType } from '../../utils/types';
import IngredientElement from '../ingredientElement/ingredientElement';
import { DataContext } from '../../utils/dataContext.js';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function BurgerConstructor(props) {
    /* const { data } = React.useContext(DataContext); */
    const [totalPrice, setTotalPrice] = React.useState(0);
    const dispatch = useDispatch();
    const { ingredients, ingredientsRequest } = useSelector(state => state.ingredients);
    const [constructorElements, setConstructorElements] = React.useState(ingredients);
    console.log(constructorElements);
    const bun = constructorElements.find((bun) => {
        return bun.type === "bun"
    })

    const onDelete = (id) => {
        setConstructorElements(constructorElements.filter(item => item._id !== id));
    };

    const handleOrderDetailsClick = () => {
        const ingredients = {
            "ingredients": []
        }
        constructorElements.forEach(element => {
            ingredients.ingredients.push(element._id);
        });
        props.orderDetil(ingredients);
    }

    React.useEffect(
        () => {
            let total = 0;
            constructorElements.map(item => { if (item.type !== "bun") { (total += item.price) } });
            setTotalPrice(total + bun.price * 2);
        },
        [constructorElements, setTotalPrice]
    );

    if (ingredientsRequest === false) { return null }
    return (
        <div className={BurgerConstructorStyles.BurgerConstructor}>
            <section className={BurgerConstructorStyles.ingredients}>
                <div className={BurgerConstructorStyles.container__item}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                </div>
                <div className={BurgerConstructorStyles.ingredients__container}>
                    {/* {constructorElements.map(
                        ({ name, price, image, type, _id }) => {
                            if (type !== "bun") {
                                return (
                                    <IngredientElement
                                        key={_id}
                                        text={name}
                                        price={price}
                                        thumbnail={image}
                                        handleDelete={onDelete}
                                        id={_id}
                                    />
                                );
                            }
                        })
                    } */}
                </div>
                <div className={BurgerConstructorStyles.container__item}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                </div>
            </section>
            <div className={BurgerConstructorStyles.place__order}>
                <div className={BurgerConstructorStyles.cost}>
                    <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
                    <div className={BurgerConstructorStyles.icon}><CurrencyIcon type="primary" /></div>
                </div>
                <Button onClick={handleOrderDetailsClick} type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </div>

    );
}

BurgerConstructor.propTypes = BurgerConstructorPropsType;

export default BurgerConstructor;
