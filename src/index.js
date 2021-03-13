module.exports = function check(str, bracketsConfig) {
    let newConfig = [];
    let string = str;

    bracketsConfig.forEach((item, index) => {
        newConfig.push(bracketsConfig[index][0] + bracketsConfig[index][1]);
    })

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < newConfig.length; j++) {
            string = string.replace(newConfig[j], '');
        }

        if (!string.length) {
            return true;
        }
    }

    return false;
}
