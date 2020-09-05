function Sum() {
    var Fnum = parseFloat(document.getElementById('Fnum').value),
        Snum = parseFloat(document.getElementById('Snum').value)
    Result1 = Fnum + Snum
    document.getElementById('Result').innerText = Result1
}

function subtract() {
    var Fnum = parseFloat(document.getElementById('Fnum').value),
        Snum = parseFloat(document.getElementById('Snum').value)
    Result2 = Fnum - Snum
    document.getElementById('Result').innerText = Result2
}

function multi() {
    var Fnum = parseFloat(document.getElementById('Fnum').value),
        Snum = parseFloat(document.getElementById('Snum').value)
    Result3 = Fnum * Snum
    document.getElementById('Result').innerText = Result3
}

function division() {
    var Fnum = parseFloat(document.getElementById('Fnum').value),
        Snum = parseFloat(document.getElementById('Snum').value)
    Result4 = Fnum / Snum
    document.getElementById('Result').innerText = Result4
}

function All() {
    var Fnum = parseFloat(document.getElementById('Fnum').value),
        Snum = parseFloat(document.getElementById('Snum').value)
    Result5 = (Fnum * Snum) + (Fnum / Snum) + (Fnum + Snum) + (Fnum - Snum)
    document.getElementById('Result').innerText = Result5
}