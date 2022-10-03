// Callback adalah fungsi yang diteruskan ke fungsi lain sebagai argumen, yang kemudian dipanggil di dalam fungsi luar untuk menyelesaikan beberapa jenis rutinitas atau tindakan

function greeting(name) {
    alert(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
    console.log("source : https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function");
  }
  
  processUserInput(greeting);
  