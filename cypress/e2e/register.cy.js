import { errorMessages } from "../../src/components/Register";

  beforeEach(() => {
    cy.visit('/');
  })

describe('Register Page', () => {
  describe('Error Message', () => {
    it('Name input throws error for 2 chars', () => {
      //Arrange
      //cy.visit('http://localhost:5180/');
      //Act
      cy.get('[data-cy="ad-input"]').type("em");
    
      //assert
      cy.contains(errorMessages.ad);
    });
    it('Surname input throws error for 2 chars', () => {
      //Arrange
      //cy.visit('http://localhost:5180/');
      //Act
      cy.get('[data-cy="soyad-input"]').type("şa");
    
      //assert
      cy.contains(errorMessages.soyad);
    });
    it('Email input throws error for emre@wit.', () => {
      //Arrange
      //cy.visit('http://localhost:5180/');
      //Act
      cy.get('[data-cy="email-input"]').type("emre@wit.");
    
      //assert
      cy.contains(errorMessages.email);
    });
    it('Password input throws error for 1234', () => {
      //Arrange
      //cy.visit('http://localhost:5180/');
      //Act
      cy.get('[data-cy="password-input"]').type("1234");
    
      //assert
      cy.contains(errorMessages.password);
    });
    it('Button is disabled for unvalidated inputs.', () => {
      //Arrange
      //cy.visit('http://localhost:5180/');
      //Act
      cy.get('[data-cy="password-input"]').type("1234");
    
      //assert
      cy.get('[data-cy="submit-button"]').should("be.disabled")
    });
  });
  describe('Form inputs validated.', () => {
    it('button enabled for validated inputs', () => {
      //Arrange
      //cy.visit('http://localhost:5180/');
      //Act
      cy.get('[data-cy="ad-input"]').type("emre");
      cy.get('[data-cy="soyad-input"]').type("şahiner");
      cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
      cy.get('[data-cy="password-input"]').type("1234Aa**");
      //assert
      cy.get('[data-cy="submit-button"]').should("not.be.disabled")
    });
    it('submits form n validated inputs.', () => {
      //Arrange
      //cy.visit('http://localhost:5180/');
      //Act
      cy.get('[data-cy="ad-input"]').type("emre");
      cy.get('[data-cy="soyad-input"]').type("şahiner");
      cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
      cy.get('[data-cy="password-input"]').type("1234Aa**");
      cy.get('[data-cy="submit-button"]').click();
      //assert
      cy.get('[data-cy="response-message"]').should("be.visible");
    });
  });
});