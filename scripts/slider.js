var radio = document.querySelector('.manual-btn')
var count = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)


function proximaImg() {
    count++
    if (count > 4) {
        count = 1
    }

    document.getElementById('radio' + count).checked = true
}