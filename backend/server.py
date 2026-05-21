from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def read_root():
    return {"message": "Hello from Site Radiant backend"}

@app.get('/status')
def status():
    return {"status": "ok"}
