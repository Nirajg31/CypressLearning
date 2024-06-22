describe('Hadle table element', () => {

  it('Handle table element', () => {
    
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get('tr td:nth-child(2)').each(($e1,index,$list)=>
      {
       const storetext= $e1.text();
      if(storetext.includes('Python'))
        {
          cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
          {
            const pricetext=price.text();
          expect(pricetext).to.equal('25')

          })
        }


      })


     })

  });


