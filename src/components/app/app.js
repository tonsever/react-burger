import React from 'react';
import appStyles from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import data from '../../utils/data';

function App() {
  return (
    <div className={appStyles.app}>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data} />
      </main>

    </div>
  );
}

export default App;
