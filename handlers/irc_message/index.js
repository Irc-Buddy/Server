module.exports = ({ sender, channel, message }, ws) => {
    console.log('-----')
    console.log('IRC message recived')
    console.log(sender, channel, message)
    console.log(ws)
    console.log('-----')
}