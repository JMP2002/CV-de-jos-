jQuery(´document´).ready(function($){
 
 ver menuBtn = $( ´.menu-icon´),
     menu = $(´.navigation ul´);

  menuBtn.click(function(){
  
    if( menu.hasclass(´show2´) ){
     
       menu.removeclass(´show2´);

    } else{
    
      menu.addclass(´show2´);
    }

  });     
});
