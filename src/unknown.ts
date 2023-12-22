// Unknown 未知 type
// any相當於關閉左typescript, ts就唔理
// Unknown 仍然監管住個type, 係個var未知的時候禁止你做一D野, 直至你攪清楚個type係D mud野
let anObject:unknown

if(anObject && typeof anObject === 'object')
{
    //不是null/undefined , 確認係一個object
    console.log(anObject)

    if('name' in anObject)
    {
        //碉認有name property, 但唔知name是甚麼type
        console.log(anObject.name)

        if(typeof anObject.name === 'string')
        {
            //anObject.name 一定是string
            console.log(anObject.name.length)
        }
    }
}