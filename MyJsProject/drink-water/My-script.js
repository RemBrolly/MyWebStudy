/* 获取2L这个文本所在的元素，通过调用该元素的firstChild属性可以操作文本内容 */
const cupnum = document.getElementById('cupnum');

/* 获取Remained这个文本所在的元素，通过调用该元素的firstChild属性可以操作文本内容 */
const cupchar = document.getElementById('cupchar');

/* 获取topcup元素，用于调节其高度变化 */
const topcup = document.getElementById('topcup');

/* 获取所有的smallcup元素，可以使用for-of循环进行迭代使用 */
const smallcup = document.querySelectorAll('.smallcup');
