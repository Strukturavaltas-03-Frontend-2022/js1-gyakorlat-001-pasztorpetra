// 3.feladat
'use strict';

const personDataLog = ({
    firstname = 'John',
    lastname = 'Doe',
    age= 33,
}={}) => {
    return 'My name is' + firstname + lastname + '. I\'m' + age + 'years old.';
};
