import ko from './lib/knockout-3.4.2';

class WebmailViewModel {
    folders: string[];
    chosenFolderId: (string) => void;
    goToFolder: (string) => void;
    constructor () {
        this.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
        this.chosenFolderId = ko.observable();
        this.goToFolder = (folder: string) => {
            this.chosenFolderId(folder);
        };
    }
}

ko.applyBindings(new WebmailViewModel());
