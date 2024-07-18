import { Personalization } from '@scripts/Personalization';

export const leetcode = new Personalization('leetcode', /leetcode\.com\/explore\/interview/i, {
  css: getLeetcodeCSS()
});

function getLeetcodeCSS() {
  return `

.content-base .article-base.viewer-base {
  background-color: #1d354b;
}
.content-icon.fa-font {
  color: #88c0db;
}

.content-base .article-base.viewer-base .article-inner {
  background-color: #152f43;
  color: white;
}

a {
  color: #89afd2;
}

nav.leetcode-navbar span.dark:display-none {
  display: none;
}
nav.leetcode-navbar > div.display-none span.display-none {
  display: flex;
}
nav.leetcode-navbar > div.display-none span.display-none + span {
  display: none;
}
nav.nav-bar-container {
  background-color: #1d354b;
}

nav.nav-bar-container ul > li * {
  color: #ffffffad;
}

div.content-viewer-toolbar-base {
  background-color: #1d354b;
  height: 35px;
  padding: 3px 6px 0 0;
  box-shadow: 0 3px 3px 0 #283f55;
}
div.content-viewer-toolbar-base button.btn {
  background-color: #1d354b;
  color: #ffffffad;
}
div.content-viewer-toolbar-base button.btn {
  font-size: 14px;
}
div.content-viewer-toolbar-base button.btn.prev,
div.content-viewer-toolbar-base button.btn.next {
  font-size: 14px;
}
div.content-viewer-toolbar-base button.btn.prev span,
div.content-viewer-toolbar-base button.btn.next span {
  top: 0;
}

div.list-group-item {
  background-color: #1d354b;
  color: white;
}

div.expandable-chapter-list-base .chapter-item .chapter .description::after {
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #1d354b 50%);
}

div.expandable-chapter-list-base .item-list-group .list-group-item.selected,
div.expandable-chapter-list-base .item-list-group .list-group-item.selected:hover {
  background-color: #1d354b;
}

div.expandable-chapter-list-base .item-list-group .list-group-item {
  background-color: #112738;
}

div.expandable-chapter-list-base .chapter-item .list-group {
  background-color: #1d354b;
}

div.expandable-chapter-list-base .chapter-item .chapter-base.active {
  background-color: #104369;
}
div.expandable-chapter-list-base .chapter-item .chapter-base.active:hover {
  background-color: #112738;
}
div.expandable-chapter-list-base .chapter-item .chapter-base.active .chapter .description::after {
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #082439 50%);
}
div.expandable-chapter-list-base .chapter-item .chapter-base.active {
  background-color: #082439;
}

.content-base .article-base div.block-markdown {
  background-color: #152f43;
}
div.block-markdown p,
div.block-markdown li {
  color: #ece9e3;
}
div.block-markdown blockquote {
  border-left: 6px solid #37709b;
  background-color: #274359;
}
p code {
  background-color: #8ca6c0;
  color: #152f43;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: white !important;
}

div.content-viewer-base .view-controller .content-viewer-view {
  background-color: #1d354b;
}

::-webkit-scrollbar {
  background: #3a5771;
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: #152d41;
}

.text-text-secondary {
  color: #ffffffad;
}

div.content-base .question-base .question-area .question-detail {
  background-color: #ffefd2;
}
.question-detail pre {
  background-color: #eddab9;
}
.question-detail img {
  opacity: 0.75;
}
div.content-base .question-base .question-wrapper .question-title {
  color: white;
}
div.content-base .question-base .answer-btn {
  background-color: #3e5e7b;
  color: white;
}
.custom-textcase {
  color: white;
}
.editor-area i {
  color: white;
}
.Select-arrow {
  border-color: white transparent transparent;
}
.select-wrapper .Select-arrow-zone {
  background-color: #3e5e7b;
}
div.select-wrapper * > .Select-control {
  background-color: #3e5e7b;
}
.Select.has-value.Select--single > .Select-control .Select-value .Select-value-label, .Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {
  color: white;
}
.editor-btn.btn-default {
  color: white;
  background-color: #3e5e7b;
}
.content-base .question-base .editor-area {
  margin-bottom: 200px;
}
.result-panel-base * {
  background-color: #2a4a66 !important;
  color: white !important;
}
`;
}
