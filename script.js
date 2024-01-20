// function PrintDeveloper() {
//     // Print names of developers
//     const developers = arr.filter(person => person.profession === 'developer');
//     console.log('Developers:', developers.map(dev => dev.name));
//   }
  
//   function addData() {
//     // Add a new person to the array
//     const newPerson = { id: 4, name: 'emma', age: '22', profession: 'designer' };
//     arr.push(newPerson);
//     console.log('Data added:', newPerson);
//   }
  
//   function removeAdmin() {
//     // Remove persons with profession 'admin'
//     const removedAdmins = arr.filter(person => person.profession !== 'admin');
//     console.log('Removed Admins:', removedAdmins);
//   }
  
//   function concatenateArray() {
//     // Concatenate the array with a new array
//     const newArray = [
//       { id: 5, name: 'ryan', age: '25', profession: 'manager' },
//       { id: 6, name: 'susan', age: '23', profession: 'developer' },
//     ];
  
//     const concatenatedArray = arr.concat(newArray);
//     console.log('Concatenated Array:', concatenatedArray);
//   }
  
//   // Example usage of consoleArr function
//   function consoleArr() {
//     console.log('Consoling Array Variable', arr);
//   }
  
//   // Example function calls (already being called in the HTML file)
//   // consoleArr(); // You can uncomment this line to see the initial array in the console.
//   // PrintDeveloper();
//   // addData();
//   // removeAdmin();
//   // concatenateArray();
  
// script.js

let arr = [
    { id: 1, name: 'john', age: '18', profession: 'developer' },
    { id: 2, name: 'jack', age: '20', profession: 'developer' },
    { id: 3, name: 'karen', age: '19', profession: 'admin' },
  ];
  
  function printDevelopers() {
    // a. Print all employees who have the profession of developer
    const developers = arr.filter(employee => employee.profession === 'developer');
    console.log('Developers:', developers);
  }
  
  function addEmployee() {
    // b. Make another employee object and append it to the array
    const newEmployee = { id: 4, name: 'susan', age: '20', profession: 'intern' };
    arr.push(newEmployee);
    console.log('Employee added:', newEmployee);
  }
  
  function concatArrays() {
    // c. Make another array of employees and concatenate it with the original array
    const newArray = [
      { id: 5, name: 'alice', age: '22', profession: 'designer' },
      { id: 6, name: 'bob', age: '21', profession: 'developer' },
    ];
  
    arr = arr.concat(newArray);
    console.log('Arrays concatenated:', arr);
  }
  
  function removeAdmin() {
    // d. Remove the object where the profession is admin
    arr = arr.filter(employee => employee.profession !== 'admin');
    console.log('Array after removing admin:', arr);
  }
  
  // Example function calls
  printDevelopers();
  addEmployee();
  concatArrays();
  removeAdmin();
  
