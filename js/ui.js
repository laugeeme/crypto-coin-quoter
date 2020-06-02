'use strict';

class Interface {
  showMsj(msj, classes) {
    const div = document.createElement('div');
    div.className = classes;
    div.appendChild(document.createTextNode(msj));

    //select msj
    const divMsj = document.querySelector('.mensajes');
    divMsj.appendChild(div);

    //show content
    setTimeout(() => {
      document.querySelector('.mensajes div').remove();
    }, 3000);
  }
}
