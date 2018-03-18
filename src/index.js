import Cat from './module.js'
import './css/style.scss'

if(!PRODUCTION) {
  require('../index.html')
}

const Lion = new Cat('Lion')

Lion.speak()

