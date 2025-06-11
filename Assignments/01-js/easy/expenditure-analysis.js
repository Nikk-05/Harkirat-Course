/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let expenditure = []

  for(let order of transactions){
    let list = expenditure.find(item => item.category === order.category) // Find returns the ref of the first matched value and you can change the value using that
    if(list === undefined){
      let newEntry = {category: order.category, totalSpent: order.price}
      expenditure.push(newEntry)
    }
    else{
      list.totalSpent += order.price
    }
  }
  
  return expenditure;
}

module.exports = calculateTotalSpentByCategory;
