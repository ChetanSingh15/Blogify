import jwt from "jsonwebtoken";

const secret = "@Nov!Ce_knG$i&t%_AHNcty@#"

const createTokenForUser = function(user){
    const payload = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profileImage: user.profileImage,
        role: user.role,
    }

    const token = jwt.sign(payload,secret);

    return token;
}

const validateToken =  function(token){
    const payload = jwt.verify(token,secret);
    return payload;
}

export {
    createTokenForUser,
    validateToken,
}