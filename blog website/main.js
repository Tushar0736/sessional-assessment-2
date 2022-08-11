const menuToggle=document.querySelector('.menuToggle');
        const navigation=document.querySelector('.navigation');
        menuToggle.onclick=function(){
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('active');
        }
        window.addEventListener('scroll',function(){
            const header=document.querySelector('header');
            header.classList.toggle('sticky',window.scrollY > 0);
        })


        function toggleMenu(){
            menuToggle.classList.remove('active');
            navigation.classList.remove('active');
        }

        const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);


function createCard(title, content){
    const ele = ` <div class="postBox" style="background-color: grey;">

    <div class="textBx">
        <h3>${content}</h3>
        <a href="#" class="btn">Read More</a>
    </div>
</div>`;
return ele;
}



xhr.onload= function(){
    const response = JSON.parse(xhr.responseText);
    const contentBox = document.getElementById("containerofblogs");
    contentBox.innerHTML = null;

    console.log("function ran")
    console.log(contentBox)
    let cnt = 0;

    let postColum = document.createElement('div')
    postColum.setAttribute('class', 'postColumn');
    for(let i=0; i<response.length; i++){
        if(cnt==3){
            const ele = postColum.cloneNode(true);
            contentBox.appendChild(ele);
            postColum.innerHTML = null;
            cnt = 0;
        }
        else{
            postColum.innerHTML+=createCard(response[i].title, response[i].body)
        }
        cnt++;
        console.log(cnt)
    }
//4. request send
}
xhr.send();