Package.describe({
    name: "benjaminrh:user-session",
    summary: "Provides a UserSession object that works just like Session does, except it's persistent so you can preserve state across devices *and* sessions.",
    version: "0.3.0",
    git: "https://bitbucket.org/corefi/corefi-datenraum.git",
});

Package.on_use(function (api) {

    api.use([
        'ecmascript',
        'underscore',
        'deps',
        'session',
        'livedata',
        'mongo-livedata',
    ], ['client', 'server']);

    api.mainModule('client.js', 'client');
    api.mainModule('server.js', 'server');

    /*
    api.add_files('common.js', both);
    api.add_files('server.js', 'server');
    api.add_files('client.js', 'client');

    if (typeof api.export !== 'undefined') {
        api.export(['UserSession', 'UserSessionCollection'], both);
    }
    */
});