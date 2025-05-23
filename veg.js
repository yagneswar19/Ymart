let add = document.getElementById("add");
let plus = document.getElementById("plus");
let min = document.getElementById("min");
let c = 0;
add.addEventListener("click", () => {

    if(c>=10)
    {
        add.innerText = "Limited to 10F" ;

    }
    else{
    add.innerText = (plus.innerText = "+ ") + (++c) + (min.innerText = " -") ;
    }
    // plus.addEventListener("click", () => {
    //     add.innerText = (plus.innerText = "+ ") + (++c) + (min.innerText = " -");
    // });

    // min.addEventListener("click", () => {
    //     add.innerText = (plus.innerText = "+ ") + (--c) + (min.innerText = " -");
    // });






})