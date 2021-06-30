/**
 * ios键盘弹出，关闭后存在不可见蒙层bug
 * 输入框失去焦点时，调用此方法
 * @param el DOM | id
 */
const hackIosKeyboardClose = (el: HTMLImageElement) => {
  const hack = () => {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    window.scrollTo(0, scrollTop + 1)
  }
  // 绑定
  el.addEventListener('focus', hack, false)
  // 解除
  el.removeEventListener('blur', hack, false)
}

export default hackIosKeyboardClose
