# Guía de uso: Generación de botones MCP y configuración


## 1. Creación del archivo `mcp.json`

El archivo `mcp.json` define la configuración de los servidores MCP en tu proyecto. Debe ubicarse en la raíz (o en `.vscode/`) y tener una estructura similar a la siguiente:

```json
{
  "servers": {
    "design": {
      "type": "stdio",
      "command": "node",
      "args": ["<RUTA_DEL_SCRIPT_DEL_MCP_SERVER>"],
      "env": {
        "FIGMA_API_TOKEN": "FIGMA_TOKEN",
        "FIGMA_FILE_KEY": "6tPdBwV5EEQXHSudC71pAw"
      }
    }
  }
}
```

Ajusta los valores de las variables de entorno según tu configuración y credenciales.

---

## 2. Ejemplo de ejecución en terminal con Copilot

Para generar el HTML documentado del botón MCP usando Copilot, ejecuta el siguiente comando en la terminal de VS Code:

```
@generate_button_html
```

Esto generará el bloque HTML con documentación, variantes, tamaños y ejemplos de uso del componente `cds-button`.

---

## 3. Importación de `CUSTOM_ELEMENTS_SCHEMA` en Angular

Para que Angular reconozca los custom elements de MCP (como `<cds-button>`), debes importar y agregar `CUSTOM_ELEMENTS_SCHEMA` en tu componente principal. Ejemplo:

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }
```

Esto permite usar componentes web personalizados sin que Angular arroje errores.

---

## Notas adicionales
- Asegúrate de importar el componente web correspondiente en tu `main.ts`:
  ```typescript
  import '@carbon/web-components/es/components/button/index.js';
  ```
- Los estilos de Carbon se aplican automáticamente al importar el componente.
- Consulta la documentación oficial de MCP y Carbon para más detalles.
