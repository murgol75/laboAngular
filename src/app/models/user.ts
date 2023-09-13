export interface User {
    token : string;
    // la suite est un objet "member"
    id : number;
    pseudo : string;
    email : string;
    firstname : string;
    lastname : string;
    birthdate : Date;
}