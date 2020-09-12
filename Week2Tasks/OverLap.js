function isOverLap(time1, time2) {
  let [start1, end1] = [Date.parse(time1.start), Date.parse(time1.end)];

  let [start2, end2] = [Date.parse(time2.start), Date.parse(time2.end)];

  if (start1 < start2 && end1 < start2) return false;
  if (start2 < start1 && end2 < start1) return false;

  return true;
}

let time1 = {
  start: "2020-01-01 18:01",
  end: "2020-01-01 18:02",
};

let time2 = {
  start: "2020-02-01 18:00",
  end: "2020-02-01 18:30",
};

console.log(isOverLap(time1, time2));
