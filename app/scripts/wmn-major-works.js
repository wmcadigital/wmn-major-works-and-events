function resultsFilter(elem) {
  if (elem.value != 0) { // hide the events
      const events = document.querySelectorAll(".tile");
      for (var i = 0; i < events.length; i++) {
          events[i].style.display = 'none';
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
  let myElementss = document.querySelectorAll('.planned' + value);
  for (let i = 0; i < myElementss.length; i++) {
      myElementss[i].style.display = 'block';
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
