const users = require('../models/user');
const { encryptPass,decryptPass } = require('../config/encrypt')

const register = async(parameter)=>{
    const { username,email,phone,password } = parameter;
    // console.log(parameter);
    try{
        var existing = await users.findOne({email});
        console.log(existing);
        if(existing!=null){
            throw "Email is already in used!";
        }
        existing = await users.findOne({username});
        if(existing!=null){
            throw "Username is already in used!";
        }
        const hash = encryptPass(password);

        const newUser = {
            username,
            email,
            phone,
            password: hash
        }
        console.log(newUser);
        const createUser = await users.create(newUser);

        return {
            success: true,
            data: createUser
        }
    }catch(err){
        return {
            success: false,
            error: err
        }
    }
}
const login = async(email,password)=>{
    // console.log(email);
    const validEmail = await users.findOne({email});
    // console.log(validEmail);
    const decrypt = decryptPass(password,validEmail.password);
    try{

        if(!validEmail){
            throw "Invalid email";
        }
        if(!decrypt){
            throw "Incorrect password!";
        }
        return {
            success: true,
            data: validEmail
        }
    }catch(err){
        return {
            success: false,
            error: err
        }

    }
    
}
const logout = (session) => {
    try{
        session.destroy();
        return {
            success: true,
            data: "Logout successfully"
        }
    }catch(err){
        return{
            success: false,
            err: err
        }
    }

}
const getUser = async (userId) => {
    try{
        const user = await users.findById(userId);
        if(!user){
            return{
                success: false,
                err: "Id is invalid"
            }
        }
        return{
            success: true,
            data: user
        }
    }catch(err){
        return{
            success: false,
            err: err
        }
    }
}
module.exports = {register,login,logout,getUser}