// import peer-worker into service worker
self.importScripts('https://cdn.jsdelivr.net/npm/swarmcloud-sw@latest/dist/peer-worker.min.js');

var worker = new PeerWorker({
    version: 1,
    logLevel: 'debug',
    // allowOrigins: [''],    // Allow some third party origins to request from p2p
});
worker.register();
