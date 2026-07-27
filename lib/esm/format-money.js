export default (amount, currencySymbol = '₦', minimumFractionDigits = 2, maximumFractionDigits = 2) => {
    return `${currencySymbol}${Number(amount || 0).toLocaleString(undefined, { maximumFractionDigits, minimumFractionDigits, })}`;
};
