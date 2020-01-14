var people = [
    "peter",
    "john",
    "ann",
    "peter",
    "john",
    "ann",
    "bruce",
    "jim",
    "peter"
  ];
  
  var people2 = {
    peter: 3,
    john: 2,
    ann: 2,
    bruce: 1,
    jim: 1
  }
  
  people2['gary'] = 4;
  console.log(people2);
  
  var count = people.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = 1;
        return accumulator;
  }, {});
  
  console.log(count);
