
const telegramBot = require("node-telegram-bot-api");
const dotenv = require("dotenv");
dotenv.config();




const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new  telegramBot(token, {polling:true});

// bot.on('polling_error', (error) => {
//     console.error('Polling error:', error);
//     // Reset the offset to retrieve all updates from the beginning
//     bot.stopPolling();
//     bot.startPolling({ restart: true, timeout: 1000 });
// });


bot.on('message', (msg) => {

    // const AAEp3yEUJOD17BjuIYd70QVnn__H8gX1aCQi = "Hi there!";

    // const response = "Hello! How can I assist you today? Do you have a specific question or topic you'd like to discuss? I'm here to help with any information or assistance you may need!";

    // if(msg.text === "I'm new in this group!!!"){
    //     bot.sendMessage(msg.chat.id, response);
    // }

    if(msg.text === "/start"){
        bot.sendMessage(msg.chat.id,  `Hello! ` + msg.from.first_name +  ` How can I assist you today? Do you have a specific question or topic you'd like to discuss? I'm here to help with any information or assistance you may need!`, {
            "reply_markup": {
                "keyboard": [["What is gender?", "Generate Elon musk image","List my neigbour names"]]
                }
            });
    }

    // if (msg.text === "What is gender?") {
    // bot.sendMessage(msg.chat.id,"Gender is the identification of female and male");
    // }

    // if(msg.text === "Generate Elon musk image"){
    //     bot.sendPhoto(msg.chat.id, "https://image.cnbcfm.com/api/v1/image/107083077-1656593419933-gettyimages-1395062617-t_w16437_4934a878-972d-4bea-b6ef-b61f4ceeb787.jpeg?v=1682101376",{caption:"Here is elon musk picture"})
    // }

    // if(msg.text === "List my neigbour names"){
    //     bot.sendMessage(msg.chat.id, "Baddie, Win, Skin, Troy and Wabby.")
    // }
    
    });