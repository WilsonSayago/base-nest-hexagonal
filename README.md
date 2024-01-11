# Base Nest Hexagonal - Pokemon API

Este proyecto es una API REST desarrollada con Node.js, NestJS, y MongoDB. Sigue una arquitectura hexagonal para organizar y separar las capas de la aplicación.

## Requisitos

- Node.js (v14 o superior)
- MongoDB (asegúrate de tener una instancia de MongoDB en ejecución)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/TU_USUARIO/base-nest-hexagonal.git
   ```

2. Instala las dependencias con Yarn:

   ```bash
   cd base-nest-hexagonal
   yarn install
   ```

3. Configura la base de datos:

   Asegúrate de tener una instancia de MongoDB en ejecución y actualiza la configuración de la base de datos en `src/config/database.config.ts` según sea necesario.

4. Ejecuta la aplicación con Yarn:

   ```bash
   yarn start:dev
   ```

   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Endpoints

### Obtener todos los Pokémon

- **URL:** `/pokemon`
- **Método:** `GET`
- **Descripción:** Devuelve una lista de todos los Pokémon almacenados en la base de datos.
- **Ejemplo de respuesta exitosa:**
  ```json
  [
    {
      "_id": "60c7b0b3a5b95b001f2759ef",
      "nombre": "Pikachu",
      "tipo": "Eléctrico",
      "nivel": 25
    },
    {
      "_id": "60c7b0c3a5b95b001f2759f0",
      "nombre": "Bulbasaur",
      "tipo": "Planta/Veneno",
      "nivel": 20
    }
    // ... otros Pokémon
  ]
  ```

### Obtener un Pokémon por ID

- **URL:** `/pokemon/:id`
- **Método:** `GET`
- **Descripción:** Devuelve los detalles de un Pokémon específico según su ID.
- **Parámetros de ruta:**
    - `id`: ID del Pokémon.
- **Ejemplo de respuesta exitosa:**
  ```json
  {
    "_id": "60c7b0b3a5b95b001f2759ef",
    "nombre": "Pikachu",
    "tipo": "Eléctrico",
    "nivel": 25
  }
  ```

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un problema o tienes una mejora, por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia UNLICENSED. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.