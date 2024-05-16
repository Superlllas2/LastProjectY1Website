document.addEventListener('DOMContentLoaded', function() {
    const contentsH1 = [
        '<h1>Content 1: Details about feature one.</h1>',
        '<h1>Content 2: Details about feature two.</h1>',
        '<h1>Content 3: Details about feature three.</h1>'
    ];

    const contentsP = [
        '<p>Text for the first slide. It explains what is the game about without specific information</p>',
        '<p>Text for the second slide. It explains what is the game about without specific information</p>',
        '<p>Text for the third slide. It explains what is the game about without specific information</p>'
    ];

    let currentIndex = 0; // Start with the first item

    const wrapperContentH1 = document.querySelector('.wrapper-content-text-h1');
    const wrapperContentP = document.querySelector('.wrapper-content-text-p');

    const wrapperContent = document.querySelector('.wrapper-content');
    wrapperContent.innerHTML = contentsH1[currentIndex]; // Initialize with the first content

    function changeContent(newIndex) {
        // Start the fade out
        wrapperContent.classList.add('hide');

        // Listen for the end of the fade-out transition
        wrapperContent.addEventListener('transitionend', function onFadeOut() {
            // Ensure this handler doesn't fire more than once
            wrapperContent.removeEventListener('transitionend', onFadeOut);

            console.log("next text");

            // Change the content when invisible
            wrapperContent.innerHTML = contentsH1[newIndex];

            // Start the fade in
            wrapperContent.classList.remove('hide');
        });
    }

    document.querySelector('.icon-left').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--; // Decrement index to show previous content
            changeContent(currentIndex);
        }
    });

    document.querySelector('.icon-right').addEventListener('click', function() {
        if (currentIndex < contentsH1.length - 1) {
            currentIndex++; // Increment index to show next content
            changeContent(currentIndex);
        }
    });
});