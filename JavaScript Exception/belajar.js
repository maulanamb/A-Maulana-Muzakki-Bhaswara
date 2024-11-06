function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
}
  setInterval(setTime, 1000);
  console.log("Program Finish");


  function divideNumbers(a, b) {
    try {
            if (a === undefined || b === undefined) {
                throw new Error("Harus menginputkan 2 angka.");
            }

            if (typeof a !== 'number' || typeof b !== 'number') {
                throw new Error("Input harus berupa angka.");
            }

            if (b === 0) {
                throw new Error("Pembagian dengan nol tidak diperbolehkan.");
            }


        return a / b;
    } catch (error) {
        console.error(error.message);
    }
}


console.log(divideNumbers(10, 2)); 
console.log(divideNumbers(10, 0));  
console.log(divideNumbers(10, "a"));  
console.log(divideNumbers(10));
