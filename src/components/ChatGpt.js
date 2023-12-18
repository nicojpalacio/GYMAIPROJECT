import axios from "axios";

// Reemplaza con tu clave de API
const apiUrl = "/api/create";

async function obtenerRespuesta(bodyPart, objective) {
  try {
    const respuesta = await axios.post(
        "/api/create",
      {
        bodyPart,
        objective,
        maxTokens: 300, // Puedes ajustar este valor según tus necesidades
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return respuesta.data.response.content;
  } catch (error) {
    console.error("Error al obtener respuesta de ChatGPT:", error);
    return "Error al obtener respuesta";
  }
}
export { obtenerRespuesta };
