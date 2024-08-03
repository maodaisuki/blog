function switchPulldownMenu() {
    var pulldownMenu = document.getElementsByClassName('pulldown-menu')[0];
    var pulldownMenuToggle = document.getElementsByClassName('pulldown-menu-toggle')[0];
    if(pulldownMenu.classList.contains('show')) {
        pulldownMenu.classList.remove('show');
        document.getElementsByClassName('main')[0].classList.remove('blur');
        document.getElementsByClassName('footer')[0].classList.remove('blur');
        document.getElementById('top-link').classList.remove('blur');
        pulldownMenuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>'
    
    }
    else {
        pulldownMenu.classList.add('show');
        document.getElementsByClassName('main')[0].classList.add('blur');
        document.getElementsByClassName('footer')[0].classList.add('blur');
        document.getElementById('top-link').classList.add('blur');
        pulldownMenuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'

    }
}

// zoom.js 添加 data-action
function imgAddDataAction()
{
    const imglist = document.getElementsByTagName("img")
    for(i of imglist)
    {
        i.setAttribute("data-action", "zoom");
    }
}
