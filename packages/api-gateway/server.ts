function createServer(){
    const express = require("express");
    const { Application } = require("express");
    const fetch = require("node-fetch");

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    return app;
}

export default createServer;