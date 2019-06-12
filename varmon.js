
const varmon = function(socket){
    this.socket = socket;
    this.variables = {};
    this.attach = (name, variable) => {
        this.variables[name] = variable;
    };

    this.start = () => {
        setInterval(this.sendVariables,100)
    };

    this.sendVariables = () => {
        console.log(this.variables);
    }
};

module.exports = varmon;