#pragma once
#include <string>
#include <vector>

class RecipeIngredient;
class Ingredient;
class Recipe
{
public:
	static std::vector<Ingredient*> _vIngredients;
	Recipe(std::string sName);
	~Recipe();
	void initIngredients();
	void addIngredient(Ingredient* pIng, double dAmount, int iPriority);

private:
	std::string m_sName;
	std::vector<RecipeIngredient*> m_vIngredients;
};

