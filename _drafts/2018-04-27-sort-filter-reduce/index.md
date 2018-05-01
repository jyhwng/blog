https://www.hackerrank.com/challenges/js10-arrays/problem
```javascript
function getSecondLargest(nums) {
    var sorted = nums.sort((a, b) => b - a )
    var numOfLargest = sorted.filter(x => x === sorted[0]).length
    return sorted[numOfLargest]
}
```

- reduce
https://www.hackerrank.com/challenges/js10-class/problem
```javascript
function Polygon(arr) {
    this.perimeter = () => {
        return arr.reduce((prev, curr) => prev + curr)
    }
}
```