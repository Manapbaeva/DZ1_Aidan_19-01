//Task 1
const Input = document.querySelector(".Input");
const check = document.querySelector(".check");
const result = document.querySelector(".result");
const regExp = /^0\d{13}$|^1\d{13}$/;

check.addEventListener('click', () => {
    if (regExp.test(Input.value)) {
        result.innerText = "ok";
        result.style.color = "green";
    } else {
        result.innerText = "not ok";
        result.style.color = "red";
    }
});

//Task 2
const blockIn = document.querySelector(".blockIn");

let num = 0;
const zoom = function (MoveBlock) {
    num++;
    blockIn.style.left = `${num}px`;
    if (num < 50) {
        return zoom();
    } else if (num > 300) {
        num = 0;
    } else {
        num += 65;
    }
    MoveBlock();
};

blockIn.addEventListener("click", zoom);