# RepoStart: diagnóstico de calidad

Mini-API de incidencias preparada para la Sesión de Aprendizaje N.° 01. El repositorio representa un producto recibido de otro equipo que debe evaluarse en un entorno limpio.

## Requisitos

- Node.js 22.5 o superior (SQLite integrado)
- npm
- Terminal con `curl` o un cliente HTTP equivalente

## Instalación y primera ejecución

```bash
cp .env.example .env
npm install
npm start
echo $?
```

Registra la salida completa antes de efectuar cambios. También está disponible un comando de comprobación acotado:

```bash
npm run diagnostico
echo $?
```

El equipo debe investigar el repositorio, identificar la causa raíz, proponer una acción técnica y justificarla antes de modificar el estado del entorno. La corrección no se proporciona en esta guía.

## Criterio de aceptación

El producto es conforme cuando:

- `npm start` mantiene el servicio activo sin errores de arranque.
- `/salud` responde HTTP 200.
- `/incidencias` responde HTTP 200 y un arreglo JSON.
- `npm run diagnostico` termina con código 0.
- Es posible crear una incidencia mediante `POST /incidencias`.
- Un segundo equipo reproduce el resultado desde el commit y las instrucciones registradas.

## Material de trabajo

- [Guía del estudiante](GUIA_DEL_ESTUDIANTE.md)
- [Lista de cotejo](LISTA_DE_COTEJO.md)
- [Plantilla del informe](evidencias/PLANTILLA_INFORME.md)

## Alcance académico

El proyecto es deliberadamente pequeño. No representa una arquitectura de producción ni incluye autenticación. Su propósito es evaluar reproducibilidad, trazabilidad, evidencia e interpretación técnica.
