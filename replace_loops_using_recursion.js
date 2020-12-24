//Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }
  
  /* 1) sum([1], 0) should equal 0.
     2) sum([2, 3, 4], 1) should equal 2.
     3) sum([2, 3, 4, 5], 3) should equal 9. */
  
 /* My explanations are down below */

/*
    Explanation 1) 
    sum([1], 0) should equal 0.
    n is less or equal to 0 so line 2 works and returns 0 at line 3.
*/

/*  Explanation 2) 
    sum([2, 3, 4], 1) should equal 2
    n is not less or equal to 0 so it will not return 0 according to line 2. We move to line 5.
    *return sum(arr, n - 1) + arr[n - 1];
=>  return sum([2, 3, 4], 1 - 1) + arr[1 - 1];
=>  return sum([2, 3, 4], 0) + arr[0] => n is less or equal to 0 so it will return zero according to line 2.
=>  return 0 + arr[0]
=>  Since arr[0] is equals to 2
=>  return 0 + 2;
=>  2
*/

/*  Explanation 3)
    sum([2, 3, 4, 5], 3) should equal 9
    n is not less or equal to 0 so it will not return 0 according to line 2. We move to line 5.
    *return sum(arr, n - 1) + arr[n - 1];
=>  return sum([2, 3, 4, 5], 3 - 1) + arr[3 - 1];
=>  return sum([2, 3, 4, 5], 2) + arr[2]; => n is 2, not less or equal to 0 so go back to line 5 + arr[2].
=>  return sum(arr, n - 1) + arr[n - 1] + arr[2];
=>  return sum([2, 3, 4, 5], 2 - 1) + arr[2 - 1] + arr[2];
=>  return sum([2, 3, 4, 5], 1) + arr[1] + arr[2]; => n is 1, not less or equal to 0 so goes back to line 5 arr[1] + arr[2].
=>  return sum(arr, n - 1) + arr[n - 1] + arr[1] + arr[2];
=>  return sum([2, 3, 4, 5], 1 - 1) + arr[1 - 1] + arr[1] + arr[2];
=>  return sum([2, 3, 4, 5], 0) + arr [0] + arr[1] + arr[2];
=>  return 0 + arr[0] + arr[1] + arr[2];
=>  in our array, arr[0] is 2, arr[1] is 3, arr[2] is 4.
=>  0 + 2 + 3 + 4
=>  5 + 4
=>  returns 9
*/

// I asked to devs in stackoverflow about other ways: 

/*line 7 can be written as code in line 57 according to Athii (https://stackoverflow.com/users/9508936/athii)
    return n <= 0 ? 0 : sum(arr, n - 1) + arr[n - 1]; 
*/

/*All code can be written as just 1 code as in line 61 according to Mister Jojo (https://stackoverflow.com/users/10669010/mister-jojo)
    const sum = (arr,n) => --n<0 ? 0 : sum(arr,n) +arr[n]
*/