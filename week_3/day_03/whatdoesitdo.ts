function hello(n: number){
    if (n < 2000){
    console.log('hello' + n);
    hello(n+1);   
    } 
}

hello(0);