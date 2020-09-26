const btnItems = document.getElementsByClassName('item'),
    clickHandle = function (e) {
        document.getElementById('content').
        innerHTML = e.target.dataset;
    }

btnītems[1].addEventListener('click', clickHandle);
btnītems[2].addEventListener('click', clickHandle);
btnītems[3].addEventListener('click', clickHandle);
btnītems[4].addEventListener('click', clickHandle);

for (let i = 0; i < btnItems.length; i++) {
    btnItems[i].addEventListener('click', clickHandle);
}