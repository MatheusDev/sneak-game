export const drawWindow = (height, width) => {
  const window = document.body.appendChild(document.createElement('canvas'))
  window.height = height
  window.width = width
  return window
}
