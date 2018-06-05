Package.describe({
    name: "d3k4y:user-session",
    summary: "Provides a UserSession object that works just like Session does, except it's persistent",
    version: "0.3.0",
    git: "https://github.com/d3k4y/meteor-user-session.git",
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

});
