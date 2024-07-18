import { Personalization } from '@scripts/Personalization';

export const leetcodePlayground = new Personalization(
  'leetcodePlayground',
  /leetcode\.com\/playground/i,
  {
    css: getLeetcodePlaygroundCSS()
  }
);

function getLeetcodePlaygroundCSS() {
  return `

div#app .copy-code-btn {
    background-color: #c9aa8f;
    color: #5b0d0d;
    border: 1px solid #f5deb3;
}
div#app .lang-btn-set-base .lang-btn-set button {
    background-color: #d5b69b;
    color: #530b0b;
    border: 1px solid #e4d2b1;
}
div#app .lang-btn-set-base .lang-btn-set button.active {
    background-color: #caa17d;
    color: #4a0000;
}

div#app .cm-s-textmate.CodeMirror {
    background-color: #e8ccb3;
    color: #614a1f;
}

div.CodeMirror-gutters {
    background-color: #a5907e;
}
div.CodeMirror-linenumber {
    color: #fff1e4;
}


`;
}
