import { Subjects } from "../enums/subjects";

export interface ExpirationCompleteEvent {
  subjects: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}
