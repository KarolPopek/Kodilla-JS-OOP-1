
function Telefon (marka, model, cena, kolor) {
	
	this.marka = marka;
	this.model = model;
	this.cena = cena;
	this.kolor = kolor;
	
	Telefon.prototype.printInfo = function() {
		
		console.log("Marka telefonu to " + this.marka +  ", model to " + this.model + ", kolor to " + this.kolor + ", a to cena " + this.cena + " zł.");
	}
}

var SamsungGalaxyS6 = new Telefon ("Samsung", "Galaxy S6", 2000, "czarny");
SamsungGalaxyS6.printInfo();

var iPhone6S = new Telefon ("Apple", "iPhone 6S", 2250, "srebrny");
iPhone6S.printInfo();

var OnePlusOne = new Telefon ("OnePlus", "One", 1500, "zielony");
OnePlusOne.printInfo();