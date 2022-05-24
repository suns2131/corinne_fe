export function maxExp(currentExp) {
  let MaxData = 0;
  if (currentExp >= 160000) MaxData = 320000;
  else if (currentExp >= 80000) MaxData = 160000;
  else if (currentExp >= 50000) MaxData = 80000;
  else if (currentExp >= 30000) MaxData = 50000;
  else if (currentExp >= 5000) MaxData = 30000;
  else MaxData = 5000;

  return MaxData;
}

export function checkLevelColor(exp) {
  let colors = '';
  let colorName = '';
  let colorCss = '';
  if (exp >= 350000) {
    colors = 'bg-Primary-purple';
    colorCss = '#6800BA';
    colorName = '퍼플';
  } else if (exp >= 200000) {
    colors = 'bg-Level-navy';
    colorCss = '#5760b1';
    colorName = '네이비';
  } else if (exp >= 100000) {
    colors = 'bg-Level-sky';
    colorCss = '#a1c7f4';
    colorName = '스카이';
  } else if (exp >= 60000) {
    colors = 'bg-Level-green';
    colorCss = '#c1dc95';
    colorName = '그린';
  } else if (exp >= 30000) {
    colors = 'bg-Level-yellow';
    colorCss = '#efd886';
    colorName = '옐로우';
  } else if (exp >= 5000) {
    colors = 'bg-Level-orange';
    colorCss = '#fcb370';
    colorName = '오렌지';
  } else {
    colors = 'bg-Level-red';
    colorCss = '#e05656';
    colorName = '레드';
  }
  return { colors, colorName, colorCss };
}
