from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles

answer = 'TRAIN'

app = FastAPI()

@app.get('/answer')
def create_answer():
    return {"answer" : answer}

app.mount("/wordle", StaticFiles(directory="static", html=True), name="static")