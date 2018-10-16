import ko from './lib/knockout-3.4.2';
// ['Inbox', 'Archive', 'Sent', 'Spam']
const mails = {
    Inbox: {
        mails: [
            {
                id: 0,
                from: "xxx@xxx1",
                to: "aaa@aaa",
                subject: "Inbox",
                date: "2XXX/XX/XX",
                folder: 'Inbox',
                messageContent: 'Content'
            },
            {
                id: 1,
                from: "xxx@xxx2",
                to: "aaa@aaa",
                subject: "Inbox",
                date: "2XXX/XX/XX",
                folder: 'Inbox',
                messageContent: 'Content'
            },
            {
                id: 2,
                from: "xxx@xxx3",
                to: "aaa@aaa",
                subject: "Inbox",
                date: "2XXX/XX/XX",
                folder: 'Inbox',
                messageContent: 'Content'
            },
        ]
    },
    Archive: {
        mails: [
          {
            id: 0,
            from: "xxx@xxx1",
            to: "aaa@aaa",
            subject: "Archive",
            date: "2XXX/XX/XX",
            folder: 'Archive',
            messageContent: 'Content'
          },
          {
            id: 1,
            from: "xxx@xxx2",
            to: "aaa@aaa",
            subject: "Archive",
            date: "2XXX/XX/XX",
            folder: 'Archive',
            messageContent: 'Content'
          },
          {
            id: 2,
            from: "xxx@xxx3",
            to: "aaa@aaa",
            subject: "Archive",
            date: "2XXX/XX/XX",
            folder: 'Archive',
            messageContent: 'Content'
          },
        ]

    },
    Sent: {
        mails: [
          {
            id: 0,
            from: "xxx@xxx1",
            to: "aaa@aaa",
            subject: "Sent",
            date: "2XXX/XX/XX",
            folder: 'Sent',
            messageContent: 'Content'
          },
          {
            id: 1,
            from: "xxx@xxx2",
            to: "aaa@aaa",
            subject: "Sent",
            date: "2XXX/XX/XX",
            folder: 'Sent',
            messageContent: 'Content'
          },
          {
            id: 2,
            from: "xxx@xxx3",
            to: "aaa@aaa",
            subject: "Sent",
            date: "2XXX/XX/XX",
            folder: 'Sent',
            messageContent: 'Content'
          },
        ]
    },
    Spam: {
        mails: [
          {
            id: 0,
            from: "xxx@xxx1",
            to: "aaa@aaa",
            subject: "Spam",
            date: "2XXX/XX/XX",
            folder: 'Spam',
            messageContent: 'Content'
          },
          {
            id: 1,
            from: "xxx@xxx2",
            to: "aaa@aaa",
            subject: "Spam",
            date: "2XXX/XX/XX",
            folder: 'Spam',
            messageContent: 'Content'
          },
          {
            id: 2,
            from: "xxx@xxx3",
            to: "aaa@aaa",
            subject: "Spam",
            date: "2XXX/XX/XX",
            folder: 'Spam',
            messageContent: 'Content'
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
    chosenMailData: any;

    // Behaviours
    goToFolder: (string) => void;
    goToMail: (string) => void;

    constructor () {
        this.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
        this.chosenFolderId = ko.observable();
        this.chosenFolderData = ko.observable();
        this.chosenMailData = ko.observable();

        this.goToFolder = (folder: string) => {
            this.chosenFolderId(folder);
            this.chosenMailData(null);
            getMails(folder).then((res) => {
                this.chosenFolderData(res);
            });
        };
        this.goToMail = (mail: any) => {
            this.chosenFolderId(mail.folder);
            this.chosenFolderData(null);
            console.log(mail);
            this.chosenMailData(mails[mail.folder].mails.find(d => d.id === mail.id));
        };

        this.goToFolder('Inbox');
    }
}

ko.applyBindings(new WebmailViewModel());
