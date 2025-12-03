import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Datos HARDCODEADOS (como pide el proyecto)
  const adminUser = {
    email: "admin@empresa.com",
    password: "123456"
  };

  // Validación básica
  if (email !== adminUser.email || password !== adminUser.password) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  // Crear el token
  const token = jwt.sign(
    { user: email },             // datos dentro del token
    process.env.JWT_SECRET,      // clave secreta
    { expiresIn: "2h" }          // duración
  );

  return res.status(200).json({
    message: "Login exitoso",
    token: `Bearer ${token}`
  });
};
