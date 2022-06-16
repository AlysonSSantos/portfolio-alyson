const playVid = () =>{
   document.getElementById("vid").play();
}

const navigation = (way) =>{
    let sidebar = document.querySelector('.sidebar');
    let menuOptions = document.querySelector('.sidebar ul');
    let exitButton = document.querySelector('.exit-button');
    let exitIcon = document.querySelector('.exit-button img')

    switch(way){
        case "openMenu":
            sidebar.style.display = 'flex';
            sidebar.style.zIndex = '1';
            menuOptions.style.animation = "ease-in .9s animateMenuIn";
            exitIcon.style.animation='ease-in animate-exit-button-in .5s';

            setTimeout(()=>{
                exitIcon.style.animation='none';
            }, 450)

        break;
        case "closeMenu":
            menuOptions.style.animation = "ease .5s animateMenuOut";
            exitIcon.style.animation='ease-out animate-exit-button-out .5s';

            setTimeout(()=>{
                sidebar.style.display = 'none';
            }, 510);
        break;
    }
}

function redirect (to){
    let initContainer = document.querySelector('.init-container')

    switch(to){
        case "initialRedirect":
            console.log('clicado')
            //initContainer.style.display='none'
        break;
    }
}


