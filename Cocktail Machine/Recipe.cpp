#include "stdafx.h"
#include "Recipe.h"
#include "Ingredient.h"
#include "RecipeIngredient.h"

std::vector<Ingredient*> Recipe::_vIngredients;

Recipe::Recipe( std::string sName )
	: m_sName(sName)
{
	if ( Recipe::_vIngredients.size() <= 0 )
	{
		initIngredients();
	}
}

Recipe::~Recipe()
{}

void Recipe::initIngredients()
{
	Recipe::_vIngredients.push_back( new Ingredient( "Cola" ) );
}

void Recipe::addIngredient( Ingredient * pIng, double dAmount, int iPriority )
{
	auto ing = new RecipeIngredient( pIng, dAmount, iPriority );
	m_vIngredients.push_back( ing );
}
