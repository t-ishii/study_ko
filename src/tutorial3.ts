import ko from './lib/knockout-3.4.2';
// ['Inbox', 'Archive', 'Sent', 'Spam']
const mails = {
    Inbox: {
        mails: [
          {
            from: "xxx@xxx1",
            to: "aaa@aaa",
            subject: "Inbox",
            date: "2XXX/XX/XX"
          },
          {
            from: "xxx@xxx2",
            to: "aaa@aaa",
            subject: "Inbox",
            date: "2XXX/XX/XX"
          },
          {
            from: "xxx@xxx3",
            to: "aaa@aaa",
            subject: "Inbox",
            date: "2XXX/XX/XX"
          },
        ]
    },
    Archive: {
        mails: [
          {
            from: "xxx@xxx1",
            to: "aaa@aaa",
            subject: "Archive",
            date: "2XXX/XX/XX"
          },
          {
            from: "xxx@xxx2",
            to: "aaa@aaa",
            subject: "Archive",
            date: "2XXX/XX/XX"
          },
          {
            from: "xxx@xxx3",
            to: "aaa@aaa",
            subject: "Archive",
            date: "2XXX/XX/XX"
          },
        ]

    },
    Sent: {
        mails: [
          {
            from: "xxx@xxx1",
            to: "aaa@aaa",
            subject: "Sent",
            date: "2XXX/XX/XX"
          },
          {
            from: "xxx@xxx2",
            to: "aaa@aaa",
            subject: "Sent",
            date: "2XXX/XX/XX"
          },
          {
            from: "xxx@xxx3",
            to: "aaa@aaa",
            subject: "Sent",
            date: "2XXX/XX/XX"
          },
        ]
    },
    Spam: {
        mails: [
          {
            from: "xxx@xxx1",
            to: "aaa@aaa",
            subject: "Spam",
            date: "2XXX/XX/XX"
          },
          {
            from: "xxx@xxx2",
            to: "aaa@aaa",
            subject: "Spam",
            date: "2XXX/XX/XX"
          },
          {
            from: "xxx@xxx3",
            to: "aaa@aaa",
            subject: "Spam",
            date: "2XXX/XX/XX"
          },
        ]
    }
};

const getMails = (folder: string) => {
    return Promise.resolve(mails[folder])
};

class WebmailViewModel {
    // Data
    folders: string[];
    chosenFolderId: (string) => void;
    chosenFolderData: any;

    // Behaviours
    goToFolder: (string) => void;
    constructor () {
        this.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
        this.chosenFolderId = ko.observable();
        this.chosenFolderData = ko.observable();

        this.goToFolder = (folder: string) => {
            this.chosenFolderId(folder);
            getMails(folder).then((res) => {
                this.chosenFolderData(res);
            })
        };
        this.goToFolder('Inbox');
    }
}

ko.applyBindings(new WebmailViewModel());
