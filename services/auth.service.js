import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Servicio que valida un usser
export const loginService = (username, password) => {
    if(username === "admin" && password === "12345"){
        const token = jwt.sign(
            {username},
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        
    return `Bearer ${token}`;
     
    }

    return null;
};