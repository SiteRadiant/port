from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.responses import FileResponse, Response

app = FastAPI()
BASE_DIR = Path(__file__).resolve().parent.parent
BUILD_DIR = BASE_DIR / 'build'
INDEX_FILE = BUILD_DIR / 'index.html'

@app.get('/')
def read_root():
    if INDEX_FILE.exists():
        return FileResponse(INDEX_FILE)
    return {"message": "SiteRadiant backend is running"}

@app.get('/status')
def status():
    return {"status": "ok"}


@app.get('/robots.txt', include_in_schema=False)
def robots_txt():
    robots_file = BUILD_DIR / 'robots.txt'
    if robots_file.exists():
        return FileResponse(robots_file, media_type='text/plain')

    return Response('User-agent: *\nAllow: /\nSitemap: /sitemap.xml\n', media_type='text/plain')


@app.get('/sitemap.xml', include_in_schema=False)
def sitemap(request: Request):
    base_url = str(request.base_url).rstrip('/')
    urls = ['/', '/services', '/about', '/privacy', '/terms']
    sitemap_xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']

    for path in urls:
        sitemap_xml.append(f'  <url><loc>{base_url}{path}</loc></url>')

    sitemap_xml.append('</urlset>')
    return Response('\n'.join(sitemap_xml), media_type='application/xml')


@app.get('/{full_path:path}', include_in_schema=False)
def serve_spa(full_path: str):
    candidate = (BUILD_DIR / full_path).resolve()

    if BUILD_DIR in candidate.parents and candidate.is_file():
        return FileResponse(candidate)

    if INDEX_FILE.exists():
        return FileResponse(INDEX_FILE)

    return {"detail": "Build output not found"}
