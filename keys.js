// Key Event Handling
document.addEventListener('keydown', event => {
  const key = event.key;                // Actual key value
  const code = event.code;              // Physical key code
  const repeat = event.repeat;          // Key held down
  const shift = event.shiftKey;         // Shift key state
  const ctrl = event.ctrlKey;           // Ctrl key state
  const alt = event.altKey;             // Alt key state
  const meta = event.metaKey;           // Meta/Command key
});

// Key Codes
const keyCodes = {
  // Navigation
  ArrowUp: 'Move up',
  ArrowDown: 'Move down', 
  ArrowLeft: 'Move left',
  ArrowRight: 'Move right',
  Home: 'Start of line',
  End: 'End of line',
  PageUp: 'Page up',
  PageDown: 'Page down',

  // Editing
  Backspace: 'Delete backwards',
  Delete: 'Delete forwards',
  Enter: 'New line',
  Tab: 'Tab',
  Space: 'Space',

  // Function keys
  F1: 'Help',
  F5: 'Refresh',
  F11: 'Full screen',
  
  // Modifiers
  Shift: 'Shift modifier',
  Control: 'Ctrl modifier',
  Alt: 'Alt modifier',
  Meta: 'Meta/Command modifier',
  CapsLock: 'Caps lock',
};

// Key Combinations
const keyCombo = event => {
  const combo = [];
  if (event.ctrlKey) combo.push('Ctrl');
  if (event.altKey) combo.push('Alt'); 
  if (event.shiftKey) combo.push('Shift');
  if (event.metaKey) combo.push('Meta');
  combo.push(event.key);
  return combo.join('+');
};

// Prevent Default Behaviors
const preventDefaults = {
  'Ctrl+S': true,     // Save
  'Ctrl+P': true,     // Print
  'Ctrl+F': true,     // Find
  'F5': true,         // Refresh
  'Alt+F4': true,     // Close
};

// Key Sequence Detection
class KeySequence {
  constructor() {
    this.sequence = [];
    this.timeout = null;
  }

  add(key) {
    this.sequence.push(key);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.sequence = [], 1000);
    return this.sequence.join('');
  }
}
