import { Rules } from '../../src/fizzbuzz/Rules';

export class FizzBuzz {

	/**
	 * End sequence number
	 * @type {number}
	 */
	endSequence: number = 100;

	/**
	 * It translates a number to the output word
	 * @type {string}
	 */
    public translate(inputNumber: number): string {

    	let rules = (new Rules()).getRules();

    	// Checking the rules...
    	for (let ruleIndex = 0; ruleIndex < rules.length; ruleIndex++) {
    		let rule = rules[ruleIndex];
    		let params = [inputNumber].concat(rule['params']);
    		if (rule['function'].apply(null, params)) return rule['result'];
    	}

    	// If there is no rules to be applied...
    	return String(inputNumber);
		
    };

    /**
     * It returns the sequence
     * @type {string[]}
     */
    public start(sequenceEnd: number): string[] {

    	let output: string[] = [];
    	
    	for (let i = 1; i <= sequenceEnd; i++)
    		output.push(this.translate(i)); 

        // Print
/*        for (let i = 0; i < output.length; i++)
            console.log(output[i]);*/
    	
    	return output;
    };

    /**
     * Constructor
     */
	 constructor(endSequence: number) {
    	this.endSequence = endSequence;
    }


}
