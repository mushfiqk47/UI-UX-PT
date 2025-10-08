// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize any global functionality
    initializeTheme();
});

// Theme handling (if we add dark/light mode later)
function initializeTheme() {
    // For now, we're using dark theme by default
    document.documentElement.classList.add('dark-theme');
}

// Helper function for handling async operations
async function handleAsync(promise) {
    try {
        const result = await promise;
        return [result, null];
    } catch (error) {
        console.error('Error:', error);
        return [null, error];
    }
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}