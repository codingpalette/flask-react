from flask_restful import Resource

from models import todo


class Todo(Resource):
    def get(self):
        aa = todo.TodoService.aa('aaaa11')
        print(aa)
        return 'aaaaa'

