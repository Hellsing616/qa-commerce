import carrinho from "../pages/carrinho"
import home from "../pages/home"
import menu from "../pages/menu"


Given("que estou na página inicial da loja", () => {
  menu.visitarHomePage();
});

When("adiciono o produto {string} ao carrinho", (nomeProduto) => { 
  home.clickBtnAdicionarCarrinho();
});

When("acesso a página do carrinho", () => {
  menu.clicarLinkCarrinho();
});

Then("devo visualizar os detalhes do produto e os cálculos corretos:", (dataTable) => {
  const dados = dataTable.rowsHash();

  carrinho.campoNomeProduto().should('have.text', dados.produto);
  carrinho.campoPreco().should('have.text', dados.preco);
  carrinho.campoQuantidade().should('have.text', dados.quantidade);
  carrinho.campoTotal().should('have.text', dados.total_item);
  carrinho.campoValorTotalProduto().should('have.text', dados.total_prod);
  carrinho.campoFrete().should('have.text', dados.frete);
  carrinho.campoValorTotalFrete().should('have.text', dados.total_final);
});

Then("devo visualizar o valor total do produto {string}", (totalEsperado) => {
    carrinho.campoTotal().should('contain.text', totalEsperado);
});

Then("devo visualizar {string} com a im=ncremetacao correta", (valorContador) => {
    home.verificarContadorCarrinho(valorContador);
});

Then("devo poder remover o produto do carrinho", () => {
    carrinho.removerItem();
});

Then("devo poder visualizar o {string}", (mensagemEsperada) => {
    carrinho.validarMensagemCarrinhoVazio(mensagemEsperada);
});

Then("a URL deve ser {string}", (urlEsperada) => {
  cy.url().should('eq', urlEsperada);
});