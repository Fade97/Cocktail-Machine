from flask import Flask, render_template
from recipeloader import *

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', ingredients=ingredientList, recipes=recipeList)


rl = RecipeLoader()
rl.loadRecipes()
app.run('0.0.0.0', debug=True)
