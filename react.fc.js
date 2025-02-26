// React Functional Component (FC) Cheatsheet

// Basic FC
const BasicComponent: React.FC = () => {
  return <div>Basic Component</div>;
};

// FC with Props
interface GreetingProps {
  name: string;
  age?: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, age = 0 }) => {
  return <h1>Hello {name}, you are {age} years old</h1>;
};

// FC with Children
interface ParentProps {
  title: string;
  children: React.ReactNode;
}

const Parent: React.FC<ParentProps> = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

// FC with Event Handlers
const Button: React.FC<{
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ onClick }) => {
  return <button onClick={onClick}>Click me</button>;
};

// FC with State
const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// FC with Effects
const DataFetcher: React.FC = () => {
  const [data, setData] = useState<any>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('api/data');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

// FC with Context
const ThemeContext = React.createContext('light');

const ThemedComponent: React.FC = () => {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
};

// FC with Refs
const FocusInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} />;
};

// FC with Memo
const ExpensiveComponent: React.FC<{ data: any }> = React.memo(({ data }) => {
  return <div>{/* Expensive rendering */}</div>;
});

// FC with Custom Hooks
const useCustomHook = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const updateValue = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);
  return [value, updateValue] as const;
};

// FC with Error Boundary
class ErrorBoundary extends React.Component<{ children: React.ReactNode }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// FC with Portals
const Modal: React.FC = () => {
  return ReactDOM.createPortal(
    <div>Modal Content</div>,
    document.getElementById('modal-root')!
  );
};

// FC with Suspense
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const SuspenseWrapper: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

// FC with Generic Props
interface GenericProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function GenericList<T>({ items, renderItem }: GenericProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage Examples:
/*
<Greeting name="John" age={30} />

<Parent title="Parent Component">
  <div>Child content</div>
</Parent>

<Button onClick={(e) => console.log('clicked', e)} />

<ErrorBoundary>
  <SuspenseWrapper />
</ErrorBoundary>

<GenericList
  items={['a', 'b', 'c']}
  renderItem={(item) => <span>{item}</span>}
/>
*/
