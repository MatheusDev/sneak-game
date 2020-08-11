import Sneak from './snake'
import { drawWindow } from './window'
const sneak = new Sneak(50, 50, 50, 50, drawWindow(500, 500))

sneak.drawSneak()
drawWindow(500, 500)
