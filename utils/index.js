export const timeConvert = (n) => {
  let num = n;
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  if (rhours > 1) {
    rhours = rhours + " hours";
  }
  if (rhours === 1) {
    rhours = rhours + " hour";
  }
  if (rhours === 0) {
    rhours = "";
  }
  if (rminutes > 1) {
    rminutes = rminutes + " minutes";
  }
  if (rhours === 1) {
    rminutes = rminutes + " minute";
  }
  if (rminutes === 0) {
    rminutes = "";
  }

  return rhours === "" || rminutes === ""
    ? rhours + " " + rminutes
    : rhours + " and " + rminutes;
};
