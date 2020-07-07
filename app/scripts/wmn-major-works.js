// filter function for area dropdown
function resultsFilter(elem) {
  if (elem.value != 0) {
      // hide the events
      const events = document.querySelectorAll(".tile");
      for (var i = 0; i < events.length; i++) {
          events[i].style.display = 'none';
          events[i].classList.remove("result");
      }
      liveResults();
      plannedResults();
  } else {
      const events = document.querySelectorAll(".tile");
      let countLive = document.querySelectorAll('.liveResults .tile').length;
      let countPlanned = document.querySelectorAll('.plannedResults .tile').length;
      const noLiveRes = document.querySelector(".noliveresults");
      const noPlannedRes = document.querySelector(".noplannedresults");

      // show all events
      for (var e = 0; e < events.length; e++) {
          events[e].style.display = 'block';
          events[e].classList.remove("result");
      }
      // show no results message if no results
      if (countLive == 0) {
        noLiveRes.style.display = 'block';
      } else {
        noLiveRes.style.display = 'none';
      }
      if (countPlanned == 0) {
        noPlannedRes.style.display = 'block';
      }else{
        noPlannedRes.style.display = 'none';
      }
  }
}
function liveResults() {
  const e = document.getElementById("areaSelect");
  let value = e.options[e.selectedIndex].value;
  // unhide live events
  let countLive = 0;
  let myElements = document.querySelectorAll('.live' + value);
  for (let i = 0; i < myElements.length; i++) {
      myElements[i].style.display = 'block';
      myElements[i].classList.add("result"); // add result class in order to style margin
      countLive = countLive + 1;
  }
  // display no results message
  const noLiveRes = document.querySelector(".noliveresults");
  if (countLive == 0) {
      noLiveRes.style.display = 'block';
  } else {
      noLiveRes.style.display = 'none';
  }
}
function plannedResults() {
  const e = document.getElementById("areaSelect");
  let value = e.options[e.selectedIndex].value;
  // unhide planned events
  let countPlanned = 0;
  let plannedEvents = document.querySelectorAll('.planned' + value);
  for (let i = 0; i < plannedEvents.length; i++) {
      plannedEvents[i].style.display = 'block';
      plannedEvents[i].classList.add("result");
      countPlanned = countPlanned + 1;
  }
  // display no results message
  const noPlannedRes = document.querySelector(".noplannedresults");
  if (countPlanned == 0) {
      noPlannedRes.style.display = 'block';
  } else {
      noPlannedRes.style.display = 'none';
  }
}
// show no results if 0 on page load
document.addEventListener("DOMContentLoaded",function(){
  let countLive = document.querySelectorAll('.liveResults .tile').length;
  let countPlanned = document.querySelectorAll('.plannedResults .tile').length;
  // show live no results message
  const noLiveRes = document.querySelector(".noliveresults");
  if (countLive == 0) {
      noLiveRes.style.display = 'block';
  } else {
      noLiveRes.style.display = 'none';
  }
  // show planned no results message
  const noPlannedRes = document.querySelector(".noplannedresults");
  if (countPlanned == 0) {
      noPlannedRes.style.display = 'block';
  } else {
      noPlannedRes.style.display = 'none';
  }
});
