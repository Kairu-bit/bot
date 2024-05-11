const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "ai <question>",
  credits: 'Developer',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`Please provide a question or statement after 'ai'. For example: 'ai what is node.js?'`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(``, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://soyeon-gpt4.onrender.com/api?prompt=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage(response + '\n\nDeveloper : https://facebook.com/KairuxDev\nAUTOBOT : https://kyledev-psi.vercel.app', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.\nPlease Message The Developer : https://facebook.com/KairuxDev', event.threadID, event.messageID);
  }
};
