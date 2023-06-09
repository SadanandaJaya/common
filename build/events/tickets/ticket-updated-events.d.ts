import { Subjects } from "../enums/subjects";
export interface TicketUpdatedEvents {
    subject: Subjects.TicketUpdated;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
        version: number;
        orderId?: string;
    };
}
