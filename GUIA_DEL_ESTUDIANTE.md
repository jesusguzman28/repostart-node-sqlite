# Guía del estudiante — Primera sesión

## 1. Clonar el proyecto

```bash
git clone https://github.com/jesusguzman28/repostart-node-sqlite.git
cd repostart-node-sqlite
```

## 2. Crear tu rama individual

```bash
git switch -c estudiante-perez-ana
```

Reemplaza `perez-ana` por tus apellidos y nombres. Utiliza minúsculas, guiones y no emplees espacios ni tildes. No trabajes directamente en `main`.

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
capturas/perez-ana-fallo.png
```

Antes de continuar, escribe en el reporte por qué consideras que el producto es conforme o no conforme.

## 6. Investigar y corregir

Revisa los archivos y scripts disponibles en el proyecto. Identifica la causa, decide qué acción aplicar y registra el comando utilizado. La guía no proporciona directamente la solución.

## 7. Comprobar el resultado

```bash
npm run diagnostico
npm start
```

Cuando la aplicación permanezca activa, abre en el navegador las dos direcciones:

```text
http://localhost:3000/salud
http://localhost:3000/incidencias
```

La segunda dirección debe mostrar tres incidencias de ejemplo. La captura final debe mostrar esos registros.

Guarda la captura como:

```text
capturas/perez-ana-resultado.png
```

Detén el servidor con `Ctrl + C`.

## 8. Preparar el reporte

Copia la plantilla y cambia el nombre del ejemplo por tus apellidos y nombres:

macOS o Linux:

```bash
cp evidencias/PLANTILLA_INFORME.md REPORTE_PEREZ_ANA.md
```

Windows PowerShell:

```powershell
Copy-Item evidencias/PLANTILLA_INFORME.md REPORTE_PEREZ_ANA.md
```

Completa todos los campos del reporte.

## 9. Subir la rama

```bash
git add REPORTE_PEREZ_ANA.md capturas/
git commit -m "docs: agregar diagnóstico de Ana Pérez"
git push -u origin estudiante-perez-ana
```

No subas `.env`, `node_modules` ni la base de datos generada.

## 10. Entregar

Envía al docente:

- Apellidos y nombres.
- Código del estudiante.
- Nombre de la rama.
- Enlace de la rama en GitHub.

Ejemplo:

```text
Estudiante: Pérez Ramos, Ana
Código: 20260001
Rama: estudiante-perez-ana
Enlace: https://github.com/jesusguzman28/repostart-node-sqlite/tree/estudiante-perez-ana
```
