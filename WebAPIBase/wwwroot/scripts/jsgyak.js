window.onload = () => {
    console.log("betöltődött")
    for (var sor = 0; sor < 10; sor++) {
        var ujDIv = document.createElement("div");
        ujDIv.classList.add('sor');
        var pascalDiv = document.getElementById("pascal");
        pascalDiv.appendChild(ujDIv);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var ujElemDIv = document.createElement("div");
            ujElemDIv.classList.add('elem');
            ujElemDIv.innerText = faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor-oszlop));
            ujDIv.appendChild(ujElemDIv);
        }
    }
};
var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}