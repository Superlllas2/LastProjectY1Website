document.addEventListener('DOMContentLoaded', function() {
    const contents = [
        '<p>Content 1: Details about feature one.</p>',
        '<p>Content 2: Details about feature two.</p>',
        '<p>Content 3: Details about feature three.</p>'
    ];
    let currentIndex = 0; // Start with the first item

    const wrapperContent = document.querySelector('.wrapper-content');
    wrapperContent.innerHTML = contents[currentIndex]; // Initialize with the first content

    function changeContent(newIndex) {
        // Start the fade out
        wrapperContent.classList.add('hide');

        // Wait for the fade out to finish
        setTimeout(() => {
            // Change the content when invisible
            wrapperContent.innerHTML = contents[newIndex];
            // Start the fade in
            wrapperContent.classList.remove('hide');
        }, 300); // Match the CSS transition duration
    }

    document.querySelector('.icon-left').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--; // Decrement index to show previous content
            wrapperContent.innerHTML = contents[currentIndex];
            changeContent(currentIndex);
        }
    });

    document.querySelector('.icon-right').addEventListener('click', function() {
        if (currentIndex < contents.length - 1) {
            currentIndex++; // Increment index to show next content
            wrapperContent.innerHTML = contents[currentIndex];
            changeContent(currentIndex);
        }
    });
});