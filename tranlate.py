from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

# Permitir acceso desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Diccionario original K’iche’ -> Español
diccionario = {
    "la utz a wach": "¿cómo estás?",
    "utz": "bien",
    "wach": "tú/cara",
    "maltyox": "gracias",
    "in k'iche' taq tzij": "palabras en k'iche'"
}

# Diccionario invertido: Español -> K’iche’
diccionario_invertido = {v.lower(): k for k, v in diccionario.items()}

@app.post("/translate")
async def traducir(request: Request):
    datos = await request.json()
    texto = datos.get("texto", "").lower()
    traduccion = diccionario_invertido.get(texto, "Traducción no encontrada")
    return JSONResponse(content={"traduccion": traduccion})

