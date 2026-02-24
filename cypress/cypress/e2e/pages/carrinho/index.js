import { elements as el } from "./elements"

class Carrinho{

    visitarCarrinhoPage(){
        cy.visit('http://localhost:3000/cart.html')
    }             
      
    campoNomeProduto(){
      return  cy.get(el.txtNomeProduto)
    }
    
    campoPreco(){
      return  cy.get(el.txtPreco)
    }

    campoQuantidade(){
      return  cy.get(el.txtQtdoUnitario)
    }

    campoTotal(){
      return  cy.get(el.txtvalorTotal)
    }

    campoValorTotalProduto(){
      return  cy.get(el.txtValorTotalProduto)//valor total        
    }

    campoFrete(){
       return cy.get(el.txtFrete) //frete
    }

    campoValorTotalFrete(){
       return cy.get(el.txtValorTotalFrete)// valor total + frete
    }

    clickRemoverCompra(){
        cy.get(el.remover).click()
    }

    clickIrCheckout(){
        cy.get(el.ircheckout).click()
    }

}

export default new Carrinho()

