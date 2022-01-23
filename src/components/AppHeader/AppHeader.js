import React from 'react';
import AppHeaderStyles from './AppHeader.module.css';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Box } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
    return (
        <header className={AppHeaderStyles.header}>
            <nav className={AppHeaderStyles.header__menu}>
                <div class={AppHeaderStyles.nav__container}>
                    <div class={AppHeaderStyles.nav__item}>
                        <BurgerIcon type="primary" />
                        <p className="text text_type_main-default ml-2 mr-2 mb-16 mt-16">Конструктор</p>
                    </div>
                    <div class={AppHeaderStyles.nav__item}>
                        <ListIcon type="secondary" />
                        <p className="text text_type_main-default text_color_inactive ml-2 mr-2 mb-16 mt-16">Лента заказов</p>
                    </div>
                </div>
                <a href="" class={AppHeaderStyles.nav__item}><Logo /></a>
                <div class={AppHeaderStyles.nav__item}>
                    <ProfileIcon type="secondary" />
                    <p className="text text_type_main-default text_color_inactive ml-2 mr-2 mb-16 mt-16">Личный кабинет</p>
                </div>
            </nav>
        </header>
    );
}

export default AppHeader;