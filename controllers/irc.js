const irc = require('irc')
const ircListener = require('../listeners/irc')

// Helper functions for this module
const normalizeChannelName = async (name) => {
    if (name.startsWith('#')) {
        return name
    }
    return `#${name}`
}

// Export main controller
module.exports = {
    createNewConnection: async ({ server, nickname, channel }) => {
        console.log(server, nickname, channel)
        const channelName = await normalizeChannelName(channel)
        // Create new connection to the irc channel
        const client = new irc.Client(
            server,
            nickname,
            { channels: [channelName] }
        )
        ircListener(await client)
    }
}