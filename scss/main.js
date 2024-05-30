




function progressbar(classname){
    window.addEventListener('scroll', function() {
        const element = document.querySelector(classname);
        const position = element.getBoundingClientRect();
      
        // check whether the element is in the viewport
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
          element.classList.add('in-view');
        } else {
          element.classList.remove('in-view');
        }
      });

}

progressbar('.experience');