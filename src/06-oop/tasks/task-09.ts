/**
 * A school LMS needs to send notifications to students.
 * The system supports three notification types:
 * - Email, example:
 * --------------------------------------------------
 * To: student@example.com
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - SMS, example:
 * --------------------------------------------------
 * To: +628123456789
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - Push Notification, example:
 * --------------------------------------------------
 * Device: ST001
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * Tasks:
 * - Create class Notification with property "message" and method "send()"
 * - Create children class of Notification such as EmailNotification, SMSNotification, PushNotification
 * - each child should override "send()"
 */

class notification {
    message: string;
    constructor(message: string) {
        this.message = "Your assignment has been graded.";
    }
    send(): void {
        console.log(this.message);
    }
}

class emailNotification extends notification {
    constructor(public email: string, message: string) {
        super(message);
        this.email = email;
    }
    override send(): void {
        console.log("To "+this.email,"Message : "+this.message);
    }
}

class smsNotification extends notification {
    constructor(public sms : string, message : string) {
        super(message);
        this.sms = sms;
    }
    send(): void {
        console.log("To "+this.sms,"Message : "+this.message);
    }
}
class pushNotification extends notification {
    send(): void {
        console.log("Message : "+this.message);  
}
}

const notifications: notification[] = [
    new emailNotification ("TomPearl@pearl.p", ""), 
    new smsNotification ("+67 6767676767", ""),
    new pushNotification ("")
];

for (const notification of notifications) {
    notification.send();
}