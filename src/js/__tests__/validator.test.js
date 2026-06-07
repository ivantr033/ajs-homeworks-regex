import Validator from '../validator';

test('Это должно подтвердить правильность имен', () => {
    expect(Validator.validateUsername('user-123_name')).toBe(true);
    expect(Validator.validateUsername('a123a')).toBe(true);
});

test('Это должно отклонять недопустимые символы (кириллицу, пробелы и т. д.).', () => {
    expect(Validator.validateUsername('user привет')).toBe(false);
    expect(Validator.validateUsername('user@name')).toBe(false);
    expect(Validator.validateUsername('user%name')).toBe(false);
});

test('Это должно отклонять более 3 цифр подряд', () => {
    expect(Validator.validateUsername('user1234name')).toBe(false);
});

test('Это должно отклонять имена, которые начинаются с недопустимых символов', () => {
    expect(Validator.validateUsername('1username')).toBe(false);
    expect(Validator.validateUsername('-username')).toBe(false);
    expect(Validator.validateUsername('_username')).toBe(false);
});

test('Это должно отклонять имена, которые заканчиваются с недопустимых символов', () => {
    expect(Validator.validateUsername('username1')).toBe(false);
    expect(Validator.validateUsername('username-')).toBe(false);
    expect(Validator.validateUsername('username_')).toBe(false);
});