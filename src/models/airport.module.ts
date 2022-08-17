export interface IAirportsResponse {
    id: number;
    name: string;
    ident: string;
    local_code?: any;
    region: string;
    type: string;
    country: string;
}


export interface Geo {
    lat: string;
    lng: string;
}

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUsersResponse {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}
