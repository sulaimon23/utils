/**
 * This function helps to split compound strings into two distinct parts
 * One usecase is full name => first name, last name
 *
 * "zenith wogwugwu" => "zenith" "wogwugwu"
 */
export default (compoundString) => {
    const [leftToken = '', ...rest] = String(compoundString ?? '').split(' ').filter(token => String(token).trim());
    const rightToken = rest.join(' ').trim();
    return [leftToken, rightToken];
};
