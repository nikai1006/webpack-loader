import Layer from './components/layer/layer';
import common from './css/common.css';

const App = function () {
    var dom = document.getElementById('app');
    var layer = new Layer();

    dom.innerHTML = layer.tpl;
}

new App();