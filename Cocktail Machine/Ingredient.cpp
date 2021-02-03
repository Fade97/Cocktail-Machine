#include "stdafx.h"
#include "Ingredient.h"


Ingredient::Ingredient( std::string sName )
	: m_sName(sName), m_iConnection(-1)
{}

Ingredient::~Ingredient()
{}

void Ingredient::setConnection( int iConnection )
{
	m_iConnection = iConnection;
}
