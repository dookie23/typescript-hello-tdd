import 'mocha';
import 'should';

import { Rules } from '../../src/fizzbuzz/Rules';

describe('Rules', () => {

    let tested: Rules;

    beforeEach(() => tested = new Rules());

    describe('Testing isMultipleOf', () => {

        it('6 multiplo de 3 deberia devolver un true', () => {
            Rules.isMultipleOf(6,3).should.be.equal(true);
        });

        it('7 multiplo de 3 deberia devolver un false', () => {
            Rules.isMultipleOf(7,3).should.be.equal(false);
        });

    });

    describe('Testing contains', () => {

        it('25 deberia devolver un true pq contiene un 5', () => {
            Rules.contains(25,5).should.be.equal(true);
        });

        it('5 deberia devolver un true pq contiene un 5', () => {
            Rules.contains(5,5).should.be.equal(true);
        });

        it('13 deberia devolver un true pq contiene un 3', () => {
            Rules.contains(13,3).should.be.equal(true);
        });

        it('14 deberia devolver un false pq NO contiene un 5', () => {
            Rules.contains(14,5).should.be.equal(false);
        });

        it('31 deberia devolver un true pq contiene un 3', () => {
            Rules.contains(31,3).should.be.equal(true);
        });

    });

});
