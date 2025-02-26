// Button Component Best Practices & Advanced Patterns

// 1. Basic Button Component
const Button = ({ children, onClick, disabled, variant = 'primary', size = 'medium' }) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

// 2. Loading Button
const LoadingButton = ({ loading, children, ...props }) => {
  return (
    <Button {...props} disabled={loading}>
      {loading ? <LoadingSpinner /> : children}
    </Button>
  );
};

// 3. Icon Button
const IconButton = ({ icon, label, ...props }) => {
  return (
    <Button {...props} aria-label={label}>
      <span className="icon">{icon}</span>
    </Button>
  );
};

// 4. Toggle Button
const ToggleButton = ({ pressed, onChange, children }) => {
  return (
    <button
      aria-pressed={pressed}
      onClick={() => onChange(!pressed)}
      className={`toggle-btn ${pressed ? 'pressed' : ''}`}
    >
      {children}
    </button>
  );
};

// 5. Button Group
const ButtonGroup = ({ children, orientation = 'horizontal' }) => {
  return (
    <div className={`btn-group btn-group-${orientation}`} role="group">
      {children}
    </div>
  );
};

// 6. Ripple Effect Button
const RippleButton = ({ children, ...props }) => {
  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    ripple.className = 'ripple';
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
  };

  return (
    <Button {...props} onClick={(e) => {
      createRipple(e);
      props.onClick?.(e);
    }}>
      {children}
    </Button>
  );
};

// Best Practices:
/*
1. Accessibility
   - Use semantic HTML elements
   - Include proper ARIA attributes
   - Ensure keyboard navigation
   - Maintain focus states
   - Provide proper contrast

2. State Management
   - Handle loading states
   - Manage disabled states
   - Handle hover/focus states
   - Implement proper transitions
   - Handle click animations

3. Styling
   - Use consistent theming
   - Implement proper spacing
   - Maintain visual hierarchy
   - Handle responsive sizes
   - Use proper color contrast

4. Performance
   - Optimize event handlers
   - Minimize re-renders
   - Use proper memoization
   - Handle cleanup properly
   - Implement proper throttling

5. Error Handling
   - Handle click errors
   - Provide feedback
   - Implement fallbacks
   - Handle async operations
   - Manage error states

6. Testing
   - Unit test functionality
   - Test accessibility
   - Test different states
   - Test user interactions
   - Test edge cases
*/

// CSS Example:
/*
.btn {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  transform: scale(0);
  animation: ripple 1s linear;
  pointer-events: none;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
*/
