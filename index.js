const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const progress = document.getElementById('progress')
let numArray = [one, two, three, four]
let index = 0
let progressValue = 0

next.addEventListener('click', function(){
    index++
    progressValue += 30
    if (index > numArray.length - 1) {
        index = numArray.length - 1
        progressValue = 90
    }
    progress.style.width = (`${progressValue}%`)
    update()
})
prev.addEventListener('click', function() {
    index--
    progressValue -= 30
    if(index < 0) {
        index = 0
        progressValue = 0
    }
    progress.style.width = (`${progressValue}%`)
    update()

})

function update() {
    numArray.forEach((num, idx) => {
        if (idx - 1 < index) {
            num.classList.add('light')
        } else {
            num.classList.remove('light')
        }
    })
    
next.style.backgroundColor = index === 3 ? "gray" : "rgb(22, 77, 141)"
prev.style.backgroundColor = index === 0 ? "gray" : "rgb(22, 77, 141)"
}