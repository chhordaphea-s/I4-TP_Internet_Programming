//fs for read file db(user.json)
const fs = require('fs');
//for declare the part of db
const path = require('path');

//read all user from db and return 
const readUsers = () => {
    let rawData = fs.readFileSync(path.join(process.cwd(), 'db/user.json'), 'utf8');
    if(!rawData){
        return []
    }
    return JSON.parse(rawData);
}

//write user to db
const writeUser = async (data) => {
    fs.writeFileSync(path.join(process.cwd(), 'db/user.json'), JSON.stringify(data), 'utf8');
}

module.exports = {
    readUsers,
    writeUser
}