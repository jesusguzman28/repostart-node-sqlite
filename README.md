# RepoStart: diagnóstico de calidad

Mini-API de incidencias preparada para la Sesión de Aprendizaje N.° 01. El repositorio se entrega con una condición no conforme reproducible: la aplicación abre, pero la tabla requerida no está creada.

## Requisitos

- Node.js 22.5 o superior (SQLite integrado)
- npm
- Terminal con `curl` (o un cliente HTTP equivalente)

## Instalación y ejecución

```bash
cp .env.example .env
npm install
npm start
```

En otra terminal:

```bash
curl -i http://localhost:3000/salud
curl -i http://localhost:3000/incidencias
```

La primera ruta debe responder `200`. La segunda debe responder `500` mientras la base no esté inicializada. Para obtener un comando mínimo con código de salida determinista:

```bash
npm run diagnostico
echo $?
```

No ejecutes `npm run db:init` hasta haber registrado el fallo y sus evidencias.

## Criterio de aceptación

El producto es conforme cuando:

- `/salud` responde HTTP 200.
- `/incidencias` responde HTTP 200 y un arreglo JSON.
- `npm run diagnostico` termina con código 0.
- Es posible crear una incidencia mediante `POST /incidencias`.

## Alcance académico

El proyecto es deliberadamente pequeño. No representa una arquitectura de producción ni incluye autenticación. Su propósito es evaluar reproducibilidad, trazabilidad, evidencia e interpretación técnica.
