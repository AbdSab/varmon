
const varmon = function(socket){
    this.variables = {};
    this.attach = (name, variable) => {
        this.variables[name] = variable;
    };

    this.start = () => {
        setInterval(this.sendVariables,100)
    };

    this.sendVariables = () => {
        //console.log(this.variables);
        socket.send(this.variables);
    }
};

module.exports = varmon;