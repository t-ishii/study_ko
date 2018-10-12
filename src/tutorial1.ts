import ko from './lib/knockout-3.4.2';

class AppViewModel {
    firstName: string;
    lastName: string;
    constructor() {
        this.firstName = 'Bert';
        this.lastName = 'Bertington';
    }
}

ko.applyBindings(new AppViewModel());
