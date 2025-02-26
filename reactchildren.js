// React Children Utilities Cheatsheet

// 1. React.Children.map - Iterate and transform children
const TransformChildren = ({ children }) => {
  return React.Children.map(children, child => (
    <div className="wrapper">{child}</div>
  ));
};

// 2. React.Children.forEach - Iterate without transforming
React.Children.forEach(children, child => {
  console.log(child.props);
});

// 3. React.Children.count - Count children
const ChildCounter = ({ children }) => (
  <div>Child count: {React.Children.count(children)}</div>
);

// 4. React.Children.only - Ensure single child
const SingleChild = ({ children }) => {
  const child = React.Children.only(children);
  return <div>{child}</div>;
};

// 5. React.Children.toArray - Convert children to array
const SortChildren = ({ children }) => {
  const sorted = React.Children.toArray(children).sort((a, b) => 
    a.props.order - b.props.order
  );
  return <div>{sorted}</div>;
};

// 6. Filtering Children
const FilterChildren = ({ children }) => {
  return React.Children.map(children, child => {
    if (child.type === 'p') return null;
    return child;
  });
};

// 7. Modifying Child Props
const EnhanceChildren = ({ children }) => {
  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      className: `enhanced ${child.props.className || ''}`
    });
  });
};

// 8. Conditional Children
const ConditionalChildren = ({ children, condition }) => {
  return React.Children.map(children, child => 
    condition ? child : null
  );
};

// 9. Children with Render Props
const ChildrenWithRender = ({ children }) => {
  return React.Children.map(children, child => {
    if (typeof child.type === 'function') {
      return child.type(child.props);
    }
    return child;
  });
};

// 10. Recursive Children Traversal
const RecursiveChildren = ({ children }) => {
  const processChildren = (children) => {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) return child;
      
      const newProps = {
        ...child.props,
        className: 'processed'
      };
      
      if (child.props.children) {
        return React.cloneElement(child, newProps, 
          processChildren(child.props.children)
        );
      }
      
      return React.cloneElement(child, newProps);
    });
  };
  
  return processChildren(children);
};

// Usage Examples:
/*
// Transform
<TransformChildren>
  <span>Item 1</span>
  <span>Item 2</span>
</TransformChildren>

// Count
<ChildCounter>
  <div>1</div>
  <div>2</div>
</ChildCounter>

// Single Child
<SingleChild>
  <div>Only Child</div>
</SingleChild>

// Sort
<SortChildren>
  <div order={2}>Second</div>
  <div order={1}>First</div>
</SortChildren>

// Filter
<FilterChildren>
  <p>Hidden</p>
  <div>Visible</div>
</FilterChildren>

// Enhance
<EnhanceChildren>
  <div className="original">Enhanced</div>
</EnhanceChildren>

// Conditional
<ConditionalChildren condition={true}>
  <div>Shown</div>
</ConditionalChildren>

// Render Props
<ChildrenWithRender>
  {(props) => <div {...props}>Rendered</div>}
</ChildrenWithRender>

// Recursive
<RecursiveChildren>
  <div>
    <span>Nested</span>
  </div>
</RecursiveChildren>
*/

// Best Practices:
/*
1. Always validate children types
2. Handle null/undefined children
3. Use React.Children utilities instead of array methods
4. Be careful with recursion depth
5. Memoize transformed children when possible
6. Document expected children structure
7. Use TypeScript for better type safety
8. Consider performance with large numbers of children
9. Test edge cases (no children, invalid children)
10. Maintain immutability when transforming
*/
