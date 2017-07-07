export class ArrayFunctions {


	public static sumElements(inputArray: Array<number>): number {
		return inputArray.reduce(function(oneElement: number, otherElement: number): number {
			return oneElement + otherElement;
		});
	};

	public static maskToString(numberMask: number, maskLength: number): String {
		let binaryMask = numberMask.toString(2);
		let nZerosToComplete = maskLength - binaryMask.length;
		if (binaryMask.length < maskLength) for (let i=0; i<nZerosToComplete; i++) binaryMask = '0' + binaryMask;
		return binaryMask;

	}

	public static applyMaskToArray(binaryMask: String, arrayToMask: Array<number>): {sum:number, positivesCount:number, negativesCount:number, zerosCount:number} {

		let outputElement = {
			sum: 0,
			positivesCount: 0,
			negativesCount: 0,
			zerosCount: 0
		};

		for (let i=0; i<binaryMask.length; i++) {
			if (binaryMask[i] === '1') {
				outputElement.sum += arrayToMask[i];
				if (arrayToMask[i] > 0) outputElement.positivesCount += 1;
				else if (arrayToMask[i] < 0) outputElement.negativesCount += 1;
				else outputElement.zerosCount += 1;
				//set.push(arrayToMask[i]);
			}
		}
		return outputElement;
	}

	public static kata(inputArray: Array<number>) {
		
		let outputArray:Array<Array<number>> = [];

		let stopCondition = false;
		let numberMask = (2**inputArray.length) - 1;
		let binaryMask = this.maskToString(numberMask, inputArray.length);

		let elementI = this.applyMaskToArray(binaryMask, inputArray);

		if (elementI.zerosCount !== 0) return true;
		if (elementI.positivesCount === inputArray.length) return false;
		if (elementI.negativesCount === inputArray.length) return false;

		while (!stopCondition) {
			
			if (elementI.sum === 0) return true;

			numberMask -= 1; //+= 1;
			binaryMask = this.maskToString(numberMask, inputArray.length);
			elementI = this.applyMaskToArray(binaryMask, inputArray);
			//if (binaryMask.length > inputArray.length) stopCondition = true;
			if (numberMask == 0) stopCondition = true;
		}

		return false;

/*		let upperMask = 2**(inputArray.length);
		for (let mask=upperMask; mask > 0;mask--) {
			let elementI = this.applyMaskToArray(mask, inputArray);

			if (elementI.sum === 0) {
				return true;
				//outputArray.push(elementI.unmaskedArray);
			};

					if (outputArray.length > 0) {
			return true;
		}
		else return false; 
		}*/



	}


}