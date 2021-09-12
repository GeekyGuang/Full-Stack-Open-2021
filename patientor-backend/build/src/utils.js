"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (gender) => {
    return Object.values(types_1.Gender).includes(gender);
};
const parseGender = (gender) => {
    if (!gender || !isGender(gender)) {
        throw new Error('incorrect or missing gender: ' + gender);
    }
    return gender;
};
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const parseString = (text, name) => {
    if (!text || !isString(text)) {
        throw new Error(`incorrect or missing ${name}: ${text}`);
    }
    return text;
};
const toNewPatient = ({ name, dateOfBirth, ssn, gender, occupation, }) => {
    const newPatient = {
        name: parseString(name, 'name'),
        dateOfBirth: parseString(dateOfBirth, 'dateOfBirth'),
        ssn: parseString(ssn, 'ssn'),
        gender: parseGender(gender),
        occupation: parseString(occupation, 'occupation'),
    };
    return newPatient;
};
exports.default = toNewPatient;
