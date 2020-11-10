function getNextArmstrong(){
    return{
        [Symbol.iterator](){
            let num=1;

    return{
        next(){
            while(true){
                let len = num.toString().length;
                let sum=0
                let temp = num;
                let rem =0;
                while(temp>0){
                    rem = temp%10;
                    sum+= Math.pow(rem,len);
                    temp = parseInt(temp/10);
                }

                if(sum === num){
                    if(num < 10000){
                        return{
                            value: num++,
                            done:false
                        };
                    }else{
                        throw "Number greater than 10k"
                    }
                    
                }

                else{
                    num++; 
                }
        }
        }
    };
        }

    };
    
}

// let arm = getNextArmstrong();
// console.log(arm.next().value);
// console.log(arm.next().value);
// console.log(arm.next().value);
// console.log(arm.next().value);
// console.log(arm.next().value);
// console.log(arm.next().value);
// console.log(arm.next().value);
// console.log(arm.next().value);
// console.log(arm.next().value);
// console.log(arm.next().value);

for(let n of getNextArmstrong()){
    console.log(n);
}