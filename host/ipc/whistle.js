const { ipcMain } = require('electron');
const createWhistle = require('../../lib/createWhistle');

ipcMain.handle('createWhistle', (...args) => {
    try {
        const whistleInstance = createWhistle({
            ...args
        });

        console.log(whistleInstance);
    } catch(e) {
        console.error(e);
    }
})