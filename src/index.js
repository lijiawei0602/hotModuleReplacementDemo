import component from './print';
import './styles.css';
import './main.css';

let demoComponent = component();
document.body.appendChild(demoComponent);
//HMR 接口
if(module.hot){
    module.hot.accept('./print',()=>{
        const nextComponent=component();
        document.body.replaceChild(nextComponent,demoComponent);
        demoComponent=nextComponent;
    })
}