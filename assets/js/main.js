const initialHeader = `
        <input type="button" value="Contate-me" class="callToContact"/>

        <div onclick="navigation('openInitialMenu')" class="menuIcon">
            <div class="menu-style-line-1"></div>
            <div class="menu-style-middle-line"></div>
            <div class="menu-style-line-1"></div>
        </div>

        <nav class="sidebar">
            <span onclick="navigation('closeInitialMenu')" class="exit-button"> <img src="assets/media/close-icon.png" alt="menu close icon"/> </span>
            <ul>
                <li>Home</li>
                <li>Sobre</li>
                <li>Conhecimentos</li>
                <li>Projetos</li>
                <li>Contate-me</li>
            </ul>
        </nav>
    `;

const mainContentHeader = `
            <input type="button" value="Contate-me" class="callToContact"/>
        
            <div onclick="navigation('openMainMenu')" class="menuIcon">
                <div class="menu-style-line-1"></div>
                <div class="menu-style-middle-line"></div>
                <div class="menu-style-line-1"></div>
            </div>
        
            <nav class="main-sidebar">
                <span onclick="navigation('closeMainMenu')" class="exit-main-menu-icon"> <img src="assets/media/close-icon.png" alt="menu close icon"/> </span>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Conhecimentos</li>
                    <li>Projetos</li>
                    <li>Contate-me</li>
                </ul>
            </nav>
    `;

const initialContent = `
    <div class="bg">
        <video autoplay loop muted>
            <source src="assets/media/Glitch - 36784.mp4" type="video/mp4">
        </video>
    </div>

    <div class="init-container">

        <div onclick="redirect('initialRedirect')" class="action">
            <p>Clique  aqui para entrar</p>
        </div>

        <p id="init-bottom-text">
            A hora de acessar sites genéricos chegou ao fim! Este está fora dos padrões. <span onclick="redirect('initialRedirect')" id="click-area">Venha comigo!</span>
        </p>
    </div>
`

const putContentOfPage = () =>{
    let initialScreen = document.querySelector('.initial-screen');
    let initialMenu = document.querySelector('.init-menu');
    let mainMenu = document.querySelector('.main-header');

    initialMenu.innerHTML += initialHeader;
    mainMenu.innerHTML += mainContentHeader;

    initialScreen.innerHTML += initialContent;
}

window.addEventListener('load', ()=>{
    putContentOfPage();
})

const navigation = (way) =>{
    let sidebar = document.querySelector('.sidebar');
    let menuOptions = document.querySelector('.sidebar ul');
    let exitButton = document.querySelector('.exit-button');
    let exitIcon = document.querySelector('.exit-button img');
    
    let mainSidebar = document.querySelector('.main-sidebar');
    let exitMainMenuIcon = document.querySelector('.exit-main-menu-icon img');
    let mainMenuOptions = document.querySelector('.main-sidebar ul');


    switch(way){
        case "openInitialMenu":
            sidebar.style.display = 'flex';
            sidebar.style.zIndex = '1';
            menuOptions.style.animation = "ease-in .9s animateMenuIn";
            exitIcon.style.animation='ease-in animate-exit-button-in .5s';

            setTimeout(()=>{
                exitIcon.style.animation='none';
            }, 450)

        break;
        case "closeInitialMenu":
            menuOptions.style.animation = "ease .5s animateMenuOut";
            exitIcon.style.animation='ease-out animate-exit-button-out .5s';

            setTimeout(()=>{
                sidebar.style.display = 'none';
            }, 510);
        break;
    
        case "openMainMenu":
            mainSidebar.style.display = 'flex';
            mainSidebar.style.zIndex = '1';
            mainMenuOptions.style.animation = "ease-in .9s animateMenuIn";
            exitMainMenuIcon.style.animation='ease-in animate-exit-button-in .5s';

            setTimeout(()=>{
                exitMainMenuIcon.style.animation='none';
            }, 450)

        break;
        case "closeMainMenu":
            mainMenuOptions.style.animation = "ease .5s animateMenuOut";
            exitMainMenuIcon.style.animation='ease-out animate-exit-button-out .5s';

            setTimeout(()=>{
                mainSidebar.style.display = 'none';
            }, 510);
    }
}

function redirect (to){
    let initContainer = document.querySelector('.init-container');
    let background = document.querySelector(".bg");
    let initMenu = document.querySelector('.init-menu');
    let mainContent = document.querySelector('.content');
    let mainHeader = document.querySelector('.main-header')

    switch(to){
        case "initialRedirect":

            initContainer.style.display = 'none';
            initMenu.style.display = 'none';

            background.style.animation = 'out-animation ease-out 4s';
            
            setTimeout(()=>{
                background.style.display = 'none';
                mainContent.style.display = 'block';
                mainHeader.style.display = 'block';
            }, 700)

        break;
    }
}

function setColorTheme(mode){
    switch(mode){
        case 'dark':
            document.querySelector('html').style.background="#151313";
        break;
        case 'light':
            document.querySelector('html').style.background="#fff";
        break;
    }
}

setColorTheme('dark')

