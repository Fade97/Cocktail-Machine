#pragma once
#include <vector>

class Ingredient;
class RecipeIngredient
{
public:
	RecipeIngredient(Ingredient* pIng, double dAmount, int iPriority = 0);
	~RecipeIngredient();

	Ingredient* getIngredient()
	{
		return m_pIng;
	}
	double getAmount()
	{
		return m_dAmount;
	}
	int getPriority()
	{
		return m_iPriority;
	}
private:
	Ingredient* m_pIng;
	int m_iPriority;
	double m_dAmount;
};

