export class Message {

    constructor(MessageText, senderUserName, MessageTime, MessageDate, Type,Image) {
        this._MessageText = MessageText;
        this._senderUserName = senderUserName;
        this._MessageTime = MessageTime;
        this._MessageDate = MessageDate;
        this._Type = Type;
        this._Image= Image;
    }


    get MessageText() {
        return this._MessageText;
    }

    set MessageText(value) {
        this._MessageText = value;
    }

    get senderUserName() {
        return this._senderUserName;
    }

    set senderUserName(value) {
        this._senderUserName = value;
    }

    get MessageTime() {
        return this._MessageTime;
    }

    set MessageTime(value) {
        this._MessageTime = value;
    }

    get MessageDate() {
        return this._MessageDate;
    }

    set MessageDate(value) {
        this._MessageDate = value;
    }

    get Type() {
        return this._Type;
    }

    set Type(value) {
        this._Type = value;
    }
}