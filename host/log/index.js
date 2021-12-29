const log = require('electron-log');

const NORMAL_CONSOLE_METHOD = ['log', 'info', 'warn', 'error'];

const hackConsole = () => {
    NORMAL_CONSOLE_METHOD.forEach(methodName => {
        const originCallInstance = console[methodName];

        console[methodName] = (...args) => {
            log[methodName](...args);
            originCallInstance(...args);
        }
    })
}

const initLog = () => {
    hackConsole();
    global.log = log;
}

module.exports = initLog;