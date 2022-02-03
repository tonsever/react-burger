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
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = React.useState(false);
  const [isIngredientDetailsOpen, setisIngredientDetailsOpen] = React.useState(false);
  const [ingredient, setIngredient] = React.useState();
  const [isLoding, setLoding] = React.useState(true);

    
  function handleOrderDetailsClick() {
      setIsOrderDetailsOpen(!isOrderDetailsOpen);
    }


    function handleIngredientDetailsClick() {
        setisIngredientDetailsOpen(!isIngredientDetailsOpen);
    }

    function handleIngredientClick(id) {
        handleIngredientDetailsClick()
        const ingredientData = data.find((ingredient) => {
            return ingredient._id === id
        });
        setIngredient(ingredientData);
      }

  React.useEffect(() => {
    fetch(config.url)
      .then(res => {
        if (res.ok) {
          res.json().then(res => { setData(res.data); setLoding(false)} )
        }
        else {console.log("Произошла ошибка");}
      })
      .catch(e => {
        console.log(e);
      });
  },[]);

if (isLoding === true) {return null} /* не отрисовывать пока не получим data */
  return (
    <div className={appStyles.app}>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredients ingredientDetail = {handleIngredientClick} data={data} />
        <BurgerConstructor orderDetil = {handleOrderDetailsClick} data={data} />
        {isIngredientDetailsOpen && <Modal title='Детали ингредиента' closeModal={handleIngredientDetailsClick}><IngredientDetails ingredientData={ingredient}/></Modal>}
        {isOrderDetailsOpen && <Modal closeModal={handleOrderDetailsClick}><OrderDetails/></Modal>}
      </main>
    </div>
  );
}

export default App;
