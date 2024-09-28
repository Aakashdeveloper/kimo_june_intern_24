from flask import Flask,request,jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/kimomay"
mongo = PyMongo(app)

@app.route('/',methods=["GET"])
def sayHi():
    return jsonify({"message":"Default Route"})

@app.route('/books',methods=["GET"])
def get_books():
    books = mongo.db.books
    result = []
    for book in books.find():
        result.append({
            "_id":str(book["_id"]),
            "author":book["author"],
            "imageLink":book["imageLink"],
            "language":book["language"],
            "link":book["link"],
            "pages":book["pages"],
            "title":book["title"],
            "year":book["year"]
        })
       
    return jsonify({"data":result})

@app.route('/addbook',methods=["POST"])
def add_books():
    data = request.get_json()
    books = mongo.db.books
    books.insert_one(data)
    return jsonify({"message":"Book added"})

@app.route('/book/<name>',methods=['GET'])
def book_authors(name):
    books = mongo.db.books
    result = []
    for book in books.find({"author":name}):
        result.append({
            "_id":str(book["_id"]),
            "author":book["author"],
            "imageLink":book["imageLink"],
            "language":book["language"],
            "link":book["link"],
            "pages":book["pages"],
            "title":book["title"],
            "year":book["year"]
        })
       
    return jsonify({"data":result})

@app.route('/bookq',methods=['GET'])
def book_author():
    books = mongo.db.books
    name = request.args.get('name')
    result = []
    for book in books.find({"author":name}):
        result.append({
            "_id":str(book["_id"]),
            "author":book["author"],
            "imageLink":book["imageLink"],
            "language":book["language"],
            "link":book["link"],
            "pages":book["pages"],
            "title":book["title"],
            "year":book["year"]
        })
       
    return jsonify({"data":result})

# update
@app.route('/addbook',methods=["PUT"])
def add_books():
    data = request.get_json()
    books = mongo.db.books
    result = books.update_one({"_id",ObjectId(id)},{"$set":data})
    books.insert_one(data)
    return jsonify({"message":"Book added"})

if __name__=="__main__":
    app.run(port=8000)