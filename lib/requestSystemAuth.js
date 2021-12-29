const sudo = require('sudo-prompt');

// 申请系统权限
const requestSystemAuth = () => {
    return new Promise((resolve, reject) => {
        sudo.exec('echo hello', {
            name: 'Electron'
        }, (error, stdout, stderr) => {
            if (error) {
                console.error(error);
                reject(error);
            }
    
            if (stderr) {
                console.error(stderr);
                reject(stderr);
            }
    
            resolve(stdout);
            console.log('stdout: ', stdout);
        })
    })
}

module.exports = requestSystemAuth;