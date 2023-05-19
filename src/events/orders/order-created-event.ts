import { OrderStatus } from "../enums/order-stauts";
import { Subjects } from "../enums/subjects";

export interface IOrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
