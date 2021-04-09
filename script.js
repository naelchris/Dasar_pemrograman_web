function navFunction(){
    let x = document.getElementById('myNav')
    if(x.className === 'myNav'){
        x.className += ' responsive'
    }else{
        x.className = 'myNav'
    }
}

function scrollMyBio(){
    document.getElementById('myBio').scrollIntoView({
        behavior: "smooth"
    })
}

function scrollHome(){
    document.getElementById('home').scrollIntoView({
        behavior: "smooth"
    })
}

function scrollProject(){
    document.getElementById('project').scrollIntoView({
        behavior: "smooth"
    })
}
function scrollMyAside(){
    document.getElementById('myAside').scrollIntoView({
        behavior: "smooth"
    })
}