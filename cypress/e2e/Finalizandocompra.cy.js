beforeEach(() => {
  cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  cy.fixture('perfil').then(dados =>{
      cy.login(dados.usuario, dados.senha)
      cy.get('#primary-menu > .menu-item-629 > a').click()
  })
})

it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
  cy.addProdutos('Abominable Hoodie', 'M', 'Red', 1)
  cy.get('#primary-menu > .menu-item-629 > a').click()
  cy.get(':nth-child(2) > .page-numbers').click()
  cy.addProdutos('Atlas Fitness Tank', 'M', 'Blue', 1)
  cy.get('#primary-menu > .menu-item-629 > a').click()
  cy.get(':nth-child(2) > .page-numbers').click()
  cy.addProdutos('Atomic Endurance Running Tee (Crew-Neck)', 'M', 'Black', 1)
  cy.get('#primary-menu > .menu-item-629 > a').click()
  cy.get(':nth-child(2) > .page-numbers').click()
  cy.addProdutos('Augusta Pullover Jacket', 'S', 'Orange', 1)
  cy.get('.woocommerce-message > .button').click()
  cy.get('.checkout-button').click()
  cy.get('#terms').check()
  cy.get('#place_order').click()
});


