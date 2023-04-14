describe('Check General information modal', () => {
    beforeEach(() => {
        cy.login() // Execute authorezation
        cy.visit('/fragenliste/applying-company')
    })

    it('Should be uneditable field company name', () => {
        cy.get('input[name=name]').should('have.attr', 'readonly')
    })

    it('Should select legal form', () => {
        cy.getByData('ApplicantLegalFormDropdown').click()
        cy.getByData('ApplicantLegalFormDropdown').contains('Aktiengesellschaft und Co. OHG (AG & Co. OHG)').click()
    })

    it('Should be validation - Website format: google.com', () => {
        const websiteValidateLess = cy.get('input[name="website"]')
        websiteValidateLess.clear()
        websiteValidateLess.type('1')
        cy.get('input[name="website"] ~ .error-tooltip .error-tooltip__image')
            .trigger('mouseover')
        cy.get('.ca_tooltip__tooltip_inner')
            .contains('Website format: google.com')
    })
    it('Should be validation of requared field', () => {
        const websiteValidateMore = cy.get('input[name="website"]')
        websiteValidateMore.clear()
        websiteValidateMore.type(' ')
        cy.get('input[name="website"] ~ .error-tooltip .error-tooltip__image')
            .trigger('mouseover')
        cy.get('.ca_tooltip__tooltip_inner')
            .contains('This field is required.')
            .should('be.visible')
    })

    it('should edit website', () => {
        const websiteInput = cy.get('input[name="website"]')
        websiteInput.clear()
        websiteInput.type('www.innoscripta.com')
        websiteInput.should('have.value', 'www.innoscripta.com')
        
    })
    
    it('Should check validation >=10 symbols', () => {
        cy.get('input[name=tax_information_tax_number]')
            .clear()
            .type('123456789')
        cy.get('input[name=tax_information_tax_number] ~ .error-tooltip > .ca_tooltip__wrapper > .error-tooltip__image')
            .trigger('mouseover')
        cy.get('.ca_tooltip__tooltip_inner')
            .contains('Format of the tax number: 10-13 digits')
            .should('be.visible')
    })

    it('Should check validation <=13 symbols', () => {
        cy.get('input[name=tax_information_tax_number]')
            .clear()
            .type('01234567891234')//14 symbols
        cy.get('input[name=tax_information_tax_number] ~ .error-tooltip > .ca_tooltip__wrapper > .error-tooltip__image')
            .trigger('mouseover')
        cy.get('.ca_tooltip__tooltip_inner')
            .contains('Format of the tax number: 10-13 digits')
            .should('be.visible')
    })

    it('Should be edit tax number field', () => {
        cy.get('input[name=tax_information_tax_number]')
            .clear()
            .type('0123456789')
    })
})

describe('Check Address field', () => {
    beforeEach(() => {
        cy.login() // Execute authorezation
        cy.visit('/fragenliste/applying-company')
    })

    it('Should check country enter and change', () => {
        cy.get('input[name=country]').clear()
        cy.get('input[name=country]').type('Finland')
        cy.get('.dropdown > li').contains('Finland').click()
        cy.get('input[name=country]').clear()
        cy.get('input[name=country]').type('Germ')
        cy.get('.dropdown > li').contains('Germany').click()
    })
    it.only('Should check state enter and change', () => {
        cy.getByData('dropdownStateAdressCompany').then((state) => {
            const stateCompany = state[0]
            stateCompany.click()
        })
        //cy.get('.ca_dropdown_searchfield').type('Bav')
        //cy.get('.ca_dropdown_floatingbox search > li > .item-label').contains('Bavaria').click()
    })

})