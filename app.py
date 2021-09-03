from flask import Flask, render_template

app = Flask(__name__, static_folder='./front/build', static_url_path='/')

def hello():
    print('hello')

@app.route('/api')
def api():
    return 'api'



@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(host="127.0.0.1", port="5000", debug=True)
