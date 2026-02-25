import menu from "../pages/menu"

describe('Adicionar produto no carrinho',()=>{

        beforeEach(()=>{

          menu.visitarHomePage()
                  
        }   
    )

    it('Acesso login com credencias validas',()=>{        
        menu.clicarLinkMinhaConta()
        cy.get('#email').type(Cypress.env.username)
        cy.get('#password').type(Cypress.env.password)
        cy.get('.btn').click()         
    })     
    

     it('Acesso login com credencias invalidas',()=>{                 
                                    
       
    })
})