from flask import Flask, request, Response, send_from_directory
from flask_restful import Api
from flask_cors import CORS
import pymysql, json

from controllers.join import Join
from controllers.todo import Todo


app = Flask(__name__, static_folder='./front/build', static_url_path='/')
CORS(app)
api = Api(app)

# 404 not found > react_router
@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder,'index.html')

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

def hello():
    print('hello')
    return 'aaa'

api.add_resource(Todo, '/api/todos')
api.add_resource(Join, '/api/join')



@app.route("/api/test", methods=['GET', 'POST'])
def test():
    print('123123');
    res = Response("block")
    print(request.headers)
    if request.method == 'POST':
        print('test')
        return 'aaa'

    #mysql
    # conn = pymysql.connect(host='localhost', user='root', password='root', db='test', charset='utf8')
    # curs = conn.cursor(pymysql.cursors.DictCursor)
    #
    # sql = 'select * from users'
    # curs.execute(sql)
    # res = curs.fetchall()
    #
    # data = json.dumps(res, ensure_ascii = False, default=str)
    # return data;



if __name__ == "__main__":
    app.run(host="127.0.0.1", port="5000", debug=True)
