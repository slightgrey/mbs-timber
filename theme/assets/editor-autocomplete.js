/**
 * Tailwind CSS Class Autocomplete for WordPress Block Editor
 */

// Common Tailwind CSS classes organized by category
const TAILWIND_CLASSES = {
  // Layout
  'Layout': [
    'container', 'block', 'inline-block', 'inline', 'flex', 'inline-flex', 'grid', 'inline-grid',
    'flow-root', 'contents', 'list-item', 'hidden'
  ],
  
  // Flexbox & Grid
  'Flexbox': [
    'flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse',
    'flex-wrap', 'flex-wrap-reverse', 'flex-nowrap',
    'flex-1', 'flex-auto', 'flex-initial', 'flex-none',
    'justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around', 'justify-evenly',
    'items-start', 'items-end', 'items-center', 'items-baseline', 'items-stretch'
  ],
  
  'Grid': [
    'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6',
    'grid-cols-7', 'grid-cols-8', 'grid-cols-9', 'grid-cols-10', 'grid-cols-11', 'grid-cols-12',
    'gap-0', 'gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5', 'gap-6', 'gap-8', 'gap-10', 'gap-12',
    'gap-x-2', 'gap-x-4', 'gap-x-6', 'gap-x-8', 'gap-y-2', 'gap-y-4', 'gap-y-6', 'gap-y-8'
  ],

  // Spacing
  'Margin': [
    'm-0', 'm-1', 'm-2', 'm-3', 'm-4', 'm-5', 'm-6', 'm-8', 'm-10', 'm-12', 'm-16', 'm-20', 'm-24',
    'mx-auto', 'mx-0', 'mx-1', 'mx-2', 'mx-3', 'mx-4', 'mx-5', 'mx-6', 'mx-8', 'mx-10', 'mx-12',
    'my-0', 'my-1', 'my-2', 'my-3', 'my-4', 'my-5', 'my-6', 'my-8', 'my-10', 'my-12',
    'mt-0', 'mt-1', 'mt-2', 'mt-3', 'mt-4', 'mt-5', 'mt-6', 'mt-8', 'mt-10', 'mt-12',
    'mb-0', 'mb-1', 'mb-2', 'mb-3', 'mb-4', 'mb-5', 'mb-6', 'mb-8', 'mb-10', 'mb-12'
  ],
  
  'Padding': [
    'p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6', 'p-8', 'p-10', 'p-12', 'p-16', 'p-20', 'p-24',
    'px-0', 'px-1', 'px-2', 'px-3', 'px-4', 'px-5', 'px-6', 'px-8', 'px-10', 'px-12',
    'py-0', 'py-1', 'py-2', 'py-3', 'py-4', 'py-5', 'py-6', 'py-8', 'py-10', 'py-12',
    'pt-0', 'pt-1', 'pt-2', 'pt-3', 'pt-4', 'pt-5', 'pt-6', 'pt-8', 'pt-10', 'pt-12',
    'pb-0', 'pb-1', 'pb-2', 'pb-3', 'pb-4', 'pb-5', 'pb-6', 'pb-8', 'pb-10', 'pb-12'
  ],

  // Typography
  'Typography': [
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl',
    'font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black',
    'text-left', 'text-center', 'text-right', 'text-justify',
    'leading-none', 'leading-tight', 'leading-snug', 'leading-normal', 'leading-relaxed', 'leading-loose',
    'tracking-tighter', 'tracking-tight', 'tracking-normal', 'tracking-wide', 'tracking-wider', 'tracking-widest'
  ],

  // Colors
  'Text Colors': [
    'text-black', 'text-white', 'text-gray-50', 'text-gray-100', 'text-gray-200', 'text-gray-300', 'text-gray-400', 'text-gray-500',
    'text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900',
    'text-red-500', 'text-red-600', 'text-red-700',
    'text-blue-500', 'text-blue-600', 'text-blue-700',
    'text-green-500', 'text-green-600', 'text-green-700',
    'text-yellow-500', 'text-yellow-600', 'text-yellow-700'
  ],

  'Background Colors': [
    'bg-transparent', 'bg-black', 'bg-white', 'bg-gray-50', 'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-500',
    'bg-gray-600', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900',
    'bg-red-500', 'bg-red-600', 'bg-red-700',
    'bg-blue-500', 'bg-blue-600', 'bg-blue-700',
    'bg-green-500', 'bg-green-600', 'bg-green-700',
    'bg-yellow-400', 'bg-yellow-500', 'bg-yellow-600'
  ],

  // Borders & Radius
  'Borders': [
    'border', 'border-0', 'border-2', 'border-4', 'border-8',
    'border-t', 'border-r', 'border-b', 'border-l',
    'border-gray-200', 'border-gray-300', 'border-gray-400', 'border-gray-500',
    'rounded', 'rounded-none', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-full'
  ],

  // Effects
  'Effects': [
    'shadow', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-none',
    'opacity-0', 'opacity-25', 'opacity-50', 'opacity-75', 'opacity-100',
    'hover:opacity-75', 'hover:opacity-100', 'hover:shadow-lg',
    'transition', 'transition-all', 'transition-colors', 'transition-opacity', 'transition-shadow', 'transition-transform',
    'duration-75', 'duration-100', 'duration-150', 'duration-200', 'duration-300', 'duration-500', 'duration-700', 'duration-1000'
  ],

  // Interactive
  'Interactive': [
    'cursor-auto', 'cursor-default', 'cursor-pointer', 'cursor-wait', 'cursor-text', 'cursor-move', 'cursor-not-allowed',
    'select-none', 'select-text', 'select-all', 'select-auto'
  ],

  // Responsive Prefixes
  'Responsive': [
    'sm:', 'md:', 'lg:', 'xl:', '2xl:',
    'hover:', 'focus:', 'active:', 'group-hover:'
  ]
};

// Flatten all classes for searching
const ALL_CLASSES = Object.values(TAILWIND_CLASSES).flat();

/**
 * Get the current word being typed at cursor position
 */
function getCurrentWord(input) {
  const cursorPos = input.selectionStart;
  const value = input.value;
  
  // Find word boundaries around cursor
  let start = cursorPos;
  let end = cursorPos;
  
  // Move start backwards to find beginning of word
  while (start > 0 && !/\s/.test(value[start - 1])) {
    start--;
  }
  
  // Move end forwards to find end of word
  while (end < value.length && !/\s/.test(value[end])) {
    end++;
  }
  
  return {
    word: value.substring(start, end),
    start: start,
    end: end
  };
}

/**
 * Insert/replace class at cursor position by simulating typing
 */
function insertClassAtCursor(input, className) {
  const currentWord = getCurrentWord(input);
  const value = input.value;
  
  // First, clear the current word by simulating backspace presses
  const clearCurrentWord = () => {
    const wordLength = currentWord.word.length;
    for (let i = 0; i < wordLength; i++) {
      // Simulate backspace keydown
      input.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Backspace',
        code: 'Backspace',
        keyCode: 8,
        which: 8,
        bubbles: true,
        cancelable: true
      }));
      
      // Remove one character
      const currentValue = input.value;
      const cursorPos = input.selectionStart;
      if (cursorPos > 0) {
        input.value = currentValue.substring(0, cursorPos - 1) + currentValue.substring(cursorPos);
        input.setSelectionRange(cursorPos - 1, cursorPos - 1);
      }
      
      // Simulate input event after each backspace
      input.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
      
      // Simulate backspace keyup
      input.dispatchEvent(new KeyboardEvent('keyup', {
        key: 'Backspace',
        code: 'Backspace',
        keyCode: 8,
        which: 8,
        bubbles: true,
        cancelable: true
      }));
    }
  };
  
  // Then simulate typing each character of the className + space
  const typeClassName = () => {
    const textToType = className + ' ';
    
    for (let i = 0; i < textToType.length; i++) {
      const char = textToType[i];
      const keyCode = char.charCodeAt(0);
      
      // Simulate keydown
      input.dispatchEvent(new KeyboardEvent('keydown', {
        key: char,
        code: char === ' ' ? 'Space' : `Key${char.toUpperCase()}`,
        keyCode: keyCode,
        which: keyCode,
        bubbles: true,
        cancelable: true
      }));
      
      // Add the character to input value
      const currentValue = input.value;
      const cursorPos = input.selectionStart;
      input.value = currentValue.substring(0, cursorPos) + char + currentValue.substring(cursorPos);
      input.setSelectionRange(cursorPos + 1, cursorPos + 1);
      
      // Simulate input event after each character
      input.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
      
      // Simulate keyup
      input.dispatchEvent(new KeyboardEvent('keyup', {
        key: char,
        code: char === ' ' ? 'Space' : `Key${char.toUpperCase()}`,
        keyCode: keyCode,
        which: keyCode,
        bubbles: true,
        cancelable: true
      }));
    }
  };
  
  // Position cursor at the current word location first
  input.setSelectionRange(currentWord.start + currentWord.word.length, currentWord.start + currentWord.word.length);
  
  // Execute the simulation
  clearCurrentWord();
  typeClassName();
}

/**
 * Filter classes based on current word being typed
 */
function filterClasses(input) {
  const currentWord = getCurrentWord(input);
  const searchTerm = currentWord.word.toLowerCase().trim();
  
  if (!searchTerm) return [];
  
  return ALL_CLASSES.filter(className => 
    className.toLowerCase().startsWith(searchTerm) || 
    className.toLowerCase().includes(searchTerm)
  ).slice(0, 10); // Limit to 10 suggestions
}

/**
 * Create autocomplete dropdown
 */
function createAutocompleteDropdown(input, suggestions) {
  // Remove existing dropdown
  const existingDropdown = document.querySelector('.tailwind-autocomplete-dropdown');
  if (existingDropdown) {
    existingDropdown.remove();
  }

  if (suggestions.length === 0) return;

  const dropdown = document.createElement('div');
  dropdown.className = 'tailwind-autocomplete-dropdown';
  dropdown.style.cssText = `
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    max-height: 200px;
    overflow-y: auto;
    z-index: 10000;
    pointer-events: auto;
  `;
  
  // Prevent dropdown from taking focus
  dropdown.setAttribute('tabindex', '-1');

  suggestions.forEach(className => {
    const item = document.createElement('div');
    item.className = 'tailwind-autocomplete-item';
    item.textContent = className;
    item.style.cssText = `
      padding: 8px 12px;
      cursor: pointer;
      border-bottom: 1px solid #f0f0f0;
      font-family: monospace;
      font-size: 12px;
    `;
    
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = '#f5f5f5';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = 'white';
    });
    
    item.addEventListener('mousedown', (e) => {
      // Prevent mousedown from stealing focus from input
      e.preventDefault();
    });
    
    item.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Ensure input has focus before simulation
      input.focus();
      
      // Use the typing simulation
      insertClassAtCursor(input, className);
      
      // Remove dropdown after insertion
      dropdown.remove();
    });
    
    dropdown.appendChild(item);
  });

  // Position dropdown relative to input
  const wrapper = document.createElement('div');
  wrapper.style.cssText = `
    position: relative;
    display: inline-block;
    width: 100%;
  `;
  
  input.parentNode.insertBefore(wrapper, input);
  wrapper.appendChild(input);
  wrapper.appendChild(dropdown);
  
  // Close dropdown when clicking outside or when input loses focus
  const closeDropdown = (e) => {
    if (!wrapper.contains(e.target)) {
      dropdown.remove();
      document.removeEventListener('click', closeDropdown);
      input.removeEventListener('blur', handleBlur);
    }
  };
  
  const handleBlur = () => {
    // Delay closing to allow for click events on dropdown
    setTimeout(() => {
      if (dropdown.parentNode && !input.matches(':focus')) {
        dropdown.remove();
        document.removeEventListener('click', closeDropdown);
        input.removeEventListener('blur', handleBlur);
      }
    }, 200);
  };
  
  setTimeout(() => {
    document.addEventListener('click', closeDropdown);
    input.addEventListener('blur', handleBlur);
  }, 0);
}

/**
 * Initialize autocomplete on CSS class inputs
 */
function initializeAutocomplete() {
  // Target the Additional CSS class field by looking for the label text and finding the associated input
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Look for labels containing "Additional CSS class"
          const labels = node.querySelectorAll('label');
          labels.forEach((label) => {
            if (label.textContent && label.textContent.includes('Additional CSS class')) {
              const input = document.getElementById(label.getAttribute('for'));
              if (input && input.classList.contains('components-text-control__input')) {
                setupAutocomplete(input);
              }
            }
          });
          
          // Also check if the added node itself contains the label
          if (node.querySelector) {
            const cssLabels = node.querySelectorAll('label');
            cssLabels.forEach((label) => {
              if (label.textContent && label.textContent.includes('Additional CSS class')) {
                const input = document.getElementById(label.getAttribute('for'));
                if (input && input.classList.contains('components-text-control__input')) {
                  setupAutocomplete(input);
                }
              }
            });
          }
        }
      });
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Setup existing inputs
  const existingLabels = document.querySelectorAll('label');
  existingLabels.forEach((label) => {
    if (label.textContent && label.textContent.includes('Additional CSS class')) {
      const input = document.getElementById(label.getAttribute('for'));
      if (input && input.classList.contains('components-text-control__input')) {
        setupAutocomplete(input);
      }
    }
  });
}

/**
 * Setup autocomplete on a specific input
 */
function setupAutocomplete(input) {
  // Avoid duplicate setup
  if (input.dataset.tailwindAutocomplete) return;
  input.dataset.tailwindAutocomplete = 'true';
  
  let debounceTimer;
  
  input.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const suggestions = filterClasses(input);
      createAutocompleteDropdown(input, suggestions);
      
      // Ensure input maintains focus after dropdown creation
      if (document.activeElement !== input) {
        input.focus();
      }
    }, 150);
  });
  
  input.addEventListener('keydown', (e) => {
    const dropdown = document.querySelector('.tailwind-autocomplete-dropdown');
    if (!dropdown) return;
    
    const items = dropdown.querySelectorAll('.tailwind-autocomplete-item');
    let selectedIndex = Array.from(items).findIndex(item => 
      item.style.backgroundColor === 'rgb(245, 245, 245)'
    );
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = selectedIndex < items.length - 1 ? selectedIndex + 1 : 0;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : items.length - 1;
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      e.stopPropagation();
      
      const selectedClass = items[selectedIndex].textContent;
      
      // Ensure input has focus before simulation
      input.focus();
      
      // Use the typing simulation
      insertClassAtCursor(input, selectedClass);
      
      // Remove dropdown after insertion
      dropdown.remove();
      return;
    } else if (e.key === 'Escape') {
      dropdown.remove();
      return;
    }
    
    // Update visual selection
    items.forEach((item, index) => {
      item.style.backgroundColor = index === selectedIndex ? '#f5f5f5' : 'white';
    });
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAutocomplete);
} else {
  initializeAutocomplete();
}