# Guía del estudiante

## Reto

El equipo recibe una API que funciona parcialmente. Debe determinar objetivamente si el producto cumple el criterio de aceptación y entregar evidencia reproducible.

## Actividades

1. Registra fecha, integrantes, sistema operativo, `node --version`, `npm --version`, ruta de trabajo y commit analizado.
2. Crea `.env` a partir de `.env.example` y registra las variables sin revelar secretos.
3. Ejecuta `npm install` y conserva la salida relevante.
4. Ejecuta `npm start` y prueba `/salud` e `/incidencias`.
5. Reduce el hallazgo a un comando mínimo y registra salida, duración y código de salida.
6. Identifica la causa raíz. No te limites a copiar el mensaje de error.
7. Clasifica el producto como conforme, parcialmente conforme o no conforme.
8. Propón y aplica una acción técnica priorizada.
9. Vuelve a ejecutar exactamente las mismas comprobaciones.
10. Pide a otro equipo que reproduzca el resultado desde tus instrucciones.

## Comandos útiles

```bash
node --version
npm --version
pwd
git rev-parse HEAD
printenv PATH
npm run diagnostico
echo $?
lsof -i :3000
```

## Entregable

Guarda en `evidencias/` un informe con inventario del entorno, procedimiento, comando mínimo, error, código de salida, causa raíz, acción realizada, resultado posterior y reproducción independiente. Adjunta logs o capturas pertinentes.

No incluyas `node_modules`, la base de datos generada ni contraseñas en el informe.
