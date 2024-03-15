import alert from './index.js';

alert({ type: 'success', msg: `All finished!`, name: 'DONE' });
alert({ type: 'warning', msg: `Something not right!` });
alert({ type: 'info', msg: `Seems to be ok!`, name: `Good stuff` });
alert({ type: 'error', msg: `Somethign went wrong!` });
alert({});
