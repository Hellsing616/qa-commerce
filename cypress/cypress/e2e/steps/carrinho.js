import carrinho from "../pages/carrinho"
import home from "../pages/home"
import menu from "../pages/menu"


describe('Adicionar produto no carrinho',()=>{

        beforeEach(()=>{

          menu.visitarHomePage()
                  
        }   
    )

    it.only('veriifcar produto no carrinhom',()=>{        
      
         home.clickBtnAdicionarCarrinho()

         menu.clicarLinkCarrinho()          
                   
         carrinho.campoNomeProduto()
            .should('have.text','Moletom com capuz "Na minha máquina funciona"')

         carrinho.campoPreco()
            .should('have.text','Preço: R$59.00')
         
         carrinho.campoQuantidade()
            .should('have.text','Quantidade: 1')  
            
         carrinho.campoTotal()
            .should('have.text','Total: R$59.00')
            
         carrinho.campoValorTotalProduto()
            .should('have.text','Valor total do(s) Produto(s): R$59.00')

         carrinho.campoFrete()
            .should('have.text','Frete: R$19.90')
            
         carrinho.campoValorTotalFrete()
            .should('have.text','Valor total + Frete fixo: R$78.90')   
        
         cy.url().should('eq', 'http://localhost:3000/cart.html')


         

         carrinho.clickRemoverCompra() 

          //cy.screenshot('Carrinho com produtos')
    })     
    

     it('Adicionar produto ao carrinho remover produtos',()=>{                 
                                    
       //  cy.screenshot('Carrinho sem produtos')
       //cy.get(':nth-child(1) > .nav-link').click()
    })
})