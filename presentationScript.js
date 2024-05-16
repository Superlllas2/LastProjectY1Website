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

    const backgroundImages = [
        "url('Sources/logo3D.png')",
        "url('Sources/poster1.png')",
        "url('Sources/logo3D.png')"
    ];

    let currentIndex = 0; // Start with the first item

    const wrapperContentH1 = document.querySelector('.wrapper-content-text-h1');
    const wrapperContentP = document.querySelector('.wrapper-content-text-p');
    const wrapperContentFigure = document.querySelector('.wrapper-content-figure');

    function updateContent(index) {
        wrapperContentH1.innerHTML = contentsH1[index];
        wrapperContentP.innerHTML = contentsP[index];
        wrapperContentFigure.style.backgroundImage = backgroundImages[index];
    }

    updateContent(currentIndex);

    function changeContent(newIndex) {
        // Start the fade out
        const wrapperContent = document.querySelector('.wrapper-content');
        wrapperContent.classList.add('hide');

        // Listen for the end of the fade-out transition
        wrapperContent.addEventListener('transitionend', function onFadeOut() {
            // Ensure this handler doesn't fire more than once
            wrapperContent.removeEventListener('transitionend', onFadeOut);

            console.log("next text");

            // Change the content when invisible
            updateContent(newIndex);

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