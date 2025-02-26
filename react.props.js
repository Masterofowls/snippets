// React Props Cheatsheet

// Basic Props
const BasicProps = ({ text, number, boolean, array, object, func }) => (
  <div>
    <p>{text}</p>                {/* String prop */}
    <p>{number}</p>              {/* Number prop */}
    <p>{boolean.toString()}</p>  {/* Boolean prop */}
    <p>{array.join(', ')}</p>    {/* Array prop */}
    <p>{object.key}</p>          {/* Object prop */}
    <button onClick={func}>Click</button> {/* Function prop */}
  </div>
);

// Default Props
const ComponentWithDefaults = ({ name = 'Guest', age = 0 }) => (
  <div>Hello {name}, age {age}</div>
);

// Props Destructuring
const DestructuredProps = ({
  user: { firstName, lastName },
  settings: { theme = 'light' }
}) => (
  <div className={theme}>
    {firstName} {lastName}
  </div>
);

// Props Spreading
const SpreadProps = props => (
  <ChildComponent {...props} />
);

// Children Props
const WithChildren = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

// Render Props
const RenderProp = ({ render }) => (
  <div>
    {render({ data: 'Some data' })}
  </div>
);

// PropTypes Example
import PropTypes from 'prop-types';

const TypedComponent = ({ name, age, isActive, items, onClick }) => (
  <div onClick={onClick}>
    {name} is {age} years old
    {isActive && ' and active'}
    <ul>
      {items.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  </div>
);

TypedComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isActive: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  onClick: PropTypes.func,
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  })
};

// HOC with Props
const withData = WrappedComponent => {
  return class extends React.Component {
    state = { data: null };

    componentDidMount() {
      // Fetch data
      this.setState({ data: 'Fetched data' });
    }

    render() {
      return (
        <WrappedComponent
          data={this.state.data}
          {...this.props}
        />
      );
    }
  };
};

// Forwarding Refs
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="fancy-btn" {...props}>
    {props.children}
  </button>
));

// Context with Props
const ThemeContext = React.createContext('light');

const ThemedComponent = ({ text }) => (
  <ThemeContext.Consumer>
    {theme => <div className={theme}>{text}</div>}
  </ThemeContext.Consumer>
);

// Compound Components
const Menu = ({ children }) => (
  <nav className="menu">{children}</nav>
);

Menu.Item = ({ children }) => (
  <div className="menu-item">{children}</div>
);

// Usage:
/*
<Menu>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
</Menu>
*/

// Controlled vs Uncontrolled Props
const ControlledInput = ({ value, onChange }) => (
  <input value={value} onChange={onChange} />
);

const UncontrolledInput = () => (
  <input defaultValue="default" />
);

// Props with TypeScript
/*
interface Props {
  name: string;
  age: number;
  optional?: string;
  readonly immutable: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const TypeScriptComponent: React.FC<Props> = ({
  name,
  age,
  optional = 'default',
  immutable,
  onClick,
  children
}) => (
  <button onClick={onClick}>
    {name} {age} {optional} {immutable}
    {children}
  </button>
);
*/
