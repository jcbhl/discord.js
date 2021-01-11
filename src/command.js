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

function ssh_activate(){
    const private_channel = 
    // validate that the channel is private, verify readable users and then send temporary ssh password? should be changed afterwards
}

module.exports = {ls_dir, ssh_activate};