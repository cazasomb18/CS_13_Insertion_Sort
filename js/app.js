//==============================SECTION 13: INSERTION SORT====================================

//Similar to bubble and selection sort with a few key distinctions:
	//Builds up the sort by gradually creating a larger half which is always sorted.
	// [5,3,4,1,2] --> [3,5,4,1,2] --> [3,4,5,1,2] --> [1,3,4,5,2] --> [1,2,3,4,5]
	// 					1  sorted		3 Es sorted		4 Es sorted		SORTED

	//We are taking an element one at a time and inserting it into the correct spot within the sorted portion

//Insertion Sort Pseudocode
	//Start by picking the second element in the array
	//Now compare the secon dlemement with the one before it and swap if necessary
	//Continue to the next element and if it is in th eincorrect order, iterate through the sorted potion 
	//(i.e., the left side) to place the element in the correct place.

function insertionSort(arr){
	for (var i = 0; i < arr.length; i++) {
		var currentVal = arr[i]; //keeping track of current value
		for (var j = i - 1; j > -1 && arr[j] > currentVal; j--) { //iterating backwards, one E behind i, checking to make sure j is created than currentVal
			arr[j+1] = arr[j] //if arr[j] > currentVal, move that element up one position in the array
		}
		arr[j+1] = currentVal; //and move currentVal into the sorted array
		console.log(arr)
	}
	return arr;
}

insertionSort([2, 1, 9, 76, 4]);
insertionSort([1, 2, 3, 4, -1]);
insertionSort([2,5,97,13,75,-1,103,127,7,43,8,21,6]);

//*************Why does this not work with ES5 syntax?  it is necessary to use var here and not let... why?

//Time Complexity: 
	//Worst Case: 0(n^2) Quadratic
	//Best Case: O(n^2) Quadratic but time could be much less if a lot of the data is sorted.

