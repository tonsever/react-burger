import config from '../../constants/config';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const ADD_CONSTRUCTOR_ELEMENT = 'ADD_CONSTRUCTOR_ELEMENT';
export const DELETE_CONSTRUCTOR_ELEMENT = 'DELETE_CONSTRUCTOR_ELEMENT';

export const ADD_INGREDIENTS_DETAILS = 'ADD_INGREDIENTS_DETAILS';
export const DELETE_INGREDIENTS_DETAILS = 'DELETE_INGREDIENTS_DETAILS';

export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';

export function getIngredients() {
	// Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
	return function (dispatch) {
		// Проставим флаг в хранилище о том, что мы начали выполнять запрос
		// Это нужно, чтоб отрисовать в интерфейсе лоудер или заблокировать 
		// ввод на время выполнения запроса
		dispatch({
			type: GET_INGREDIENTS_REQUEST
		})
		// Запрашиваем данные у сервера
		fetch(`${config.url}/api/ingredients`)
			.then(res => {
				if (res.ok) {
					res.json().then(res => {
						dispatch({
							type: GET_INGREDIENTS_SUCCESS,
							ingredients: res.data
						})
					})
				} else {
					// Если произошла ошибка, отправляем соотвтествующий экшен
					dispatch({
						type: GET_INGREDIENTS_FAILED
					})
				}
			}).catch(err => {
				// Если сервер не вернул данных, также отправляем экшен об ошибке
				dispatch({
					type: GET_INGREDIENTS_FAILED
				})
			})
	}
} 