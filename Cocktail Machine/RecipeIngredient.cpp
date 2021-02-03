#include "stdafx.h"
#include "RecipeIngredient.h"
#include "Ingredient.h"

RecipeIngredient::RecipeIngredient( Ingredient* pIng, double dAmount, int iPriority )
	: m_pIng(pIng), m_iPriority(iPriority), m_dAmount(dAmount)
{}

RecipeIngredient::~RecipeIngredient()
{}
