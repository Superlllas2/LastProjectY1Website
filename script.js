document.addEventListener('DOMContentLoaded', function() {
    const contents = [
        '<p>Content 1: Details about feature one.</p>',
        '<p>Content 2: Details about feature two.</p>',
        '<p>Content 3: Details about feature three.</p>'
    ];
    let currentIndex = 0; // Start with the first item

    const wrapperContent = document.querySelector('.wrapper-content');
    wrapperContent.innerHTML = contents[currentIndex]; // Initialize with the first content

    document.querySelector('.icon-left').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--; // Decrement index to show previous content
            wrapperContent.innerHTML = contents[currentIndex];
        }
    });

    document.querySelector('.icon-right').addEventListener('click', function() {
        if (currentIndex < contents.length - 1) {
            currentIndex++; // Increment index to show next content
            wrapperContent.innerHTML = contents[currentIndex];
        }
    });
});