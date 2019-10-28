let html = document.querySelector('#html');
// 通过css选择器找到某个元素
let style = document.querySelector('#style');

let string = `/*你好，我叫小韩
*接下来我演示一下我的前端功底
*首先我要准备一个div
**/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加上阴阳眼 */

#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;

let string2 = '';
// string = string.replace(/\n/g,'<br>') let等于-1之后去掉
// replace 可以把字符串里的（什么，变成什么），replace 只会把第一个空格转换，
// 这里需要阵则表达式，也就是把 " '\n' " 变为 " /\n/g " ;
console.log(string.length)
let n = 0;

// demo.innerHTML = string.substring(0,n);
// string.substring 从哪里开始到哪里结束
// let n = -1;“demo.innerHTML = string.substring(0,n);这句话可以省”
// 等于-1时下面函数一样是从零开始

let step = () =>{
    setTimeout(()=>{
        console.log(n)
        // n = n + 1  为什么第一个从n+1,开始，不需要，又让let n = 0;
        if (string[n] === "\n"){
            // 如果是回车，就不照搬
            string2 += "<br>";
        }else if(string[n] === " "){
            // html 里面的空格是用 "&nbsp;" 表示的
            string2 += "&nbsp;";
            
        }else{
            // 如果不是回车就照搬
            string2 += string[n];
        }
        html.innerHTML = string2;
        // demo.innerHTML = string.substring(0,n);
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0, 99999);

        if(n < string.length-1){
            // 如果不是最后一个,就继续
            n += 1
            step()
        }else{
            // 是最后一个,什么都不干
        }        
    },10) ;  
}

// setTimeout只响应一次；setInterval每个多长时间响应一次；
// 老手一般不用setInterval,用递归的setTimeout,这样可以随时停止

step ()

