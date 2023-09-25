export interface Event {
    id : number;
    name : string;
    description : string;
    startDate : Date;
    endDate : Date;
    maxGuest : number;
    isCancel : Boolean;    
    creatorId: number;
  }