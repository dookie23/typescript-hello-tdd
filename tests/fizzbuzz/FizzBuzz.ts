import 'mocha';
import 'should';

import { FizzBuzz } from '../../src/fizzbuzz/FizzBuzz';

describe('FizzBuzz', () => {

    let tested: FizzBuzz;

    beforeEach(() => tested = new FizzBuzz(100));

    describe('Testing regular numbers (it should return the same number (in string) by default)', () => {

        it('un 1 deberia devolver un 1', () => {
            tested.translate(1).should.be.equal('1');
        });

        it('un 2 deberia devolver un 2', () => {
            tested.translate(2).should.be.equal('2');
        });

    });

     describe('Testing FIZZ\'s (it should return FIZZ when a multiple of 3 is provided)', () => {

        it('un 3 deberia devolver un FIZZ', () => {
            tested.translate(3).should.be.equal('FIZZ');
        });

        it('un 6 deberia devolver un FIZZ', () => {
            tested.translate(6).should.be.equal('FIZZ');
        });

        it('un multiplo de 3 deberia devolver un FIZZ', () => {
            tested.translate(9).should.be.equal('FIZZ');
        });

    });

    describe('Testing BUZZ\'s (it should return BUZZ when a multiple of 5 is provided)', () => {

        it('un 5 deberia devolver un BUZZ', () => {
            tested.translate(5).should.be.equal('BUZZ');
        });

        it('un 10 deberia devolver un BUZZ', () => {
            tested.translate(10).should.be.equal('BUZZ');
        });

    });


    describe('Testing FIZZBUZZ\'s (it should return FIZZBUZZ when a multiple of 3 and 5 (simultaneously) is provided)', () => {

        it('un 15 deberia devolver un FIZZBUZZ', () => {
            tested.translate(15).should.be.equal('FIZZBUZZ');
        });

        it('un 30 deberia devolver un FIZZBUZZ', () => {
            tested.translate(30).should.be.equal('FIZZBUZZ');
        });

    });

    describe('Testing sequence generation', () => {

        it('debería devolver una secuencia 1,2', () => {
            let output = tested.start(2);
            output[0].should.be.equal('1');
            output[1].should.be.equal('2');
        });

        it('debería devolver una secuencia de 100 cadenas', () => {
            tested.start(100).length.should.be.equal(100);
        });

    });

    describe('Execute FizzBuzz', () => {

        it('debería devolver una secuencia 1,2,FIZZ,4', () => {
            let output = tested.start(4);
            output[0].should.be.equal('1');
            output[1].should.be.equal('2');
            output[2].should.be.equal('FIZZ');
            output[3].should.be.equal('4');
        });

        it('debería devolver un BUZZ en la posición 5, 10', () => {
            let output = tested.start(10);
            output[4].should.be.equal('BUZZ');
            output[9].should.be.equal('BUZZ');
        });

        it('debería devolver un FIZZBUZZ en la posición 15, 30', () => {
            let output = tested.start(40);
            output[14].should.be.equal('FIZZBUZZ');
            output[29].should.be.equal('FIZZBUZZ');
        });

         it('debería devolver un FIZZ en la posición 13, 31, 37, 83', () => {
            let output = tested.start(85);
            output[12].should.be.equal('FIZZ');
            output[30].should.be.equal('FIZZ');
            output[36].should.be.equal('FIZZ');
            output[83].should.be.equal('FIZZ');
        });

        it('debería devolver un BUZZ en la posición 35 (lleva un 3 pero es multiplo de 5 y prevalece eso segundo)', () => {
            let output = tested.start(35);
            output[34].should.be.equal('BUZZ');
        });

        it('debería devolver un BUZZ en la posición 25, 50, 55, 75', () => {
            let output = tested.start(85);
            output[24].should.be.equal('BUZZ');
            output[49].should.be.equal('BUZZ');
            output[54].should.be.equal('BUZZ');
        });

        it('debería devolver un BUZZ en la posición 75 (lleva un 3 pero es multiplo de 3 y de 5 y prevalece eso segundo)', () => {
            let output = tested.start(75);
            output[74].should.be.equal('FIZZBUZZ');
        });

        it('debería devolver un FIZZ en la posición 53 (lleva un 5 pero es multiplo de 3 y prevalece eso segundo)', () => {
            let output = tested.start(53);
            output[52].should.be.equal('FIZZ');
        });

    });


});
