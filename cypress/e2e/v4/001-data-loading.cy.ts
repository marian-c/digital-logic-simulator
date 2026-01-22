describe('v4-001-data-loading', () => {
  let promptReturn = "v4-001-data-loading";
  beforeEach(() => {
    cy.visit('http://localhost:3000/v4', {  onBeforeLoad(win) {
        // Stub your functions here
        promptReturn+='+'
        cy.stub(win, 'prompt').returns(promptReturn)
      },});
  });
  it('Loads the first time on the default sketch', () => {
    cy.get('[data-testid="sketch-select"]').should('not.be.empty');
    cy.get('[data-testid="nuke"]').click();
    cy.get('[data-testid="sketch-select"]').should(
      'have.value',
      '019a9b06-98a3-74de-b01d-c3c54a113684',
    );
    cy.get('[data-testid="selected-sketch-title"]').should('have.text', 'SR Latch 1 [ex]');
  });

  it('switches to another sketch', () => {
    cy.get('[data-testid="sketch-select"]').select('019a166a-bbde-72ea-b1ac-91289b0dfb63');
    cy.get('[data-testid="sketch-select"]').should(
      'have.value',
      '019a166a-bbde-72ea-b1ac-91289b0dfb63',
    );
    cy.get('[data-testid="selected-sketch-title"]').should('have.text', 'NOR [ex]');

    cy.get('[data-testid="sketch-select"]').select('019a14c8-e0bb-775a-b2d8-632d15517a0b');
    cy.get('[data-testid="sketch-select"]').should(
      'have.value',
      '019a14c8-e0bb-775a-b2d8-632d15517a0b',
    );
    cy.get('[data-testid="selected-sketch-title"]').should('have.text', 'ALU [ex]');
  })

  it('creates new sketch', function() {
    cy.get('[data-testid="sketch-select"]').should('not.be.empty');
    cy.get('[data-testid="trigger-add-new-sketch"] span').click();
    cy.get('[data-testid="selected-sketch-title"]').should('have.text', promptReturn);

    cy.get('[data-testid="sketch-select"]').select('019a14c8-e0bb-775a-b2d8-632d15517a0b');
    cy.get('[data-testid="sketch-select"]').should(
      'have.value',
      '019a14c8-e0bb-775a-b2d8-632d15517a0b',
    );
    cy.get('[data-testid="selected-sketch-title"]').should('have.text', 'ALU [ex]');
  });
});
