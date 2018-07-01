init = () => {
    registerRoutes();
};

registerRoutes = () => {
    route('home', 'homeTmp', function() {});
    route('about-us', 'aboutTmp', function() {});
    route('contact-us', 'contactTmp', function() {});
};

window.addEventListener('load', init);
