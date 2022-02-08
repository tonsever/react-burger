import PropTypes from 'prop-types';

export const BurgerPropsType = {
	data: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		proteins: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		carbohydrates: PropTypes.number.isRequired,
		calories: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
		image_mobile: PropTypes.string.isRequired,
		image_large: PropTypes.string.isRequired,
		__v: PropTypes.number.isRequired
	}))
};

export const IngredientPropsType = {
	image: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export const IngredientDetailstPropsType = PropTypes.shape({
	name: PropTypes.string.isRequired,
	proteins: PropTypes.number.isRequired,
	fat: PropTypes.number.isRequired,
	carbohydrates: PropTypes.number.isRequired,
	calories: PropTypes.number.isRequired,
	image_large: PropTypes.string.isRequired,
})

export const IngredientElementPropsType = {
	text: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	thumbnail: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	handleClose: PropTypes.func,
};

export const ModalPropsType = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
	closeModal: PropTypes.func.isRequired,
};

export const ModalOverlayPropsType = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.element,
	]),
	closeModal: PropTypes.func.isRequired,
};

export const OrderDetailsPropsType = {
	orderNumber: PropTypes.number,
};

