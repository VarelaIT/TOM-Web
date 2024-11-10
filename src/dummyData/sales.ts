export interface ISellsData{
    timeStamp: Date;
    productId: number;
    price: number;
    quantity: number;
    discount?: number;
}

export const sales: ISellsData[] = [
    {
        timeStamp: new Date("2024-7-8 12:45"),
        productId: 1, 
        price: 44.5,
        quantity: 1,
    },
    {
        timeStamp: new Date("2024-7-15 15:45"),
        productId: 11, 
        price: 5,
        quantity: 6,
    },
    {
        timeStamp: new Date("2024-7-19 8:16"),
        productId: 134, 
        price: 100,
        quantity: 2,
    },
    {
        timeStamp: new Date("2024-8-22 10:30"),
        productId: 67, 
        price: 87.5,
        quantity: 1,
    },
    {
        timeStamp: new Date("2024-9-2 20:10"),
        productId: 5, 
        price: 87,
        quantity: 1,
    },
    {
        timeStamp: new Date("2024-9-18 2:00"),
        productId: 4, 
        price: 299.9,
        quantity: 3,
        discount: 5,
    },
    {
        timeStamp: new Date("2024-9-30 11:45"),
        productId: 10, 
        price: 32,
        quantity: 24,
        discount: 10,
    },
    {
        timeStamp: new Date("2024-10-5 12:45"),
        productId: 1, 
        price: 44.5,
        quantity: 1,
    },
    {
        timeStamp: new Date("2024-10-11 12:45"),
        productId: 1, 
        price: 44.5,
        quantity: 7,
    },
    {
        timeStamp: new Date("2024-10-22 12:45"),
        productId: 9, 
        price: 10,
        quantity: 10,
    },
    {
        timeStamp: new Date("2024-10-23 12:45"),
        productId: 23, 
        price: 125,
        quantity: 1,
    },
]