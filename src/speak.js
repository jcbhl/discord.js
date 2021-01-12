const gtts = require('gtts');

function speak(bot, sentence_to_convert){
    let sentence = "Hi Mom, this is a test of the new text to speech bot";
    let response = new gtts(sentence,'en');
    let unix_timestamp = Math.floor(new Date().getTime() / 1000);
    response.save('recordings/'+ unix_timestamp + '.mp3', (err, result) =>{
        if(err){
            console.log("Error occured while saving text-to-speech to disk: " + err);
        }
        console.log("Successfully wrote the text-to-speech to disk.");
    });
    //TODO change hardcoded channel ID
    const channel = bot.channels.cache.get('795852586116579362');
    if(!channel){
        console.log("Failed to join channel - incorrect channel ID");
    }
    channel.join().then((connection) => {            
        const dispatcher = connection.play('recordings/'+unix_timestamp+'.mp3');
        dispatcher.on('start', () => {
            console.log("Starting to stream audio...");
        });
        dispatcher.on('finish', () =>{
            console.log("Finished audio stream.");
            connection.disconnect();
        });
        dispatcher.on('error', (err) => {
            console.log('Error in playing audio: ' + err);
        });
    }).catch( e =>{
        console.log("Error while joining channel");
        console.log(e);
    });
};

module.exports = speak;