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

module.exports = ls_dir;