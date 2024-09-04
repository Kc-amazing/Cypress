

it('my first test',() => {
  cy.visit('/board/1')
//   /* ==== Generated with Cypress Studio ==== */
//   cy.get('h2').click();
//   cy.get('[data-cy="add-list-input"]').clear('n');
//   cy.get('[data-cy="add-list-input"]').type('new list{enter}');
//   /* ==== End Cypress Studio ==== */

cy.get('[data-cy="add-list-input"]')
.type('new list{enter}')
cy.contains('Add another card')
.click()
cy.get('[data-cy="new-card-input"]')
.type('new card {enter}')
cy.contains('list')
.click()
})

// it.only('fav', () => {
//     cy.visit('/')
//     cy.get('[data-cy="star"]')
//     .first()
//     .click({force: true})
    
// });
it.
only('test2', () => {
  cy.visit('/')
  

});