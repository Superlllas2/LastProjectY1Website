document.addEventListener('DOMContentLoaded', function() {
    const contentsH1 = [
        '<h1>The game</h1>',
        '<h1>Gameplay overview</h1>',
        '<h1>Release date</h1>'
    ];

    const contentsP = [
        '<p>Tired of just simply waiting? Don\'t have anything to do in the bus or train? We got you covered. Our creation BallBlaze will help you in solving this problem. Our game is a timekiller which you can play anywhere and you dont need a WiFi connection. </p>',
        '<p>BallBlaze is a 2D physics based puzzle game.In this game you will need to build your way through a dangerous arcade machine which the owner has modified to make you lose. Your main goal is to complete all of the levels, and complete all of the levels on 3 stars</p>',
        '<p>Our game will release on IOS and Android systems on May 17th 2024. \n' +
        '16/05/2024</p>'
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