import React from 'react';
import BurgerIngredientsStyles from './BurgerIngredientsStyles.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import bun02 from '../../images/bun-02.png';
import bun01 from '../../images/bun-01.png';
import sauce02 from '../../images/sauce-02.png';
import sauce04 from '../../images/sauce-04.png';
import sauce03 from '../../images/sauce-03.png';
import sauce01 from '../../images/sauce-01.png';


function BurgerIngredients() {
    return (
        <div className={BurgerIngredientsStyles.BurgerIngredients}>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div className={BurgerIngredientsStyles.tab__container}>
                <Tab>Булки</Tab>
                <Tab>Соусы</Tab>
                <Tab>Начинки</Tab>
            </div>
            <section className={BurgerIngredientsStyles.ingredients__container}>
                <h2 className="text text_type_main-medium">Булки</h2>
                <div className={BurgerIngredientsStyles.list}>
                    <div className={BurgerIngredientsStyles.list__item}>
                        <img className={BurgerIngredientsStyles.image} src={bun02} alt="Булка" />
                        <Counter count={1} size="default" />
                        <div className={BurgerIngredientsStyles.cost}>
                            <p className="text text_type_main-medium mr-2">20</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-small">Краторная булка N-200i</p>
                    </div>
                    <div className={BurgerIngredientsStyles.list__item}>
                        <img className={BurgerIngredientsStyles.image} src={bun01} alt="Булка" />
                        <Counter count={0} size="default" />
                        <div className={BurgerIngredientsStyles.cost}>
                            <p className="text text_type_main-medium mr-2">20</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-small">Флюоресцентная булка R2-D3</p>
                    </div>
                </div>
                <h2 className="text text_type_main-medium">Соусы</h2>
                <div className={BurgerIngredientsStyles.list}>
                    <div className={BurgerIngredientsStyles.list__item}>
                        <img className={BurgerIngredientsStyles.image} src={sauce02} alt="Булка" />
                        <Counter count={1} size="default" />
                        <div className={BurgerIngredientsStyles.cost}>
                            <p className="text text_type_main-medium mr-2">30</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-small">Соус Spicy-X</p>
                    </div>
                    <div className={BurgerIngredientsStyles.list__item}>
                        <img className={BurgerIngredientsStyles.image} src={sauce04} alt="Булка" />
                        <Counter count={0} size="default" />
                        <div className={BurgerIngredientsStyles.cost}>
                            <p className="text text_type_main-medium mr-2">30</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-small">Соус фирменный Space Sauce</p>
                    </div>
                    <div className={BurgerIngredientsStyles.list__item}>
                        <img className={BurgerIngredientsStyles.image} src={sauce03} alt="Булка" />
                        <Counter count={0} size="default" />
                        <div className={BurgerIngredientsStyles.cost}>
                            <p className="text text_type_main-medium mr-2">30</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-small">Соус из лунного гриба</p>
                    </div>
                    <div className={BurgerIngredientsStyles.list__item}>
                        <img className={BurgerIngredientsStyles.image} src={sauce01} alt="Булка" />
                        <Counter count={0} size="default" />
                        <div className={BurgerIngredientsStyles.cost}>
                            <p className="text text_type_main-medium mr-2">30</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-small">Соус марсианский чили</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BurgerIngredients;