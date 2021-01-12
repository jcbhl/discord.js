const {exec} = require('child_process');

function ls_dir(){
    exec("ls -la", (error, stdout, stderr) => {
        if(error){
            console.log("Encountered an error: " + error);
            return;
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    })
}

function get_ip(){
    return new Promise((resolve, reject) => {
        exec('ifconfig eth0 | grep inet | awk \'{print $2}\'', (error, stdout, stderr) => {
            if(error){
                console.log("Encountered an error while getting local IP : " + error);
                reject(error);
            }
            resolve(stdout.trim().split('\n'));
        });
    });
}

module.exports = {ls_dir, get_ip};