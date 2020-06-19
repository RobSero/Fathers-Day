$(function(){

  $('.button').click(()=>{
    $('.card-front').fadeOut(1000)
    setTimeout(()=> {
      $('.open-card').fadeIn(2000)
    }, 1500)
    setTimeout(()=> {
      $('.inner-leaf-card-image').fadeIn(2000)
    }, 3000)
  })
    
    
  
})