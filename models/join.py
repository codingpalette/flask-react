import pymysql, json
from flask import jsonify


class JoinModel():
    def __init__(self):
        self.email = str
        self.password = str

    def joinService(data):
        try:
            #mysql
            conn = pymysql.connect(host='localhost', user='root', password='root', db='test', charset='utf8')
            curs = conn.cursor()
            sql = '''INSERT INTO `users` set email = %s, nickname = %s, password = %s;'''
            curs.execute(sql, (data.email, '12', data.password))
            conn.commit()
            return jsonify(result = "success"), 201
        except:
            return '실패'


