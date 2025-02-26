// React Router Cheatsheet

// Basic Router Setup
import { 
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
  useNavigate,
  useParams,
  useLocation,
  useSearchParams,
  useMatch,
  Outlet
} from 'react-router-dom';

// Basic Router Structure
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

// Nested Routes
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />}>
        <Route index element={<ProductsList />} />
        <Route path=":id" element={<ProductDetail />} />
      </Route>
    </Route>
  </Routes>
);

// Navigation Components
const Navigation = () => (
  <nav>
    {/* Basic Link */}
    <Link to="/about">About</Link>

    {/* NavLink with active styling */}
    <NavLink 
      to="/products"
      className={({ isActive }) => isActive ? 'active' : ''}
    >
      Products
    </NavLink>

    {/* Link with state */}
    <Link 
      to="/dashboard"
      state={{ from: 'navigation' }}
    >
      Dashboard
    </Link>
  </nav>
);

// Hooks Usage
const ComponentWithRouterHooks = () => {
  // Navigation
  const navigate = useNavigate();
  const handleClick = () => navigate('/path', { 
    replace: true,
    state: { data: 'value' }
  });

  // URL Parameters
  const { id } = useParams();
  
  // Location
  const location = useLocation();
  
  // Query Parameters
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search');
  
  // Pattern Matching
  const match = useMatch('/users/:id');

  return <div>{/* Component content */}</div>;
};

// Protected Routes
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = checkAuth(); // Your auth check
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  
  return children;
};

// Usage:
const ProtectedRoutes = () => (
  <Routes>
    <Route path="/dashboard" element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    } />
  </Routes>
);

// Route with Loader and Error Boundary
const RouteWithLoader = () => (
  <Route
    path="/data"
    element={<DataComponent />}
    loader={async ({ params }) => {
      const data = await fetchData(params.id);
      return { data };
    }}
    errorElement={<ErrorBoundary />}
  />
);

// Memory Router (for testing)
const TestRouter = () => (
  <MemoryRouter initialEntries={['/initial-path']}>
    <Routes>
      {/* Routes */}
    </Routes>
  </MemoryRouter>
);

// Hash Router (for static hosting)
const HashRouterExample = () => (
  <HashRouter>
    <Routes>
      {/* Routes */}
    </Routes>
  </HashRouter>
);

// Route Guards with Custom Logic
const RouteGuard = ({ element: Element, ...rest }) => {
  const canAccess = checkPermissions(); // Your permission check
  
  return (
    <Route
      {...rest}
      element={
        canAccess ? <Element /> : <Navigate to="/unauthorized" replace />
      }
    />
  );
};

// Dynamic Routes with Lazy Loading
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const LazyRoute = () => (
  <Route
    path="/lazy"
    element={
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
    }
  />
);

// Custom History Implementation
const history = createBrowserHistory();
const RouterWithCustomHistory = () => (
  <Router history={history}>
    <Routes>
      {/* Routes */}
    </Routes>
  </Router>
);

// Scroll Restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Usage Examples:
/*
// Basic Navigation
<Link to="/about">About</Link>

// Programmatic Navigation
navigate('/path');
navigate(-1); // Go back
navigate(1);  // Go forward

// With State
navigate('/path', { state: { from: 'home' } });

// Replace instead of Push
navigate('/path', { replace: true });

// With Search Parameters
navigate({
  pathname: '/path',
  search: '?sort=name',
  hash: '#top'
});

// Relative Navigation
navigate('subpath', { relative: 'path' });

// Nested Routes with Outlet
<Route path="/parent" element={<Parent />}>
  <Route path="child" element={<Child />} />
</Route>

// Index Routes
<Route index element={<Index />} />

// Multiple Routes
<Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
    </Route>
  </Route>
</Routes>
*/
