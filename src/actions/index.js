export const increment = amount => {
	return {
		type: 'INCREMENT_COUNTER',
		payload: amount
	};
};
