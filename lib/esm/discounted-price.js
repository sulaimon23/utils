export default (value, discountAmount = 0, discountPercent = 0) => value - discountAmount - (value * (discountPercent / 100));
