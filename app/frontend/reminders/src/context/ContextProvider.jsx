import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import Context from './Context';

function ContextProvider({ children }) {
	const [nameDate, setDateName] = useState({
		name: '',
		date: '',
	});
  const [reminder, setReminder] = useState({})

	const value = useMemo(
		() => ({
			nameDate,
			setDateName,
      reminder,
      setReminder
		}),
		[nameDate, reminder],
	);

	return <Context.Provider value={value}>{children}</Context.Provider>;
}

ContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContextProvider;
