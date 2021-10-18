//Home work 2
const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
    ];

// 1.1 Given the array, implement a function for generating a new array which doubles the
// quantity and price in each object.
const doubles = itemsObject.map(function(obj){
      let dObj = {};
      dObj["quantity"] = (obj.quantity)*2;
      dObj["price"] = (obj.price)*2;
      return dObj;
    });
console.log(doubles);

//1.2  Given the array, implement a function for generating a new array which contains item
//quantity > 2 and price > 300 only.
function isBiger(obj) {
    if (obj.quantity > 2 & obj.price > 300){
        return true;
    }else return false;
  }
const newObj = itemsObject.filter(isBiger);
console.log(newObj);

//1.3  Given the array, implement a function to calculate the total value of the items.
let sum = itemsObject.reduce(( acc, cur ) => acc + cur.quantity*cur.price,0);
console.log(sum);


//2. Given the string, implement a function to remove all the non-alphabet characters and
//extra space in the string and convert the string to all lowercase.
const string ="   Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array   ";
const replace = string => string.replace(/( )+|[^a-z]+/gi, '$1');
console.log(replace(string).toLowerCase().trim());