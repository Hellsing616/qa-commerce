import { elements as el } from "./elements"

class Menu{

    visitarHomePage(){
        cy.visit('http://localhost:3000/')
    }

    clicarLinkHome(){
        cy.get(el.linkHome).click
    }

    clicarLinkCarrinho(){
        cy.get(el.linkCarrinho).click
    }
    
    clicarLinkMinhaConta(){
        cy.get(el.linkMinhaConta).click
    }

      validarCampoQtdItnsProdutos(){
         cy.get(el.quantidadeProdutosCesto)
          .should('be.visible')
          .and('have.text',1)
    }
}


export default new Menu()