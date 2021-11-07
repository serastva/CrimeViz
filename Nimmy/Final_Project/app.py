from typing import Text
from flask import Flask, render_template,redirect
from flask_pymongo import PyMongo



# Create an instance of Flask
app = Flask(__name__)

# Route to render index.html template using data from Mongo
@app.route("/")
def home():
    return render_template("index.html")
@app.route("/index.html")
def index():
    return render_template("index.html")
@app.route("/tableau1.html")
def tableau1():
    return render_template("tableau1.html")
@app.route("/tableau2.html")
def tableau2():
    return render_template("tableau2.html")
@app.route("/tableau3.html")
def tableau3():
    return render_template("tableau3.html")
@app.route("/leaflet.html")
def leaflet():
    return render_template("leaflet.html")
@app.route("/crossfilter.html")
def crossfilter():
    return render_template("crossfilter.html")
@app.route("/analysis.html")
def analysis():
    return render_template("analysis.html")
@app.route("/data.html")
def data():
    return render_template("data.html")

if __name__ == "__main__":
    app.run(debug=True)