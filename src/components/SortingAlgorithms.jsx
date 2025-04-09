export const bubbleSort = (arr) => {
    let sortedArray = [...arr];
    let len = sortedArray.length;
  
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (sortedArray[j] > sortedArray[j + 1]) {
          [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
        }
      }
    }
    return sortedArray;
  };
  
  export const selectionSort = async (arr, setArray, delay = 100) => {
    let sortedArray = [...arr]; // Copy the original array
    let len = sortedArray.length;
  
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < len; j++) {
        if (sortedArray[j] < sortedArray[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        // Swap elements
        [sortedArray[i], sortedArray[minIndex]] = [sortedArray[minIndex], sortedArray[i]];
        
        // Update state with a copy of the array
        setArray([...sortedArray]);
  
        // Add delay for animation
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  };
  
  