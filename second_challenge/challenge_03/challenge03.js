/**
 * Returns a list of the values associated with the provided key.
 * The function accepts an array of objects as its first parameter
 * and a string key as its second paramenter.
 */
export function extract(list, key) {

// try {
    if(Array.isArray(list)){
        let result = []
        for (const property of list) {
            if(property[key]){
                result.push(property[key]);
            }
            else{
                result.push(null);
            }
        }
        return result
    }
    else {
        throw('Please provide an Array as input.');
    }
// } catch (error) {
//     console.log(error);
// }

  
    }
