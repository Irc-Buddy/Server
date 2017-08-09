// Generic Messages should be returned as recived
module.exports = (message, ws) => ws.send(
    JSON.stringify(
        { type: 'GENERIC_MESSAGE_RESPONSE', message }
    )
)