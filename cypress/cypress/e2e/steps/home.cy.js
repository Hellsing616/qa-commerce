describe('Adicionar produto no carrinho',()=>{

        beforeEach(()=>{

           carrinho.visitarPaginaHome()        
                  
        }   
    )

    it.only('Adicionar produto ao carrinho com item',()=>{    
        
          carrinho.clickBtnAdicionarCarrinho()

           carrinho.clickBtnCarrinho()
    
           carrinho.validarCamposDadosCompra()

           carrinho.validarCamposValorProduto()  
        
          cy.contains('Moletom "Testar é o único lugar onde falhar é realmente uma vitória!"').should('be.visible')
          cy.url().should('eq', 'http://localhost:3000/cart.html')
          //cy.screenshot('Carrinho com produtos')
    })     
    

     it('Adicionar produto ao carrinho remover produtos',()=>{                 
                                    
       //  cy.screenshot('Carrinho sem produtos')
       //cy.get(':nth-child(1) > .nav-link').click()
    })
})