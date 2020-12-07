(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[6],{2286:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"a",(function(){return T}));var n=r(181),a=r(35),c=r(2489),s=r(1),u=r.n(s),o=r(4),i=r(241),d=r(60),f=r(93),b=r(200),l=r(2375),p=r(42),O=r(142),v=r(24),E=r(221),h=function(e){var t;return null===(t=e.match(/.{2}/g))||void 0===t?void 0:t.reduce((function(e,t){return t===O.a?e+0:"00"===t?e+4:e+16}),0)},m=function(){var e=Object(o.a)(u.a.mark((function e(t,r,n,a,c){var s,o,d,b,E,h,m,x,N,A;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=Object(v.h)(),e.next=4,Object(v.b)(s);case 4:if(o=e.sent){e.next=7;break}return e.abrupt("return",0);case 7:return d=new s.eth.Contract(i.abi,t),e.next=10,d.methods.nonce().call();case 10:return b=e.sent,e.next=13,d.methods.getThreshold().call();case 13:if(E=e.sent,!((null===a||void 0===a?void 0:a.confirmations.size)===Number(E)||!!c||"1"===E)){e.next=22;break}return m=(null===a||void 0===a?void 0:a.confirmations)?Object(l.a)(a.confirmations,c):"0x000000000000000000000000".concat(o.replace(O.a,""),"000000000000000000000000000000000000000000000000000000000000000001"),e.next=19,d.methods.execTransaction(r,(null===a||void 0===a?void 0:a.value)||0,n,f.a,(null===a||void 0===a?void 0:a.safeTxGas)||0,0,0,p.a,p.a,m).encodeABI();case 19:h=e.sent,e.next=28;break;case 22:return e.next=24,d.methods.getTransactionHash(r,(null===a||void 0===a?void 0:a.value)||0,n,f.a,0,0,0,p.a,p.a,b).call({from:o});case 24:return x=e.sent,e.next=27,d.methods.approveHash(x).encodeABI();case 27:h=e.sent;case 28:return e.next=30,Object(O.b)(h,o,t);case 30:return N=e.sent,e.next=33,Object(O.c)();case 33:return A=e.sent,e.abrupt("return",N*parseInt(A,10));case 37:return e.prev=37,e.t0=e.catch(0),console.error("Error while estimating transaction execution gas costs:"),console.error(e.t0),e.abrupt("return",1e4);case 42:case"end":return e.stop()}}),e,null,[[0,37]])})));return function(t,r,n,a,c){return e.apply(this,arguments)}}(),x=function(e){var t=e.split("\n"),r=Object(c.a)(t).slice(1);try{var n=JSON.parse(r.join(""));if(n.originalError&&n.originalError.data)return n.originalError.data;if(null===n||void 0===n?void 0:n.data){var s=n.data.split(" ");return Object(a.a)(s,2)[1]}}catch(r){console.error("Error trying to extract data from node error message: ".concat(e))}},N=function(){var e=Object(o.a)(u.a.mark((function e(t){var r,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(v.h)(),e.prev=1,e.next=4,r.eth.call(t);case 4:if(n=e.sent,Object(E.a)(n,O.a)){e.next=7;break}return e.abrupt("return",new d.BigNumber(n.substring(138),16).toNumber());case 7:e.next=15;break;case 9:if(e.prev=9,e.t0=e.catch(1),(a=x(e.t0.message))&&!Object(E.a)(a,O.a)){e.next=14;break}throw e.t0;case 14:return e.abrupt("return",new d.BigNumber(a.substring(138),16).toNumber());case 15:throw new Error("Error while estimating the gas required for tx");case 16:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(u.a.mark((function e(t,r,a,c,s){var o,i,d,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=Object(n.a)(t),e.prev=1,o.s();case 3:if((i=o.n()).done){e.next=17;break}return d=i.value,f=c+s+d,e.prev=6,e.next=9,N({to:r,from:r,data:a,gasPrice:0,gas:f});case 9:return e.abrupt("return",c+d);case 12:e.prev=12,e.t0=e.catch(6),console.log("Error trying to estimate gas with amount: ".concat(f));case 15:e.next=3;break;case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(1),o.e(e.t1);case 22:return e.prev=22,o.f(),e.finish(22);case 25:return e.abrupt("return",0);case 26:case"end":return e.stop()}}),e,null,[[1,19,22,25],[6,12]])})));return function(t,r,n,a,c){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(u.a.mark((function e(t,r,n,a,c,s){var o,i,d,f,l,p;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o=t){e.next=6;break}return e.next=5,Object(b.g)(r);case 5:o=e.sent;case 6:return i=o.methods.requiredTxGas(a,c,n,s).encodeABI(),e.next=9,N({to:r,from:r,data:i});case 9:return d=e.sent,f=d+1e4,l=h(i)+21e3,p=[0,1e4,2e4,4e4,8e4,16e4,32e4,64e4,128e4,256e4,512e4],e.next=15,A(p,r,i,f,l);case 15:return e.abrupt("return",e.sent);case 18:return e.prev=18,e.t0=e.catch(0),console.error("Error calculating tx gas estimation",e.t0),e.abrupt("return",0);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,r,n,a,c,s){return e.apply(this,arguments)}}()},2292:function(e,t,r){"use strict";var n=r(1),a=r.n(n),c=r(16),s=r(4),u=r(115),o=r(652),i=r.n(o),d=r(208),f=r(24),b=r(2316),l=function(e){if(!e.length)return null;var t=[e.slice(0,10),e.slice(10)],r=t[0],n=t[1];if(function(e){return!!b.a[e]}(r))return function(e){var t=[e.slice(0,10),e.slice(10)],r=t[0],n=t[1];switch(r){case"0xe318b52b":var a=f.k.eth.abi.decodeParameters(["uint","address","address"],n);return{method:b.a[r],parameters:[{name:"oldOwner",type:"address",value:a[1]},{name:"newOwner",type:"address",value:a[2]}]};case"0x0d582f13":var c=f.k.eth.abi.decodeParameters(["address","uint"],n);return{method:b.a[r],parameters:[{name:"owner",type:"address",value:c[0]},{name:"_threshold",type:"uint",value:c[1]}]};case"0xf8dc5dd9":var s=f.k.eth.abi.decodeParameters(["address","address","uint"],n);return{method:b.a[r],parameters:[{name:"owner",type:"address",value:s[1]},{name:"_threshold",type:"uint",value:s[2]}]};case"0x694e80c3":var u=f.k.eth.abi.decodeParameters(["uint"],n);return{method:b.a[r],parameters:[{name:"_threshold",type:"uint",value:u[0]}]};case"0x610b5925":var o=f.k.eth.abi.decodeParameters(["address"],n);return{method:b.a[r],parameters:[{name:"module",type:"address",value:o[0]}]};case"0xe009cfde":var i=f.k.eth.abi.decodeParameters(["address","address"],n);return{method:b.a[r],parameters:[{name:"prevModule",type:"address",value:i[0]},{name:"module",type:"address",value:i[1]}]};default:return null}}(e);switch(r){case"0xa9059cbb":var a=f.k.eth.abi.decodeParameters(["address","uint"],n);return{method:"transfer",parameters:[{name:"to",type:"",value:a[0]},{name:"value",type:"",value:a[1]}]};case"0x23b872dd":var c=f.k.eth.abi.decodeParameters(["address","address","uint"],n);return{method:"transferFrom",parameters:[{name:"from",type:"",value:c[0]},{name:"to",type:"",value:c[1]},{name:"value",type:"",value:c[2]}]};case"0x42842e0e":var s=f.k.eth.abi.decodeParameters(["address","address","uint"],n);return{method:"safeTransferFrom",parameters:[{name:"from",type:"",value:s[0]},{name:"to",type:"",value:s[1]},{name:"value",type:"",value:s[2]}]};default:return null}},p=r(200),O=r(63),v=r(93),E=r(2286),h=r(210),m=r(42),x=r(142),N=r(141),A=r(80),T=r(95),j=r(158),R=r(2376),w=r(161),_=r(2377),I=r(2378),k=r(380);t.a=function(e,t,r){var n=e.safeAddress,o=e.to,f=e.valueInWei,b=e.txData,g=void 0===b?x.a:b,C=e.notifiedTransaction,S=e.txNonce,H=e.operation,D=void 0===H?v.a:H,L=e.navigateToTransactionsTab,y=void 0===L||L,M=e.origin,W=void 0===M?null:M,P=e.safeTxGas;return function(){var e=Object(s.a)(a.a.mark((function e(b,x){var H,L,M,U,F,G,B,V,X,K,J,Y,q,z,Q,Z,$,ee,te,re,ne,ae,ce,se,ue,oe;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H=x(),y&&b(Object(u.d)("".concat(A.c,"/").concat(n,"/transactions"))),e.next=4,Object(d.c)();case 4:if(e.sent){e.next=7;break}return e.abrupt("return");case 7:return L=Object(N.e)(H),M=L.account,U=L.hardwareWallet,F=L.smartContractWallet,e.next=10,Object(p.g)(n);case 10:return G=e.sent,e.next=13,Object(_.a)(n);case 13:return B=e.sent,e.next=16,Object(_.b)(null===S||void 0===S?void 0:S.toString(),B,G);case 16:return V=e.sent,e.next=19,Object(_.c)(G,V,B);case 19:return X=e.sent,e.next=22,Object(h.c)(G);case 22:if(K=e.sent,e.t0=P,e.t0){e.next=28;break}return e.next=27,Object(E.a)(G,n,g,o,f,D);case 27:e.t0=e.sent;case 28:if(J=e.t0,Y="0x000000000000000000000000".concat(M.replace("0x",""),"000000000000000000000000000000000000000000000000000000000000000001"),q=Object(O.c)(C,W),z=b(Object(T.b)(q.beforeExecution)),$={safeInstance:G,to:o,valueInWei:f,data:g,operation:D,nonce:Number.parseInt(V),safeTxGas:J,baseGas:0,gasPrice:"0",gasToken:m.a,refundReceiver:m.a,sender:M,sigs:Y},ee=Object(w.b)(n,$),e.prev=34,!(!X&&!F&&i()(K,v.c))){e.next=48;break}return e.next=39,Object(v.i)(ee,Object(c.a)(Object(c.a)({},$),{},{safeAddress:n}),U);case 39:if(!(te=e.sent)){e.next=48;break}return b(Object(j.b)({key:z})),b(Object(T.b)(q.afterExecution.moreConfirmationsNeeded)),b(Object(k.a)(n)),e.next=46,Object(v.h)(Object(c.a)(Object(c.a)({},$),{},{signature:te,origin:W}));case 46:return null===t||void 0===t||t(ee),e.abrupt("return");case 48:if(!X){e.next=54;break}return e.next=51,Object(v.g)($);case 51:e.t1=e.sent,e.next=57;break;case 54:return e.next=56,Object(v.f)(G,ee);case 56:e.t1=e.sent;case 57:return re=e.t1,ne={from:M,value:0},ae=Object(c.a)(Object(c.a)({},$),{},{confirmations:[],value:$.valueInWei,safeTxHash:ee,dataDecoded:l($.data),submissionDate:(new Date).toISOString()}),e.next=63,Object(w.f)(ae,n,H);case 63:return ce=e.sent,e.next=66,re.send(ne).once("transactionHash",function(){var e=Object(s.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===t||void 0===t||t(ee),e.prev=1,Z=r,b(Object(j.b)({key:z})),Q=b(Object(T.b)(q.pendingExecution)),e.next=7,Promise.all([Object(v.h)(Object(c.a)(Object(c.a)({},$),{},{txHash:Z,origin:W})),Object(R.c)({transaction:ce,from:M,isExecution:X,safeAddress:n,dispatch:b,state:H})]);case 7:b(Object(k.a)(n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),Object(R.a)(ce,n,b,H);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()).on("error",(function(e){b(Object(j.b)({key:Q})),Object(R.a)(ce,n,b,H),console.error("Tx error: ",e),null===r||void 0===r||r()})).then(function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q&&b(Object(j.b)({key:Q})),b(Object(T.b)(X?q.afterExecution.noMoreConfirmationsNeeded:q.afterExecution.moreConfirmationsNeeded)),e.next=4,Object(R.b)({transaction:ce,from:M,safeAddress:n,isExecution:X,receipt:t,dispatch:b,state:H});case 4:return b(Object(k.a)(n)),e.abrupt("return",t.transactionHash);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 66:e.next=80;break;case 68:return e.prev=68,e.t2=e.catch(34),se=e.t2.message?"".concat(q.afterExecutionError.message," - ").concat(e.t2.message):q.afterExecutionError.message,console.error("Error creating the TX: ",e.t2),b(Object(j.b)({key:z})),Q&&b(Object(j.b)({key:Q})),b(Object(T.b)(se)),ue=G.methods.execTransaction(o,f,g,D,0,0,0,m.a,m.a,Y).encodeABI(),e.next=78,Object(I.a)(G.options.address,0,ue,M);case 78:oe=e.sent,console.error("Error creating the TX - an attempt to get the error message: ".concat(oe));case 80:return e.abrupt("return",Z);case 81:case"end":return e.stop()}}),e,null,[[34,68]])})));return function(t,r){return e.apply(this,arguments)}}()}},2316:function(e,t,r){"use strict";var n,a,c,s,u,o,i,d,f;r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return f})),r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return l})),function(e){e.MULTI_SEND="multiSend",e.UNKNOWN="UNKNOWN"}(n||(n={})),function(e){e[e.CALL=0]="CALL",e[e.DELEGATE_CALL=1]="DELEGATE_CALL",e[e.CREATE=2]="CREATE"}(a||(a={})),function(e){e.TRANSFER="transfer",e.TRANSFER_FROM="transferFrom",e.SAFE_TRANSFER_FROM="safeTransferFrom"}(c||(c={})),function(e){e.SETUP="setup",e.SET_FALLBACK_HANDLER="setFallbackHandler",e.ADD_OWNER_WITH_THRESHOLD="addOwnerWithThreshold",e.REMOVE_OWNER="removeOwner",e.REMOVE_OWNER_WITH_THRESHOLD="removeOwnerWithThreshold",e.SWAP_OWNER="swapOwner",e.CHANGE_THRESHOLD="changeThreshold",e.CHANGE_MASTER_COPY="changeMasterCopy",e.ENABLE_MODULE="enableModule",e.DISABLE_MODULE="disableModule",e.EXEC_TRANSACTION_FROM_MODULE="execTransactionFromModule",e.APPROVE_HASH="approveHash",e.EXEC_TRANSACTION="execTransaction"}(s||(s={})),function(e){e.CONFIRMATION="CONFIRMATION",e.EXECUTION="EXECUTION"}(u||(u={})),function(e){e.CONTRACT_SIGNATURE="CONTRACT_SIGNATURE",e.APPROVED_HASH="APPROVED_HASH",e.EOA="EOA",e.ETH_SIGN="ETH_SIGN"}(o||(o={})),function(e){e.ERC20="ERC20",e.ERC721="ERC721",e.OTHER="OTHER"}(i||(i={})),function(e){e.ETHER_TRANSFER="ETHER_TRANSFER",e.ERC20_TRANSFER="ERC20_TRANSFER",e.ERC721_TRANSFER="ERC721_TRANSFER",e.UNKNOWN="UNKNOWN"}(d||(d={})),function(e){e.MULTISIG_TRANSACTION="MULTISIG_TRANSACTION",e.ETHEREUM_TRANSACTION="ETHEREUM_TRANSACTION",e.MODULE_TRANSACTION="MODULE_TRANSACTION"}(f||(f={}));var b={ADD_OWNER_WITH_THRESHOLD:"addOwnerWithThreshold",CHANGE_THRESHOLD:"changeThreshold",REMOVE_OWNER:"removeOwner",SWAP_OWNER:"swapOwner",ENABLE_MODULE:"enableModule",DISABLE_MODULE:"disableModule"},l={"0xe318b52b":b.SWAP_OWNER,"0x0d582f13":b.ADD_OWNER_WITH_THRESHOLD,"0xf8dc5dd9":b.REMOVE_OWNER,"0x694e80c3":b.CHANGE_THRESHOLD,"0x610b5925":b.ENABLE_MODULE,"0xe009cfde":b.DISABLE_MODULE}},2375:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e,t){var r=e.reduce((function(e,t){return e[t.owner.toLowerCase()]=t,e}),{});t&&(r[t.toLowerCase()]={owner:t});var n="0x";return Object.keys(r).sort().forEach((function(e){var t=r[e];t.signature?n+=t.signature.slice(2):n+="000000000000000000000000".concat(e.replace("0x",""),"000000000000000000000000000000000000000000000000000000000000000001")})),n}},2376:function(e,t,r){"use strict";r.d(t,"d",(function(){return A})),r.d(t,"c",(function(){return T})),r.d(t,"b",(function(){return j})),r.d(t,"a",(function(){return R}));var n=r(16),a=r(71),c=r(1),s=r.n(c),u=r(6),o=r(4),i=r(18),d=r(40),f=r(406),b=r(160),l=r(658),p=r(659),O=r(660),v=r(57),E=r(38),h=r(42),m=r(24),x=function(e){var t=e.transaction,r=e.from;return t.withMutations((function(e){e.updateIn(["ownersWithPendingActions",e.isCancellationTx?"reject":"confirm"],(function(e){return e.push(r)})).set("status",v.b.PENDING)}))},N=function(e){var t=e.transaction,r=e.from,n=e.isExecution,a=e.receipt;return(n?t.withMutations((function(e){e.set("executionTxHash",a.transactionHash).set("blockNumber",a.blockNumber).set("executionDate",e.submissionDate).set("fee",m.k.utils.toWei("".concat(a.gasUsed),"gwei")).set("executor",r).set("isExecuted",!0).set("isSuccessful",a.status).set("status",a.status?v.b.SUCCESS:v.b.FAILED)})):t.set("status",v.b.AWAITING_CONFIRMATIONS)).withMutations((function(e){-1!==e.confirmations.findIndex((function(e){var t=e.owner;return Object(h.e)(t,r)}))||e.update("confirmations",(function(e){return e.push(Object(O.a)({owner:r}))})),e.updateIn(["ownersWithPendingActions","reject"],(function(e){return e.clear()})).updateIn(["ownersWithPendingActions","confirm"],(function(e){return e.clear()}))}))},A=function(){var e=Object(o.a)(s.a.mark((function e(t){var r,n,a,c,o,l,p,O;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.transaction,n=t.safeAddress,a=t.dispatch,c=t.state,!r.isCancellationTx){e.next=18;break}o=v.b.AWAITING_YOUR_CONFIRMATION,l=!1,e.t0=r.status,e.next=e.t0===v.b.SUCCESS?7:e.t0===v.b.PENDING?10:12;break;case 7:return o=v.b.CANCELLED,l=!0,e.abrupt("break",13);case 10:return o=v.b.PENDING,e.abrupt("break",13);case 12:return e.abrupt("break",13);case 13:p=Object(E.A)(c),O=p.withMutations((function(e){var t=e.findIndex((function(e){var t=e.nonce;return Number(t)===Number(r.nonce)}));e.update(t,(function(e){return e.set("status",o).set("cancelled",l)}))})),Object(d.c)((function(){a(Object(f.b)({safeAddress:n,transactions:Object(i.b)(Object(u.a)({},"".concat(r.nonce),r))})),a(Object(b.b)({safeAddress:n,transactions:O}))})),e.next=19;break;case 18:a(Object(b.b)({safeAddress:n,transactions:Object(i.a)([r])}));case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=e.transaction,r=e.from,c=e.isExecution,s=Object(a.a)(e,["transaction","from","isExecution"]);return A(Object(n.a)({transaction:c?x({transaction:t,from:r}):t},s))},j=function(e){var t=e.safeAddress,r=e.dispatch,c=e.state,s=Object(a.a)(e,["safeAddress","dispatch","state"]);return A({transaction:N(Object(n.a)({},s)),safeAddress:t,dispatch:r,state:c})},R=function(e,t,r,n){if(e.isCancellationTx){var a=Object(E.A)(n).withMutations((function(t){var r=t.findIndex((function(t){var r=t.nonce;return Number(r)===Number(e.nonce)}));t[r].set("status",v.b.AWAITING_YOUR_CONFIRMATION)}));Object(d.c)((function(){r(Object(b.b)({safeAddress:t,transactions:a})),r(Object(l.b)({safeAddress:t,transaction:e}))}))}else r(Object(p.b)({safeAddress:t,transaction:e}))}},2377:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return f}));var n=r(1),a=r.n(n),c=r(4),s=r(81),u=r.n(s),o=r(651),i=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=Object(o.a)(t),e.next=4,u.a.get(r,{params:{limit:1}});case 4:return n=e.sent,e.abrupt("return",n.data.results[0]||null);case 8:return e.prev=8,e.t0=e.catch(0),console.error("failed to retrieve last Tx from server",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t,r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t);case 2:if(!r){e.next=6;break}e.t0="".concat(r.nonce+1),e.next=9;break;case 6:return e.next=8,n.methods.nonce().call();case 8:e.t0=e.sent.toString();case 9:return e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t,r,n){var c,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.getThreshold().call();case 2:if(c=e.sent,1!==Number.parseInt(c)){e.next=7;break}return s=0===Number.parseInt(r),u=n&&n.isExecuted,e.abrupt("return",s||!!u);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},2378:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return i}));var n=r(1),a=r.n(n),c=r(4),s=r(2490),u=r.n(s),o=r(24),i=function(){var t=Object(c.a)(a.a.mark((function t(r,n,c,s){var i,d,f;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=Object(o.h)(),t.next=3,i.eth.call({to:r,from:s,value:n,data:c});case 3:return d=t.sent,f=e.from(d.slice(2),"hex"),t.abrupt("return",u.a.rawDecode(["string"],f.slice(4))[0]);case 6:case"end":return t.stop()}}),t)})));return function(e,r,n,a){return t.apply(this,arguments)}}()}).call(this,r(10).Buffer)}}]);
//# sourceMappingURL=6.6a18dee3.chunk.js.map