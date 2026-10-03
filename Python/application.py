from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'
db = SQLAlchemy(app)


class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f"Book('{self.name} - {self.description}')"





@app.route('/')
def get_books():
    books = Book.query.all()

    output = []

    for book in books:
        book_data = {
            'name': book.name,
            'description': book.description
        }
        output.append(book_data)

    return {"books": output}
