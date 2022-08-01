/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m === 1 || n === 1) {
        
        return 1;
    }
    
    else {
        
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
    }
    
};


// A solution with dynamic programming memoization technic:

var uniquePaths = function(m, n, memo = {}) {
    if (n == 1 || m == 1) {
        return 1;
    }
    if (!memo[[n,m]]) {
        
        memo[[n,m]] = uniquePaths(n-1, m, memo) + uniquePaths(n, m-1, memo)
    }
    
    return memo[[n,m]];

};
