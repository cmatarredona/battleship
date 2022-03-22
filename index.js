class Ship {
    constructor(length) {
        this.longitud = length;
        this.hits = [];
    }
    hit(index){
        this.hits.push(index);
    }
    isSunk(){
        return this.longitud==this.hits.length;
    }
}
class Gameboard{
    constructor(board){
        this.board=board||[];
        if(!this.board.length)this.init();
    }
    init(){
        for (let i = 0; i < 100; i++) {
            this.board.push({hasShip:false,isShot:false});
        }
    }
    receiveAttack(position){
        this.board[position].isShot=true;
    }
    placeShip(placement,height,ship){
        height*=(Math.floor(Math.random()*2)+1)*10;
        for (let i = 0; i < ship.longitud; i++) {
            this.board[placement+height+i].hasShip=true;
        }
    }
    placeShipRandom(){
        const ships = []
        const carrier = new Ship(5)
        const battleship = new Ship(4)
        const destroyer = new Ship(3)
        const submarine = new Ship(3)
        const patrolBoat = new Ship(2)
        ships.push(carrier);
        ships.push(battleship);
        ships.push(destroyer);
        ships.push(submarine);
        ships.push(patrolBoat);
        for (let i = 0; i < 5; i++) {
            const pos=Math.floor(Math.random()*10);
            if(pos+ships[i].longitud<10)this.placeShip(pos,i,ships[i])
            else {
                i--;
            }
        }
    }
}
function displayTablero(gameboard){
    let data="";
    gameboard.board.forEach((casilla,index) => {
        let clases="";
        if(casilla.hasShip && casilla.isShot)clases+="hitted ";
        if(!casilla.hasShip && casilla.isShot)clases+="water";
        data+=`<div id='${index}' class=' ${clases} casilla'></div>`;
    });
    return data;
}
function eventoClick(){
    document.querySelectorAll(".casilla").forEach(casilla=>{
        casilla.addEventListener(
            "click",
            (e)=>{
                game.receiveAttack(e.target.id);
                document.getElementById("tablero").innerHTML=displayTablero(game);
                eventoClick();
            }
        )
    });
}

const game=new Gameboard;
game.placeShipRandom();
document.getElementById("tablero").innerHTML=displayTablero(game);
eventoClick();