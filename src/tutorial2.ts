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
    }
    addSeat (): void {
        this.seats.push(new SeatReservation('', this.availableMeals[0]));
    }
    removeSeat (seat: SeatReservation): void {
        this.seats.remove(seat);
    }
}

ko.applyBindings(new ReservationsViewModel());
