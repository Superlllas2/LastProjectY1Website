document.addEventListener('DOMContentLoaded', function () {
    const contents = [
        '<p>Content 1: Details about feature one.</p>',
        '<p>Content 2: Details about feature two.</p>',
        '<p>Content 3: Details about feature three.</p>'
    ];
    let currentIndex = 0; // Start with the first item

    const wrapperContent = document.querySelector('.wrapper-content');
    wrapperContent.innerHTML = contents[currentIndex]; // Initialize with the first content

    function changeContent(newIndex, direction) {
        // Add class based on direction and initiate animation
        wrapperContent.classList.add(direction === 'left' ? 'move-right' : 'move-left');

        // Wait for the animation to finish before changing content
        setTimeout(() => {
            // Reset transform and update content
            wrapperContent.classList.remove('move-left', 'move-right');
            wrapperContent.innerHTML = contents[newIndex];
            // Forcing reflow for immediate repositioning
            void wrapperContent.offsetWidth;

            // Slide back in from the opposite direction
            wrapperContent.classList.add(direction === 'left' ? 'move-right' : 'move-left');
            setTimeout(() => {
                wrapperContent.classList.remove('move-left', 'move-right');
            }, 50); // Short delay to reposition
        }, 500); // This timeout should match the CSS transition time
    }

    document.querySelector('.icon-left').addEventListener('click', function () {
        if (currentIndex > 0) {
            changeContent(--currentIndex, 'left');
        }
    });

    document.querySelector('.icon-right').addEventListener('click', function () {
        if (currentIndex < contents.length - 1) {
            changeContent(++currentIndex, 'right');
        }
    });
});