const swiper1 = new Swiper('.swiper1', {
  
  //Loops back when reaching the end of the slideshow. Can be replaced with Rewind: true,
  loop: true, 

  //Allows the mouse to grab the slides
  grabCursor:true, 

  //Removed "centeredSlides" to only view two slides per view
  centeredSlides:true, 
  slidesPerView: '2', 

  //Doesn't work for some reason, might be a problem with the css
  spaceBetween:'0px', 

  //Initializes the pagination below the picture
  pagination: {
    el: '.swiper-pagination1',
  },

  //Initializes the arrow buttons
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },

});

const swiper2 = new Swiper('.swiper2', {
  
  
  loop: true, 

  //Allows the mouse to grab the slides
  grabCursor:true, 

  //Removed "centeredSlides" to only view two slides per view
  centeredSlides:true, 
  slidesPerView: '1', 

  //Doesn't work for some reason, might be a problem with the css
  spaceBetween:'0px', 

  //Initializes the pagination below the picture
  pagination: {
    el: '.swiper-pagination2',
  },

  //Initializes the arrow buttons
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },

});


const swiper4 = new Swiper('.swiper4', {
  
  loop: true, 

  //Allows the mouse to grab the slides
  grabCursor:true, 

  //Removed "centeredSlides" to only view two slides per view
  centeredSlides:true, 
  slidesPerView: '3', 

  //Doesn't work for some reason, might be a problem with the css
  spaceBetween:'0px', 

  //Initializes the pagination below the picture
  pagination: {
    el: '.swiper-pagination4',
  },

  //Initializes the arrow buttons
  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
  },

});