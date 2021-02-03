#pragma once
#include <string>
class Ingredient
{
public:
	Ingredient(std::string sName);
	~Ingredient();

	void setConnection( int iConnection );

private:
	std::string m_sName;
	int m_iConnection;



};

