export class ControllerBot {

  constructor({subscribe, notify}) {
    this.chatId = 0;
    this.apiKey = '916202565:AAHUqbSIas5e8V2Tfu0CxUGooiUkUOGTTPU';
    this.subscribe = subscribe;
    this.subscribe('order-submitted', this.sendTlgMsg.bind(this));
  }

  sendTlgMsg(pets) {
    let petStr = pets.map(pet => {
      return this.getPetMsg(pet);
    }).join('\n');
    let msg = `${new Date().toLocaleString()} New order was submitted:\n\n${petStr}\n------------------------------------------\nTotal cost: $${pets.totalCost}`;
    fetch(`https://api.telegram.org/bot${this.apiKey}/sendMessage?chat_id=${this.chatId}&text=${encodeURIComponent(msg)}&parse_mode=MarkDown`);
  }

  getPetMsg(pet) {
    return ` - id: ${pet.id}\t${pet.species} ${pet.breed} $${pet.price}`;
  }
}


