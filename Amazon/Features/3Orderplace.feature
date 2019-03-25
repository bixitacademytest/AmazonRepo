Feature: Order placing

@First
Scenario: Product selection functionality
Given When user selects the product
Then product description will be displayed

@First
Scenario: Add to cart functionality
When clicking on Add to cart
Then item to be added into the cart
And when click on cart symbol
Then Item added should be in the cart
Then click on proceed to pay
