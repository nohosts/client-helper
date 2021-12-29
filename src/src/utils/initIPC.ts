// ipc 调用代理
export const initIPC = () => {
  const { ipcRenderer } = window.require("electron");

  const ipc = new Proxy(ipcRenderer, {
    get(target, key) {
      if (key) {
        if (key in target) {
          return target[key];
        }

        const invokeInstance = target.invoke;

        const invokeProxy = new Proxy(invokeInstance, {
            apply: function (target, thisBinding, args) {
                return target.bind(thisBinding)(key, ...args);
            }
        })

        return invokeProxy;
      }
    },
  });

  bindIPCToWindow(ipc);

  return ipc;
};

export const bindIPCToWindow = (ipc: any) => {
  (window as any).ipc = ipc;
};

export default bindIPCToWindow;
