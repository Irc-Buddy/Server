// Handle the join and start listeners for everything else
const IrcController = require('../../controllers/irc')

module.exports = (req, ws) => IrcController.createNewConnection(req)
