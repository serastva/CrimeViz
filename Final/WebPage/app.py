from typing import Text
from flask import Flask, render_template,redirect
from flask_pymongo import PyMongo



# Create an instance of Flask
app = Flask(__name__)

#HOME
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/index.html")
def home2():
    return render_template("index.html")

#Tableau 1
@app.route("/tableau1.html")
def tableau1():
    return render_template("tableau1.html")

#Tableau 2
@app.route("/tableau2.html")
def tableau2():
    return render_template("tableau2.html")

#Tableau 3
@app.route("/tableau3.html")
def tableau3():
    return render_template("tableau3.html")

#Leaflet
@app.route("/leaflet.html")
def leaflet():
    return render_template("leaflet.html")

#crossfilter
@app.route("/crossfilter.html")
def crossfilter():
    return render_template("crossfilter.html")

#Data
@app.route("/data.html")
def data():
    return render_template("data.html")





if __name__ == "__main__":
    app.run(debug=True)