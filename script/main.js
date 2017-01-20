(function(){
  console.log('hello');
  var theImages = document.querySelectorAll('.image-holder'),
      theHeading = document.querySelector('.heading'),
      theSubhead = document.querySelector('.main-copy h2'),
      theSeasonText = document.querySelector('.main-copy p'),
      season = "spring";
      appliedClass = "null";

      theSubhead.innerHTML = dynamicContent[season].headline;
      theSeasonText.innerHTML = dynamicContent[season].text;
      theSubhead.classList.add(season);
      theHeading.classList.add(season);

  function changeElements(e){
    season = e.currentTarget.id;
    //console.log(season);
    theSubhead.innerHTML = dynamicContent[season].headline;
    theSeasonText.innerHTML = dynamicContent[season].text;
    if (theSubhead.classList.contains(appliedClass)){
      theSubhead.classList.remove(appliedClass);
      theHeading.classList.remove(appliedClass);
    }
    theSubhead.classList.add(season);
    theHeading.classList.add(season);
    appliedClass = season;
  }

  [].forEach.call(theImages, function(image){
    image.addEventListener('click', changeElements, false);
  });

})();
