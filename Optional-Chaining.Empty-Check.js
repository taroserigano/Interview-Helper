let user = {};

alert(user.address ? user.address.street : undefined);


let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error) 


const value = obj?.propOne?.propTwo?.propThree?.lastProp;


const neighborhood = city.nashville && city.nashvile.eastnashville;


const neighborhood = city?.nashville?.eastnashville;



Optional Chaining 

const customer = {
  name: "Carl",
  details: {
    city:"d",
    age: 82,
    location: "Paradise Falls", // Detailed address is unknown
  },
};
const customerCity = customer.details?.age;

console.log(customerCity)
