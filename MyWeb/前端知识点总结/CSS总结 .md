# CSS

CSS 是一种描述 HTML 文档样式的语言。CSS 描述应该如何显示 HTML 元素。CSS 指的是层叠样式表 (Cascading Style Sheets)(也称级联样式表)。CSS 描述了如何在屏幕、纸张或其他媒体上显示 HTML 元素。CSS 节省了大量工作。它可以同时控制多张网页的布局。外部样式表存储在 CSS 文件中。

## 基础语法

### `普通规则`

CSS 规则集（rule-set）由选择器和声明块组成：

<img src="https://www.w3school.com.cn/i/css/selector.gif" alt="CSS 选择器" style="zoom: 80%;" />

**选择器**指向您需要设置样式的 HTML 元素。**声明块**包含一条或多条用分号分隔的声明。每条声明都包含一个 CSS 属性名称和一个值，以冒号分隔。多条 CSS 声明用分号分隔，声明块用花括号括起来。

### `@规则`

以`@`开头后面跟随一个关键字的形式构成，也被称为“AT规则”，根据使用方法的不同又可以分为"**常规规则**"与"**嵌套规则**"两种。

#### **常规规则**

基本格式为:`@[Keyword](rule)`;举例如下:

1. ==@charset==

   @charset用来设置CSS文件使用的字符编码,语法格式如下:

   ```css
   @charset "<charset>";
   /*其中 <charset> 为具体的字符编码，默认值为“utf-8”。*/
   
   /*具体实例如下:*/
   /* 设置 CSS 的编码格式为 Unicode UTF-8 */
   @charset "UTF-8";      
   @charset "utf-8";       /*大小写不敏感*/
   /*错误演示*/
   @charset 'iso-8859-15'; /* 无效的, 使用了错误的引号 */
   @charset 'UTF-8';       /* 无效的, 使用了错误的引号 */
   @charset  "UTF-8";      /* 无效的, @charset 与字符编码之间多用了一个空格 */
   @charset "UTF-8";       /* 无效的, @规则之前多了一个空格 */
   @charset UTF-8;         /* 无效的, 字符编码需要使用双引号包裹 */
   ```

   使用规则如下:

   - 如果设置 @charset 的话，那么它必须出现在 CSS 文件的最前面，@charset 之前不能出现任何字符；
   - 字符编码需要使用双引号`""`包裹起来；
   - @规则名称（@charset）与具体的字符编码之间需要使用一个空格分隔；
   - 规则后面的分号不能省略；
   - 如果设置多个 @charset，那么只有第一个声明有效；
   - 不能在 HTML 元素或者 <style> 标签中使用 @charset；
   - 如果以不同的方式定义了多种字符编码规则，它们的优先级顺序如下：
     - HTML 文件开头的字符编码声明；
     - HTTP 请求头中的字符编码声明；
     - CSS 文件中使用 @charset 定义的字符编码声明；
     - link 标签中 charset 属性设置的字符编码声明（HTML5 中已废弃）。

2. ==@import==

   @import 用来向当前 CSS 样式文件中导入其它样式文件。通过 @import 可以引入其他样式表文件中除 @charset 以外的所有内容，另外 @import 也**必须放在样式文件的最前面**。@import 的语法格式如下：

   ```css
   @import <url> <media_query_list>
   /*其中，<url> 为使用绝对或相对路径指定的要导入的外部样式表文件路径，也可以使用 url() 函数来指定文件路径；<media_query_list> 为可选参数，用来指定媒体查询的条件，多个条件之间使用逗号,分隔。*/
       
   /*具体使用实例:*/
   @import url("global.css");
   @import url(global.css);
   @import "global.css";
   @import url("fineprint.css") print;
   @import url("bluish.css") projection, tv;
   /*以上几种定义方式都是有效的，当使用 url() 来设置样式表文件的路径时，包裹路径的引号可有可无；当直接使用具体路径来设置样式表文件的路径时，包裹路径的引号则必须保留。*/
   ```

   **在实际项目中不建议过多的使用 @import，因为它会造成很多额外的请求，阻塞其它文件的加载**。

   *注意*:

   - @import 必须在样式表文件的开头最先声明，并且声明的末尾必须使用分号结尾，如果省略了结尾的分号，可能会导致外部样式表无法正确导入；
   - 在 IE 浏览器使用 @import 最多只能引入 35 条样式表。

3. ==@namespace==

   @namespace 用来定义 CSS 样式表中 XML 命名空间的 @规则，可以为当前样式文件内的所有选择器都设置指定的命名空间。@namespace 通常用来处理包含多个命名空间的文档，比如 HTML5 里内联的 SVG、MathML 或者混合多个词汇表的 XML。

   @namespace 必须定义在所有 @charset 和 @import 的之后，并且在样式表中要位于其他任何样式声明之前。@namespace 可以用来定义默认命名空间，当指定默认命名空间后，所有的通用选择器和类选择器（但不包括属性选择器）都只会应用在这个命名空间的元素中。@namespace 也可以用于定义命名空间前缀，当一个通用、类、属性选择器前面有命名空间前缀修饰时，这个选择器将只匹配那些命名空间与元素名或属性匹配的元素。实例演示如下:

   ```css
   /* 默认命名空间 */
   @namespace url(XML-namespace-URL);
   @namespace "XML-namespace-URL";
   /* 命名空间前缀 */
   @namespace prefix url(XML-namespace-URL);
   @namespace prefix "XML-namespace-URL";
   ```

#### **嵌套规则**

所谓“嵌套规则”指的就是在 @规则后面需要跟随一个花括号`{ }`，其中包含了一些其它的规则声明，类似于下面这样：

```css
@[KEYWORD] {
    /* 嵌套语句 */
}
```

1. ==@media==

   @media 用来根据一个或多个**媒体查询**(媒体查询是用于判断设备信息的一组条件，如设备的宽高值，宽高比，颜色，分辨率等，当条件匹配时，才会执行其内嵌套的样式信息。)的结果来应用样式表的某一部分（花括号中的样式信息），使用 @media 您可以指定一组媒体查询和一个 CSS 样式块，当且仅当媒体查询与正在使用的设备匹配时，指定的 CSS 样式才会应用于文档。示例代码如下:

   ```css
   @media all and (min-width: 1280px) {
       /* 宽度大于1280 */
   }
   @media
   (-webkit-min-device-pixel-ratio: 1.5),
   (min-resolution: 2dppx) {
       /* Retina屏幕 */
   }
   @media print {
       /* 打印 */
   }
   ```

2. ==@page==

   @page 用于在打印文档时修改某些 CSS 属性，需要注意的是，使用 @page 您只能修改部分 CSS 属性，例如外间距属性 margin，打印相关的 orphans、widows 属性，以及 page-break-* 等属性，其他的 CSS 属性会被忽略。示例代码如下:

   ```css
   /* 表示打印时 第一页的上、左外边距均为 50% */
   @page :first {
     margin-left: 50%;
     margin-top: 50%;
   }
   ```

3. ==@supports==

   @supports 用于检查浏览器是否支持某个 CSS 特性，也被称为“特性查询”，该规则的语法结构如下：

   ```css
   @supports (rule)[operator (rule)]* { sRules };
   /*其中，rule 为某个具体的 CSS 样式，必须使用括号包裹；operator 的可选值为 or、and、not，通过 operator 参数可以指定多条 CSS 样式。*/
   
   /*@supports 既可以在样式文件的顶部定义，也可以在其它嵌套规则内部定义。但是 @supports 目前还在实验阶段，在使用时要先确定浏览器是否支持。具体使用示例如下:*/
   /* 当浏览器支持 display: grid 属性时要使用的 CSS 样式 */
   @supports (display: grid) {
     div {
       display: grid;
     }
   }
   /* 当浏览器不支持 display: grid 属性时要使用的 CSS 样式 */
   @supports not (display: grid) {
     div {
       float: right;
     }
   }
   /* 同时检查多个条件 */
   @supports (display: flex) and (-webkit-appearance: checkbox) {
     .module { display: flex; }
   }
   ```

4. ==@font-face==

   @font-face 用于从远程服务器或者用户本地加载指定的字体，语法格式如下：

   (@font-face 可以放在 css 样式表的顶部，也可以放在其它嵌套规则中。如果同时使用 local() 函数和 url() 函数加载字体，则会优先加载 local() 函数中定义的本地字体，如果没有找到则会加载 url() 函数中定义的远程字体)

   ```css
   @font-face {
       font-family: <identifier>;
       src: <url> [format(<string>)] [, <url> [format(<string>)]]*;
       <font>;
   }
   /*参数说明如下:
   <identifier>：字体名称；
   <url>：使用 url()（远程字体）或者 local()（本地字体）来指定字体的存放路径，可以是相对路径也可以是绝对路径；
   <string>：用来指定自定义字体的格式，例如以下几种类型 truetype、opentype、embedded-opentype、svg 等；
   <font>：定义字体相关样式。
   具体使用实例如下:
   */
   /* 定义 @font-face 规则 */
   @font-face {
       /* 指定字体名称 */
       font-family: "Open Sans";
       /* 指定字体文件的路径 */
       src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
            url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
   }
   /* 字体的应用 */
   p {
       font-family: "Open Sans";
   }
   ```

5. ==@keyframes==

   @keyframes 用来定义 CSS3 中 `animation` 动画关键帧（或 `waypoints`）的样式，以此来控制动画序列中的中间步骤。定义该规则后，需要通过 **animation-name** 属性来使用。关键帧序列是由百分比来标识命名的，起始状态和结束状态分别为 from 和 to 代表 0% 和 100% 。

   @keyframes 的语法格式如下：

   ```css
   @keyframes <identifier> {
       <keyframes-blocks>
   }
   /*其中 <identifier> 用来定义动画名称；<keyframes-blocks> 用来定义动画在每个阶段的样式，即帧动画。*/
   /*示例如下:*/
   /* 声明 */
   @keyframes slidein {
     from {
       margin-left: 100%;
       width: 300%;
     }
     to {
       margin-left: 0%;
       width: 100%;
     }
   }
   @keyframes slideout {
     0% {
       top: 0;
     }
     50% {
       top: 30px;
     }
     100% {
       top: 60px;
     }
   }
   /* 应用 */
   p {
     animation-name: slidein;
     animation-duration: 4s;
   }
   div {
     animation-name: slideout;
     animation-duration: 4s;
   }
   ```

### `层叠`

当为某个 HTML 元素指定了多个样式时，会使用哪种样式呢？

页面中的所有样式将按照以下规则“层叠”为新的“虚拟”样式表，其中第一优先级最高：

1. 行内样式（在 HTML 元素中）
2. 外部和内部样式表（在 head 部分）
3. 浏览器默认样式

因此，行内样式具有最高优先级，并且将覆盖外部和内部样式以及浏览器默认样式。(用户自定义样式表的`!important`值比用户代理样式表的普通值优先级高)

### `注释`

位于 `<style>` 元素内的 CSS 注释，以 `/*` 开始，以 `*/` 结束,浏览器会忽略注释。(注释能横跨多行)

### `解释器`

一个 **CSS 解释器**定义一条`@规则`的属性. 一条`@规则`可以有一条或多条解释器。每一条解释器拥有：

- 一个名称
- 一个值，用于定义其名称的属性
- 一个可选的 "!important" 标识，默认不带有。

### `继承`

当元素的一个**继承属性 （inherited property）**没有指定值时，则取父元素的同属性的`计算值`。只有文档根元素取该属性的概述中给定的`初始值`（initial value）（这里的意思应该是在该属性本身的定义中的默认值）。当元素的一个**非继承属性**(在Mozilla code 里有时称之为**reset property** )没有指定值时，则取属性的`初始值`(initial value)（该值在该属性的概述里被指定）。

`inherit` 关键字允许显式的声明继承性，**它对继承和非继承属性都生效**。可以使用 `all`简写属性一次控制所有属性的继承，该属性将其值应用于所有属性，例如:

```css
font {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
/*这会将 font 属性的样式恢复为用户代理（浏览器）的默认值，除非存在用户样式表，在这种情况下使用该样式表。然后它将字体大小加倍并应用 font-weight 属性 为"bold"*/
```

### `简写`

**简写属性**是可以让你同时设置好几个 CSS 属性值的 CSS 属性。使用简写属性，Web 开发人员可以编写更简洁、更具可读性的样式表，节省时间和精力。

CSS 规范定义简写属性的目的在于将那些关于同一主题的常见属性的定义集中在一起。比如 CSS 的 [`background`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background) 属性就是一个简写属性，它可以定义 [`background-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-color)、[`background-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image)、[`background-repeat`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat) 和 [`background-position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position) 的值。类似地，最常见的字体相关的属性可以使用 [`font`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 的简写，盒子（box）各方向的外边距（margin） 可以使用 [`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin) 这个简写。

常见的简写属性有:**background**、**font**、**border**、**margin**、**padding**等。

### `优先级`

浏览器通过**优先级**来判断哪些属性值与一个元素最为相关，从而在该元素上应用这些属性值。优先级是基于不同种类`选择器`组成的匹配规则。

优先级就是分配给指定的 CSS 声明的一个权重，它由匹配的选择器中的每一种选择器类型的数值决定。而当优先级与多个 CSS 声明中任意一个声明的优先级相等的时候，CSS 中最后的那个声明将会被应用到元素上。当同一个元素有多个声明的时候，优先级才会有意义。因为每一个直接作用于元素的 CSS 规则总是会接管/覆盖（take over）该元素从祖先元素继承而来的规则。(当在一个样式声明中使用一个 `!important` 规则时，此声明将覆盖任何其他声明)

内联样式(1,0,0,0) > id选择器(0,1,0,0) > 类和伪类选择器(0,0,1,0) > 元素选择器(0,0,0,1) > 通配选择器(0,0,0,0)
当使用交集选择器时，以其中优先级最高的选择器的优先级为主.

### `单位和取值类型`

#### CSS数据类型

CSS中使用了各种数值数据类型。 以下全部归类为数值：

|    数值类型    |                             描述                             |
| :------------: | :----------------------------------------------------------: |
|  `<integer>`   |            `<integer>`是一个整数，比如1024或-55。            |
|   `<number>`   | `<number>`表示一个小数——它可能有小数点后面的部分，也可能没有，例如0.255、128或-1.2。 |
| `<dimension>`  | `<dimension>`是一个`<number>`，它有一个附加的单位，例如45deg、5s或10px。`<dimension>`是一个伞形类别，包括`<length>`、`<angle>`、`<time>`和`<resolution>`类型。 |
| `<percentage>` | `<percentage>`表示一些其他值的一部分，例如50%。百分比值总是相对于另一个量，例如，一个元素的长度相对于其父元素的长度。 |

#### 绝对长度单位:

| 单位 |     名称     |      等价换算       |
| :--: | :----------: | :-----------------: |
| `cm` |     厘米     |   1cm = 96px/2.54   |
| `mm` |     毫米     | 1mm = 1/10th of 1cm |
| `Q`  | 四分之一毫米 | 1Q = 1/40th of 1cm  |
| `in` |     英寸     | 1in = 2.54cm = 96px |
| `pc` |  十二点活字  | 1pc = 1/16th of 1in |
| `pt` |      点      | 1pt = 1/72th of 1in |
| `px` |     像素     | 1px = 1/96th of 1in |

#### 相对长度单位:

|  单位  |                            相对于                            |
| :----: | :----------------------------------------------------------: |
|  `em`  | 在 font-size 中使用是相对于**父元素**的字体大小，在其他属性中使用是相对于自身的字体大小，如 width |
|  `ex`  |                        字符“x”的高度                         |
|  `ch`  |                        数字“0”的宽度                         |
| `rem`  |                  相对于**根元素**的字体大小                  |
|  `lh`  |                      元素的line-height                       |
|  `vw`  |                      视窗(视口)宽度的1%                      |
|  `vh`  |                      视窗(视口)高度的1%                      |
| `vmin` |                    视窗(视口)较小尺寸的1%                    |
| `vmax` |                        视图大尺寸的1%                        |

#### 颜色

**十六进制RGB值**,例如:#02798b、**RGB**，例如：rgb(2,121,139)、**RGBA**，例如：rgba(2,121,139,.3),最后一个值表示透明度、`hsl()` 函数接受**色调**、**饱和度**和**亮度**值作为参数，hsla()就是多了一个透明度。



## 选择器

CSS 选择器用于"查找"（或选取）要设置样式的 HTML 元素。

### `元素选择器`

**元素选择器**根据元素名称来选择 HTML 元素。

### `id选择器`

id 选择器使用 HTML 元素的 **id 属性**来选择特定元素。元素的 id 在页面中是唯一的，因此 id 选择器用于选择一个唯一的元素！要选择具有特定 id 的元素，请写一个井号（`＃`），后跟该元素的 id。

### `类选择器`

类选择器选择有特定 class 属性的 HTML 元素。如需选择拥有特定 class 的元素，请写一个句点（`.`）字符，后面跟**类名**。

### `通用选择器`

通用选择器（`*`）选择页面上的所有的 HTML 元素。

### `分组选择器`

分组选择器选取所有**具有相同样式**定义的 HTML 元素。例如:

```css
h1, h2, p {
  text-align: center;
  color: red;
}
/*元素h1和元素h2和元素p会具有相同的样式*/
```

### `属性选择器`

属性选择器可以根据元素的**属性**及**属性值**来选择元素。示例如下:

```css
/*1.希望把包含标题(title)的所有元素变为红色,可以写作:*/
*[title] {color:red;}

/*2.只对拥有href属性的锚(a 标签)应用样式:*/
a[href]{color:red;}

/*3.将同时有 href 和 title 属性的 HTML 超链接的文本设置为红色，可以这样写:a[href][title] {color:red;}*/
a[href][title] {color:red;}
```

### `后代选择器`

后代选择器（descendant selector）**又称为包含选择器**。后代选择器可以选择作为某元素后代的元素。示例如下:

```css
/*1.对 h1 元素中的 em 元素应用样式，可以这样写：*/
h1 em {color:red;}/*作为 h1 元素后代的任何 em 元素*/
```

### `子元素选择器`

实例如下:

```css
/*有如下HTML*/
<h1>This is <strong>very</strong> <strong>very</strong> important.</h1>
<h1>This is <em>really <strong>very</strong></em> important.</h1>
/*选择只作为 h1 元素子元素的 strong 元素，可以这样写：*/
h1 > strong {color:red;} /*选择作为 h1 元素子元素的所有 strong 元素*/

table.company td > p /*选择器会选择作为 td 元素子元素的所有 p 元素，这个 td 元素本身从 table 元素继承，该 table 元素有一个包含 company 的 class 属性。*/
```

### `相邻选择器`

相邻兄弟选择器（Adjacent sibling selector）可选择紧接在另一元素后的元素，且二者有相同父元素。示例如下:

```css
/*如果要增加紧接在 h1 元素后出现的段落的上边距，可以这样写：*/
h1 + p {margin-top:50px;} /*选择紧接在 h1 元素后出现的段落，h1 和 p 元素拥有共同的父元素*/

/*有如下HTML代码:*/
<div>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ul>
  <ol>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ol>
</div>
/*使用兄弟选择器:*/
li + li {font-weight:bold;} /*这个选择器只会把列表中的第二个和第三个列表项变为粗体。第一个列表项不受影响。*/
```

## 定位

CSS 定位 (Positioning) 属性允许你对元素进行定位。`div`、`h1` 或 `p` 元素常常被称为块级元素。这意味着这些元素显示为*一块内容*，即"块框"。与之相反，`span` 和 `strong` 等元素称为"行内元素"，这是因为它们的内容显示在行中，即"行内框"。可以使用 `display` 属性改变生成的框的类型。这意味着，通过将 display 属性设置为 block，可以让行内元素（比如 `<a>` 元素）表现得像块级元素一样。还可以通过把 display 设置为 none，让生成的元素根本没有框。这样的话，**该框及其所有内容就不再显示，不占用文档中的空间**。

`块级框`从上到下一个接一个地排列，框之间的垂直距离是由框的垂直外边距计算出来。

`行内框`在一行中水平布置。可以使用水平内边距、边框和外边距调整它们的间距。但是，**垂直内边距、边框和外边距不影响行内框的高度**。由一行形成的水平框称为*行框（Line Box）*，行框的高度总是足以容纳它包含的所有行内框。不过，**设置行高可以增加这个框的高度**。

### `position`

通过 position 属性我们可以选择4种不同类型的定位,这会影响元素框的生成方式;可选值及对应定位方法如下:

#### static

HTML 元素默认情况下的定位方式为 static（静态）。静态定位的元素不受 top、bottom、left 和 right 属性的影响。position: static; 的元素不会以任何特殊方式定位；它始终根据页面的正常流进行定位：

#### relative

`position: relative;` 的元素相对于其正常位置进行定位。

设置相对定位的元素的 top、right、bottom 和 left 属性将导致其偏离其正常位置进行调整。不会对其余内容进行调整来适应元素留下的任何空间。

#### absolute

`position: absolute;` 的元素相对于最近的`定位祖先元素`进行定位（而不是相对于视口定位，如 fixed）。然而，如果绝对定位的元素没有祖先，它将使用文档主体（body），并随页面滚动一起移动。

**注意：**"被定位的"元素是其位置除 **static** 以外的任何元素。

#### fixed

`position: fixed;` 的元素是相对于**视口**定位的，这意味着即使滚动页面，它也始终位于同一位置。 top、right、bottom 和 left 属性用于定位此元素。固定定位的元素不会在页面中通常应放置的位置上留出空隙。

#### sticky

`position: sticky;` 的元素根据用户的**滚动位置**进行定位。粘性元素根据滚动位置在相对（relative）和固定（fixed）之间切换。起先它会被相对定位，直到在视口中遇到给定的偏移位置为止 - 然后将其"粘贴"在适当的位置（比如 position:fixed）。
**注意：**Internet Explorer、Edge 15 以及更早的版本不支持粘性定位。 Safari 需要 -webkit- 前缀。您还必须至少指定 **top**、**right**、**bottom** 或 **left** 之一，以便粘性定位起作用。

#### z-index

在对元素进行定位时，它们可以与其他元素重叠。`z-index` 属性指定元素的堆栈顺序（哪个元素应放置在其他元素的前面或后面）。
**注意：**如果两个定位的元素重叠而未指定 **z-index**，则位于 HTML 代码中**最后的**元素将显示在**顶部**。

#### 定位属性

|                             属性                             |             描述             |
| :----------------------------------------------------------: | :--------------------------: |
| [bottom](https://www.w3school.com.cn/cssref/pr_pos_bottom.asp) | 设置定位框的底部外边距边缘。 |
|  [clip](https://www.w3school.com.cn/cssref/pr_pos_clip.asp)  |     剪裁绝对定位的元素。     |
|  [left](https://www.w3school.com.cn/cssref/pr_pos_left.asp)  | 设置定位框的左侧外边距边缘。 |
| [position](https://www.w3school.com.cn/cssref/pr_class_position.asp) |     规定元素的定位类型。     |
| [right](https://www.w3school.com.cn/cssref/pr_pos_right.asp) | 设置定位框的右侧外边距边缘。 |
|   [top](https://www.w3school.com.cn/cssref/pr_pos_top.asp)   | 设置定位框的顶部外边距边缘。 |
| [z-index](https://www.w3school.com.cn/cssref/pr_pos_z-index.asp) |     设置元素的堆叠顺序。     |

## 布局

display 属性是用于控制布局的最重要的 CSS 属性。display 属性规定是否/如何显示元素。每个 HTML 元素都有一个默认的 display 值，具体取决于它的元素类型。大多数元素的默认 display 值为 `block` 或 `inline`。`display: none;` 通常与 **JavaScript** 一起使用，以隐藏和显示元素，而无需删除和重新创建它们。
**注意**:通过将 display 属性设置为 none 可以**隐藏元素**。该元素将被隐藏，并且页面将显示为好像该元素不在其中(就像删除一样不占用页面空间); `visibility:hidden;` 也可以隐藏元素。但是，该元素仍将占用与之前相同的空间。

### `溢出`



### `盒子模型`

