/// <reference types="cypress" />

const  generateRandomString = (num) => {
    const characters ='abcdefghijklmnopqrstuvwxyz';
    let result= '';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

it('', () => {
    cy.visit('http://10.5.0.5:3000/');
    cy.get('.back-link').click();
    
    let ong = generateRandomString(30);
    cy.get('[placeholder="Nome da ONG"]').type(ong)

    let email = generateRandomString(20);
    email += "@gmail.com";
    cy.get('[type="email"]').type(email);

    let tel = Math.floor(Math.random() * 100000000000);
    cy.get('[placeholder="WhatsApp"]').type(tel);

    let cidade = generateRandomString(10);
    cy.get('[placeholder="Cidade"]').type(cidade)

    let uf = generateRandomString(2);
    cy.get('[placeholder="UF"]').type(uf);

    cy.get('.button').click();

    cy.contains('Faça seu logon').should('contain.text', 'Faça seu logon');
});
