const { webContents } = require('electron');

const initRenderIPC = () => {
    const ipc = new Proxy(webContents, {
        get(target, key) {
            if (key) {
                if (key in target) {
                    return target[key];
                }

                const invokeInstance = target.send;

                const invokeProxy = new Proxy(invokeInstance, {
                    apply: function (target, thisBinding, args) {
                        return target.bind(thisBinding)(key, ...args);
                    }
                })

                return invokeProxy;
            }
        },
    });

    globalThis.renderIpc = ipc;

    return ipc;
};

module.exports = initRenderIPC
