export class Rules {

	/**
	 * FizzBuzz rules (the definition order is important!)
	 * @type {any}
	 */
	private definedRules: any = [
		{
			function: Rules.isMultipleOf,
			params: [15],
			result: 'FIZZBUZZ'
		},
		{
			function: Rules.isMultipleOf,
			params: [3],
			result: 'FIZZ'
		},
		{
			function: Rules.isMultipleOf,
			params: [5],
			result: 'BUZZ'
		},
		{
			function: Rules.contains,
			params: [3],
			result: 'FIZZ'
		},
		{
			function: Rules.contains,
			params: [5],
			result: 'BUZZ'
		}
	];


	/**
	 * True if input number is multiple of reference number
	 * @type {boolean}
	 */
	public static isMultipleOf(inputNumber: number, referenceNumber: number): boolean {
		return inputNumber % referenceNumber === 0;
	};

	/**
	 * True if input number contains the reference number
	 * @type {boolean}
	 */
	public static contains(inputNumber: number, referenceNumber: number): boolean {
		return ((inputNumber % 10 === referenceNumber) || (Math.trunc(inputNumber / 10) === referenceNumber));
	};

	/**
	 * Return the FizBuzz rules
	 * @type {any}
	 */
	public getRules(): any {
    	return this.definedRules;
    };

}