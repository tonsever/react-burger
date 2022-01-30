import React from 'react';
import appStyles from './app.module.css';
import AppHeader from '../appHeader/appHeader';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';
import BurgerConstructor from '../burgerConstructor/burgerConstructor';
import IngredientDetails from '../ingredientDetails/ingredientDetails';
import Modal from '../modal/modal';
import ModalOverlay from '../modalOverlay/modalOverlay';
import OrderDetails from '../orderDetails/orderDetails';
import config from '../../constants/config';

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(config.url,)
      .then(res => res.json())
      .then(res => { setData(res.data); })
      .catch(e => {
        console.log(e);
      });
  }, []);


  return (
    <div className={appStyles.app}>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor  data={data} />
      </main>
    </div>
  );
}

export default App;
