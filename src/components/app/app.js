import React from 'react';
import appStyles from './app.module.css';
import AppHeader from '../appHeader/appHeader';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';
import BurgerConstructor from '../burgerConstructor/burgerConstructor';
import IngredientDetails from '../ingredientDetails/ingredientDetails';
import Modal from '../modal/modal';
import OrderDetails from '../orderDetails/orderDetails';
import config from '../../constants/config';
import { DataContext } from '../../utils/dataContext.js';


function App() {
  const [data, setData] = React.useState([]);
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = React.useState(false);
  const [isIngredientDetailsOpen, setisIngredientDetailsOpen] = React.useState(false);
  const [ingredient, setIngredient] = React.useState();
  const [orderNumber, setrderNumber] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);


  function handleOrderDetailsOpen() {
    setIsOrderDetailsOpen(!isOrderDetailsOpen);
  }

  function handleOrderDetailsClick(ingredients) {
    handleOrderDetailsOpen();
    if (!isOrderDetailsOpen) {
      fetch(`${config.url}/api/orders`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredients)
      })
        .then(res => {
          if (res.ok) {
            res.json().then(res => { setrderNumber(res.order.number); })
          }
          else { console.log("Произошла ошибка"); }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  function handleIngredientDetailsClick() {
    setisIngredientDetailsOpen(!isIngredientDetailsOpen);
  }

  function handleIngredientClick(id) {
    handleIngredientDetailsClick();
    const ingredientData = data.find((ingredient) => {
      return ingredient._id === id
    });
    setIngredient(ingredientData);
  }

  React.useEffect(() => {
    fetch(`${config.url}/api/ingredients`)
      .then(res => {
        if (res.ok) {
          res.json().then(res => { setData(res.data); setIsLoading(false) })
        }
        else { console.log("Произошла ошибка"); }
      })
      .catch(e => {
        console.log(e);
      });
  }, []);


  if (isLoading === true) { return null } /* не отрисовывать пока не получим data */
  return (
    <div className={appStyles.app}>
      <AppHeader />
      <main className={appStyles.main}>
        <DataContext.Provider value={{ data }}>
          <BurgerIngredients ingredientDetail={handleIngredientClick} />
          <BurgerConstructor orderDetil={handleOrderDetailsClick} />
          {isIngredientDetailsOpen && <Modal
            title='Детали ингредиента'
            closeModal={handleIngredientDetailsClick} >
            <IngredientDetails ingredientData={ingredient} /></Modal>}
          {isOrderDetailsOpen && <Modal 
          closeModal={handleOrderDetailsClick}>
            <OrderDetails orderNumber = {orderNumber}/></Modal>}
        </DataContext.Provider>
      </main>
    </div>
  );
}

export default App;
