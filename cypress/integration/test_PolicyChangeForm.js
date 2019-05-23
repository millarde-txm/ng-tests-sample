const insuredInfo = {
  "insuredName":"Shekar",
  "policyNumber":"00025649",
  "agentEmail":""
}
const appName='tmoPolicyChange-ng';
const theUrl='/'+appName+'/'+'?insuredName='+insuredInfo.insuredName+'&policyNumber='+insuredInfo.policyNumber+'&agentEmail='+insuredInfo.agentEmail

  describe('Alternate Employer page tests', function() {

    it('Visit page, verify passed in data in correct fields', function() {
      cy.visit(theUrl);
      // other passed-in fields do not have selectors...
      cy.get('#agentEmail').should('have.value', insuredInfo.agentEmail);
    });

    it('enter and verify new email address', function() {
        cy.visit(theUrl);
        const newEmail="shekarbalan@texasmutual.com";
        cy.get('#agentEmail').clear().type(newEmail).should('have.value', newEmail);
    }); 

    //@@ {force:true} needed because the field-name is in a span covering the input at first
    it('checks that invalid dates are flagged', function() {
        cy.visit(theUrl); 
        cy.get('#effectiveDate').clear({force:true}).type('4/31/2018{enter}', {force:true}).should('have.value', 'Invalid date');
    }); 

    // currently skipped because field validations not turned on in UI.
    // NB: error may be something other than "Invalid date" when implemented
    it.skip('checks that yesterday cannot be used as the effective date', function() {
        cy.visit(theUrl); 
        const yesterday = Cypress.moment().subtract(1, 'days').format('MM/DD/YYYY');
        cy.get('#effectiveDate').type(yesterday+'{enter}', {force:true}).should('have.value', 'Invalid date');
    });

    it('selects Alternate Employer and enters appropriate information', function() {
        cy.visit(theUrl); 
        cy.get('#radioBtnAlternateEmployer').click({force:true});
        const altEmpData = "Some Other Construction Company, 123 Main St., San Marcos, TX"
        cy.get('#alternateTextMessage').clear({force:true}).type(altEmpData, {force:true});
        cy.get('#alternateTextMessage').should('have.value', altEmpData)
    }); 

  })
