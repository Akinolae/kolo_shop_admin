const db = require('../config/dbconn');
// console.log()

beforeAll( async () => {
    db
})
function add(a, b){
    return a + b;
}

test("See that a + b = 4", () => {
    expect(add(2, 2)).toBe(4);
});