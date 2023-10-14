const errorHandler = (err, _req, res, next) => {
	const status = err.status || 500;
	const message = err.message || 'Internal Server Error';
	if (err.status) {
		res.status(status).send({ error: message });
	} else {
		next(err);
	}
};

module.exports = errorHandler;
