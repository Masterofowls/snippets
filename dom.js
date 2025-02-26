// DOM Selection
const get = id => document.getElementById(id);
const query = selector => document.querySelector(selector);
const queryAll = selector => document.querySelectorAll(selector);

// Element Creation & Manipulation
const create = tag => document.createElement(tag);
const createText = text => document.createTextNode(text);
const createFragment = () => document.createDocumentFragment();

const append = (parent, child) => parent.appendChild(child);
const prepend = (parent, child) => parent.insertBefore(child, parent.firstChild);
const remove = element => element.parentNode.removeChild(element);
const replace = (oldEl, newEl) => oldEl.parentNode.replaceChild(newEl, oldEl);
const clone = (element, deep = true) => element.cloneNode(deep);

// Classes & Attributes
const addClass = (element, ...classes) => element.classList.add(...classes);
const removeClass = (element, ...classes) => element.classList.remove(...classes);
const toggleClass = (element, class1, class2) => {
  if (element.classList.contains(class1)) {
    removeClass(element, class1);
    addClass(element, class2);
  } else {
    removeClass(element, class2);
    addClass(element, class1);
  }
};

const attr = (element, name, value) => {
  if (value === undefined) return element.getAttribute(name);
  if (value === null) return element.removeAttribute(name);
  return element.setAttribute(name, value);
};

// Styles
const css = (element, styles) => Object.assign(element.style, styles);
const getStyle = (element, prop) => getComputedStyle(element)[prop];
const show = element => element.style.display = '';
const hide = element => element.style.display = 'none';
const toggle = element => {
  element.style.display = getStyle(element, 'display') === 'none' ? '' : 'none';
};

// Events
const on = (element, event, handler, options = false) => {
  element.addEventListener(event, handler, options);
  return () => element.removeEventListener(event, handler, options);
};

const once = (element, event, handler) => {
  return on(element, event, handler, { once: true });
};

const delegate = (element, event, selector, handler) => {
  return on(element, event, e => {
    if (e.target.matches(selector)) handler(e);
  });
};

// Traversal
const parent = element => element.parentNode;
const children = element => Array.from(element.children);
const siblings = element => children(parent(element)).filter(child => child !== element);
const next = element => element.nextElementSibling;
const prev = element => element.previousElementSibling;
const closest = (element, selector) => element.closest(selector);

// Dimensions & Position
const offset = element => {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX
  };
};

const position = element => ({
  top: element.offsetTop,
  left: element.offsetLeft
});

const dimensions = element => ({
  width: element.offsetWidth,
  height: element.offsetHeight
});

// Content
const html = (element, content) => {
  if (content === undefined) return element.innerHTML;
  element.innerHTML = content;
};

const text = (element, content) => {
  if (content === undefined) return element.textContent;
  element.textContent = content;
};

const val = (element, value) => {
  if (value === undefined) return element.value;
  element.value = value;
};

// Forms
const serialize = form => {
  const data = new FormData(form);
  return Object.fromEntries(data.entries());
};

const deserialize = (form, data) => {
  Object.entries(data).forEach(([key, value]) => {
    const field = form.elements[key];
    if (field) field.value = value;
  });
};

// Animation Helpers
const fadeIn = (element, duration = 400) => {
  element.style.opacity = 0;
  element.style.display = '';
  element.style.transition = `opacity ${duration}ms`;
  setTimeout(() => element.style.opacity = 1, 10);
};

const fadeOut = (element, duration = 400) => {
  element.style.opacity = 1;
  element.style.transition = `opacity ${duration}ms`;
  element.style.opacity = 0;
  setTimeout(() => element.style.display = 'none', duration);
};

// Utilities
const ready = fn => {
  if (document.readyState !== 'loading') fn();
  else document.addEventListener('DOMContentLoaded', fn);
};

const isVisible = element => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
};
