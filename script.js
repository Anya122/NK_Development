window.addEventListener('scroll', function (){
    let scroll = document.querySelector('.up_btn');
    scroll.classList.toggle("active", window.scrollY>5)
  })
  
  function scrollTopTop() {
    window.scrollTo( {
    top:0,
    behavior: 'smooth'
  })
}