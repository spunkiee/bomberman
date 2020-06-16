const grid = document.querySelector('.grid')
const score = document.querySelector('#score')

let width = 9
let bombAmount = 10
let squares = []
let totalSore = 0
let isGameOver = false

function createBoard() {
    const bombsArray = Array(bombAmount).fill('bomb')
    const emptyArray = Array(width*width - bombAmount).fill('non-bomb')
    const gameArray = emptyArray.concat(bombsArray)
    const shuffledArray = gameArray.sort(() => Math.random() - 0.5)

    for(let i = 0; i < width*width; i++){
        const square = document.createElement('div')
        square.classList.add(shuffledArray[i])
        grid.appendChild(square)
        squares.push(square)

        square.addEventListener('click', function(e){
            click(square)
        })
    }
}
createBoard()

function click(square) {
    if (isGameOver) return

    if(square.classList.contains('non-bomb') && square.innerText === ''){
        totalSore++
        score.innerHTML = `Score: ${totalSore}`
        square.innerHTML = '🚩'
    }
    if(square.classList.contains('bomb') && totalSore < 72){
        score.innerHTML = `Well Try! Score: ${totalSore}`

        for (let i=0; i<81; i++){
            if(squares[i].classList.contains('bomb')){
                squares[i].innerHTML = '💣'
            }
        }
        isGameOver = true
    }
    if(totalSore === 71){
        score.innerHTML = 'Woohoo! You Won!'
        isGameOver = true
    }
}

let arr = [1, 15, 9, 17, 11]
arr.sort((a,b) => {
    console.log(a, b)
    console.log(a-b)
    return a-b
})
console.log(arr)