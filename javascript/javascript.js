//program 1
//Array creation and initialization

let vehicles=["car","bus","boat"]
console.log(vehicles)

//=========================================================================================================

//program 2
//Array Manipulation

//push()
let food=["biriyani","mandhi","ramen"]
food.push("chicken")
console.log(food)

//pop()
let city=["mumbai","delhi","hyderabad"]
city.pop("mumbai")
console.log(city)

//unshift()
let cities=["goa","kolkata","dehradun"]
cities.unshift("jammu")
console.log(cities)

//shift()
let places=["haryana","kerala","assam"]
places.shift("haryana")
console.log(places)

//=========================================================================================================

//program 3
//Array Searching

//indexOf
let num=[1,2,3,4,5]
console.log(num.indexOf(2))

//find()
let number=[6,7,8,9]
let answer=number.find((ans) => ans==8)
console.log(answer)

//includes()
let numbers=[10,11,12,13]
console.log(numbers.includes(12))

//=========================================================================================================

//program 4
//Array filtering

let arr=[1,2,3,4,5]
let even=arr.filter((num) => num%2==0)

//============================================================================
//program 14
//Array merging
let arr1=["a","b","c","d","e"]
let arr2=["f","g","h","i","j"]
let arr3=arr1.concat(arr2)
console.log(arr3)

