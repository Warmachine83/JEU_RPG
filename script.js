class persoJoueur {
    constructor(vie, pointVie, pointDeResistance, force, xp){
    this.vie = vie
    this.pointVie = pointVie
    this.pointDeResistance = pointDeResistance
    this.force = force
    this.xp = xp
};


function chargement() {
    let health = document.getElementById('vie');
    health.innerHTML = '100/100';    
}












class meubleIKEA {
    constructor(color, height, width, screwNumber, serialNumber, Price, Weight, status, modular){
    this.color = color
    this.height = height
    this.width = width
    this.screwNumber = screwNumber
    this.serialNumber = serialNumber
    this.Price = Price
    this.Weight = Weight
    this.status = status
    this.modular = modular
    }

    get description(){
        return `La couleur du meuble est: ${this.color}
        La taille du meuble est: ${this.height}
        Le poid du meuble est: ${this.getWeight}
        La numéro de série du meuble est: ${this.screwNumber}
        La prix du meuble est: ${this.getPrice}       
        `;
    }

    get getWeight(){
        const unit = [];
        if(this.Weight > 100 && this.Weight <= 9999){
            return `${this.weight / 1000} kg`
        }
    }

    get getPrice(){
        return `${this.Price} €`
    }
}

const orfjall = new meubleIKEA('bleu', 24, 600, 10, '27A63', 39.99, 99, 'kit', false);
const rumstorf = new meubleIKEA('Rouge', 38, 100, 63, '33CFG', 63, 4865, 'kit', true);


console.log(orfjall.description);
console.log(rumstorf.description);