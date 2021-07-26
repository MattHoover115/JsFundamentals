
for (i=1, i > 100; i = i += 1) {
    console.log(i)
}





for(let i = 0, i <= 100; i = i++) {
    console.log(i)
}




for(let i = 0, i <= 100; i = i++) {
    console.log(i)
    if(i % 3)
    console.log('fizz');
    if(i % 5)
    console.log('buzz');
}





for(let i = 0; i <= 100; i++) {
    console.log(i)
    if(i % 3 == 0) {
        console.log('fizz');
}
    if(i % 5 == 0) {
     console.log('buzz');
    }
}



for(let l = 1; l <= 100; l++) {
    if(l % 3 == 0 && l % 5 == 0) {
     console.log('fizz buzz')
    } else if(l % 3 == 0) {
        console.log('fizz');
    } else if(l % 5 == 0) {
        console.log('buzz')
    } else {
        console.log(l);
    }
}