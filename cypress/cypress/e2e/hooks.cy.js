describe('Hooks',()=>{

    before(()=>{
        cy.log('Executa somentes antes de todos')
        
    })

     beforeEach(()=>{
        cy.log('Executa antes de todos')
        
    })

     after(()=>{
        cy.log('Executa somentes após de todos')
        
    })

     it(()=>{
        cy.log('')
        
    })

     afterEach(()=>{
        cy.log('Executa após de todos')
        
    })

     it(()=>{
        cy.log('Testes gerais')
        
    })

     it(()=>{
        cy.log('Teste gerais')
        
    })
})