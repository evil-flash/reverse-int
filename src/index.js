module.exports = function reverse (n) {
    let result = n.toString().split('').reverse()
    let arr = result.map(i => i.match(/\d/))
    return arr.join('')
}