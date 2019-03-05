#Author: Suvidya Pawaskar
#Feature: Login
#Date:25-02-2019


Feature: Login feature
  User wants to verify the login functionality of Mercury Tours application

Background:User access login page of Mercury tours application
           When user opens "chrome" browser
           And user enters the application url "http://newtours.demoaut.com/mercurywelcome.php"
           And user waits "5" seconds to load login page of Mercury Tours application
           And user maximizes the browser
           Then user access on login page of Mercury Tours application

  @SmokeTest
  Scenario: Verify that valid user able to login into Mercury Tours application by using valid username and valid password
            Given user access login page of Mercury Tours application
            When user enters "Suvidyap1" as username
            And user enters "P@ssword1" as password
            And user clicks on Sign in button
            Then user is on Flight Finder page
            When user clicks on Signoff link
            Then user is on Sign on page
            
   @SmokeTest
  Scenario: Verify that invalid user not able to login into Mercury Tours application by using invalid username and invalid password
            Given user access login page of Mercury Tours application
            When user enters "Suvidyap" as username
            And user enters "P@ssword" as password
            And user clicks on Sign in button
            Then user is on Sign on page
            
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    

  
