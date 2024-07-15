export function formatPhoneNumber(phoneNumber: string): string {
    if (!phoneNumber) return 'N/A';

    if (phoneNumber.length !== 13) return 'Número de telefone inválido.';

    const country = phoneNumber.slice(0, 2);
    const area = phoneNumber.slice(2, 4);
    const numberPart1 = phoneNumber.slice(4, 9);
    const numberPart2 = phoneNumber.slice(9, 13);

    return `+${country} (${area}) ${numberPart1}-${numberPart2}`;

}