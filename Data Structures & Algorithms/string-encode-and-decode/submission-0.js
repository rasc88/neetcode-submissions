class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result='';

        for(let i=0; i<strs.length; i++){
            result+= strs[i].length + '#' + strs[i];
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let length = 0;
        let i=0

        while(i < str.length){
            if(str[i]==='#'){
                const init = i + 1;
                const end = init + parseInt(length);
                result.push(str.slice(init, end)) ;

                i = end ;
                length = '';
            } else {
                length += str[i];
                i++;
            }
        }

        return result;
    }
}

