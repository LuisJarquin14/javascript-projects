# Quiz App

## Descripción

Quiz App es una aplicación web interactiva que permite a los usuarios responder preguntas de opción múltiple mientras compiten contra el tiempo. Con una interfaz limpia y atractiva, la aplicación está diseñada para ser fácil de usar y educativa.

## Funcionalidades

- Temporizador integrado para cada pregunta (10 segundos).
- Sistema de puntuación para rastrear el progreso del usuario.
- Botón "Siguiente" para avanzar entre preguntas.
- Mensajes dinámicos que informan sobre respuestas correctas, incorrectas o el tiempo agotado.
- Reinicio automático del cuestionario al completarlo.

## Tecnologías Utilizadas

- **HTML5**: Estructura del proyecto.
- **CSS3**: Diseño responsivo y estilización.
- **JavaScript (ES6)**: Lógica interactiva del cuestionario.

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/LuisJarquin14/quiz-app.git
   ```
2. Abre el archivo `index.html` en tu navegador favorito para ejecutar la aplicación.

## Uso

1. Lee la pregunta que aparece en la pantalla.
2. Selecciona una de las opciones haciendo clic en el botón correspondiente.
3. Recibe retroalimentación sobre tu respuesta y avanza a la siguiente pregunta.
4. Al completar el cuestionario, obtendrás tu puntuación final.

## Archivos Principales

- index.html: Contiene la estructura principal de la aplicación.
- styles.css: Proporciona los estilos para mejorar la experiencia visual.
- script.js: Implementa la lógica del cuestionario, incluyendo el temporizador y el manejo de preguntas.

## Personalización

Puedes agregar más preguntas o modificar las existentes editando el archivo script.js. Las preguntas se encuentran en el array questions:

```javascript
const questions = [
  {
    question: "¿Tu pregunta aquí?",
    options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
    answer: "Respuesta correcta",
  },
  // Agrega más preguntas aqui
];
```

## Contribución

Si deseas contribuir a este proyecto, realiza un fork del repositorio, haz tus cambios y envía un pull request. ¡Las contribuciones son bienvenidas!

## Licencia

Este proyecto se encuentra bajo la licencia [MIT](/LICENSE).
