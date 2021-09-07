from flask import jsonify, make_response
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from flask_restful import reqparse, Resource
import pymysql, json
from models import join

class Login(Resource):
    def post(self):
        print("로그인")

        parser = reqparse.RequestParser()
        parser.add_argument('email', type=str)
        parser.add_argument('password', type=str)
        args = parser.parse_args()
        print(args)

        #mysql
        conn = pymysql.connect(host='localhost', user='root', password='root', db='test', charset='utf8')
        curs = conn.cursor(pymysql.cursors.DictCursor)
        sql = '''SELECT * FROM users WHERE email = %s;'''
        curs.execute(sql, args.email)
        res = curs.fetchone()
        print(res)

        return jsonify(
            result = "success",
            # 검증된 경우, access 토큰 반환
            access_token = create_access_token(identity = args.email)
        ), 200


class Auth(Resource):
    @jwt_required()
    def get(self):
        print('12312312')
        return True


