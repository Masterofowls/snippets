// Bootstrap 5 JavaScript Cheatsheet

// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// Popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

// Modals
const myModal = new bootstrap.Modal(document.getElementById('myModal'), {
  backdrop: 'static',
  keyboard: false
});

// Modal Events
const modalElement = document.getElementById('myModal');
modalElement.addEventListener('show.bs.modal', event => {
  // Do something before modal is shown
});

modalElement.addEventListener('shown.bs.modal', event => {
  // Do something after modal is shown
});

// Dropdowns
const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl));

// Collapse
const collapseElementList = document.querySelectorAll('.collapse');
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl, {
  toggle: false
}));

// Alerts
const alertList = document.querySelectorAll('.alert');
const alerts = [...alertList].map(alert => new bootstrap.Alert(alert));

// Carousel
const myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'), {
  interval: 2000,
  wrap: true,
  keyboard: true
});

// Tabs
const triggerTabList = document.querySelectorAll('[data-bs-toggle="tab"]');
const tabList = [...triggerTabList].map(triggerEl => new bootstrap.Tab(triggerEl));

// Toast
const toastElList = document.querySelectorAll('.toast');
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl));

// Scrollspy
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
});

// Buttons
const buttonElements = document.querySelectorAll('[data-bs-toggle="button"]');
const buttons = [...buttonElements].map(button => new bootstrap.Button(button));

// Offcanvas
const offcanvasElementList = document.querySelectorAll('.offcanvas');
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl));

// Custom Event Handlers
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all tooltips
  tooltipList.forEach(tooltip => {
    tooltip.enable();
  });
  
  // Initialize all popovers
  popoverList.forEach(popover => {
    popover.enable();
  });
});

// Utility Functions
const toggleModal = (modalId) => {
  const modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
  modal ? modal.toggle() : null;
};

const showToast = (toastId) => {
  const toast = bootstrap.Toast.getInstance(document.getElementById(toastId));
  toast ? toast.show() : null;
};

const updateProgressBar = (progressId, value) => {
  const progressBar = document.querySelector(`#${progressId} .progress-bar`);
  if (progressBar) {
    progressBar.style.width = `${value}%`;
    progressBar.setAttribute('aria-valuenow', value);
  }
};

// Form Validation
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  
  forms.forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// Best Practices:
// 1. Initialize components after DOM is loaded
// 2. Use data attributes when possible
// 3. Handle errors gracefully
// 4. Clean up event listeners when components are destroyed
// 5. Use Bootstrap's built-in events
// 6. Consider accessibility
// 7. Test across different browsers
// 8. Optimize performance
