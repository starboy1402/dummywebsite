// Optional: add confirmation on form reset
export function confirmFormClear(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('reset', (e) => {
    const confirmReset = confirm('Are you sure you want to clear this form?');
    if (!confirmReset) e.preventDefault();
  });
}
