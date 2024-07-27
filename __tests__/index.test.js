import { normalizedName, helloName } from "../src";

test('normalizedName', () => {
    expect(normalizedName('ОЛЕГ')).toEqual('Олег');
    expect(normalizedName('')).toEqual('Аноним');
})

test('helloName', () => {
    expect(helloName('ОЛЕГ')).toEqual('Привет, Олег!');
    expect(helloName('')).toEqual('Привет, Аноним!');
})