const { readUsers } = require("../db/db");

const login = (email, password) => {
    //read all user
    const users = readUsers();
    //compare user
    for(let i=0; i<users.length; i++){
        let user = users[i];
        if(user.email == email){
            if(user.password == password){
                return {
                    success : true,
                    data : user
                }
            }
        }
    };
    return {
        success : false,
        err : "Your Email or Password is incorrect"
    }
}

module.exports = {
    login
}