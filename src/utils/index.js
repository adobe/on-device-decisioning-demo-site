/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import window from "global/window";

const fireCustomEvent = (name , target, data) => {
  notify("Firing Custom Event " + name + " with event data ", data);
  var event=new CustomEvent(name, data);
  var obj = target.dispatchEvent(event);
}

const notify = (message, data = "", mode = 5) => {
  var prefix = "ACT:";

  if(location.href.indexOf("actDebug=") < 0) {
    return false;
  }

  switch (mode) {
    case 0:
      console.log && console.log(prefix, message, data);
      break;
    case 1:
      console.warn && console.warn(prefix, message, data);
      break;
    case 2:
      console.error && console.error(prefix, message, data);
      break;
    case 3:
      console.count && console.count(prefix + message);
        break;
    default:
      console.info && console.info(prefix, message, data);
  }
}

export {
  fireCustomEvent,
  notify
}


var a = "adobe", c = "consulting", t = "target";
window[a]=window[a]||{};
window[a][c]=window[a][c]||{};
window[a][c][t]=window[a][c][t]||{};
window[a][c][t].notify = window[a][c][t].notify || notify;
