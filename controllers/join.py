from flask_restful import reqparse, Resource
import pymysql, json
from models import join

class Join(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('email', type=str)
        parser.add_argument('password', type=str)
        args = parser.parse_args()
        print(args)
        print(args.email)
        res = join.JoinModel.joinService(args)
        return res




