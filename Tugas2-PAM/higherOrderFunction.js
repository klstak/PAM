/*
Dikatakan first-class function ketika fungsi dapat diteruskan 
sebagai argumen ke fungsi lain, dapat dikembalikan oleh fugnsi lain, dan dapat ditetapkan sebagai nilai ke variabel
*/

// Dengan kemampuan first-class function kita dapat membuat high-order function
// High-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen, mengembalikan fungsi, atau keduanya

const hello = () => {
    console.log('Hello!')
  };
  
  const say = (someFunction) => {
    someFunction();
  }
  
  const sayHello = () => {
      return () => {
          console.log('Hello!');
          console.log("source : https://www.dicoding.com/academies/256/tutorials/13928?hl=closure");
          console.log("source : https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function");
      }
  }
  
  hello();
  say(hello);
  sayHello()();
  
  /*
   * Hello!
   * Hello!
   * Hello!
   */

  /*
  source : https://www.dicoding.com/academies/256/tutorials/13928?hl=closure
  source : https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
  */