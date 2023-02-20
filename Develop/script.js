// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  var eightAMButtonEl = $('#8AM').children().eq(2);
  console.log(eightAMButtonEl);

  eightAMButtonEl.on('click', function() {
    var eightInput = $(this).siblings(".description").val().trim();
    localStorage.setItem("eightNotes", JSON.stringify(eightInput));
  });

  var nineAMButtonEl = $('#9AM').children().eq(2);
  console.log(nineAMButtonEl);

  nineAMButtonEl.on('click', function() {
    var nineInput = $(this).siblings(".description").val().trim();
    localStorage.setItem("nineNotes", JSON.stringify(nineInput));
  });

  var TenAMButtonEl = $('#10AM').children().eq(2);
  console.log(TenAMButtonEl);

  TenAMButtonEl.on('click', function() {
    var tenInput = $(this).siblings(".description").val().trim();
    localStorage.setItem("tenNotes", JSON.stringify(tenInput));
  });

  var elevenAMButtonEl = $('#11AM').children().eq(2);
  console.log(elevenAMButtonEl);

  elevenAMButtonEl.on('click', function() {
    var elevenInput = $(this).siblings(".description").val().trim();
    localStorage.setItem("elevenNotes", JSON.stringify(elevenInput));
  });

  var twelvePMButtonEl = $('#12PM').children().eq(2);
  console.log(twelvePMButtonEl);

  twelvePMButtonEl.on('click', function() {
    var twelveInput = $(this).siblings(".description").val().trim();
    localStorage.setItem("twelveNotes", JSON.stringify(twelveInput));
  });

  var onePMButtonEl = $('#13PM').children().eq(2);
  console.log(onePMButtonEl);

  onePMButtonEl.on('click', function() {
    var oneInput = $(this).siblings(".description").val().trim();
    localStorage.setItem("oneNotes", JSON.stringify(oneInput));
  });

  var twoPMButtonEl = $('#14PM').children().eq(2);
  console.log(twoPMButtonEl);

  twoPMButtonEl.on('click', function() {
    var twoInput = $(this).siblings(".description").val().trim();
    localStorage.setItem("twoNotes", JSON.stringify(twoInput));
  });

  var threePMButtonEl = $('#15PM').children().eq(2);
  console.log(threePMButtonEl);

  threePMButtonEl.on('click', function() {
    var threeInput = $(this).siblings(".description").val().trim();
    localStorage.setItem("threeNotes", JSON.stringify(threeInput));
  });

  var fourPMButtonEl = $('#16PM').children().eq(2);
  console.log(fourPMButtonEl);

  fourPMButtonEl.on('click', function() {
    var fourInput = $(this).siblings(".description").val().trim();
    localStorage.setItem("fourNotes", JSON.stringify(fourInput));
  });

  var fivePMButtonEl = $('#17PM').children().eq(2);
  console.log(fivePMButtonEl);

  fivePMButtonEl.on('click', function() {
    var fiveInput = $(this).siblings(".description").val().trim();
    localStorage.setItem("fiveNotes", JSON.stringify(fiveInput));
  });


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
    
  $(".description").each(function () {
    var currentHours = dayjs().format('HH');
    console.log(currentHours); 
  

    var timeNumber = parseInt($(this).attr('id'));
  


    if (currentHours > timeNumber) {
      $(this).addClass("past");

    } else if (currentHours < timeNumber) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }

  });





  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  function renderNotes() {
    var storedEightNotes = JSON.parse(localStorage.getItem("eightNotes"));
    if (storedEightNotes !== null) {
      var eightAM =$("#8");
      eightAM.val(storedEightNotes);
    };

    var storedNineNotes = JSON.parse(localStorage.getItem("nineNotes"));
    if (storedNineNotes !== null) {
      var nineAM =$("#9");
      nineAM.val(storedNineNotes);
    };

    var storedTenNotes = JSON.parse(localStorage.getItem("tenNotes"));
    if (storedTenNotes !== null) {
      var tenAM =$("#10");
      tenAM.val(storedTenNotes);
    };

    var storedElevenNotes = JSON.parse(localStorage.getItem("elevenNotes"));
    if (storedElevenNotes !== null) {
      var elevenAM =$("#11");
      elevenAM.val(storedElevenNotes);
    };

    var storedTwelveNotes = JSON.parse(localStorage.getItem("twelveNotes"));
    if (storedTwelveNotes !== null) {
      var twelvePM =$("#12");
      twelvePM.val(storedTwelveNotes);
    };

    var storedOneNotes = JSON.parse(localStorage.getItem("oneNotes"));
    if (storedOneNotes !== null) {
      var onePM =$("#13");
      onePM.val(storedOneNotes);
    };

    var storedTwoNotes = JSON.parse(localStorage.getItem("twoNotes"));
    if (storedTwoNotes !== null) {
      var twoPM =$("#14");
      twoPM.val(storedTwoNotes);
    };

    var storedThreeNotes = JSON.parse(localStorage.getItem("threeNotes"));
    if (storedThreeNotes !== null) {
      var threePM =$("#15");
      threePM.val(storedThreeNotes);
    };

    var storedFourNotes = JSON.parse(localStorage.getItem("fourNotes"));
    if (storedFourNotes !== null) {
      var fourPM =$("#16");
      fourPM.val(storedFourNotes);
    };

    var storedFiveNotes = JSON.parse(localStorage.getItem("fiveNotes"));
    if (storedFiveNotes !== null) {
      var fivePM =$("#17");
      fivePM.val(storedFiveNotes);
    };



  };


  function init() {
    renderNotes();
  };

  init();



  var today = dayjs();
  $('#currentDay').text(today.format('ddd, MMMM D, YYYY'));


});







