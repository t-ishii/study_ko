import ko from './lib/knockout-3.4.2';

class AppViewModel {
    firstName: (string?) => string;
    lastName: (string?) => string;
    fullName: (string?) => string;
    capitalizeLastName: () => void;
    constructor() {
        this.firstName = ko.observable('Bert');
        this.lastName = ko.observable('Bertington');
        this.fullName = ko.computed((): string => `${this.firstName()} ${this.lastName()}`);
        this.capitalizeLastName = (): void => {
            this.lastName(this.lastName().toUpperCase());
        }
    }
}

ko.applyBindings(new AppViewModel());
