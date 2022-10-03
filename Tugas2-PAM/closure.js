// Closure merupakan suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya.
// Lexical Scope merupakan sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya.

function init() {
    var name = 'Michael';

    function greet() {
        console.log(`Halo, ${name}`);
        console.log("source : https://www.dicoding.com/academies/256/tutorials/13928?hl=closure");
    }

    return greet;
}

let myFunction = init();
myFunction();

/* output
Halo, Michael
    source : https://www.dicoding.com/academies/256/tutorials/13928?hl=closure
 */