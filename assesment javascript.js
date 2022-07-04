var a = 'sadasdhkasdDATE2012dfs';

let leng = a.length;

let s =[];
for(var i=0; i<leng; i++)
{
    s.push(a.substring(i, i+1));
}

// let date =[];
let RDate =[];
for(var i=0; i<leng; i++)
{
    if(s[i]=='D'){
        if(s[i+1] =='A'){
            if(s[i+2]== 'T'){
                if(s[i+3] == 'E'){
    // date.push(s[i], s[i+1], s[i+2], s[i+3]);
    RDate.push(s[i+4], s[i+5], s[i+6], s[i+7])
                    
                }
            }
        }
    }
}


let arr = RDate.toString();



// console.log(date);
console.log(RDate);
console.log(arr.replace(/,/g, ''));