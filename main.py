from bottlepy import *

@route('/static/:path')
def static(path):
    return static_file(path, root='public/')

@get('/')
@get('/login')
def login_screen():
    pass

run(host='localhost', port=8080, debug=True)