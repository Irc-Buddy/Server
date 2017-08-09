// Heart beats should just return a pong event
module.exports = (ws) => ws.send(
    JSON.stringify({ type: 'HEARTBEAT_RESPONSE', message: 'pong' })
)