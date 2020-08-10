export const windowDraw = (height, width) => {
  const window = document.body.appendChild(document.createElement('canvas'))
  window.height = height
  window.width = width
}
