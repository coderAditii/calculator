const display = document.getElementById('display');

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;

    if (val === 'C') display.value = '';
    else if (val === '←') display.value = display.value.slice(0, -1);
    else if (val === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += val;
    }
  });
});

// Optional: keyboard support
document.addEventListener('keydown', e => {
  const k = e.key;
  if ('0123456789.+-*/'.includes(k)) display.value += k;
  else if (k === 'Backspace') display.value = display.value.slice(0, -1);
  else if (k === 'Enter') {
    try { display.value = eval(display.value); } catch { display.value = 'Error'; }
  }
  else if (k.toLowerCase() === 'c') display.value = '';
});
