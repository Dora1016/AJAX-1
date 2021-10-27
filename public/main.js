

getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/eg.js')
    request.onload = ()=>{
        console.log('成功了')
        console.log(request.response)
        
        // 创建script标签 
        const script = document.createElement('script')
        // 填写script内容
        script.innerHTML = request.response
        // 插到头里面
        document.body.appendChild(script)
    }
    request.onerror= ()=>{
        console.log('失败了')
    }
    request.send()
}

getCSS.onclick = ()=>{
    /*const request = new XMLHttpRequest()
    request.open('GET','/style.css')
    request.onload = ()=>{
        console.log('成功了')
        console.log(request.response)
        
        // 创建style标签 
        const style = document.createElement('style')
        // 填写style内容
        style.innerHTML = request.response
        // 插到头里面
        document.head.appendChild(style)
    }
    request.onerror= ()=>{
        console.log('失败了')
    }
    request.send() */
    const request = new XMLHttpRequest()
    request.open('GET','/style.css')  // readyState = 1
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            // 下载完成但不知道是成功2XX还是失败4XX
            if(request.status>=200 && request.status < 300){
                // 创建style标签 
                const style = document.createElement('style')
                // 填写style内容
                style.innerHTML = request.response
                // 插到头里面
                document.head.appendChild(style)
            } else {
                alert('加载CSS失败')
            }
        }
    }
    
    request.send() //readyState = 2

}
getHTML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/eg2.html')
    request.onload = ()=>{
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div) 
    }
    request.onerror = ()=>{}
    request.send()
}
getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/eg3.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        
        }
    }
    request.send()
}
getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/eg4.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            // console.log(request.response)
            // JSON.parse可以把符合JSON语法的字符串变成对应的对象或者其他东西，不一定是对象
            const object  = JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
    request.send()
}
let n = 1
getPage.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            });
            n+=1
        }
    }
    request.send()
}
