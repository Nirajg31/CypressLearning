class Homepage
{
getEditBox()
{
  return  cy.get('input[name="name"]:nth-child(2)')
}
getTwowayDataBinding()
{
    return cy.get('input[name="name"]:nth-child(1)')
}
getGendar()
{
    return cy.get('select')
}
getEnterprenurRadiotbutton()
{
    return cy.get('#inlineRadio3')
}
getShoptab()
{
return cy.get(':nth-child(2) > .nav-link')
}
}
export default Homepage;