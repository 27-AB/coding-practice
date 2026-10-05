from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'


db = SQLAlchemy(app)

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title=db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(120), nullable=False)
    completed = db.Column(db.Boolean, default=False)

with app.app_context():
    db.create_all()

@app.route('/tasks')
def get_tasks():
    output = []
    tasks = Task.query.all()
    for task in tasks:
        task_data = {
            "id": task.id,
            "title": task.title,
            "description": task.description,
            "completed":task.completed

        }
        output.append(task_data)
    return {"tasks": output}
@app.route('/tasks' , methods=['POST'])
def add_task():
    data = request.get_json()
    new_task= Task(
        title = data['title'],
        description = data['description'],
        completed = data.get('completed', False)

    )
    db.session.add(new_task)
    db.session.commit()

    return {
        "message": "Task added successfully",
        "task": {
            "id": new_task.id,
            "title": new_task.title,
            "description": new_task.description,
            "completed": new_task.completed 
        }
    }