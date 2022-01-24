import React from 'react';
import appStyles from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

function App() {
  return (
    <div className={appStyles.app}>
      <AppHeader />
      <BurgerIngredients />

    </div>
  );
}

export default App;
