import PropTypes from 'prop-types';
import Context from './Context';

function ContextProvider({ children }) {
  
//const value = useMemo(() => ({

//}), []);

  return (
    // <Context.Provider value={ value }>
    //   {children}
    // </Context.Provider>

    <Context.Provider>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
