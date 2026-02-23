describe('Carrinho',()=>{
    it.only('Adicionar produto ao carrinho com item',()=>{
        //Arrange
        cy.visit('http://localhost:3000')

        //Act                  
           
        cy.get(':nth-child(4) > .card > .card-body > .btn').click()// adicionar carrinho
        
        cy.get(':nth-child(2) > .nav-link').click() //carrinho

        //Campos de validacao
        cy.get('.cart-item > :nth-child(2)')//preço
        cy.get('.cart-item > :nth-child(3)')//qtd
        cy.get('.cart-item > :nth-child(4)')//total
       
        //Assert
        cy.get('#total-products')//vaor total
        cy.get('#shipping-fee') //frete
        cy.get('#total-with-shipping')// valor total + frte

        cy.url().should('eq', 'http://localhost:3000/cart.html')

        cy.get('#cart-count')
          .should('be.visible')
          .and('have.text',3)

    })

     it('Adicionar produto ao carrinho remover produtos',()=>{
        //Arrange
        cy.visit('http://localhost:3000')
        
        //Act                
                        
        cy.get(':nth-child(2) > .nav-link').click() //carrinho

        //Campos de validacao
        cy.get('.cart-item > :nth-child(2)')//preço
        cy.get('.cart-item > :nth-child(3)')//qtd
        cy.get('.cart-item > :nth-child(4)')//total
       
        //Assert
        cy.get('#total-products')//vaor total
        cy.get('#shipping-fee') //frete
        cy.get('#total-with-shipping')// valor total + frte

        cy.url().should('eq', 'http://localhost:3000/cart.html')
       
        cy.get(':nth-child(1) > .btn').click()

        cy.get(':nth-child(1) > .nav-link').click()
    })
})