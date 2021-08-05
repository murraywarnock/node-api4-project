const db = {
    Users: [
        {username: "John Doe", password: "Doe"},
        {username: "Jeremiah Marisca", password: "Jeremiah"},
        {username: "Jeanetta Brouse", password: "Jeanetta"},
        {username: "Tillie Mcmillian", password: "Tillie"},
        {username: "Warner Burchett", password: "Warner"},
        {username: "Cherly Terpstra", password: "Cherly"},
        {username: "Rodrigo Provencher", password: "Rodrigo"},
        {username: "Fran Gardener", password: "Fran"},
        {username: "Jennette Nath", password: "Jennette"},
        {username: "Lawanna Hyndman", password: "Lawanna"},
        {username: "Christian Carwell", password: "Christian"}
    ],
};

module.exports = {
    find,
    add,
    login
};

function find() {
    return db;
}

function  add(newUser) {
    db.Users.push(newUser)
    return newUser;
}

function  login(creds) {
    const okUser = db.Users.find(user => user.username === creds.username && user.password === creds.password)
    if (okUser) {
        return okUser;
    } else {
        return "not found";
    }
}