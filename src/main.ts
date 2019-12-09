// 接口:可选属性
// interface squareConfig {
//     color?: string;
//     width?: number;
// }
// function createSquare(config:squareConfig): {color: string, area: number} {
//     let newSquare = { color : 'white', area: 100};
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width;
//     }
//     return newSquare;
// }
// let mySquare = createSquare({color: "backg"});
// console.log(mySquare);

//只读属性
// interface Point {
//     readonly x: number;
//     readonly y: number;
// }
// let p1: Point = {x: 100, y: 20};
// p1.x = 0; //error

// 元素类型后面接[],表示由此类型元素组成的一个数组
// let a : number[] = [1, 2, 3, 4];
// // 数组范型
// let ro: ReadonlyArray<number> = [1,3,4,5];
// a[1]=10;
// // 两种类型断言
// a = ro as number[];
// // a = (<number[]>ro)


// 额外的属性检查
// interface squareConfig {
//     color?: string;
//     width?: number;
//     // 添加一个字符串索引签名,可以绕开额外的属性检查
//     [porpname:string]:any
// }
// function createSquare(config:squareConfig): {color: string, area: number} {
//     let newSquare = { color : 'white', area: 100};
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width;
//     }
//     return newSquare;
// }
// 额外的colour属性是无意义的
// 这里报错是因为对象字面量会被特殊对待而且会经过额外的属性检查,当将他们赋值给变量或作为参数传递的时候.
// 如果一个对象字面量存在任何'目标类型'不包含的属性时,会得到一个错误
// let mySquare = createSquare({ colour: "red", width: 100 });
// console.log(mySquare);


// 函数类型的接口

// interface SearchFunc {
//     (source: string, subString: string) :boolean;
// }
// let mySearch: SearchFunc;

// mySearch = function(source, subString) {
//     // search会返回第一个匹配项的索引,没有就返回-1
//     let result = source.search(subString);
//     return result > -1;
// }

