export function formatPhoneNumber(phoneNumber: string) {
    if (!phoneNumber) return 'N/A';

    const country = phoneNumber.slice(0, 2);
    const area = phoneNumber.slice(2, 4);
    const numberPart1 = phoneNumber.slice(4, 9);
    const numberPart2 = phoneNumber.slice(9, 13);

    return `+${country} (${area}) ${numberPart1}-${numberPart2}`;

}