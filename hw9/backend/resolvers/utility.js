const checkUser = (db, name, errFunc)=> {
    if (!name)
        throw new Error("Missing user name for " + errFunc);
    return db.UserModel.findOne({ name });
};

const newUser = (db, name) => {
    return new db.UserModel({ name }).save();
};