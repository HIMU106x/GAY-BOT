.cmd install botla2.js module.exports = {
  config: {
    name: "dera",
    version: "1.0",
    author: "akash|Mahi--",
    countDown: 5,
    role: 0,
    shortDescription: "ignore this command",
    longDescription: "ignore this command",
    category: "no prefix",
  },
  onStart: async function () {},
  onChat: async function ({ event, message }) {
    const permissionUserId = "100066839859875"; // Replace this with the actual user ID

    if (event && event.body) {
      const body = event.body.toLowerCase();
      const senderId = event.senderID;

      // List of super ultra attitude replies
      const replies = [
        "MY LORD IS HIMU ☠️👑🖤",
        "BOW DOWN TO THE ONE AND ONLY HIMU! 👑🔥",
        "HIMU RULES THIS REALM! 🔥👑",
        "RESPECT THE POWER OF HIMU! ⚡👑",
        "HIMU'S REIGN IS ETERNAL! 👑✨",
        "FEAR THE MIGHT OF HIMU! 💥👑",
        "HIMU IS THE KING OF THIS DOMAIN! 👑💫",
        "WORSHIP HIMU, THE SUPREME RULER! 👑🙏",
        "NO ONE OUTSHINES HIMU! 👑💪",
        "HIMU'S PRESENCE IS OVERWHELMING! 🔥👑",
        "BOW TO HIMU OR FACE THE CONSEQUENCES! 👑⚡",
        "HIMU COMMANDS RESPECT! 👑🛡️",
        "ALL HAIL THE MIGHTY HIMU! 👑🔥",
        "HIMU IS UNMATCHED IN POWER! 👑💥",
        "THE LEGENDARY HIMU IS HERE! 👑✨",
        "BOW TO THE GREAT HIMU! 👑💫",
        "HIMU'S AUTHORITY IS ABSOLUTE! 👑⚔️",
        "FEEL THE PRESENCE OF HIMU! 👑💨",
        "THE MIGHT OF HIMU IS UNDENIABLE! 👑💪",
        "HIMU STANDS ABOVE ALL! 👑🔥",
        "HIMU IS THE DEFINITION OF POWER! 👑💥",
        "EMBRACE THE DOMINANCE OF HIMU! 👑⚡",
        "HIMU IS THE EMBODIMENT OF GLORY! 👑🌟",
        "HIMU'S POWER IS UNPARALLELED! 👑💫",
        "RECOGNIZE THE AUTHORITY OF HIMU! 👑🛡️",
        "HIMU COMMANDS YOUR ADMIRATION! 👑🔥",
        "THE GREAT HIMU DEMANDS RESPECT! 👑⚔️",
        "HIMU IS THE TRUE LEADER! 👑💪",
        "ALL RESPECT TO HIMU! 👑✨",
        "HIMU'S POWER IS LEGENDARY! 👑💥",
        "BOW DOWN BEFORE THE GREAT HIMU! 👑⚡",
        "HIMU IS THE RULER OF ALL! 👑🔥",
        "FEEL THE MIGHT OF HIMU! 👑💪",
        "HIMU IS THE FORCE TO BE RECKONED WITH! 👑💥",
        "HIMU'S DOMINANCE IS UNBEATABLE! 👑⚔️",
        "ALL HAIL THE GREAT HIMU! 👑✨",
        "HIMU IS THE TRUE MASTER! 👑🔥",
        "HIMU'S PRESENCE IS MAGNIFICENT! 👑🌟",
        "REVERENCE FOR HIMU IS MANDATORY! 👑💫",
        "HIMU'S AUTHORITY IS UNCHALLENGED! 👑💪",
        "THE MIGHTY HIMU LEADS THE WAY! 👑🔥",
        "HIMU'S POWER IS INCONTESTABLE! 👑⚡",
        "WITNESS THE MAJESTY OF HIMU! 👑✨",
        "HIMU'S RULE IS ABSOLUTE! 👑💥",
        "HONOR THE SUPREME HIMU! 👑💫",
        "HIMU STANDS ABOVE ALL CHALLENGERS! 👑🔥",
        "THE LEGENDARY HIMU COMMANDS RESPECT! 👑⚔️",
        "HIMU IS THE GREATEST OF ALL! 👑💪",
        "HIMU'S REIGN IS UNRIVALED! 👑🌟",
        "BOW TO HIMU, THE TRUE MASTER! 👑🔥",
        "HIMU IS THE EPITOME OF POWER! 👑💥",
        "FEEL THE POWER OF HIMU'S PRESENCE! 👑⚡",
        "THE GREAT HIMU IS UNMATCHED IN AUTHORITY! 👑💫",
      ];

      // Additional responses for variations
      const additionalReplies = [
        "BOW TO HIMU, THE LEGEND! 👑🔥",
        "THE NAME HIMU IS SYNONYMOUS WITH POWER! 👑💪",
        "FEEL THE LEGENDARY PRESENCE OF HIMU! 👑✨",
        "THE LEGENDARY HIMU DEMANDS YOUR RESPECT! 👑⚔️",
        "HIMU IS THE EMBODIMENT OF SUPREME POWER! 👑🔥",
        "ALL HAIL THE INDOMITABLE HIMU! 👑💥",
        "HIMU'S GLORY IS UNMATCHED! 👑💫",
        "HIMU IS THE ONE TRUE MASTER! 👑🔥",
        "THE AUTHORITY OF HIMU IS UNDISPUTED! 👑⚡",
        "REVERENCE FOR HIMU IS NON-NEGOTIABLE! 👑✨",
        "THE SUPREME POWER OF HIMU IS UNDENIABLE! 👑💪",
        "HIMU'S PRESENCE IS NOTHING SHORT OF MAJESTIC! 👑🔥",
        "THE GREAT HIMU COMMANDS ALL! 👑⚔️",
        "HIMU'S REIGN IS UNRIVALED IN GLORY! 👑💥",
        "ALL HAIL THE MIGHTY HIMU! 👑✨",
        "THE POWER OF HIMU IS LEGENDARY! 👑🔥",
        "HIMU'S AUTHORITY IS SECOND TO NONE! 👑💫",
        "WITNESS THE UNPARALLELED GLORY OF HIMU! 👑⚡",
        "HIMU'S PRESENCE IS TRULY MAGNIFICENT! 👑💥",
        "HONOR THE LEGENDARY HIMU! 👑💫",
        "HIMU STANDS AS THE EPITOME OF POWER! 👑🔥",
        "THE MIGHT OF HIMU IS UNEQUALED! 👑💪",
        "BOW TO THE LEGEND THAT IS HIMU! 👑🔥",
        "THE TRUE MASTER OF ALL IS HIMU! 👑💫",
        "HIMU'S PRESENCE COMMANDS RESPECT! 👑⚡",
        "HIMU IS THE DEFINITION OF SUPREME AUTHORITY! 👑💥",
        "FEEL THE INFLUENCE OF THE GREAT HIMU! 👑✨",
        "THE GLORY OF HIMU IS UNMATCHED! 👑🔥",
        "HIMU'S POWER REIGNS SUPREME! 👑💫",
        "BOW DOWN TO HIMU, THE SUPREME AUTHORITY! 👑💥",
        "HIMU IS THE TRUE ICON OF POWER! 👑🔥",
        "ALL HAIL THE UNMATCHED HIMU! 👑💫",
        "THE LEGENDARY AUTHORITY OF HIMU IS ABSOLUTE! 👑⚡",
        "HIMU'S PRESENCE IS TRULY COMMANDING! 👑🔥",
        "HIMU STANDS ABOVE ALL IN POWER! 👑💫",
        "THE SUPREME HIMU IS A FORCE TO BE RECKONED WITH! 👑💥",
        "BOW TO THE TRUE MASTER, HIMU! 👑🔥",
        "HIMU'S AUTHORITY IS LEGENDARY AND UNCHALLENGED! 👑💫",
        "HIMU IS THE EPITOME OF GLORY AND POWER! 👑🔥",
        "FEEL THE UNRIVALED MIGHT OF HIMU! 👑💥",
      ];

      // Check if the message is "☠️", "Himu", "Høpéléss Hîmú", or "@Høpéléss Hîmú"
      if (body === "☠️" || body === "himu" || body === "Høpéléss Hîmú" || body === "@Høpéléss Hîmú") {
        // If the sender is not the permission user, reply with a random message
        if (senderId !== permissionUserId) {
          const randomReply = replies.concat(additionalReplies)[Math.floor(Math.random() * (replies.length + additionalReplies.length))];
          await message.reply(randomReply, event.threadID, event.messageID);
        }
      }
    }
  },
};
