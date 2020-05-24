export const replaceByHTML = (text, words) => {
  const split_text = text.split(' ');

  for (let i = 0; i < split_text.length; i++) {
    for (let k = 0; k < words.length; k++) {
      if (split_text[i] == words[k]) {
        split_text[i] = `
        <strong> ${split_text[i]} </strong>
        `;
      }
    }
  }

  return split_text.join(' ');
};

export const joinByDash = (tags) => {
  const tags_ = tags.join('-');
  return tags_;
};

export const joinByDashJson = (tags) => {
  const table = [];
  tags.forEach((value) => {
    table.push(value.tag_title);
  });
  console.log(table.join('-'));

  return table.join('- ');
};

export const isDividVy2 = (num) => {
  return num % 2 === 0;
};
