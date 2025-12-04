# proyecto-final-nodejs
📦 API REST de Productos con Node.js, Firebase y JWT

Este proyecto implementa una API REST completa para la administración de productos, siguiendo una arquitectura por capas y utilizando Firebase Firestore como base de datos.
Incluye autenticación mediante JSON Web Tokens (JWT) y está lista para desplegar en Vercel.

🚀 Tecnologías utilizadas

Node.js (ES Modules)

Express

Firebase Admin (Firestore)

JWT (jsonwebtoken)

Cors

Postman (testing)

📁 Estructura del proyecto
project/
│── config/
│   ├── firebase.js
│   └── serviceAccount.json (local, no se sube a producción)
│
│── controllers/
│   ├── products.controller.js
│   └── auth.controller.js
│
│── services/
│   ├── products.service.js
│   └── auth.service.js
│
│── models/
│   └── products.model.js
│
│── middleware/
│   └── auth.middleware.js
│
│── routes/
│   ├── products.routes.js
│   └── auth.routes.js
│
│── .env
│── index.js
│── package.json
│── README.md

🔧 Configuración del entorno

Crear un archivo .env en la raíz:

PORT=3000
JWT_SECRET=tu_clave_super_segura


🔥 Configuración de Firebase

En la carpeta config/ colocar:

firebase.js

Conexión al Firestore usando serviceAccount.json en desarrollo y variables de entorno en producción.

🔐 Autenticación JWT

La API incluye autenticación por Bearer Token.

Datos del usuario permitido
{
  "email": "admin@empresa.com",
  "password": "123456"
}

Login

POST /auth/login

Body:

{
  "email": "admin@empresa.com",
  "password": "123456"
}


Respuesta:

{
  "message": "Login exitoso",
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

🛡 Rutas protegidas

Todas las rutas de /api/products están protegidas:

Debe incluirse el token:

Authorization: Bearer <token>

📚 API Endpoints
▶ 1. Obtener todos los productos

GET /api/products

▶ 2. Obtener un producto por ID

GET /api/products/:id

▶ 3. Crear un producto

POST /api/products

Body JSON:

{
  "category": "pokemon",
  "name": "vulpix fancy",
  "description": "Figura coleccionable",
  "sku": "PKM0001005",
  "stock": 10,
  "price": 5799.99
}

▶ 4. Actualizar un producto

PUT /api/products/:id

▶ 5. Eliminar un producto

DELETE /api/products/:id

Respuesta:

{ "message": "Producto eliminado correctamente" }

🧪 Test con Postman

Login → copiar el token.

Agregar a Headers:

Authorization: Bearer <token>


Probar CRUD completo.

✅ Estado final del proyecto

✔ CRUD funcionando
✔ Firestore conectado
✔ Arquitectura por capas
✔ JWT implementado


---

👉 Este proyecto está bajo la licencia MIT.
✔ Rutas protegidas
✔ Despliegue en Vercel listo
