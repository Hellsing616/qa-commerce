export const elements ={
    addItemProduto: (itemNome) => '#cart-coutn-${transform(itemNome)}',
    linkHome: ':nth-child(1) > .nav-link',
    linkCarrinho: ':nth-child(2) > .nav-link',
    linkMinhaConta: '#account-link',
    quantidadeProdutosCesto: '#cart-coutn'
}

function transform(texto){
    return texto.replace('','-').toLowerCase()
}

