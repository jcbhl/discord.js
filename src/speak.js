const gtts = require('gtts');

function speak(bot){
    let sentence = "This is a test of the new text to speech bot";
    let response = new gtts(sentence,'en');
    let unix_timestamp = Math.floor(new Date().getTime() / 1000);
    response.save('recordings/'+ unix_timestamp + '.mp3', (err, result) =>{
        if(err){
            console.log("Error occured while saving text-to-speech to disk: " + err);
        }
        console.log("Successfully wrote the text-to-speech to disk.");
    });
};

module.exports = speak;