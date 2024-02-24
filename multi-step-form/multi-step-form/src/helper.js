export function calculatePrice(basePrice, rPayment, discount) {
    if (rPayment) {
      // Yearly Payment Price
      // Normally discount value could be rate or absolute price
      // but for now it is discounted months :D
      return (12 - (discount || 0)) * basePrice;
    }
    return basePrice;
}