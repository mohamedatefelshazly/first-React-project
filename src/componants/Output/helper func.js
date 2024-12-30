export function showLabel(e) {
  const lab = Array.from(document.querySelectorAll(`label`));
  for (const element of lab) {
    if (element.htmlFor == e.target.id) {
      if (e.target.value != "") {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
}

export function activeNav(e) {
  const tabs = Array.from(document.querySelectorAll("nav ul li a"));
  for (const element of tabs) {
    element.classList.remove("activeTab");
  }
  e.target.classList.add("activeTab");
  console.log(e.target);
}
