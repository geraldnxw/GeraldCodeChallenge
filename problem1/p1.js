var sum_to_n_a = function(n) {
    // your code here
    var j = 0;
    for(i=n;i>=0;i--){
        j += i;
    }
    return j;
};

var sum_to_n_b = function(n) {
    // your code here
    i = n;
    j = 0;
    while(i<=n && i>0){
        j += i;
        i -= 1;
    }
    return j;
};

var sum_to_n_c = function(n) {
    // your code here
    i = n;
    j = 0;
    do{
        j += i;
        i -= 1;
    }
    while(i > 0);
    return j;
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));