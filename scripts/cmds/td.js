const truths = [
    "🤔 **What's one thing you’ve never told anyone?**",
    "😱 **Share your biggest fear with us!**",
    "😳 **What’s the most embarrassing thing you’ve ever done?**",
    "😍 **Have you ever had a crush on someone you shouldn't have?**",
    "🤫 **Reveal one secret you’ve kept from everyone.**",
    "😬 **What’s the worst trouble you’ve ever been in?**",
    "😅 **What’s the most awkward situation you’ve been in?**",
    "🙈 **Have you ever lied to get out of trouble?**",
    "😔 **What’s your biggest regret in life?**",
    "😳 **What’s the most awkward thing that’s happened to you recently?**",
    "🤭 **What’s the most embarrassing thing you’ve done on social media?**",
    "🤥 **What’s the worst lie you’ve ever told?**",
    "😓 **Share your biggest insecurity.**",
    "🙈 **What’s something you’re afraid to tell your closest friends?**",
    "🤔 **What’s one thing you wish you could change about yourself?**",
    "😤 **What’s your biggest pet peeve?**",
    "🤦 **What’s something you’re really bad at?**",
    "💔 **What’s a habit you wish you could break?**",
    "😖 **What’s something you’ve done that you’re not proud of?**",
    "😳 **What’s the most embarrassing thing your parents have caught you doing?**",
    "😬 **What’s the most awkward conversation you’ve ever had?**",
    "😣 **What’s a mistake you made that you wish you could undo?**",
    "🤫 **What’s something you’ve done that you don’t want anyone to find out?**",
    "😨 **What’s your biggest fear in life?**",
    "😳 **What’s the most embarrassing thing you’ve ever worn?**",
    "😔 **What’s something you wish you had never done?**",
    "😳 **What’s your most embarrassing childhood memory?**",
    "😳 **What’s something you’re embarrassed about doing recently?**",
    "😮 **What’s the most scandalous thing you’ve ever done?**",
    "😓 **What’s something you wish you could go back and change?**",
    "💔 **What’s the biggest mistake you’ve made in a relationship?**",
    "🤐 **What’s a secret you’ve kept from your family?**",
    "😳 **What’s a personal habit you’re embarrassed about?**",
    "🤫 **What’s a secret you’re keeping from your best friend?**",
    "😰 **What’s the most uncomfortable situation you’ve been in recently?**",
    "😔 **What’s a decision you made that you wish you could change?**"
];

const dares = [
    "📸 **Send a funny or silly selfie to the group chat!**",
    "📱 **Post something hilarious or embarrassing on social media!**",
    "🎭 **Imitate a celebrity and make us laugh!**",
    "👅 **Try to lick your elbow – give it your best shot!**",
    "🗣️ **Speak in an accent of your choice for the next 30 minutes!**",
    "💃 **Dance like no one’s watching for 1 minute – show us your moves!**",
    "📝 **Let someone write a status update on your social media account!**",
    "🎤 **Sing the chorus of your favorite song out loud!**",
    "💪 **Do 20 push-ups and prove your strength!**",
    "🧦 **Wear socks on your hands for the next hour – no peeking!**",
    "🖼️ **Allow someone to choose a new profile picture for you!**",
    "📹 **Post a funny video of yourself dancing or being silly!**",
    "🗣️ **Talk in a high-pitched voice for the next 30 minutes!**",
    "💄 **Let someone give you a fun makeover!**",
    "📹 **Share a hilarious video of yourself doing a random activity!**",
    "🤹 **Try juggling 3 items for at least 30 seconds – let’s see your skills!**",
    "📱 **Read the last text message you received out loud to everyone!**",
    "🖊️ **Let someone draw something funny on your forehead with a marker!**",
    "🌶️ **Take a shot of hot sauce or a spicy condiment – spice things up!**",
    "🎭 **Reenact a famous movie scene and make us laugh!**",
    "👕 **Wear your clothes backward for the next hour – let’s see the fashion statement!**",
    "🎨 **Let someone draw a funny doodle on your face!**",
    "🎶 **Sing the alphabet song loudly – don’t hold back!**",
    "🐣 **Do your best impression of a baby animal – be cute!**",
    "💻 **Share your screen and show the last website you visited!**",
    "🍽️ **Describe your last meal in vivid detail!**",
    "🌶️ **Eat a spoonful of a condiment chosen by someone else!**",
    "🛏️ **Post a picture of your messy room – honesty is key!**",
    "🤸 **Try doing a cartwheel – show off your acrobatics!**",
    "🆕 **Let someone choose a new username for you for the next hour!**",
    "📝 **Read a random text message out loud dramatically!**",
    "🎭 **Imitate your favorite character and entertain us!**",
    "📸 **Post an embarrassing photo of yourself from your camera roll!**",
    "🔄 **Try to recite the lyrics of a song backward – it’s tricky!**",
    "💃 **Dance like no one’s watching for 2 minutes – make it memorable!**",
    "👕 **Wear a random item of clothing chosen by someone else for the next hour!**",
    "🚶 **Walk in a silly manner around your room – let’s see the fun!**",
    "📜 **Talk in rhymes for the next 10 minutes – be poetic!**",
    "🥄 **Balance a spoon on your nose for 1 minute – challenge accepted?**",
    "👕 **Wear your clothes inside out for the next hour – new trend alert!**",
    "🔠 **Let someone give you a new nickname for the rest of the day!**",
    "🤸 **Try doing a handstand – or at least attempt it!**",
    "😊 **Use a random emoji in all your messages for the next hour!**",
    "📹 **Post a video of yourself doing a funny dance – let’s see your moves!**",
    "🎶 **Try touching your toes while singing a song – it’s a workout!**",
    "📝 **Let someone write a status update for you – make it interesting!**",
    "🎭 **Perform a funny impersonation of a famous person!**",
    "📸 **Share the most recent photo you took with everyone!**",
    "🎤 **Use a funny voice or accent in all your messages for the next 10 minutes!**",
    "🖊️ **Draw a picture of your favorite animal with your non-dominant hand – artistic skills!**"
];

module.exports = {
    config: {
        name: "truthdare",
        version: "1.1",
        author: "Your Name",
        countDown: 5,
        role: 1,
        shortDescription: {
            en: "Play Truth or Dare"
        },
        longDescription: {
            en: "Choose 'truth' or 'dare' to get a fun and challenging truth question or dare. Test your bravery, reveal your secrets, or take on hilarious challenges!"
        },
        category: "games",
        guide: {
            en: '   {pn} truth: Get a random truth question with emojis and engaging content'
                + '\n   {pn} dare: Get a random dare challenge with emojis and exciting tasks'
                + '\n   {pn} help: Show this help message'
        }
    },

    onStart: function ({ message, args, getLang }) {
        const option = args[0];
        if (option === "truth") {
            const truth = truths[Math.floor(Math.random() * truths.length)];
            return message.reply(`🎯 **Truth:** ${truth}`);
        } 
        else if (option === "dare") {
            const dare = dares[Math.floor(Math.random() * dares.length)];
            return message.reply(`🎯 **Dare:** ${dare}`);
        }
        else if (option === "help") {
            return message.reply(getLang("guide"));
        } 
        else {
            return message.SyntaxError();
        }
    }
};
