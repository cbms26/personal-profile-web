const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkboxValues = {};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    checkboxValues[checkbox.id] = checkbox.checked;
    console.log("Checkbox states:", checkboxValues);
  });
});
