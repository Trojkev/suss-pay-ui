export class Profile {
    clientId: number;
    campaignCode: string;
    publicUrl: string;
    shortCode: string;
    passKey: string;
    consumerKey: string;
    consumerSecret: string;
}

export class Client {
   name: string;
   shortName: string;
   phoneNumber: string;
   emailAddress: string;
   physicalAddress: string;
   category: string;
}

export class StkDeposit {
    msisdn: string;
    amount: string;
    campaignCode: string;
}
