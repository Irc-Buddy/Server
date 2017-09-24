module.exports = ({ sender, message }, ws) => {
    console.log('-----')
    console.log('PM Sent')
    console.log(sender, message)
    console.log('-----')
}