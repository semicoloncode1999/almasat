export interface product{
    id:number
    images: any[],
    title:string,
    category:string,
    details:details[],
    prices:prices[],
    discount:number,
    productRate:string,
    available: string,
    showOnHome: string,
}

export interface details{
    details:string
}

export interface prices{
    priceValue:string,
    countryCurrency:string
}