// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// Enhanced Flash Messages Functionality
document.addEventListener('DOMContentLoaded', function() {
    const flashMessages = document.querySelectorAll('.flash-message');
    
    flashMessages.forEach((message, index) => {
        // Show animation with staggered delay
        setTimeout(() => {
            message.classList.add('show');
        }, index * 100);
        
        // Auto-hide after 5 seconds (unless hovered)
        let autoHideTimer = setTimeout(() => {
            hideFlashMessage(message);
        }, 5000);
        
        // Pause auto-hide on hover
        message.addEventListener('mouseenter', () => {
            clearTimeout(autoHideTimer);
            const progressBar = message.querySelector('.flash-progress');
            if (progressBar) {
                progressBar.style.animationPlayState = 'paused';
            }
        });
        
        // Resume auto-hide on mouse leave
        message.addEventListener('mouseleave', () => {
            const progressBar = message.querySelector('.flash-progress');
            if (progressBar) {
                progressBar.style.animationPlayState = 'running';
            }
            
            autoHideTimer = setTimeout(() => {
                hideFlashMessage(message);
            }, 2000); // Shorter time after hover
        });
        
        // Manual close button
        const closeButton = message.querySelector('.flash-close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                clearTimeout(autoHideTimer);
                hideFlashMessage(message);
            });
        }
    });
    
    function hideFlashMessage(message) {
        message.classList.add('hide');
        message.classList.remove('show');
        
        setTimeout(() => {
            message.remove();
            
            // Adjust positions of remaining messages
            const remainingMessages = document.querySelectorAll('.flash-message');
            remainingMessages.forEach((msg, index) => {
                msg.style.marginTop = '0';
            });
        }, 500);
    }
    
    // Add keyboard support for accessibility
    flashMessages.forEach(message => {
        message.setAttribute('tabindex', '0');
        
        message.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                hideFlashMessage(message);
            }
        });
    });
});

// Function to create flash messages dynamically (for AJAX requests)
function createFlashMessage(type, title, message) {
    const container = document.querySelector('.flash-container') || createFlashContainer();
    
    const flashMessage = document.createElement('div');
    flashMessage.className = `flash-message flash-${type}`;
    flashMessage.setAttribute('role', 'alert');
    flashMessage.setAttribute('tabindex', '0');
    
    const iconClass = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    
    flashMessage.innerHTML = `
        <div class="flash-content">
            <div class="flash-icon">
                <i class="fas ${iconClass}"></i>
            </div>
            <div class="flash-text">
                <strong>${title}</strong>
                <span>${message}</span>
            </div>
            <button type="button" class="flash-close" aria-label="Close">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="flash-progress"></div>
    `;
    
    container.appendChild(flashMessage);
    
    // Trigger the same initialization as page-loaded messages
    setTimeout(() => {
        flashMessage.classList.add('show');
        
        // Add event listeners
        const closeButton = flashMessage.querySelector('.flash-close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                hideFlashMessage(flashMessage);
            });
        }
        
        // Auto-hide
        setTimeout(() => {
            if (flashMessage.parentNode) {
                hideFlashMessage(flashMessage);
            }
        }, 5000);
    }, 100);
}

function createFlashContainer() {
    const container = document.createElement('div');
    container.className = 'flash-container';
    document.body.appendChild(container);
    return container;
}

// Helper function to hide flash message
function hideFlashMessage(message) {
    message.classList.add('hide');
    message.classList.remove('show');
    
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 500);
}
