# Guía del estudiante

## Reto

El equipo recibe una API que no completa su arranque en un entorno limpio. Debe determinar objetivamente si cumple el criterio de aceptación y entregar evidencia reproducible. No modifiques archivos antes de registrar el estado inicial.

## Actividades

1. Registra fecha, integrantes, sistema operativo, `node --version`, `npm --version`, ruta de trabajo y commit recibido.
2. Crea `.env` a partir de `.env.example` y registra las variables sin revelar secretos.
3. Ejecuta `npm install` y conserva la salida relevante.
4. Ejecuta `npm start`, registra si el proceso permanece activo y captura su código de salida.
5. Reduce el hallazgo a un comando mínimo y registra salida, duración y código de salida.
6. Identifica la causa raíz. No te limites a copiar el mensaje de error.
7. Clasifica el producto como conforme, parcialmente conforme o no conforme.
8. Propón, justifica y aplica una acción técnica priorizada.
9. Repite exactamente las mismas comprobaciones y, si arranca, prueba `/salud` e `/incidencias`.
10. Registra el commit posterior a tu intervención sin perder la referencia del commit recibido.
11. Pide a otro equipo que reproduzca el resultado desde tus instrucciones y complete la validación independiente.

## Comandos orientativos

```bash
node --version
npm --version
pwd
git rev-parse HEAD
printenv PATH
npm start
npm run diagnostico
echo $?
lsof -i :3000
```

Selecciona únicamente los comandos que produzcan evidencia útil y explica qué demuestra cada uno.

## Entregable

Completa `evidencias/PLANTILLA_INFORME.md`. Adjunta logs o capturas pertinentes y utiliza `LISTA_DE_COTEJO.md` para revisar la entrega antes de sustentarla.

No incluyas `node_modules`, la base generada, contraseñas, tokens ni otros secretos.
