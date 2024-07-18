// Any Type
// 1. Type Compatibility
// The any type is compatible with all other types in TypeScript, meaning you can assign any value to an any-typed variable or property.
let a:any=3;
a="Shah";
a=true;
// 2. Assignability
let b:number=3;
//Assigning 'a' into 'b'
b=a;
//Asigning 'b' into 'a'
a=b;
// 3.Method Calls
// You can call any method on an any-typed variable, even if that method doesn't exist on the variable's actual type.
let foo:any="xyz";;
//foo.bar();// Actually, it is not a method on the strings, it is on the objects.
// 4. No Error Reporting
// TypeScript will not report any errors when using the any type, even if the code would normally result in an error.
function c():any{
    return "good";
}
let d:number=c();
console.log(d);
// real World examples
//Facebook's User Profiles: Facebook stores user data (e.g., name, birthdate, interests) as any to accommodate diverse data types and allow for easy updates.
// Google Maps' Location Data: Google Maps processes location data (e.g., latitude, longitude, altitude) as any to handle diverse data formats and sources.


// Unknown Type
// I don't know what this value is, but I'll let you access it if you explicitly tell me what type it is".
// 1.Type-Safe
let userInput: unknown = 'string';

// Try to access the `length` property
//console.log(userInput.length); // Error: Property 'length' does not exist on type 'unknown'

// Try to call the `toString()` method
//userInput.toString(); // Error: Property 'toString' does not exist on type 'unknown'
// Solutions
// Use a type assertion to narrow the type
let userInputString = userInput as string;
console.log(userInputString.length); // Okay, prints the length of the string

// Use a type guard to narrow the type
if (typeof userInput === 'string') {
  console.log(userInput.length); // Okay, prints the length of the string
}
// 2.Top-Type
let input: unknown;

input= 'string'; // Okay
input= 42; // Okay
input= true; // Okay
input= null; // Okay
input= undefined; // Okay
// 3. Assignable to other type
//Values of type unknown can be assigned to any other type, but not vice versa.
let Input: unknown;
let userName: string;

Input = 'John'; // Okay
//userName = Input; // Error: Type 'unknown' is not assignable to type 'string'.

let userId: number;
userId = 42;
Input = userId; // Okay
//userId = Input; // Error: Type 'unknown' is not assignable to type 'number'.

// 4. Default type
//  unknown is the default type for variables without explicit types.
let put; // Type is implicitly 'unknown'

put = 'string'; // Okay
put = 42; // Okay
put = true; // Okay
// Real World Examples
// Healthcare: When processing medical images, the image data may be unknown until it's processed and identified as a specific type (e.g., X-ray, CT scan, MRI).
// 2. Finance: When handling financial transactions, the transaction data may be unknown until it's processed and identified as a specific type (e.g., payment, deposit, transfer).

// Never Type
function keepProcessing(): never {
  while (true) {
    console.log("I always does something and never ends.");
  }
}


keepProcessing();
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

throwError("Shaheer");
// type user = "standard" | "admin" | "superAdmin";

// function login(user: user) {
//   switch (user) {
//     case "standard":
//       return true;
//     case "admin":
//       return true;
//     case "superAdmin":
//       return true;
//     default:
//       const unreachable: never = user;
//       //   console.log("wrong user type");
//       throw "wrong user type";
//   }
// }
// login("adsas");

// Void Type
function log(message:any): void {
  console.log(message);
}
let useless: void = undefined;// This is an error:// useless = 1;