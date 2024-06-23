 class Productpage
 {
getCheckout()
{
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}
getCheckoutbutton()
{
    return cy.get(':nth-child(4) > :nth-child(5) > .btn')

}
getCountry()
{
    return cy.get('#country')
}
getsuggestion()
{
    return cy.get('.suggestions > ul > li > a')
}
 getCheckbox()
 {
    return cy.get('#checkbox2')
 }
 getsubmitbutton()
 {
    return cy.get("input[type='submit']")
 }
 getalert()
 {
    return cy.get('.alert');
 }
 getproductprice()
 {
    return cy.get('tr td:nth-child(4) strong');
 }
 getTotal()
 {
    return cy.get('td h3 strong');
 }
}
export default Productpage