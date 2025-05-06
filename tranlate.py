from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

# Permitir acceso desde frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Diccionario de ejemplo para demostración
diccionario = {
    "la utz a wach": "¿Cómo estás?",
    "utz": "bien",
    "wach": "tú/cara",
    "maltyox": "gracias",
    "in k'iche' taq tzij": "palabras en k'iche'"
}

@app.get("/traducir")
async def traducir(texto: str):
    traduccion = diccionario.get(texto.lower(), "Traducción no encontrada")
    return JSONResponse(content={"traduccion": traduccion})
