let value: unknown //不知道 / 未知
//keep住有type checking

value = 5
console.log(value.);

value = 'Hello'
console.log(value);
value.toUpperCase() // <-HELLO 

// Type narrow狹窄
if(typeof value === 'string')
{
    value.toUpperCase() 
}

// Type assertion斷言/明確肯定
(value as string).toUpperCase()