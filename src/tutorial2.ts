import ko from './lib/knockout-3.4.2';

interface IMeal {
    mealName: string,
    price: Number
}

class Meal implements IMeal {
    mealName: string;
    price: Number;
    constructor (mealName: string, price: Number) {
        this.mealName = mealName;
        this.price = price;
    }
}

class SeatReservation {
    name: string;
    meal: () => IMeal;
    formattedPrice: () => string;
    constructor (name: string, initialMeal: IMeal) {
        this.name = name;
        this.meal = ko.observable(initialMeal);
        this.formattedPrice = ko.computed(() => {
            const price = this.meal().price;
            return price ? `$${price.toFixed(2)}` : 'None';
        });
    }
}

class ReservationsViewModel {
    availableMeals: IMeal[];
    seats: any;
    removeSeat: (SeatReservation) => void;
    addSeat: () => void;
    totalSurcharge: () => Number;
    constructor () {
        this.availableMeals = [
            new Meal('Standard (sandwich)', 0),
            new Meal('Premium (lobster)', 34.95),
            new Meal('Ultima (whole zebra)', 290)
        ];
        this.seats = ko.observableArray([
            new SeatReservation('Steave', this.availableMeals[0]),
            new SeatReservation('Bert', this.availableMeals[0])
        ]);
        this.removeSeat = (seat: SeatReservation) => {
            this.seats.remove(seat);
        };
        this.addSeat = () => {
            this.seats.push(new SeatReservation('', this.availableMeals[0]));
        };
        this.totalSurcharge = ko.computed(() => {
            let total = 0;
            for (let seat of this.seats()) {
                total += seat.meal().price;
            }
            return total;
        });
    }
}

ko.applyBindings(new ReservationsViewModel());
