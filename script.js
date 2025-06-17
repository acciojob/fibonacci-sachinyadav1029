function fibonacci(num) {
      if (num === 1) return 0;
    if (num === 2) return 1;

    let a = 0, b = 1;
    for (let i = 3; i <= num; i++) {
        [a, b] = [b, a + b];
    }
    return b;

}

function getFibonacci() {
    const p = document.getElementById("result");
    const inp = document.getElementById("input");

    const num = parseInt(inp.value); // Convert string to number
    if (!isNaN(num) && num > 0 && num <= 50) {
        p.textContent = fibonacci(num);
    } else {
        p.textContent = "Please enter a valid number.";
    }
}


module.exports = fibonacci;
