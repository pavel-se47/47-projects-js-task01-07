const fontSizeControlAccess = document.querySelector('#font-size-control');
const textAccess = document.querySelector('#text');

// const changeSizeText = () => {
//   fontSizeControlAccess.addEventListener('input', event => {
//     textAccess.style.fontSize = `${event.currentTarget.value}px`;
//   });
// };

// changeSizeText();

const changeSizeText = () => {
  textAccess.style.fontSize = `${fontSizeControlAccess.value}px`;
};

changeSizeText();

fontSizeControlAccess.addEventListener('input', changeSizeText);
