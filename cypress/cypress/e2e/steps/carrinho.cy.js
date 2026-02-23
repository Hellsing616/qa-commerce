import carrinho from "../pages/carrinho"


describe('Carrinho',()=>{

        beforeEach(()=>{

           carrinho.visitarPaginaHome()            
           
           carrinho.clickBtnAdicionarCarrinho()

           carrinho.clickBtnCarrinho()
    
           //carrinho.validarCamposDadosCompra()

         //  carrinho.validarCamposValorProduto()  
        
           // cy.contains('Moletom com capuz "Na minha máquina funciona').should('be.visible')
         //  cy.url().should('eq', 'http://localhost:3000/cart.html')

        }   
    )

    it.only('Adicionar produto ao carrinho com item',()=>{    
        
       // carrinho.validarCampoQtdItnsProdutos()

       // cy.get('.cart-item > .btn').click()
        //  cy.screenshot('Carrinho com produtos')
    })     
    

     it('Adicionar produto ao carrinho remover produtos',()=>{                 
                                    
       //  cy.screenshot('Carrinho sem produtos')
       //cy.get(':nth-child(1) > .nav-link').click()
    })
})