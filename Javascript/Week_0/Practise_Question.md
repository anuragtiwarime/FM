# Function

## `Easy`

1. Declare a function fullName and it print out your full name.

2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

3. Declare a function addNumbers and it takes two two parameters and it returns sum.

4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

14. The same groups apply to both men and women.

- Underweight: BMI is less than 18.5
- Normal weight: BMI is 18.5 to 24.9
- Overweight: BMI is 25 to 29.9
- Obese: BMI is 30 or more
- Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

```
console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
```

## `Intermediate`

1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

```
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
```

3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

```
showDateTime()
08/01/2020 04:08
```

5. Declare a function name swapValues. This function swaps value of x to y.

```
swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
```

6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

```
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
```

# Objects

## `Easy`

1. Create an empty object called dog
2. Print the the dog object on the console
3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
4. Get name, legs, color, age and bark value from the dog object
5. Set new properties the dog object: breed, getDogInfo

## `Intermediate`

1. Find the person who has many skills in the users object.
2. Count logged in users, count users having greater than equal to 50 points from the following object.

```
const users = {
  Alex: {
    email: 'vishwa@ioi.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'imran@ioi.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'amrit@ioi.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'deepak@ioi.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'shabresh@ioi.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'anukul@ioi.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'anurag@ioi.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
```

3. Find people who are MERN stack developer from the users object

4. Set your name in the users object without modifying the original users object

5. Get all keys or properties of users object

6. Get all the values of users object

7. Use the countries object to print a country name, capital, populations and languages.
