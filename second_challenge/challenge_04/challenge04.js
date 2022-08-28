/**
 * Returns a string with the people that like an item.
 * */
export function likes(names) {
    if (names.length===0){
        return 'no one likes this';
    }
    if (names.length===1){
        return `${names} likes this`;
    }
    let result="";
    if(names.length<4){
        for (let name of names){
            if(names.indexOf(name)===names.length-1){
            result= result.slice(0,-2)+` and ${name}`;

            }else{
                result+= `${name}, `;
            }
        
        }
    
        return  result+" like this";
    }

    return `${names[0]}, ${names[1]} and 2 others like this`
    

}
