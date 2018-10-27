import ko from './lib/knockout-3.4.2';

class AppViewModel {
    fruit: any;
    constructor () {
        this.fruit = ko.observable()
    }
}

ko.components.register('show-fruit', {
    viewModel: function (params?: any) {
        this.text = ko.observable(params && params.inputFruit)
    },
    template: 'Input fruit: <span data-bind="text: text"></span>'
})

ko.applyBindings(new AppViewModel())
