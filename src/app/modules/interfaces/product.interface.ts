export interface product{
    id:number
    images: [],
    title:string,
    category:string,
    details:details[],
    prices:prices[],
    discount:number,
    productRate:string,
    available: boolean,
    showOnHome: boolean,
}

export interface details{
    details:string
}

export interface prices{
    priceValue:string,
    countryCurrency:string
}