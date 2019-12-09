function sum (a : number, b : number) : number {
    return a + b;
}
console.log(sum(3,4))

function sum2 (a : string, b : string) : any {
    console.log(a + b);
}
sum2('hello,', 'ts');
//字符串,数字类型 ,boolean
{
    let name: string = `Gene`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${ name }.I'll be ${ age + 1 } years old next month.`;
    console.log(sentence);
}
//数组类型
let list: number[] = [12,3,4,4];
//数组范型
let list2: Array<number> = [1,2,45,5];
console.log(list2);

//元组类型
let x : [string, number] = ['psjfs', 2];
console.log(x);
console.log(x[0].substr(1));

//枚举类型
enum color {'red' = 1, 'blue'= 2, 'grey' = 3};

let c:color = color.red;//1;编号默认从0开始
let colorname :string = color[3];
console.log(c);
console.log(colorname);//grey

//any类型
let notsure:any = 4;
// notsure = 'maybe a string';
notsure = false;
console.log(notsure);

let list3: any[] = [1,true,'jjj'];
list3[2] = 'hhh';
console.log(list3[2].substr(2));

//void类型
function fun() :void {
    console.log('function fun');
}
fun();

//null undefined
let u : undefined = undefined;
let n : null = null;
console.log(u,n);
//默认情况下,null undefined 是所有类型的子类型;可以把null和undefined赋值给number类型的变量
let haha :number = undefined;
console.log(haha);//undefined

//never类型
function loop() : never {
    while(true){
    }
}

//object非原始类型
declare function create(o:object | null) : void;

//类型断言(程序员对该类型进行了必要的检查)
let someValue: any = 'this is a string';
let strlength1: number = (<string>someValue).length;
let strlength2: number = (someValue as string).length;
console.log(strlength1);
console.log(strlength2);

import Student from './Student';
let xm = new Student('小明', 12);
console.log(xm.age);