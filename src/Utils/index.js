/**
 * This function calculates total prices of a new order
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} Total price
 */

const totalPrice = (products) => {
	let sum = 0;
	products.forEach(
		(product) => (sum += product.price)
	);
	return sum;
};

export { totalPrice };
