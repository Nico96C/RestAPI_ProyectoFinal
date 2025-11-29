
# Proyecto Final - BackEnd NodeJS 25256

Este es el despliegue del proyecto final para el curso de BackEnd NodeJS.

En el mismo se realizo funcionabilidad de un servidor Express con su configuracion CORS aparte de su modularización general donde estan las rutas, controladores, servicios y modelos para tratar cada petición.

Tambien se hizo uso de Firestore de Firebase para el alojamiento de nuestra base de datos, en el que llegaran las peticiones y devolvera el resultado pasando por las diferentes capas con los resultados deseados.

Por ultimo dando un pequeño diseño sencillo en HTML para el manejo comodo de cada petición.

## Despliegue

Para empezar teniendo el repositorio de Github vamos a hacer la instalación de las dependencias.

```bash
  npm install
```

Con el siguiente comando podemos iniciar el servidor en Local.

```bash
  npm run start
```

Sino puede visitar la pagina que esta desplegada.


## Caracteristicas.

- Integrado modo claro y oscuro para su comodidad.
- Diseño sencillo para probar el BackEnd.
- Uso de CRUD clasico para las peticiones a la base de datos.

## Objetivos.

- Requerimiento #1: Configuración Inicial.

Crea un directorio donde alojarás tu proyecto e incluye un archivo index.js como punto de entrada.

Inicia Node.js y configura npm usando el comando npm init -y.

Agrega la propiedad "type": "module" en el archivo package.json para habilitar ESModules.

Configura un script llamado start para ejecutar el programa con el comando npm run start.

- Requerimiento #2: Instalación de dependencias.

Instala express, cors, dotenv, firebase y jsonwebtoken como dependencias del proyecto.

- Requerimiento #3: Configuración del servidor.

Crea un servidor web con express y realiza su configuración en el archivo index.js.

Configura CORS para habilitar las peticiones de origen cruzado, así las aplicaciones Frontend de la empresa pueden consultar al servicio sin problemas.

Configura el middleware global de body-parser para interpretar los body en formato JSON de las peticiones.

Establece un middleware que maneje las rutas desconocidas, devolviendo el estado 404 y un mensaje.

Crea un archivo .env donde se alojarán las variables de entorno del proyecto.

- Requerimiento #4: Rutas.

Crea la capa de rutas del proyecto con las rutas necesarias.

- Requerimiento #5: Controladores y Servicios.

Crea la capa de controladores para cada una de las rutas establecidas en el requerimiento anterior.

Crea la capa de servicios para atender a cada uno de los controladores.

- Requerimiento #6: Acceso a los datos.

Crea la capa de modelos de la aplicación.

Crea un nuevo proyecto de Firestore en Firebase, agrega una colección para registrar nuevos productos y crea el primer documento de producto para darle estructura y tipos de datos.

Configura y conecta Firebase en el proyecto.

Utiliza la instancia de Firebase creada y crea los métodos necesarios para que el modelo pueda interactuar con la base de datos remota.

Conecta los servicios con los modelos.

- Requerimiento #7: Protege tus rutas.

Configura JWT en el proyecto

Crea un middleware de autenticación y protege las rutas correspondientes

Agrega la lógica necesaria en la en controlador de login para validar la identidad del usuario y devolver un Bearer Token.


## Referencias API

#### Login

```http
  POST api/auth/login
```

#### Obtener todos los productos.

```http
  GET api/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Obtener productos por ID.

```http
  GET /api/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Agregar Producto.

```http
  POST /api/products/create
```

#### Actualizar Producto.

```http
  PUT /api/products/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Eliminar Producto.

```http
  DELETE /api/products/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


