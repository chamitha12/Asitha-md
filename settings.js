// setting.js

module.exports = {
    // WhatsApp Session ID (Do not share publicly unless you accept the risk)
    SESSION_ID: '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=wQxC1agQ#wxzG7m-A31BP6suArq5poKsGbIJ4qlYfumJP3WWwWro',

    // Bot basic identity
    BOT_NAME: 'Asitha Bot',
    OWNER_NAME: 'Thilina Akalanka',
    PREFIX: '.',

    // Optional settings
    VERSION: '1.0.0',
    LANGUAGE: 'si', // 'si' = Sinhala, 'en' = English
    AUTO_REPLY: true,
    ALLOW_GROUPS: true,

    // Custom messages
    MESSAGES: {
        success: '✅ සාර්ථකයි!',
        error: '❌ වැරදික් තිබේ!',
        onlyAdmin: '⛔️ මෙය admin විතරක් භාවිතා කල හැක.',
        onlyGroup: '👥 මෙම විධානය කණ්ඩායම් සඳහා පමණි.',
        onlyPrivate: '📱 මෙය private chat එකක පමණි.',
        botNotAdmin: '❗ Bot එක group එකේ admin නොවෙයි.',
    },

    // Bot behavior toggles
    FEATURES: {
        AUTO_REACT: true,
        BLOCK_BAD_WORDS: false,
        ANTI_LINK: false,
        WELCOME_MSG: true,
    },

    // Developer settings (optional)
    DEV_MODE: false,
};
