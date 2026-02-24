import { elements as el } from "./elements"

class Carrinho{

    visitarCarrinhoPage(){
        cy.visit('http://localhost:3000/cart.html')
    }  
           
    validarCamposValorProduto(){
        //Campos de validacao
        cy.get(el.txtPreco)
        cy.get(el.txtQtdoUnitario)
        cy.get(el.txtvalorTotal)
    }
       
    validarCamposDadosCompra(){
        cy.get(el.txtValorTotalProduto)//valor total
        cy.get(el.txtFrete) //frete
        cy.get(el.txtValorTotalFrete)// valor total + frete

    }  
}

export default new Carrinho()

