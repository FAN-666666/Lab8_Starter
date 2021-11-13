// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber Test 1', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test('isPhoneNumber Test 2', () => {
    expect(functions.isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('isPhoneNumber Test 3', () => {
    expect(functions.isPhoneNumber("123")).toBe(false);
});

test('isPhoneNumber Test 4', () => {
    expect(functions.isPhoneNumber("123-456-??90")).toBe(false);
});

test('isEmail Test 1', () => {
    expect(functions.isEmail("abc@gmail.com")).toBe(true);
});

test('isEmail Test 2', () => {
    expect(functions.isEmail("recipe@qq.cn")).toBe(true);
});


test('isEmail Test 3', () => {
    expect(functions.isEmail("recipe@163.comcn")).toBe(false);
});

test('isEmail Test 4', () => {
    expect(functions.isEmail("cse110163.com")).toBe(false);
});

test('isStrongPassword Test 1', () => {
    expect(functions.isStrongPassword("A123456")).toBe(true);
});

test('isStrongPassword Test 2', () => {
    expect(functions.isStrongPassword("b1_2")).toBe(true);
});

test('isStrongPassword Test 3', () => {
    expect(functions.isStrongPassword("123")).toBe(false);
});

test('isStrongPassword Test 4', () => {
    expect(functions.isStrongPassword("abcdefghijk@@@#%^&")).toBe(false);
});

test('isDate Test 1', () => {
    expect(functions.isDate("01/01/2021")).toBe(true);
});

test('isDate Test 2', () => {
    expect(functions.isDate("12/12/2015")).toBe(true);
});

test('isDate Test 3', () => {
    expect(functions.isDate("01012001")).toBe(false);
});

test('isDate Test 4', () => {
    expect(functions.isDate("01-01-2021")).toBe(false);
});

test('isHexColor Test 1', () => {
    expect(functions.isHexColor("#ff61e1")).toBe(true);
});

test('isHexColor Test 2', () => {
    expect(functions.isHexColor("#ff6")).toBe(true);
});

test('isHexColor Test 3', () => {
    expect(functions.isHexColor("fff61e1")).toBe(false);
});

test('isHexColor Test 4', () => {
    expect(functions.isHexColor("#z897mj")).toBe(false);
});
