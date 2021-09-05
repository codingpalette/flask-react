from flask_restful import reqparse, Resource

parser = reqparse.RequestParser()

class Join(Resource):
    def post(self):
        args = parser.parse_args()
        print(args)
        return 201

