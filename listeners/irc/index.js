module.exports = client => {
    const { dispatch } = require('../../actions/')

    console.log('IRC CLIENT FOUND')
    // Listen for general messages
    client.addListener(
        'message',
        (sender, channel, message) => {
            /*
                QUIRK: Blindly dispatching a message received event action will trigger on a PM as well.
                So We check if the channel name is equal to the username. If it is then ignore the call. Otherwise consider it a normal message.
            */
            if (channel === client.opt.nick) return

            dispatch({
                type: 'IRC_MESSAGE_RECEIVED',
                data: { sender, channel, message }
            })
        }
    )
    // Listen for PM's
    client.addListener(
        'pm',
        (sender, message) => dispatch({
            type: 'IRC_PM_RECEIVED',
            data: { sender, message }
        })
    )
}