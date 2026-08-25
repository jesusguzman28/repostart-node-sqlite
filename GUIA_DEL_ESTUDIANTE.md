# Guía del estudiante — Primera sesión

## 1. Clonar el proyecto

```bash
git clone https://github.com/jesusguzman28/repostart-node-sqlite.git
cd repostart-node-sqlite
```

## 2. Crear la rama del equipo

```bash
git switch -c equipo-01
```

Reemplaza `01` por el número de tu equipo. No trabajes directamente en `main`.

## 3. Preparar el proyecto

macOS o Linux:

```bash
cp .env.example .env
npm install
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env
npm install
```

## 4. Registrar el entorno

```bash
node --version
npm --version
git branch --show-current
```

Completa estos datos en el reporte.

## 5. Reproducir el fallo inicial

```bash
npm start
```

Después consulta el código de salida.

macOS o Linux:

```bash
echo $?
```

Windows PowerShell:

```powershell
$LASTEXITCODE
```

Toma una captura donde se observe el mensaje del fallo y guárdala como:

```text
capturas/equipo-01-fallo.png
```

Antes de continuar, escribe en el reporte por qué consideras que el producto es conforme o no conforme.

## 6. Investigar y corregir

Revisa los archivos y scripts disponibles en el proyecto. Identifica la causa, decide qué acción aplicar y registra el comando utilizado. La guía no proporciona directamente la solución.

## 7. Comprobar el resultado

```bash
npm run diagnostico
npm start
```

Cuando la aplicación permanezca activa, abre en el navegador:

```text
http://localhost:3000/salud
```

Guarda la captura como:

```text
capturas/equipo-01-resultado.png
```

Detén el servidor con `Ctrl + C`.

## 8. Preparar el reporte

Copia la plantilla y cambia `01` por tu número:

macOS o Linux:

```bash
cp evidencias/PLANTILLA_INFORME.md REPORTE_EQUIPO_01.md
```

Windows PowerShell:

```powershell
Copy-Item evidencias/PLANTILLA_INFORME.md REPORTE_EQUIPO_01.md
```

Completa todos los campos del reporte.

## 9. Subir la rama

```bash
git add REPORTE_EQUIPO_01.md capturas/
git commit -m "docs: agregar diagnóstico del equipo 01"
git push -u origin equipo-01
```

No subas `.env`, `node_modules` ni la base de datos generada.

## 10. Entregar

Envía al docente:

- Nombre del equipo.
- Integrantes.
- Nombre de la rama.
- Enlace de la rama en GitHub.

Ejemplo:

```text
Equipo: Equipo 01
Rama: equipo-01
Enlace: https://github.com/jesusguzman28/repostart-node-sqlite/tree/equipo-01
```
