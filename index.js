/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

/**
 * @type {Item[]}
 * You can use this example array to test your functions.
 */
const INVENTORY = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 3, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 5, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 91, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 47, name: "carrots", price: 2.25, category: "vegetable", quantity: 94 },
  { id: 82, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 6, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 101, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

/**
 * @param {Item[]} items
 * @returns {number[]} ids of given items
 */

function getIds(items) {
  // return items.map((item) => item.id);
  let answer = [];

  for (const item of items) {
    answer.push(item.id);
  }
  return answer;
}

/**
 * @param {Item[]} items
 * @returns {string[]} categories of given items
 */
function getCategories(items) {
  //return items.map((item) => item.category);

  let answer = [];
  for (const item of items) {
    answer.push(item.category);
  }
  return answer;
}
/**
 * Vendors often use SKUs (Stock Keeping Units) to manage their inventory.
 * SKU formats are not standardized, so for this exercise, we will use the format
 * "[id]#[name]#[name length]"
 *
 * For example, the SKU of `{id: 91, name: "broccoli"}` would be "91#broccoli#8"
 * @param {Item[]} items
 * @returns {string[]} SKUs of given items
 */
function getSkus(items) {
  //return items.map((item) => `${item.id}#${item.name}#${item.name.length}`);
  let answer = [];

  for (const item of items) {
    answer.push(`${item.id}#${item.name}#${item.name.length}`);
  }
  return answer;
}
/**
 * @param {Item[]} items
 * @returns {Item[]} all items in the "fruit" category
 */
function getFruits(items) {
  let fruit = [];

  for (const item of items) {
    return items.filter((item) => item.category === "fruit");
    /*if (item.category === "fruit") {
      fruit.pop(item.name);
    }
  }
  return fruit;*/
  }
}
/**
 * @param {Item[]} items
 * @param {string} category
 * @returns {Item[]} all items in the given category
 */
function getItemsByCategory(items, category) {
  return items.filter((item) => item.category === category);
  /*for (const item of items) {
    if (item.category === category) {
      return item.name;
    }
  }*/
}

/**
 * An item is considered "cheap" if its price is $2.50 or less.
 * @param {Item[]} items
 * @returns {Item[]} all cheap items
 */
function getCheapItems(items) {
  return items.filter((item) => item.price <= 2.5);
  /*for (const item of items) {
    if (item.price <= 2.5) {
      return item.name;
    }
  }*/
}

/**
 * @param {Item[]} items
 * @returns {number} the total quantity of all items given
 */
function countItems(items) {
  return items.reduce((count, item) => count + item.quantity, 0);
  /*let total = 0;

  for (const item of items) {
    total += item.quantity;
  }
  return total;*/
}

/**
 * @param {Item[]} items
 * @returns {number} the cost of purchasing every single item
 */
function getTotalCost(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);

  /*let cost = 0;

  for (const item of items) {
    cost += item.price * item.quantity;
  }
  return cost;*/
}

/**
 * @param {Item[]} items
 * @returns {Item} the item with the highest price
 */
function getMostExpensiveItem(items) {
  return items.reduce((mostExpensive, item) =>
    item.price > mostExpensive.price ? item : mostExpensive,
  );

  /*const mostExpensive = "";
  for (const item in items) {
    mostExpensive = Math.max(item.price);
  }
  return mostExpensive;*/
}
