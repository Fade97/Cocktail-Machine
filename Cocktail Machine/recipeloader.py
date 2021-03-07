import json
from os import fstat

ingredientList = []
recipeList = []


class RecipeLoader:
    def __init__(self):
        return

    def loadRecipes(self):
        with open('recipe.json') as jsonFile:
            self.jsonData = json.load(jsonFile)
            for i in self.jsonData['ingredients']:
                ingredientList.append(Ingredient(jsonData=i))
            for r in self.jsonData['recipes']:
                recipeList.append(Recipe(jsonData=r))

    def saveRecipes(self):
        with open('recipe.json', 'w') as jsonFile:
            data = {
                'ingredients': [
                    {
                        "name": x.name,
                        "active":  x.active,
                        "pump": x.pump
                    } for x in ingredientList
                ],
                'recipes': [
                    {
                        "name": x.name,
                        "ingredients": [
                            {
                                "name": y[0].name,
                                "priority": y[2],
                                "amount": y[1]
                            } for y in x.ingredients
                        ],
                        "image": x.image
                    } for x in recipeList
                ]
            }
            print(json.dumps(data, indent=4))
            json.dump(data, jsonFile, indent=4)


class Ingredient:
    def __init__(self, name='', active=False, pump=0, jsonData=None):
        if jsonData == None:
            self.name = name
            self.active = active
            self.pump = pump
        else:
            self.name = jsonData['name']
            self.active = jsonData['active']
            self.pump = jsonData['pump']


class Recipe:
    def __init__(self, name='', jsonData=None):
        self.ingredients = []
        self.totalAmount = 0
        if jsonData == None:
            self.name = name
        else:
            self.name = str(jsonData['name'])
            for i in jsonData['ingredients']:
                ing = [x for x in ingredientList if x.name == i['name']]
                if len(ing) == 0:
                    ingredientList.append(Ingredient(i['name']))
                self.ingredients.append(
                    [next(x for x in ingredientList if x.name == i['name']), i['amount'], i['priority']])
                self.totalAmount += i['amount']
            self.image = str(jsonData['image'])

    def addIngredient(self, ingredient, amount, priority):
        self.ingredients.append({ingredient, amount, priority})
        self.totalAmount += amount


if __name__ == "__main__":
    rl = RecipeLoader()
    rl.loadRecipes()

    for r in recipeList:
        print(r.name)
        for i in r.ingredients:
            fStr = "   "
            print(fStr + str(i[0].name))
            print(fStr + fStr + str(i[0].active))
            print(fStr + fStr + str(i[0].pump))
            print(fStr + fStr + str(i[1]))
            print(fStr + fStr + str(i[2]))
        print(r.image)
        print('total: ' + str(r.totalAmount))

    print()
    for i in ingredientList:
        print(i.name)
        print(i.active)
        print(i.pump)

    print()
    print()
    # rl.saveRecipes()
