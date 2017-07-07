import 'mocha';
import 'should';

import { ArrayFunctions } from '../../src/sumarray/ArrayFunctions';

describe('ArrayFunctions', () => {

    let tested: ArrayFunctions;

    //beforeEach(() => tested = new ArrayFunctions());

    describe('Testing sum elements of an array of integers', () => {

        it('[1, 1] deberia devolver 2', () => {
            ArrayFunctions.sumElements([1, 1]).should.be.equal(2);
        });

        it('[1, 1, 3, 4] deberia devolver 9', () => {
            ArrayFunctions.sumElements([1, 1, 3, 4]).should.be.equal(9);
        });

        it('[1, -1] deberia devolver 0', () => {
            ArrayFunctions.sumElements([1, -1]).should.be.equal(0);
        });        

        it('[1, 1, -2] deberia devolver 0', () => {
            ArrayFunctions.sumElements([1, 1, -2]).should.be.equal(0);
        });   

    });


    describe('Testing masking', () => {
        it('21 (\'010101\') aplicado sobre [-1, 2, 3, 1, -2, -2] debería dar -1', () => {
            ArrayFunctions.applyMaskToArray('010101', [-1, 2, 3, 1, -2, -2]).sum.should.be.equal(1);
        });

        it('21 (\'010101\') aplicado sobre [2300, 4000, 8000, 23, 45, -300, 90, 40, -1, 2, 3, 1, -2, -2] debería dar -1', () => {
            ArrayFunctions.applyMaskToArray('00000000010101', [2300, 4000, 8000, 23, 45, -300, 90, 40, -1, 2, 3, 1, -2, -2]).sum.should.be.equal(1);
        });

    });


    let negative_bonus = [
		[-83314, -82838, -80120, -63468, -62478, -59378, -56958, -50061, -34791, -32264, -21928, -14988, 23767, 24417, 26403, 26511, 36399, 78055],
		[-92953, -91613, -89733, -50673, -16067, -9172, 8852, 30883, 46690, 46968, 56772, 58703, 59150, 78476, 84413, 90106, 94777, 95148],
		[-94624, -86776, -85833, -80822, -71902, -54562, -38638, -26483, -20207, -1290, 12414, 12627, 19509, 30894, 32505, 46825, 50321, 69294],
		[-83964, -81834, -78386, -70497, -69357, -61867, -49127, -47916, -38361, -35772, -29803, -15343, 6918, 19662, 44614, 66049, 93789, 95405],
		[-68808, -58968, -45958, -36013, -32810, -28726, -13488, 3986, 26342, 29245, 30686, 47966, 58352, 68610, 74533, 77939, 80520, 87195]
    ];

    let positive_bonus = [
    	[-97162, -95761, -94672, -87254, -57207, -22163, -20207, -1753, 11646, 13652, 14572, 30580, 52502, 64282, 74896, 83730, 89889, 92200],
		[-93976, -93807, -64604, -59939, -44394, -36454, -34635, -16483, 267, 3245, 8031, 10622, 44815, 46829, 61689, 65756, 69220, 70121],
		[-92474, -61685, -55348, -42019, -35902, -7815, -5579, 4490, 14778, 19399, 34202, 46624, 55800, 57719, 60260, 71511, 75665, 82754],
		[-85029, -84549, -82646, -80493, -73373, -57478, -56711, -42456, -38923, -29277, -3685, -3164, 26863, 29890, 37187, 46607, 69300, 84808],
		[-87565, -71009, -49312, -47554, -27197, 905, 2839, 8657, 14622, 32217, 35567, 38470, 46885, 59236, 64704, 82944, 86902, 90487]
    ];

    let negative_worst_case = [
      [-19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 190],
      [-22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 253],
      [-29, -28, -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 435],
      [-35, -34, -33, -32, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 630],
	  [-52, -51, -50, -49, -48, -47, -46, -45, -44, -43, -42, -41, -40, -39, -38, -37, -36, -35, -34, -33, -32, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 1378]
	];

    let positive_worst_case = [
    	[-190, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    	[-253, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    	[-435, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    	[-630, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
    ];

    let nosolution_case = [
    	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
    ];




    describe('kata regular', () => {

        it('[1, 2, 3]', () => {
            ArrayFunctions.kata([1, 2, 3]).should.be.equal(false);
        });

        it('[-5, -3, -1, 2, 4, 6]', () => {
            ArrayFunctions.kata([-5, -3, -1, 2, 4, 6]).should.be.equal(true);
        });

        it('[-2, 2, 3]', () => {
            ArrayFunctions.kata([-2, 2, 3]).should.be.equal(true);
        });
        
        it('[-3, 1, 2]', () => {
            ArrayFunctions.kata([-3, 1, 2]).should.be.equal(true);
        });

         it('[0]', () => {
            ArrayFunctions.kata([0]).should.be.equal(true);
        });

        it('[-97364, -71561, -69336, 19675, 71561, 97863]', () => {
            ArrayFunctions.kata([-97364, -71561, -69336, 19675, 71561, 97863]).should.be.equal(true);
        });
        
        it('[-98634, -86888, -48841, -40483, 2612, 9225, 17848, 71967, 84319, 88875]', () => {
            ArrayFunctions.kata([-98634, -86888, -48841, -40483, 2612, 9225, 17848, 71967, 84319, 88875]).should.be.equal(true);
        });


    });
    


 describe('kata bonus', () => {

        it('negative_example_1', () => {
            ArrayFunctions.kata(negative_bonus[0]).should.be.equal(false);
        });

        it('negative_example_2', () => {
            ArrayFunctions.kata(negative_bonus[1]).should.be.equal(false);
        });

        it('negative_example_3', () => {
            ArrayFunctions.kata(negative_bonus[2]).should.be.equal(false);
        });

        it('negative_example_4', () => {
            ArrayFunctions.kata(negative_bonus[3]).should.be.equal(false);
        });
        it('negative_example_5', () => {
            ArrayFunctions.kata(negative_bonus[4]).should.be.equal(false);
        });

         it('positive_example_1', () => {
            ArrayFunctions.kata(positive_bonus[0]).should.be.equal(true);
        });

        it('npositive_exampl_2', () => {
            ArrayFunctions.kata(positive_bonus[1]).should.be.equal(true);
        });

        it('positive_example_3', () => {
            ArrayFunctions.kata(positive_bonus[2]).should.be.equal(true);
        });

        it('positive_exampl_4', () => {
            ArrayFunctions.kata(positive_bonus[3]).should.be.equal(true);
        });
        it('positive_exampl_5', () => {
            ArrayFunctions.kata(positive_bonus[4]).should.be.equal(true);
        });

    });

    describe('kata bonus 2', () => {


    	it('negative_worst_case_with_'+negative_worst_case[0].length+'_elements', () => {
            ArrayFunctions.kata(negative_worst_case[0]).should.be.equal(true);
        });
 
        it('negative_worst_case_with_'+negative_worst_case[1].length+'_elements', () => {
            ArrayFunctions.kata(negative_worst_case[1]).should.be.equal(true);
        });

    	it('negative_worst_case_with_'+negative_worst_case[2].length+'_elements', () => {
            ArrayFunctions.kata(negative_worst_case[2]).should.be.equal(true);
        });
 
        it('negative_worst_case_with_'+negative_worst_case[3].length+'_elements', () => {
            ArrayFunctions.kata(negative_worst_case[3]).should.be.equal(true);
        });

        it('negative_worst_case_with_'+negative_worst_case[4].length+'_elements', () => {
            ArrayFunctions.kata(negative_worst_case[4]).should.be.equal(true);
        });

        it('positive_worst_case_with_'+positive_worst_case[0].length+'_elements', () => {
            ArrayFunctions.kata(positive_worst_case[0]).should.be.equal(true);
        });

        it('positive_worst_case_with_'+positive_worst_case[1].length+'_elements', () => {
            ArrayFunctions.kata(positive_worst_case[1]).should.be.equal(true);
        });
        
        it('positive_worst_case_with_'+positive_worst_case[2].length+'_elements', () => {
            ArrayFunctions.kata(positive_worst_case[2]).should.be.equal(true);
        });
        
        it('positive_worst_case_with_'+positive_worst_case[3].length+'_elements', () => {
            ArrayFunctions.kata(positive_worst_case[3]).should.be.equal(true);
        });

        it('nosolution_case'+nosolution_case[0].length+'_elements', () => {
            ArrayFunctions.kata(nosolution_case[0]).should.be.equal(false);
        });

        it('nosolution_case'+nosolution_case[1].length+'_elements', () => {
            ArrayFunctions.kata(nosolution_case[1]).should.be.equal(false);
        });

        it('nosolution_case'+nosolution_case[2].length+'_elements', () => {
            ArrayFunctions.kata(nosolution_case[2]).should.be.equal(false);
        });

        it('nosolution_case'+nosolution_case[3].length+'_elements', () => {
            ArrayFunctions.kata(nosolution_case[3]).should.be.equal(false);
        });/**/

    });




});