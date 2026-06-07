export default class Validator {
    static validateUsername(username) {
        // Allow only Latin letters, hyphens, underscores, and numbers throughout the text.
        const validSymbols = /^[a-zA-Z0-9_-]+$/;

        // Verifies that there are no more than 3 consecutive digits.
        const noMoreThanThreeDigits = /\d{4,}/;

        // Verifies that the username does not start or end with numbers, hyphens, or underscores.
        // That is, it must start with a letter and end with a letter.
        const startsWithLetter = /^[a-zA-Z]/;
        const endsWithLetter = /[a-zA-Z]$/;

        return (
            validSymbols.test(username)
            && !noMoreThanThreeDigits.test(username)
            && startsWithLetter.test(username)
            && endsWithLetter.test(username)
        );
    }
}