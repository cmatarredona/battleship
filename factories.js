class Ship {
    constructor(length) {
        this.length = length;
        this.hits = [];
    }
    hit(index){
        this.hits.push(index);
    }
    isSunk(){
        return this.length==this.hits.length;
    }
}
class Gameboard{
    constructor(board){
        this.board=board||[];
        if(!this.board.length)init();
    }
    init(){
        for (let i = 0; i < 100; i++) {
            this.board.push({hasShip:false,isShot:false});
        }
    }
    receiveAttack(position){
        if(this.board[position].hasShip)this.board[position].isShot=true;
    }
    placeShip(placement,ship){
        console.log(ship.length);
    }
    placeShipRandom(){
        const ships = []
        const carrier = new Ship(5)
        const battleship = new Ship(4)
        const destroyer = new Ship(3)
        const submarine = new Ship(3)
        const patrolBoat = new Ship(2)

    }
}