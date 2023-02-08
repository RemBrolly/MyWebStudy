/*通过ID获取元素*/
const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

/*
给按钮添加click（点击）事件，classList属性可以访问该元素的类名（class属性）列表，
然后通过toggle方法查询是否存在big这个类名，存在则删除，不存在则添加，
通过这个方法可以使当按钮被点击时添加类名big到盒子元素上然后会实现CSS样式表中的.big的样式，同理
再次点击该按钮big类名已存在则会删除类名，然后css中的.big样式无法实现，即可达到恢复原样的目的
*/
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

/*这个函数主要用于在页面添加16个div元素*/
function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div') /*创建div元素*/
      box.classList.add('box')  /*为新建的div元素添加类名为box*/
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px` /*通过模板字面量来改变设置背景图片的位置*/
      boxesContainer.appendChild(box) /*将新建的设置好属性的div元素添加到盒子元素的子节点中*/
    }
  }  /*迭代了16次，则一共添加了16个div元素*/
}

createBoxes()
