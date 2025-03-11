/// <reference types="cypress" />

describe('Login/Logout Test',()=>{
    beforeEach(() => {
    
    cy.visit('https://www.demoblaze.com/')
    cy.url().should('include', 'demoblaze.com')
    })

    it('Login using registered username & password 1. ',()=>{
        cy.fixture("blaze").then(blaze => {
            const username = blaze.username1
            const password = blaze.password1

            cy.loginblaze(username,password)
            cy.get('.active > .nav-link').click()
            cy.url().should('include', 'index.html')
        })
    })
    it('Login using registered username dan password 2.', ()=> {
        cy.fixture("blaze").then(blaze => {
            const username = blaze.username2
            const password = blaze.password2

            cy.loginblaze(username,password)
            cy.on('window:alert', (alertText) => {
            expect(alertText).to.eq('User does not exist.');
            });
        })
    })
    it('Login using registered username 1 & password 2',()=>{
        cy.fixture("blaze").then(blaze => {
            const username = blaze.username1
            const password = blaze.password2

            cy.loginblaze(username,password)
            
            cy.on('window:alert', (alertText) => {
            expect(alertText).to.eq('Wrong password.');
                });
            })
        })
    it('Loging using registered username 2 & password 1',()=> {
         cy.fixture("blaze").then(blaze => {
            const username = blaze.username2
            const password = blaze.password1

            cy.loginblaze(username,password)
            
            cy.on('window:alert', (alertText) => {
            expect(alertText).to.eq('User does not exist.');
                });
            })
        })
    it('Loging using registered username 2 & password 2',()=> {
         cy.fixture("blaze").then(blaze => {
            const username = blaze.username2
            const password = blaze.password2

            cy.loginblaze(username,password)
            cy.on('window:alert', (alertText) => {
            expect(alertText).to.eq('User does not exist.');
            })
           })
         })

    it('Verify the "Phones" Category Displays Product Listings Correctly',()=>{
         cy.fixture("blaze").then(blaze => {
            const username = blaze.username2
            const password = blaze.password2

            cy.loginblaze(username,password)
            cy.xpath("//a[normalize-space()='Samsung galaxy s6']")
            
    })
      })
      it('Verify the "Laptops" Category Displays Product Listings Correctly',()=>{
         cy.fixture("blaze").then(blaze => {
            const username = blaze.username2
            const password = blaze.password2

            cy.loginblaze(username,password)
            cy.get('.list-group-item').contains('Laptops').click({force : true})
            cy.xpath("//a[normalize-space()='MacBook air']")
      })
        })
          it('Verify the "Monitors" Category Displays Product Listings Correctly',()=>{
            cy.fixture("blaze").then(blaze => {
            const username = blaze.username2
            const password = blaze.password2

            cy.loginblaze(username,password)
            cy.get('.list-group-item').contains('Monitors').click({force : true})
            cy.xpath("//a[normalize-space()='ASUS Full HD']")
            
      })
        })

        it('Filling out all the information for shipping.',()=> {
            cy.fixture("blaze").then(blaze => {
            const username = blaze.username1
            const password = blaze.password1
            const name = blaze.name
            const country = blaze.country
            const city = blaze.city
            const creditcard = blaze.credit
            const month = blaze.month
            const year = blaze.year

            cy.loginblaze(username,password)
                
            cy.wait(2000)

            cy.cartblaze()
            cy.get('#name').clear()
            cy.get('#name').type(name)
            cy.get('#country').clear()
            cy.get('#country').type(country)
            cy.get('#city').clear()
            cy.get('#city').type(city)
            cy.get('#card').clear()
            cy.get('#card').type(creditcard)
            cy.get('#month').clear()
            cy.get('#month').type(month)
            cy.get('#year').clear()
            cy.get('#year').type(year)
            
            cy.xpath("//button[normalize-space()='Purchase']").click()
            
            
            cy.xpath("//h2[normalize-space()='Thank you for your purchase!']")  
            })
        })
    it('Not filling the first name for shipping.', () => {
        cy.fixture("blaze").then(blaze => {
            const username = blaze.username1
            const password = blaze.password1
            const country = blaze.country
            const city = blaze.city
            const creditcard = blaze.credit
            const month = blaze.month
            const year = blaze.year
            
            cy.loginblaze(username, password)
            
            cy.wait(2000)
            
            cy.cartblaze()
           
            cy.get('#name').clear()
            cy.get('#country').clear()
            cy.get('#country').type(country)
            cy.get('#city').clear()
            cy.get('#city').type(city)
            cy.get('#card').clear()
            cy.get('#card').type(creditcard)
            cy.get('#month').clear()
            cy.get('#month').type(month)
            cy.get('#year').clear()
            cy.get('#year').type(year)
            
            cy.xpath("//button[normalize-space()='Purchase']").click()
             cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('Please fill out Name and Creditcard.')
                })
        
             
                 })
                 
             })
    it('Not filling the Country for shipping.', () => {
        cy.fixture("blaze").then(blaze => {
            const username = blaze.username1
            const password = blaze.password1
            const name = blaze.name
            const city = blaze.city
            const creditcard = blaze.credit
            const month = blaze.month
            const year = blaze.year
            
            cy.loginblaze(username, password)
            
            cy.wait(2000)
            
            cy.cartblaze()
           
            cy.get('#name').type(name)
            cy.get('#country').clear()
            cy.get('#city').clear()
            cy.get('#city').type(city)
            cy.get('#card').clear()
            cy.get('#card').type(creditcard)
            cy.get('#month').clear()
            cy.get('#month').type(month)
            cy.get('#year').clear()
            cy.get('#year').type(year)
            
            cy.xpath("//button[normalize-space()='Purchase']").click()
            cy.xpath("//h2[normalize-space()='Thank you for your purchase!']")  
            
            })
        })
    it('Not filling the creditcard for shipping.', () => {
        cy.fixture("blaze").then(blaze => {
            const username = blaze.username1
            const password = blaze.password1
            const name = blaze.name
            const city = blaze.city
            const country = blaze.country
            const month = blaze.month
            const year = blaze.year
            
            cy.loginblaze(username, password)
            
            cy.wait(2000)
            
            cy.cartblaze()
           
            cy.get('#name').type(name)
            cy.get('#country').clear()
            cy.get('#country').type(country)
            cy.get('#city').clear()
            cy.get('#city').type(city)
            cy.get('#card').clear()
            cy.get('#month').clear()
            cy.get('#month').type(month)
            cy.get('#year').clear()
            cy.get('#year').type(year)
            
            cy.xpath("//button[normalize-space()='Purchase']").click()
           
            cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('Please fill out Name and Creditcard.')
                })
             })
         })
    
    it('Not filling the City for shipping.', () => {
        cy.fixture("blaze").then(blaze => {
            const username = blaze.username1
            const password = blaze.password1
            const name = blaze.name
            const country = blaze.country
            const creditcard = blaze.credit
            const month = blaze.month
            const year = blaze.year
            
            cy.loginblaze(username, password)
            
            cy.wait(2000)
            
            cy.cartblaze()
           
            cy.get('#name').clear()
            cy.get('#name').type(name)
            cy.get('#country').type(country)
            cy.get('#city').clear()
            cy.get('#card').clear()
            cy.get('#card').type(creditcard)
            cy.get('#month').clear()
            cy.get('#month').type(month)
            cy.get('#year').clear()
            cy.get('#year').type(year)
            
            cy.xpath("//button[normalize-space()='Purchase']").click()
            cy.xpath("//h2[normalize-space()='Thank you for your purchase!']")  
            })
        })
        it('Not filling the month for shipping.',()=> {
            cy.fixture("blaze").then(blaze => {
            const username = blaze.username1
            const password = blaze.password1
            const name = blaze.name
            const country = blaze.country
            const city = blaze.city
            const creditcard = blaze.credit
            const year = blaze.year

            cy.loginblaze(username,password)
                
            cy.wait(2000)

            cy.cartblaze()
            cy.get('#name').clear()
            cy.get('#name').type(name)
            cy.get('#country').clear()
            cy.get('#country').type(country)
            cy.get('#city').clear()
            cy.get('#city').type(city)
            cy.get('#card').clear()
            cy.get('#card').type(creditcard)
            cy.get('#month').clear()
            cy.get('#year').clear()
            cy.get('#year').type(year)
            
            cy.xpath("//button[normalize-space()='Purchase']").click()
            cy.xpath("//h2[normalize-space()='Thank you for your purchase!']")  

            })
        })
    
        it('Not filling the year for shipping.',()=> {
            cy.fixture("blaze").then(blaze => {
            const username = blaze.username1
            const password = blaze.password1
            const name = blaze.name
            const country = blaze.country
            const city = blaze.city
            const creditcard = blaze.credit
            const month = blaze.month
           

            cy.loginblaze(username,password)
                
            cy.wait(2000)

            cy.cartblaze()
            cy.get('#name').clear()
            cy.get('#name').type(name)
            cy.get('#country').clear()
            cy.get('#country').type(country)
            cy.get('#city').clear()
            cy.get('#city').type(city)
            cy.get('#card').clear()
            cy.get('#card').type(creditcard)
            cy.get('#month').clear()
            cy.get('#month').type(month)
            cy.get('#year').clear()
           
            cy.xpath("//button[normalize-space()='Purchase']").click()
            cy.xpath("//h2[normalize-space()='Thank you for your purchase!']")  
            
            })
        })
    })
    
  