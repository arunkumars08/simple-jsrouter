init = () => {
    registerRoutes();
};

registerRoutes = () => {
    route('home', 'homeTmp', function() {
        this.pageName = 'Home!';
        this.aboutUsRouteLink = 'about-us';
        this.aboutUsRouteName = 'About Us';
        this.contactUsRouteLink = 'contact-us';
        this.contactUsRouteName = 'Contact Us';
    });
    route('about-us', 'aboutTmp', function() {
        this.pageName = 'About Us!';
        this.homeRouteLink = 'home';
        this.homeRouteName = 'Home';
    });
    route('contact-us', 'contactTmp', function() {
        this.pageName = 'Contact Us!';
        this.homeRouteLink = 'home';
        this.homeRouteName = 'Home';
    });
};

window.addEventListener('load', init);
