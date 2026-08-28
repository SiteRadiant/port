export function useCurrency() {
  const formatPrice = (inrPrice) => {
    if (inrPrice === 0) return 'Custom';
    return '₹' + inrPrice.toLocaleString('en-IN');
  };

  return { formatPrice };
}
