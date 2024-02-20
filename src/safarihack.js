function isSafariDesktop() {
    // Check for Safari user agent and ensure Chrome is not in the string
    let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    // Heuristic checks to try to exclude mobile devices
    // These checks are not entirely reliable for distinguishing between mobile and desktop
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    let hasTouchScreen = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

    return isSafari && !isMobile && !hasTouchScreen;
}

// If the browser is Safari on desktop, add a specific class to elements
if (isSafariDesktop()) {
    document.querySelectorAll('.work-pill').forEach(function(element) {
        element.classList.add('safari-desktop');
    });
}