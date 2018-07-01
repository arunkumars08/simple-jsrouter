let routes = {};
route = (mapping, templateId, controller) => {
    if (!routes[mapping]) {
        routes[mapping] = {
            template: templateId,
            controller: controller
        };
    }
};

getCurrentRoute = () => {
    return window.location.hash.slice(1);
};

router = () => {
    let view = document.getElementById('routerOutlet');

    if (view) {
        let currRoute = getCurrentRoute();
        if (currRoute && routes[currRoute] && routes[currRoute].controller) {
            view.innerHTML = document.getElementById(routes[currRoute].template).innerHTML;
        }
    }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
