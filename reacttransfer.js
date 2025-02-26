// React Data Transfer Methods Cheatsheet

// 1. URL Parameters
const URLTransfer = {
  // Using React Router
  send: (history, data) => {
    history.push({
      pathname: '/target-route',
      search: `?data=${encodeURIComponent(JSON.stringify(data))}`
    });
  },
  receive: (location) => {
    const params = new URLSearchParams(location.search);
    return JSON.parse(decodeURIComponent(params.get('data') || '{}'));
  }
};

// 2. React Context API
const DataContext = React.createContext(null);

const DataProvider = ({ children, value }) => (
  <DataContext.Provider value={value}>
    {children}
  </DataContext.Provider>
);

// Usage: useContext(DataContext) in consumer components

// 3. Redux/Global State
const reduxTransfer = {
  send: (dispatch, data) => {
    dispatch({ type: 'SET_DATA', payload: data });
  },
  receive: (state) => state.data
};

// 4. Local Storage
const localStorageTransfer = {
  send: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  receive: (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },
  clear: (key) => localStorage.removeItem(key)
};

// 5. Session Storage
const sessionStorageTransfer = {
  send: (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
  },
  receive: (key) => {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },
  clear: (key) => sessionStorage.removeItem(key)
};

// 6. Custom Event Bus
const eventBusTransfer = {
  send: (eventName, data) => {
    const event = new CustomEvent(eventName, { detail: data });
    window.dispatchEvent(event);
  },
  listen: (eventName, callback) => {
    const handler = (e) => callback(e.detail);
    window.addEventListener(eventName, handler);
    return () => window.removeEventListener(eventName, handler);
  }
};

// 7. React Query/SWR for Server State
const queryTransfer = {
  send: async (queryClient, key, data) => {
    await queryClient.setQueryData(key, data);
  },
  receive: (queryClient, key) => {
    return queryClient.getQueryData(key);
  }
};

// 8. Component Props
const PropsTransfer = ({ data, children }) => {
  return React.Children.map(children, child => 
    React.cloneElement(child, { transferredData: data })
  );
};

// 9. React Portal for Modal/Dialog Data
const PortalTransfer = ({ data, target }) => {
  return ReactDOM.createPortal(
    <div className="portal-content">{data}</div>,
    document.getElementById(target)
  );
};

// Best Practices:
/*
1. Choose method based on:
   - Data persistence requirements
   - Security needs
   - Performance considerations
   - Cross-component distance
   - Application architecture

2. Security considerations:
   - Avoid sensitive data in URLs/storage
   - Implement proper validation
   - Use secure transmission methods
   - Clean up sensitive data

3. Performance optimization:
   - Minimize unnecessary transfers
   - Use appropriate serialization
   - Implement proper cleanup
   - Consider data size limitations

4. Error handling:
   - Implement proper validation
   - Handle missing/corrupt data
   - Provide fallback values
   - Log transfer errors

5. State management:
   - Keep transfers predictable
   - Maintain data consistency
   - Handle race conditions
   - Implement proper updates
*/
