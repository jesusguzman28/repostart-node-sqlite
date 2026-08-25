# RepoStart: diagnóstico inicial de calidad

Proyecto de la Sesión de Aprendizaje N.° 01. El reto consiste en ejecutar una aplicación recibida, registrar su fallo inicial, aplicar una corrección y demostrar el resultado final.

## Requisitos

- Node.js 22.5 o superior
- npm
- Git
- Navegador web

## Entrega de la primera sesión

Cada equipo trabajará en una rama propia. No debe modificar ni subir cambios directamente a `main`.

El entregable será:

- Una rama llamada `equipo-XX`.
- Un reporte corto llamado `REPORTE_EQUIPO_XX.md`.
- Una captura del fallo inicial.
- Una captura del resultado final.

Ejemplo del Equipo 01:

```text
REPORTE_EQUIPO_01.md
capturas/equipo-01-fallo.png
capturas/equipo-01-resultado.png
```

## Inicio rápido

```bash
git clone https://github.com/jesusguzman28/repostart-node-sqlite.git
cd repostart-node-sqlite
git switch -c equipo-01
cp .env.example .env
npm install
```

Cambia `01` por el número asignado a tu equipo.

Continúa con la [guía del estudiante](GUIA_DEL_ESTUDIANTE.md). El formato que deben completar se encuentra en [evidencias/PLANTILLA_INFORME.md](evidencias/PLANTILLA_INFORME.md).

## Criterio de aceptación

El producto queda conforme cuando:

- La aplicación inicia sin errores.
- `npm run diagnostico` termina con código 0.
- `http://localhost:3000/salud` responde con estado `OK`.
- El equipo presenta evidencias del antes y el después.
