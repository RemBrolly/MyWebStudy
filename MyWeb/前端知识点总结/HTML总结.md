# HTML

## 基本的常用元素

### `<!-->`

html文档的注释符号。

### `<!DOCTYPE>`

`<!DOCTYPE> `声明必须是 HTML 文档的第一行，位于 html 标签之前。`<!DOCTYPE>` 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。在 HTML 4.01 中有三种 <!DOCTYPE> 声明。在 HTML5 中只有一种：`<!DOCTYPE html>`。

### `<html>`

此元素可告知浏览器其自身是一个 HTML 文档。

### `<body>`

body 元素定义文档的主体。body 元素包含文档的所有内容（比如文本、超链接、图像、表格和列表等等。）

### `<head>`

head 标签用于定义文档的头部，它是所有头部元素的容器。head 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等等。文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。下面这些标签可用在 head 部分：
`<base>`、`<link>`、`<meta>`、`<script>`、`<style>`以及`<title>`。应该把 `<head>` 标签放在文档的开始处，紧跟在 `<html>` 后面，并处于 `<body>` 标签或 `<frameset>` 标签之前。请记住始终为文档规定标题！

### `<base>`

==base 标签为页面上的所有链接规定默认地址或默认目标==。通常情况下，浏览器会从当前文档的 URL 中提取相应的元素来填写相对 URL 中的空白。使用   base 标签可以改变这一点。浏览器随后将不再使用当前文档的 URL，而使用指定的基本 URL 来解析所有的相对 URL。这其中包括 `<a>`、`<img>`、`<link>`、`<form>` 标签中的 URL。base 标签必须位于 head 元素内部。

### `<header>`

header 标签定义文档的页眉(头部区域,介绍信息)

### `<footer>`

footer 标签定义文档或节的页脚。footer 元素应当含有其包含元素的信息。页脚通常包含文档的作者、版权信息、使用条款链接、联系信息等等。您可以在一个文档中使用多个 footer 元素。footer 元素内的联系信息应该位于 address 标签中。

### `<div>`

div 可以定义文档中的分区或节。div标签可以把文档分割为独立的、不同的部分。它可以用作严格的组织工具，并且不使用任何格式与其关联。如果用class或id来标记div，那么该标签的作用变得更加有效。

用法：div 是一个块级元素，这意味着它的内容自动地开始一个新行。实际上，换行是 div 固有的唯一格式表现。可以通过 div 的 class 或 id 应用额外的样式。不必为每一个 div 都加上类或 id，虽然这样做也有一定的好处。可以对同一个 div 元素应用 class 或 id 属性，但是更常见的情况是只应用其中一种。这两者的主要差异是，class 用于元素组（类似的元素，或者可以理解为某一类元素），而 id 用于标识单独的唯一的元素。

### `<dir>`

dir标签可以定义目录列表，例如：

```html
<dir>
  <li>html</li>
  <li>xhtml</li>
  <li>css</li>
</dir>
```

显示效果:

<img src="C:\Users\Tao\AppData\Roaming\Typora\typora-user-images\image-20220106210321200.png" alt="image-20220106210321200" style="zoom: 80%;" />

### `<a>`

a 标签定义超链接，用于从一张页面链接到另一张页面。a 元素最重要的属性是 href 属性，它指示链接的目标。在所有的浏览器中,链接的默认样式为:
**未被访问过的链接带有下划线而且是蓝色的**;**已被访问过的链接带有下划线而且是紫色的**;**活动的链接带有下划线而且是红色的**;

**提示：**如果不使用 href 属性(链接指向的页面的url)，则不可以使用如下属性：download, hreflang, media, ==rel==(规定当前文档与被连接文档之间的关系), ==target==(规定在何处打开链接文档--新页面或者当前页面等等) 以及 type 属性。被链接页面通常显示在当前浏览器窗口中，除非您规定了另一个目标（target 属性）。请使用 CSS 来设置链接的样式。

### `<b>`

设置粗体文本。根据 HTML5 规范，在没有其他合适标签更合适时，才应该把 b 标签作为最后的选项。HTML5 规范声明：应该使用`<h1>`-`<h6>`标签来表示标题,使用 em 来表示强调的文本，应该使用 strong 标签来表示重要文本，应该使用 mark 标签来表示标注的/突出显示的文本。
您也能够使用 CSS "[font-weight](https://www.w3school.com.cn/cssref/pr_font_weight.asp)" 属性来设置粗体文本。

### `<strong>`

strong 标签(加粗功能)和 em 标签(斜体功能)一样，用于强调文本，但它强调的程度更强一些。浏览器通常会以不同于 em 标签的方式来显示 strong 标签中的内容，通常是用加粗的字体（相对于斜体）来显示其中的内容，这样用户就可以把这两个标签区分开来了。

### `<img>`

img 元素向网页中嵌入一幅图像。请注意，从技术上讲，img 标签并不会在网页中插入图像，而是从网页上链接图像。img 标签创建的是被引用图像的占位空间。img 标签有两个必需的属性：**src** 属性(规定图像显示的URL) 和 **alt** 属性(规定图像的替代文本)。

### `<i>`

i 标签显示斜体文本效果。i 标签和基于内容的样式标签 em 类似。它告诉浏览器将包含其中的文本以**斜体字**（italic）或者**倾斜**（oblique）字体显示。如果这种斜体字对该浏览器不可用的话，可以使用高亮、反白或加下划线等样式。

### `<audio>`

audio标签定义声音,比如音乐或其他音频流。包含的属性如下：

|   **属性**   |  **值**  |                         **功能描述**                         |
| :----------: | :------: | :----------------------------------------------------------: |
| ==autoplay== | autoplay |            如果出现该属性，则音频在就绪后马上播放            |
| ==controls== | controls |        如果出现该属性，则向用户显示控件，比如播放按钮        |
|   ==loop==   |   loop   |          如果出现该属性，则当音频结束时重新开始播放          |
|  ==muted==   |  muted   |                    规定视频输出应该被静音                    |
| ==preload==  | preload  | 如果出现该属性，则音频在页面加载时进行加载，并预备播放。<br />如果使用了“autoplay”属性则会忽略该属性。 |
|   ==src==    |   URL    |                    指定要播放的音频的URL                     |

**注意**：Internet Explorer 9+, Firefox, Opera, Chrome 以及 Safari 支持 audio 标签。Internet Explorer 8 以及更早的版本不支持 audio 标签。（可以在开始标签和结束标签之间放置文本内容，这样老的浏览器就可以显示出不支持该标签的信息）实例如下：

```html
<audio src="someaudio.wav">
您的浏览器不支持 audio 标签。
</audio>
```

效果如下:

<img src="C:\Users\Tao\AppData\Roaming\Typora\typora-user-images\image-20220107205805981.png" alt="image-20220107205805981" style="zoom:50%;" />



### `<iframe>`

iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。您可以把需要的文本放置在 `<iframe>` 和 `</iframe>` 之间，这样就可以应对无法理解 iframe 的浏览器。其src属性规定了在iframe中显示的文档的URL。示例如下:

```html
<html>
<body>
<iframe src="/i/eg_landscape.jpg"></iframe>
<p>一些老的浏览器不支持 iframe。</p>
<p>如果得不到支持，iframe 是不可见的。</p>
</body>
</html>
```

实现效果如下:
<img src="C:\Users\Tao\AppData\Roaming\Typora\typora-user-images\image-20220107211354626.png" alt="image-20220107211354626" style="zoom:50%;" />

### `<canvas>`

（HTML5新增标签）canvas 标签定义图形，比如图表和其他图像。canvas 标签只是图形容器，您必须使用脚本来绘制图形。大多数 Canvas 绘图 API 都没有定义在 canvas 元素本身上，而是定义在通过画布的 **getContext()** 方法获得的一个“绘图环境”对象上。Canvas API 也使用了路径的表示法。但是，路径由一系列的方法调用来定义，而不是描述为字母和数字的字符串，比如调用 beginPath() 和 arc() 方法。一旦定义了路径，其他的方法，如 fill()，都是对此路径操作。绘图环境的各种属性，比如 fillStyle，说明了这些操作如何使用。

**注释：**Canvas API 非常紧凑的一个原因上它没有对绘制文本提供任何支持。要把文本加入到一个 canvas 图形，必须要么自己绘制它再用位图图像合并它，或者在 canvas 上方使用 CSS 定位来覆盖 HTML 文本。

Internet Explorer 9+, Firefox, Opera, Chrome 以及 Safari 支持 canvas 标签。Internet Explorer 8 以及更早的版本不支持 canvas 标签。实例如下：

```html
<!DOCTYPE HTML>
<html>
<body>
<canvas id="myCanvas">your browser does not support the canvas tag </canvas>
<script type="text/javascript">
var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');
ctx.fillStyle='#FF0000';
ctx.fillRect(0,0,80,100);
</script>
</body>
</html>
```

实现效果如下:

<img src="C:\Users\Tao\AppData\Roaming\Typora\typora-user-images\image-20220107215039348.png" alt="image-20220107215039348" style="zoom:50%;" />

### `<script>`

script 标签用于定义客户端脚本,比如JavaScript。script 元素既可以包含脚本语句，也可以通过 src 属性指向外部脚本文件。必需的 type 属性规定脚本的 MIME 类型。JavaScript 的常见应用是图像操作、表单验证以及动态内容更新。**注释：**假如此元素内部的代码没有位于某个函数中，那么这些代码会在页面被加载时被立即执行。==frameset== 标签之后的脚本会被忽略。**提示：**请参阅 ==noscript== 元素；对于那些在浏览器中禁用脚本或者其浏览器不支持客户端脚本的用户来说，该元素非常有用。可选属性如下:

|   **属性**    |  **值**   |                    **功能描述**                    |
| :-----------: | :-------: | :------------------------------------------------: |
|   ==async==   |   async   |       规定异步执行脚本（仅适用于外部脚本）。       |
|  ==charset==  | *charset* |        规定在外部脚本文件中使用的字符编码。        |
|   ==defer==   |   defer   |   规定是否对脚本执行进行延迟，直到页面加载为止。   |
| ==language==  | *script*  | 不赞成使用。规定脚本语言。请使用 type 属性代替它。 |
|    ==src==    |   *URL*   |              规定外部脚本文件的 URL。              |
| ==xml:space== | preserve  |             规定是否保留代码中的空白。             |



### `<table>`

table 标签定义HTML表格。简单的 HTML 表格由 table 元素以及一个或多个 **tr**、**th** 或 **td** 元素组成。**tr** 元素定义表格行，**th** 元素定义表头，**td** 元素定义表格单元。更复杂的 HTML 表格也可能包括 **caption**、**col**、**colgroup**、**thead**、**tfoot** 以及 **tbody** 元素。标签可选的属性有：

|    **属性**     |                      **值**                       |           **功能描述**           |
| :-------------: | :-----------------------------------------------: | :------------------------------: |
|   ==border==    |                     *pixels*                      |       规定表格边框的宽度。       |
| ==cellpadding== |                    *pixels %*                     | 规定单元边沿与其内容之间的空白。 |
| ==cellspacing== |                    *pixels %*                     |      规定单元格之间的空白。      |
|    ==frame==    | void above below hsides lhs rhs vsides box border | 规定外侧边框的哪个部分是可见的。 |
|    ==rules==    |             none groups row scolsall              | 规定内侧边框的哪个部分是可见的。 |
|   ==summary==   |                      *text*                       |         规定表格的摘要。         |
|    ==width==    |                    *% pixels*                     |         规定表格的宽度。         |

### `<tbody>`

**tbody** 标签表格主体（正文）。该标签用于组合 HTML 表格的主体内容。**tbody** 元素应该与 **thead** 和 **tfoot** 元素结合起来使用。**thead** 元素用于对 HTML 表格中的表头内容进行分组，而 **tfoot** 元素用于对 HTML 表格中的表注（页脚）内容进行分组。

**注释：**如果您使用 **thead**、**tfoot** 以及 **tbody** 元素，您就必须使用全部的元素。它们的出现次序是：**thead**、**tfoot**、**tbody**，这样浏览器就可以在收到所有数据前呈现页脚了。您必须在 **table** 元素内部使用这些标签。

**提示：**在默认情况下这些元素不会影响到表格的布局。不过，您可以使用 CSS 使这些元素改变表格的外观。

**thead**、**tfoot** 以及 **tbody** 元素使您有能力对表格中的行进行分组。当您创建某个表格时，您也许希望拥有一个标题行，一些带有数据的行，以及位于底部的一个总计行。这种划分使浏览器有能力支持独立于表格标题和页脚的表格正文滚动。当长的表格被打印时，表格的表头和页脚可被打印在包含表格数据的每张页面上。

### `<form>`

form 标签用于为用户输入创建 HTML 表单。表单能够包含 input 元素，比如文本字段、复选框、单选框、提交按钮等等。表单还可以包含 menus、textarea、fieldset、legend 和 label 元素。表单用于向服务器传输数据。form 元素是块级元素，其前后会产生折行。可选属性如下:

|      **属性**      |                          **可选值**                          |               **功能描述**               |
| :----------------: | :----------------------------------------------------------: | :--------------------------------------: |
| ==accept-charset== |                        *charset_list*                        |    规定服务器可处理的表单数据字符集。    |
|     ==action==     |                            *URL*                             |   规定当提交表单时向何处发送表单数据。   |
|  ==autocomplete==  |                            on off                            |     规定是否启用表单的自动完成功能。     |
|    ==enctype==     |                            见说明                            | 规定在发送表单数据之前如何对其进行编码。 |
|     ==method==     |                           get post                           |  规定用于发送 form-data 的 HTTP 方法。   |
|      ==name==      |                         *form_name*                          |             规定表单的名称。             |
|   ==novalidate==   |                          novalidate                          | 如果使用该属性，则提交表单时不进行验证。 |
|      ==rel==       | external help license next nofollow noopener noreferrer opener prev search |    规定链接资源和当前文档之间的关系。    |
|     ==target==     |            _blank _self _parent _top *framename*             |       规定在何处打开 action URL。        |

### `<input>`

input 标签用于搜集用户信息。根据不同的 type 属性值，输入字段拥有很多种形式。输入字段可以是文本字段、复选框、掩码后的文本控件、单选按钮、按钮等等。请使用 label 元素为某个表单控件定义标签。可选属性如下:

|                           **属性**                           |                            **值**                            |                         **功能描述**                         |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| [accept](https://www.w3school.com.cn/tags/att_input_accept.asp) |                         *mime_type*                          |             规定通过文件上传来提交的文件的类型。             |
|  [alt](https://www.w3school.com.cn/tags/att_input_alt.asp)   |                             text                             |                   定义图像输入的替代文本。                   |
| [autocomplete](https://www.w3school.com.cn/tags/att_input_autocomplete.asp) |                            on off                            |             规定是否使用输入字段的自动完成功能。             |
| [autofocus](https://www.w3school.com.cn/tags/att_input_autofocus.asp) |                          autofocus                           | 规定输入字段在页面加载时是否获得焦点。（不适用于 type="hidden"） |
| [checked](https://www.w3school.com.cn/tags/att_input_checked.asp) |                           checked                            |           规定此 input 元素首次加载时应当被选中。            |
| [disabled](https://www.w3school.com.cn/tags/att_input_disabled.asp) |                           disabled                           |               当 input 元素加载时禁用此元素。                |
| [form](https://www.w3school.com.cn/tags/att_input_form.asp)  |                          *formname*                          |              规定输入字段所属的一个或多个表单。              |
| [formaction](https://www.w3school.com.cn/tags/att_input_formaction.asp) |                            *URL*                             | 覆盖表单的 action 属性。（适用于 type="submit" 和 type="image"） |
| [formenctype](https://www.w3school.com.cn/tags/att_input_formenctype.asp) |                            见注释                            | 覆盖表单的 enctype 属性。（适用于 type="submit" 和 type="image"） |
| [formmethod](https://www.w3school.com.cn/tags/att_input_formmethod.asp) |                           get post                           | 覆盖表单的 method 属性。（适用于 type="submit" 和 type="image"） |
| [formnovalidate](https://www.w3school.com.cn/tags/att_input_formnovalidate.asp) |                        formnovalidate                        | 覆盖表单的 novalidate 属性。如果使用该属性，则提交表单时不进行验证。 |
| [formtarget](https://www.w3school.com.cn/tags/att_input_formtarget.asp) |            _blank _self _parent _top *framename*             | 覆盖表单的 target 属性。（适用于 type="submit" 和 type="image"） |
| [height](https://www.w3school.com.cn/tags/att_input_height.asp) |                          *pixels %*                          |        定义 input 字段的高度。（适用于 type="image"）        |
| [list](https://www.w3school.com.cn/tags/att_input_list.asp)  |                        *datalist-id*                         |          引用包含输入字段的预定义选项的 datalist 。          |
|  [max](https://www.w3school.com.cn/tags/att_input_max.asp)   |                        *number date*                         | 规定输入字段的最大值。请与 "min" 属性配合使用，来创建合法值的范围。 |
| [maxlength](https://www.w3school.com.cn/tags/att_input_maxlength.asp) |                            number                            |               规定输入字段中的字符的最大长度。               |
|  [min](https://www.w3school.com.cn/tags/att_input_min.asp)   |                        *number date*                         | 规定输入字段的最小值。请与 "max" 属性配合使用，来创建合法值的范围。 |
| [multiple](https://www.w3school.com.cn/tags/att_input_multiple.asp) |                           multiple                           |             如果使用该属性，则允许一个以上的值。             |
| [name](https://www.w3school.com.cn/tags/att_input_name.asp)  |                          field_name                          |                   定义 input 元素的名称。                    |
| [pattern](https://www.w3school.com.cn/tags/att_input_pattern.asp) |                       *regexp_pattern*                       | 规定输入字段的值的模式或格式。例如 pattern="[0-9]" 表示输入值必须是 0 与 9 之间的数字。 |
| [placeholder](https://www.w3school.com.cn/tags/att_input_placeholder.asp) |                            *text*                            |               规定帮助用户填写输入字段的提示。               |
| [readonly](https://www.w3school.com.cn/tags/att_input_readonly.asp) |                           readonly                           |                     规定输入字段为只读。                     |
| [required](https://www.w3school.com.cn/tags/att_input_required.asp) |                           required                           |                  指示输入字段的值是必需的。                  |
| [size](https://www.w3school.com.cn/tags/att_input_size.asp)  |                        number_of_char                        |                     定义输入字段的宽度。                     |
|  [src](https://www.w3school.com.cn/tags/att_input_src.asp)   |                             URL                              |             定义以提交按钮形式显示的图像的 URL。             |
| [step](https://www.w3school.com.cn/tags/att_input_step.asp)  |                           *number*                           |                 规定输入字的的合法数字间隔。                 |
| [type](https://www.w3school.com.cn/tags/att_input_type.asp)  | button checkbox file hidden image password radio reset submit text |                   规定 input 元素的类型。                    |
| [value](https://www.w3school.com.cn/tags/att_input_value.asp) |                           *value*                            |                    规定 input 元素的值。                     |
| [width](https://www.w3school.com.cn/tags/att_input_width.asp) |                          *pixels %*                          |        定义 input 字段的宽度。（适用于 type="image"）        |



### `<label>`

label 标签为 input 元素定义标注（标记）。label 元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。如果您在 label 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。label 标签的 for 属性应当与相关元素的 id 属性相同。"for" 属性可把 label 绑定到另外一个元素。请把 "for" 属性的值设置为相关元素的 id 属性的值。



## 常用属性

### ==class==

class 属性规定元素的类名（classname）。class 属性大多数时候用于指向样式表中的类（class）。不过，也可以利用它通过 JavaScript 来改变带有指定 class 的 HTML 元素。**class 属性不能在以下 HTML 元素中使用：base, head, html, meta, param, script, style 以及 title。**

**提示：**可以给 HTML 元素赋予多个 class，例如：`<span class="left_menu important">`。这么做可以把若干个 CSS 类合并到一个 HTML 元素。

**提示：**类名不能以数字开头！只有 Internet Explorer 支持这种做法。

### ==id==

id 属性规定 HTML 元素的唯一的 id。id 在 HTML 文档中必须是唯一的。id 属性可用作链接锚（link anchor），通过 JavaScript（HTML DOM）或通过 CSS 为带有指定 id 的元素改变或添加样式。

### ==style==

style 属性规定元素的行内样式（inline style）style 属性将覆盖任何全局的样式设定，例如在 `<style>` 标签或在外部样式表中规定的样式。

### ==title==

title 属性规定关于元素的额外信息。这些信息通常会在鼠标移到元素上时显示一段工具提示文本（tooltip text）。

**提示：** **title 属性常与 form 以及 a 元素一同使用，以提供关于输入格式和链接目标的信息。同时它也是 abbr 和 acronym 元素的必需属性。**

以上属性都为最常用的全局属性,剩下的全局属性如下:

|                           **属性**                           |                      **功能描述**                      |
| :----------------------------------------------------------: | :----------------------------------------------------: |
| [accesskey](https://www.w3school.com.cn/tags/att_standard_accesskey.asp) |                 规定激活元素的快捷键。                 |
| [contenteditable](https://www.w3school.com.cn/tags/att_global_contenteditable.asp) |                规定元素内容是否可编辑。                |
| [contextmenu](https://www.w3school.com.cn/tags/att_global_contextmenu.asp) | 规定元素的上下文菜单。上下文菜单在用户点击元素时显示。 |
| [data-*](https://www.w3school.com.cn/tags/att_global_data.asp) |         用于存储页面或应用程序的私有定制数据。         |
| [dir](https://www.w3school.com.cn/tags/att_standard_dir.asp) |               规定元素中内容的文本方向。               |
| [draggable](https://www.w3school.com.cn/tags/att_global_draggable.asp) |                  规定元素是否可拖动。                  |
| [dropzone](https://www.w3school.com.cn/tags/att_global_dropzone.asp) |    规定在拖动被拖动数据时是否进行复制、移动或链接。    |
| [hidden](https://www.w3school.com.cn/tags/att_global_hidden.asp) |                规定元素仍未或不再相关。                |
| [lang](https://www.w3school.com.cn/tags/att_standard_lang.asp) |                  规定元素内容的语言。                  |
| [spellcheck](https://www.w3school.com.cn/tags/att_global_spellcheck.asp) |           规定是否对元素进行拼写和语法检查。           |
| [tabindex](https://www.w3school.com.cn/tags/att_standard_tabindex.asp) |                规定元素的 tab 键次序。                 |
| [translate](https://www.w3school.com.cn/tags/att_global_translate.asp) |               规定是否应该翻译元素内容。               |



## 事件

HTML 有能力让事件触发浏览器中的动作，例如当用户单击元素时启动 JavaScript。以下是可添加到 HTML 元素以定义事件操作的全局事件属性。

### 窗口事件(Window事件)

针对 window 对象触发的事件（应用于 `<body>` 标签上）：

|                           **属性**                           | **值** |                   **功能描述**                   |
| :----------------------------------------------------------: | :----: | :----------------------------------------------: |
| [onafterprint](https://www.w3school.com.cn/tags/event_onafterprint.asp) | script |             文档打印之后运行的脚本。             |
| [onbeforeprint](https://www.w3school.com.cn/tags/event_onbeforeprint.asp) | script |             文档打印之前运行的脚本。             |
|                        onbeforeunload                        | script |             文档卸载之前运行的脚本。             |
|                           onerror                            | script |             在错误发生时运行的脚本。             |
|                         onhaschange                          | script |            当文档已改变时运行的脚本。            |
| [onload](https://www.w3school.com.cn/tags/event_onload.asp)  | script |              页面结束加载之后触发。              |
|                          onmessage                           | script |            在消息被触发时运行的脚本。            |
|                          onoffline                           | script |             当文档离线时运行的脚本。             |
|                           ononline                           | script |             当文档上线时运行的脚本。             |
|                          onpagehide                          | script |             当窗口隐藏时运行的脚本。             |
|                          onpageshow                          | script |           当窗口成为可见时运行的脚本。           |
|                          onpopstate                          | script |         当窗口历史记录改变时运行的脚本。         |
|                            onredo                            | script |       当文档执行撤销（redo）时运行的脚本。       |
| [onresize](https://www.w3school.com.cn/tags/event_onresize.asp) | script |          当浏览器窗口被调整大小时触发。          |
|                          onstorage                           | script |      在 Web Storage 区域更新后运行的脚本。       |
|                            onundo                            | script |          在文档执行 undo 时运行的脚本。          |
| [onunload](https://www.w3school.com.cn/tags/event_onunload.asp) | script | 一旦页面已下载时触发（或者浏览器窗口已被关闭）。 |

### 表单事件(Form事件)

由 HTML 表单内的动作触发的事件（应用到几乎所有 HTML 元素，但最常用在 form 元素中）：

|                           **属性**                           | **值** |                   **功能描述**                   |
| :----------------------------------------------------------: | :----: | :----------------------------------------------: |
| [onblur](https://www.w3school.com.cn/tags/event_onblur.asp)  | script |            元素失去焦点时运行的脚本。            |
| [onchange](https://www.w3school.com.cn/tags/event_onchange.asp) | script |           在元素值被改变时运行的脚本。           |
|                        oncontextmenu                         | script |         当上下文菜单被触发时运行的脚本。         |
| [onfocus](https://www.w3school.com.cn/tags/event_onfocus.asp) | script |           当元素获得焦点时运行的脚本。           |
|                         onformchange                         | script |             在表单改变时运行的脚本。             |
|                         onforminput                          | script |         当表单获得用户输入时运行的脚本。         |
|                           oninput                            | script |         当元素获得用户输入时运行的脚本。         |
|                          oninvalid                           | script |             当元素无效时运行的脚本。             |
|                           onreset                            | script | 当表单中的重置按钮被点击时触发。HTML5 中不支持。 |
| [onselect](https://www.w3school.com.cn/tags/event_onselect.asp) | script |            在元素中文本被选中后触发。            |
| [onsubmit](https://www.w3school.com.cn/tags/event_onsubmit.asp) | script |                在提交表单时触发。                |

### 键盘事件(Keyboard事件)

|                           **属性**                           | **值** |      **功能描述**      |
| :----------------------------------------------------------: | :----: | :--------------------: |
| [onkeydown](https://www.w3school.com.cn/tags/event_onkeydown.asp) | script | 在用户按下按键时触发。 |
| [onkeypress](https://www.w3school.com.cn/tags/event_onkeypress.asp) | script | 在用户敲击按钮时触发。 |
| [onkeyup](https://www.w3school.com.cn/tags/event_onkeyup.asp) | script | 当用户释放按键时触发。 |

### 鼠标事件(Mouse事件)

由鼠标或类似用户动作触发的事件：

|                           **属性**                           | **值** |                  **功能描述**                  |
| :----------------------------------------------------------: | :----: | :--------------------------------------------: |
| [onclick](https://www.w3school.com.cn/tags/event_onclick.asp) | script |           元素上发生鼠标点击时触发。           |
| [ondblclick](https://www.w3school.com.cn/tags/event_ondblclick.asp) | script |           元素上发生鼠标双击时触发。           |
|                            ondrag                            | script |            元素被拖动时运行的脚本。            |
|                          ondragend                           | script |           在拖动操作末端运行的脚本。           |
|                         ondragenter                          | script | 当元素元素已被拖动到有效拖放区域时运行的脚本。 |
|                         ondragleave                          | script |      当元素离开有效拖放目标时运行的脚本。      |
|                          ondragover                          | script | 当元素在有效拖放目标上正在被拖动时运行的脚本。 |
|                         ondragstart                          | script |           在拖动操作开端运行的脚本。           |
|                            ondrop                            | script |       当被拖元素正在被拖放时运行的脚本。       |
| [onmousedown](https://www.w3school.com.cn/tags/event_onmousedown.asp) | script |          当元素上按下鼠标按钮时触发。          |
| [onmousemove](https://www.w3school.com.cn/tags/event_onmousemove.asp) | script |         当鼠标指针移动到元素上时触发。         |
| [onmouseout](https://www.w3school.com.cn/tags/event_onmouseout.asp) | script |           当鼠标指针移出元素时触发。           |
| [onmouseover](https://www.w3school.com.cn/tags/event_onmouseover.asp) | script |         当鼠标指针移动到元素上时触发。         |
| [onmouseup](https://www.w3school.com.cn/tags/event_onmouseup.asp) | script |         当在元素上释放鼠标按钮时触发。         |
|                         onmousewheel                         | script |       当鼠标滚轮正在被滚动时运行的脚本。       |
|                           onscroll                           | script |        当元素滚动条被滚动时运行的脚本。        |

### 多媒体事件(Media事件)

由媒介（比如视频、图像和音频）触发的事件（适用于所有 HTML 元素，但常见于媒介元素中，比如 `<audio>`、`<embed>`、`<img>`、`<object>` 以及 `<video>`）:

|      **属性**      | **值** |                         **功能描述**                         |
| :----------------: | :----: | :----------------------------------------------------------: |
|      onabort       | script |                     在退出时运行的脚本。                     |
|     oncanplay      | script |   当文件就绪可以开始播放时运行的脚本（缓冲已足够开始时）。   |
|  oncanplaythrough  | script |    当媒介能够无需因缓冲而停止即可播放至结尾时运行的脚本。    |
|  ondurationchange  | script |                 当媒介长度改变时运行的脚本。                 |
|     onemptied      | script | 当发生故障并且文件突然不可用时运行的脚本（比如连接意外断开时）。 |
|      onended       | script | 当媒介已到达结尾时运行的脚本（可发送类似“感谢观看”之类的消息）。 |
|      onerror       | script |            当在文件加载期间发生错误时运行的脚本。            |
|    onloadeddata    | script |                当媒介数据已加载时运行的脚本。                |
|  onloadedmetadata  | script |       当元数据（比如分辨率和时长）被加载时运行的脚本。       |
|    onloadstart     | script |       在文件开始加载且未实际加载任何数据前运行的脚本。       |
|      onpause       | script |             当媒介被用户或程序暂停时运行的脚本。             |
|       onplay       | script |            当媒介已就绪可以开始播放时运行的脚本。            |
|     onplaying      | script |                当媒介已开始播放时运行的脚本。                |
|     onprogress     | script |            当浏览器正在获取媒介数据时运行的脚本。            |
|    onratechange    | script | 每当回放速率改变时运行的脚本（比如当用户切换到慢动作或快进模式）。 |
| onreadystatechange | script | 每当就绪状态改变时运行的脚本（就绪状态监测媒介数据的状态）。 |
|      onseeked      | script | 当 seeking 属性设置为 false（指示定位已结束）时运行的脚本。  |
|     onseeking      | script | 当 seeking 属性设置为 true（指示定位是活动的）时运行的脚本。 |
|     onstalled      | script |      在浏览器不论何种原因未能取回媒介数据时运行的脚本。      |
|     onsuspend      | script | 在媒介数据完全加载之前不论何种原因终止取回媒介数据时运行的脚本。 |
|    ontimeupdate    | script | 当播放位置改变时（比如当用户快进到媒介中一个不同的位置时）运行的脚本。 |
|   onvolumechange   | script |     每当音量改变时（包括将音量设置为静音）时运行的脚本。     |
|     onwaiting      | script | 当媒介已停止播放但打算继续播放时（比如当媒介暂停已缓冲更多数据）运行脚本 |



## 编码

### URL编码

URL - 统一资源定位器（Uniform Resource Locator）。Web 浏览器使用 URL 从 Web 服务器请求页面。URL 是网页的地址，比如：https://www.w3school.com.cn。URL 编码将字符转换为可通过因特网传输的格式。URL 只能使用 [ASCII 字符集](https://www.w3school.com.cn/charsets/ref_html_ascii.asp) 通过因特网进行发送。由于 URL 通常包含 ASCII 集之外的字符，因此必须将 URL 转换为有效的 ASCII 格式。URL 编码使用后跟十六进制数字的 "%" 替代不安全的 ASCII 字符。URL 不能包含空格。URL 编码通常使用加号（+）或 %20 替代空格。

在 JavaScript、PHP 和 ASP 中，有一些函数可用于对字符串进行 URL 编码。PHP 有 `rawurlencode()` 函数，而 ASP 有 `Server.URLEncode()` 函数。在 JavaScript 中，您可以使用 `encodeURIComponent()` 函数。

### 字符集

HTML5 中的默认字符集为 UTF-8。要仔细查看，请访问我们的完整 [HTML 字符集参考手册](https://www.w3school.com.cn/charsets/index.asp)。



