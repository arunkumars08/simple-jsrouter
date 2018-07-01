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
            view.innerHTML = renderTemplate(document.getElementById(routes[currRoute].template).innerHTML, new routes[currRoute].controller);
        }
    }
};

renderTemplate = (html, controller) => {
    if (html && html.indexOf('{{') !== -1) {
        let cache = {};
        var reg = /{{(.*?)}}/g;
        while (s = reg.exec(html)) {
            if (controller[s[1]]) {
                if (!cache[s[0]]) {
                    cache[s[0]] = {
                        use: controller[s[1]]
                    };
                }
            }
        }
        for (let i in cache) {
            html = html.split(i).join(cache[i].use);
        }
    }
    return html;
};

window.addEventListener('hashchange', router);
window.addEventListener('load', function() {
    setTimeout(router, 2000);
});
