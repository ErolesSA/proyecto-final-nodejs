import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        res.status(401).json({ error: "No se proporciono el token"});
    }

    // Bearer
    const token = authHeader.split(" ")[1];

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Token invalido / expirado"});
    }
};

