function open_editions_sidenav() {
    document.getElementById("content").style.marginLeft = "30%";
    document.getElementById("editions_sidebar").style.width = "30%";
    document.getElementById("editions_sidebar").style.display = "block";
    document.getElementById("open_editions_sidebar").style.display = 'none';
  }
  
  function close_editions_sidenav() {
    document.getElementById("content").style.marginLeft = "0%";
    document.getElementById("editions_sidebar").style.width = "0%";
    document.getElementById("open_editions_sidebar").style.display = "inline-block";
  } 