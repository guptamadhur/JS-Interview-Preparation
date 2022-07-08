
function chunks(arr, chunkSize, func) {
    /**
     * Given a large array, and a bucket size, split the large array into
     * chunks of bucket size and execute func with arr chunk as the arg
     *
     * Eg: arr size is 1000000 and chunkSize is 100, then you'd have 10000
     *     chunks, each for each chunk you'd have to call func(chunk)
     */
    const arrLength = arr.length; 
    for(let i=0; i< arrLength; i+chunkSize){
      const chunk = arr.slice(i, i+chunkSize);
    }
  }
  