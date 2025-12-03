import admin from "firebase-admin";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// obtener ruta absoluta
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// leer JSON manualmente
const serviceAccount = JSON.parse(
  readFileSync(join(__dirname, "serviceAccount.json"), "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();
