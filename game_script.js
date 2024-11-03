const board = document.getElementById('game-board');

let snake = [{x:10, y:10}];
let food = generateFood();
let direction ='right';
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;
let highScore = 0;
let highscores_arr = [];

function draw(){
    board.innerHTML='';
    drawSnake();
    drawFood();
    UpdateScore();
}

function drawSnake(){
    snake.forEach((segment) =>{
       const snakeElement = createGameElement('div', 'snake');
       setPosition(snakeElement, segment);
       board.appendChild(snakeElement);
    });
}

function createGameElement(tag, className){
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function setPosition(element, position){
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

function generateFood(){
    const x= Math.floor(Math.random() * 20)+1;
    const y= Math.floor(Math.random() * 20)+1;
    return {x,y};
}

function drawFood(){
    if(gameStarted==true){
        const foodElement = createGameElement('div', 'food');
        setPosition(foodElement, food);
        board.appendChild(foodElement);
    }
   
}

function move(){
    const head = {...snake[0]};
    switch (direction){
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
        case 'right':
            head.x++;
            break;
    }

    snake.unshift(head);

    if(head.x==food.x && head.y==food.y){
        food = generateFood();
        clearInterval(gameInterval);
        gameInterval = setInterval(()=>{
            move();
            checkCollision();
            draw();
        }, gameSpeedDelay);
        // var audio = new Audio('audio/Snake-Game-Audio.mp3');
        // audio.play();
    }
    else{
        snake.pop();
    }
}

function startGame(){
    gameStarted = true;
    document.getElementById('instruction-text').style.display = 'none';
    document.getElementById('logo').style.display = 'none';
    gameInterval = setInterval(()=>{
        move();
        checkCollision();
        draw();
    }, gameSpeedDelay);
}

function handleKeyPress(event){
    if(!gameStarted && event.code === 'Space'){
        startGame();
    } else {
        switch(event.code){
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break; 
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }
    }
}

document.addEventListener('keydown', handleKeyPress);

function checkCollision(){
    const head = snake[0];
    if (head.x<1 || head.x>20 || head.y<1|| head.y>20){
        resetGame();
    }

    for(let i=0; i<snake.length; i++){
        if(head.x === snake[i] && head.y === snake[i].y){
            resetGame();
        }
    }
}

function resetGame(){
    UpdateHighscore();
    StopGame();
    snake = [{x:10, y:10}];
    food = generateFood();
    direction ='right';
    gameSpeedDelay = 200;
    UpdateScore();
}

function UpdateScore(){
    const currentScore = snake.length-1;
    document.getElementById('score').textContent = currentScore.toString().padStart(3,'0');
}

function StopGame(){
    clearInterval(gameInterval);
    gameStarted=false;
    document.getElementById('instruction-text').style.display = 'block';
    document.getElementById('logo').style.display = 'block';
}

function UpdateHighscore(){
    const currentScore = snake.length -1;
    if (currentScore > highScore){
        highScore = currentScore;
        document.getElementById('highscore').textContent = highScore.toString().padStart(3, '0');

    }
    document.getElementById('highscore').style.display= 'block';
    //highscores_arr.push(highScore);
}

//console.log(highscores_arr);