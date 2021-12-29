const initLog = () => {
  const log = window.require("electron-log");

  const NORMAL_CONSOLE_METHOD = ["log", "info", "warn", "error"];

  const hackConsole = () => {
    NORMAL_CONSOLE_METHOD.forEach((methodName) => {
      const originCallInstance = (console as any)[methodName];

      (console as any)[methodName] = (...args: any) => {
        log[methodName](...args);
        originCallInstance(...args);
      };
    });
  };
  hackConsole();
};

export default initLog;
