"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
class Publisher {
    constructor(client) {
        this.client = client;
    }
    publish(data) {
        return new Promise((resolve, reject) => {
            this.client.publish(this.subject, JSON.stringify(data), (err) => {
                console.log("Event published", this.subject);
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }
}
exports.Publisher = Publisher;
