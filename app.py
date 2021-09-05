from flask import Flask
from flask_cors import CORS
from flask_restful import Api
import pymysql, json

from controllers.todo import Todo

app = Flask(__name__, static_folder='./front/build', static_url_path='/')
CORS(app)
api = Api(app)

# 404 not found > react_router
@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.route("/")
def index():
    return app.send_static_file('index.html')

def hello():
    print('hello')
    return 'aaa'

api.add_resource(Todo, '/api/todos')



@app.route("/test")
def test():
    #mysql
    conn = pymysql.connect(host='localhost', user='root', password='root', db='test', charset='utf8')
    curs = conn.cursor(pymysql.cursors.DictCursor)

    sql = 'select * from users'
    curs.execute(sql)
    res = curs.fetchall()

    data = json.dumps(res, ensure_ascii = False, default=str)
    return data;



if __name__ == "__main__":
    app.run(host="127.0.0.1", port="5000", debug=True)
