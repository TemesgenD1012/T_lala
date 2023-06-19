import  lists from './recomendationList'

export default function findFoodByBlood(blood){
    const blood_type ="group "+ blood;
    const result = {good:[],bad:[],normal:[]};
    for(let i in lists){
        if(lists[i].hasOwnProperty(blood_type)){
            if(lists[i][blood_type] === 'O')
            {
                result.normal.push({food:Object.values(lists[i])[0],food_type: Object.entries(lists[i])[0][0]})
            } 
            else if(lists[i][blood_type] === 'X')
            {
                result.bad.push({food:Object.values(lists[i])[0],food_type: Object.entries(lists[i])[0][0]})
            } 
            else if(lists[i][blood_type] === '+'){
                result.good.push({food:Object.values(lists[i])[0],food_type: Object.entries(lists[i])[0][0]})
            } 
        }
    }

    
    return result;
}

export function structurize(result){
    // const subResult = [];
    const goodArr = [];
    const normalArr = [];
    const badArr = [];
    for(let i=0; i<result.good.length; i++){
        // subResult[i] = {good:result.good[i].food}
        goodArr.push(result.good[i].food)
    }
    for(let i=0; i<result.bad.length; i++){
        // subResult[i] = {...subResult[i], bad:result.bad[i]?.food}
        badArr.push(result.bad[i].food)
    }
    for(let i=0; i<result.normal.length; i++){
        // subResult[i] = {...subResult[i], normal:result.normal[i]?.food}
        normalArr.push(result.normal[i].food)
    }

    return [
        goodArr,
        badArr,
        normalArr
    ]
}
