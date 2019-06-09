
const varmon = function(server, io, fs){

    this.server = server;
    this.io = io;

    this.listen = function(port){
        const http = this.server.createServer(this.handler).listen(port);
        this.io = this.io(http);
        this.socketHandler();
    };

    this.handler = function(res, req){

    };

    this.socketHandler = function(){
        this.io.on('connection', function (socket) {
            console.log("connected " + socket.id);
        });
    }
};

module.exports = varmon;