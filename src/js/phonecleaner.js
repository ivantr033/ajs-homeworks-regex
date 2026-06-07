export function cleanPhone(phone) {
    // We eliminate anything that isn't a digit
    const onlyDigits = phone.replace(/\D/g, '');

    // If the original number did not start with '+' and starts with '8' having a length of Russia (11 digits)
    if (onlyDigits.length === 11 && onlyDigits.startsWith('8') && !phone.startsWith('+')) {
        return `+7${onlyDigits.slice(1)}`;
    }

    // For all other cases (international ones that already came with their prefix, such as China or Russia with +7)
    return `+${onlyDigits}`;
}