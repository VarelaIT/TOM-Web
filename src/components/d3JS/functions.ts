
export function applyDiscount(amount: number, discount: number){
    return amount - (amount * (discount / 100));
}