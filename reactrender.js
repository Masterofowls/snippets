// React Rendering Cheatsheet

// Basic Rendering
ReactDOM.render(
  <App />,
  document.getElementById('root')
); 

// React 18 createRoot API
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<App />);

// Strict Mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Hydration (Server-side Rendering)
ReactDOM.hydrate(
  <App />, 
  document.getElementById('root')
);

// React 18 Hydration
const rootHydrate = ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <App />
);

// Concurrent Mode
const rootConcurrent = ReactDOM.createRoot(
  document.getElementById('root'),
  { concurrent: true }
);

// Suspense Boundaries
<Suspense fallback={<Loading />}>
  <Component />
</Suspense>

// Error Boundaries
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, info) {
    logError(error, info);
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorUI />;
    }
    return this.props.children;
  }
}

// Usage:
/*
<ErrorBoundary>
  <Component />
</ErrorBoundary>
*/

// Lazy Loading
const LazyComponent = React.lazy(() => import('./Component'));

// Portal Rendering
ReactDOM.createPortal(
  children,
  document.getElementById('portal-root')
);

// Server-side Rendering
import ReactDOMServer from 'react-dom/server';

// Static HTML
const html = ReactDOMServer.renderToString(<App />);

// Static HTML with Data
const html = ReactDOMServer.renderToStaticMarkup(<App />);

// Streaming SSR
const stream = ReactDOMServer.renderToNodeStream(<App />);

// Performance Optimization
const MemoizedComponent = React.memo(Component);

// Batched Updates
ReactDOM.flushSync(() => {
  // Forces synchronous update
  setState(newState);
});

// Custom Renderer
const reconciler = require('react-reconciler');
const RendererHostConfig = {
  // Custom renderer implementation
};
const CustomRenderer = reconciler(RendererHostConfig);

// Testing Utilities
import { act } from 'react-dom/test-utils';
/*
act(() => {
  // Perform actions
  render(<Component />);
});
*/

// Profiling
<React.Profiler id="App" onRender={callback}>
  <App />
</React.Profiler>

// Event Handling in Render
const handleEvent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

// Render Props Pattern
const RenderPropComponent = ({ render }) => {
  const data = useData();
  return render(data);
};

// HOC Pattern
const withRender = (WrappedComponent) => {
  return function WithRenderComponent(props) {
    return <WrappedComponent {...props} />;
  };
};

// Render Optimization Tips:
/*
1. Use React.memo() for pure functional components
2. Implement shouldComponentUpdate for class components
3. Use useCallback for event handlers
4. Use useMemo for expensive calculations
5. Avoid inline object creation in render
6. Keep state as local as possible
7. Use windowing for long lists (react-window)
8. Split code using React.lazy and Suspense
9. Use production builds
10. Implement proper error boundaries
*/
