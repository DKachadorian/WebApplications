'use strict'

/*** 
 * 
 * Directions:
 * 1. Extract hw1.zip
 * 2. In the hw1 directory you'll find a hw1.js and hw1.test.js file. hw1.js is the only file you need to modify.
 * 3. Open hw1.js in VS Code, or your preferred text editor or IDE.
 * 4. Implement all the TODOs described in commments below and save your work.
 * 
 * 
 * Validating your changes:
 * 1. Ensure you have Node.js LTS or newer installed: https://nodejs.org/en/download/
 * 2. Open cmd or terminal, change directory (cd) to the location of your hw1 directory.
 * 3. Once inside the hw1 directory, execute the following command: npm install
 * 4. The above command will install the jest dependency which will allow you to execute the unit tests in hw1.test.js
 * 5. Execute the following command to validate your changes in hw1.js are working as expected: npm test
 * 6. You will see output indicating the tests have passed or failed; if you see failures, there is an issue with your implementation
 * 
 ***/

const Homework1 = class Homework1 {

    // This is already implemented to indicate what a passing test looks like
    static sum = (a, b) => {
        return a + b;
    }

}

/**
 * *****************
 * ***** TODO ******
 * *****************
 * 
 * Implement the Circle class below. It needs to have a radius(Number) property and a color(String) properties. Both properties 
 * should be set in a constructor
 * Additionally, the Circle class should have a method called `calcArea` which will return the area (radius*radius*pi) of the circle. 
 * Be sure to use the built-in Math object Javascript provides to retrieve the value of PI.
 * 
 * References: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

const Circle = class Circle { 

    //constructor
    constructor(radius,color){
        this.radius=5;
        this.color="red";
    }
   
    calcArea () {
        return (this.radius * this.radius *Math.PI);
    }

}


/**
 * *****************
 * ***** TODO ******
 * *****************
 * 
 * Implement the Student class below. 
 * 
 * The student class should have the following properties set by the constructor:
 * firstName(String), lastName(String), gpa(Number), degreeType(String)
 * 
 * The student class should have two additional properties initialized with the following default values:
 * grade(String) = undefined
 * graduated(Boolean) = false
 * 
 * References: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

const Student = class Student {

    //constructor
    constructor(firstName,lastName,gpa,degreeType){
        this.firstName="First";
        this.lastName="Last";
        this.gpa=4.0;
        this.degreeType="Graduate";
        this.grade = undefined;
        this.graduated=false;
    }
  
 }


/**
 * *****************
 * ***** TODO ******
 * *****************
 * 
 * Implement the Product class below. 
 * 
 * The product class should have the following properties set by the constructor:
 * name(String), price(Number), availability(String)
 * The constructor should only accept a single String parameter as input, the input format will be as follows: 'Apple,1.00,In Stock'
 * The constructor must parse this input and set the above properties appropriately
 */

const Product = class Product {

    //constructor
    constructor(statement){
        let result = statement.split(",");
        this.name=result[0];
        this.price=parseInt(result[1]);
        this.availability=result[2];
    }


    /**
     * *****************
     * ***** TODO ******
     * *****************
     * 
     * Implement the static method inStock below 
     * 
     * This method will accept an array of Products and return an array only containing products which are in stock
     * This can be implmeneted in one line.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
     */
    static inStock = (products) => {
        return products.filter(element => element.availability === "In Stock");
    }

    /**
     * *****************
     * ***** TODO ******
     * *****************
     * 
     * Implement the static method halfOff below 
     * 
     * This method will accept an array of Products and return an array of the same products with every price reduced by 50%
     * This method can also be written in one line; if doing so, consider using String interpolation when calling the product constructor
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
     */
    static halfOff = (products) => {
        let reducedProducts=[];        
        for (let i = 0; i < products.length; i++){
            reducedProducts.push(parseFloat(products[i].price) *0.5);
        }
        return reducedProducts;
    };

    /**
     * *****************
     * ***** TODO ******
     * *****************
     * 
     * Implement the static method printProducts below 
     * 
     * This method will accept an array of Products and will console.log all the products in the following format: 
     * Product: Apple, Cost: $1.00, Available: Yes
     * Take note, for 'Available' we are not returning 'In Stock' or 'Out of Stock' but 'Yes' or 'No' 
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat (currency formatting)
     */
    static printProducts = (products) => {
        for (let i = 0; i < products.length; i++){

            if(products[i].availability === "In Stock"){
                products[i].availability = "Yes";
            }
 
            if(products[i].availability === "Out of Stock"){
                products[i].availability = "No";
            }
            console.log("Product: " + products[i].name + ", " + "Cost: $" + parseFloat(products[i].price).toFixed(2) + ", " + "Availability: "+ products[i].availability);
        }
    }

 };

// ----------------------------------
// DO NOT MODIFY CODE BELOW THIS LINE
// ----------------------------------

module.exports = {
    'Homework1': Homework1,
    'Circle': Circle,
    'Student': Student,
    'Product': Product
};