import carrinho from "../pages/carrinho"


describe('Carrinho',()=>{

        beforeEach(()=>{

           carrinho.visitarPaginaHome()            
           
           carrinho.clickBtnAdicionarCarrinho()

            carrinho.clickBtnCarrinho()
    
        
        

        //Campos de validacao
        cy.get('.cart-item > :nth-child(2)')//preço
        cy.get('.cart-item > :nth-child(3)')//qtd
        cy.get('.cart-item > :nth-child(4)')//total
       
        //Assert

        
       // cy.contains('Moletom com capuz "Na minha máquina funciona').should('be.visible')

        cy.get('#total-products')//vaor total
        cy.get('#shipping-fee') //frete
        cy.get('#total-with-shipping')// valor total + frete

        cy.url().should('eq', 'http://localhost:3000/cart.html')

        }   
    )

    it('Adicionar produto ao carrinho com item',()=>{    
        
        cy.get('#cart-count')
          .should('be.visible')
          .and('have.text',1)

          cy.get('.cart-item > .btn').click()
        //  cy.screenshot('Carrinho com produtos')
    })     
    

     it('Adicionar produto ao carrinho remover produtos',()=>{                 
                                    
       //  cy.screenshot('Carrinho sem produtos')

        cy.get(':nth-child(1) > .nav-link').click()
    })
})