const app = (a, b) => {
    return a + b;
}

const sum = (a, b) => {
    if (b === 0) {
        return "No"
    } else {
        return a * b;
    }
}

module.exports = {app, sum};
