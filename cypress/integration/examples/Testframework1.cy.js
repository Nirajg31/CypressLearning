/// <reference types="Cypress" />
import Homepage  from "../pageobjects/Homepage";
import Productpage from "../pageobjects/Productpage";

describe('My second test suite',()=>
{
    before(()=>
    {
        cy.fixture('example').then(function(data)
        {
            this.data=data;

        })

    })

    it('My first test case',function()
    {
        const homepage=new Homepage();
        const productpage= new Productpage();
        cy.visit(Cypress.env('url')+"/angularpractice/");
        homepage.getEditBox().type(this.data.name);
        homepage.getGendar().select(this.data.gendar);
        homepage.getTwowayDataBinding().should('have.value',this.data.name);
        homepage.getEditBox().should('have.attr','minlength',2);
        homepage.getEnterprenurRadiotbutton().should('be.disabled');
        homepage.getShoptab().click({force:true});
        Cypress.config('defaultCommandTimeout',8000);
        this.data.productName.forEach(function(element) 
        {
            cy.selectProduct(element)
        });
      

        productpage.getCheckout().click({force:true})
        let sum=0;
        var totalamount 
        productpage.getproductprice().each(($e1) =>
                {
                sum += parseFloat($e1.text().split(" ")[1].trim());
                }).then(()=>
                {
               productpage.getTotal().invoke('text').then((totatlvalue)=>
                {
                totalamount =totatlvalue.split(" ")[1].trim();
                expect(sum).to.equal(Number(totalamount));
               
            })

         })
            productpage.getCheckoutbutton().click({force:true});
            productpage.getCountry().type('India');
            Cypress.config('defaultCommandTimeout',12000);
            productpage.getsuggestion().click();
            // productpage.getsuggestion().click();
            productpage.getCheckbox().click({force:true});
            productpage.getsubmitbutton().click();
            productpage.getalert().then (function(element)
            {
                const storetext= element.text();
                expect(storetext.includes('nikuccess!')).to.be.true
              
            })
            //npx cypress run --spec cypress\integration\examples\Testframework1.cy.js --headed --browser chrome --env url="https://rahulshettyacademy.com" run spec file from the browser in headed mode 

    })

})