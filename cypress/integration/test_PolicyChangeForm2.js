const appName='tmoPolicyChange-ng';

  describe('Alternate Employer page tests', function() {

    const visitPageWithParams = (info) => {
      const testUrl='/'+appName+'/'+'?insuredName='+info.insuredName+'&policyNumber='+info.policyNumber+'&agentEmail='+info.agentEmail
      cy.visit(testUrl);
    }

    it('Visit page, verify passed in data in correct fields', function() {
      cy.fixture('insured-info1.json').as('info');
      cy.get('@info').then((info) => {
        visitPageWithParams(info);
        cy.get('#agentEmail').should('have.value', info.agentEmail);
      })
    });

    it('enter and verify new email address', function() {
      cy.fixture('insured-info2.json').as('info');
      cy.get('@info').then((info) => {
        visitPageWithParams(info);
        let newEmail="shekarbalan@texasmutual.com";
        cy.get('#agentEmail').clear().type(newEmail).should('have.value', newEmail);
      })  
    }); 

    //@@ {force:true} should not be needed _anywhere_. Currently some issues with page!!! 
    it('checks that invalid dates are flagged', function() {
      cy.fixture('insured-info1.json').as('info');
      cy.get('@info').then((info) => {
        visitPageWithParams(info);
        cy.get('#effectiveDate').type('4/31/2018{enter}', {force:true}).should('have.value', 'Invalid date');
      })
    });


    // currently skipped because field validations not turned on in UI.
    // NB: error may be something other than "Invalid date" when implemented
    it.skip('checks that yesterday cannot be used as the effective date', function() {
      cy.fixture('insured-info2.json').as('info');
      cy.get('@info').then((info) => {
        visitPageWithParams(info);
        let yesterday = Cypress.moment().subtract(1, 'days').format('MM/DD/YYYY');
        cy.get('#effectiveDate').type(yesterday+'{enter}', {force:true}).should('have.value', 'Invalid date');
      })
    });

    it('selects Alternate Employer and enters appropriate information', function() {
      cy.fixture('insured-info1.json').as('info');
      cy.get('@info').then((info) => {
        visitPageWithParams(info);
        cy.get('#radioBtnAlternateEmployer').click({force:true});
        let altEmpData = "Some Other Construction Company, 123 Main St., San Marcos, TX"
        cy.get('#alternateTextMessage').clear({force:true}).type(altEmpData, {force:true}).should('have.value', altEmpData)
      })      
    }); 

  })
