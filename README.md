# RepoStart: diagnóstico inicial de calidad

Proyecto de la Sesión de Aprendizaje N.° 01. El reto consiste en ejecutar una aplicación recibida, registrar su fallo inicial, aplicar una corrección y demostrar el resultado final.

## Requisitos

- Node.js 22.5 o superior
- npm
- Git
- Navegador web

## Entrega de la primera sesión

Cada estudiante trabajará individualmente en una rama propia. No debe modificar ni subir cambios directamente a `main`.

El entregable será:

- Una rama llamada `estudiante-apellido-nombre`.
- Un reporte corto llamado `REPORTE_APELLIDO_NOMBRE.md`.
- Una captura del fallo inicial.
- Una captura del resultado final.

Ejemplo para la estudiante Ana Pérez:

```text
REPORTE_PEREZ_ANA.md
capturas/perez-ana-fallo.png
capturas/perez-ana-resultado.png
```

## Inicio rápido

```bash
git clone https://github.com/jesusguzman28/repostart-node-sqlite.git
cd repostart-node-sqlite
git switch -c estudiante-perez-ana
cp .env.example .env
npm install
```

Cambia `perez-ana` por tus apellidos y nombres, usando minúsculas, guiones y sin espacios ni tildes.

Continúa con la [guía del estudiante](GUIA_DEL_ESTUDIANTE.md). El formato que deben completar se encuentra en [evidencias/PLANTILLA_INFORME.md](evidencias/PLANTILLA_INFORME.md).

## Criterio de aceptación

El producto queda conforme cuando:

- La aplicación inicia sin errores.
- `npm run diagnostico` termina con código 0.
- `http://localhost:3000/salud` responde con estado `OK`.
- `http://localhost:3000/incidencias` muestra tres registros iniciales.
- El estudiante presenta evidencias del antes y el después.
