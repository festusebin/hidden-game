// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v249 = stdlib.protect(ctc0, interact.stake, 'for Alice\'s interact field stake');
  
  const txn1 = await (ctc.sendrecv({
    args: [v249],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v249, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v253], secs: v255, time: v254, didSend: v32, from: v252 } = txn1;
      
      sim_r.txns.push({
        amt: v253,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v260 = stdlib.sub(stdlib.UInt_max, v254);
      const v261 = stdlib.sub(v260, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
      const v262 = stdlib.ge(v261, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
      ;
      const v263 = stdlib.add(v254, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v253], secs: v255, time: v254, didSend: v32, from: v252 } = txn1;
  ;
  const v260 = stdlib.sub(stdlib.UInt_max, v254);
  const v261 = stdlib.sub(v260, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
  const v262 = stdlib.ge(v261, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v262, {
    at: 'reach standard library:562:15:application',
    fs: ['at reach standard library:570:29:application call to [unknown function] (defined at: reach standard library:559:55:function exp)', 'at ./index.rsh:43:17:application call to "relativeTime" (defined at: reach standard library:565:71:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v263 = stdlib.add(v254, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v263],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v252, v253, v263],
      evt_cnt: 0,
      funcNum: 2,
      lct: v254,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v405, time: v404, didSend: v217, from: v403 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v253,
          kind: 'from',
          to: v252,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v405, time: v404, didSend: v217, from: v403 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:34:33:application',
      fs: ['at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:25:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:32:32:function exp)', 'at ./index.rsh:43:41:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v269, time: v268, didSend: v41, from: v267 } = txn2;
    const v271 = stdlib.add(v253, v253);
    ;
    let v272 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v273 = v268;
    let v280 = v271;
    
    while (await (async () => {
      const v284 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v284;})()) {
      const v287 = stdlib.sub(stdlib.UInt_max, v273);
      const v288 = stdlib.sub(v287, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
      const v289 = stdlib.ge(v288, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v289, {
        at: 'reach standard library:562:15:application',
        fs: ['at reach standard library:570:29:application call to [unknown function] (defined at: reach standard library:559:55:function exp)', 'at ./index.rsh:53:19:application call to "relativeTime" (defined at: reach standard library:565:71:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v290 = stdlib.add(v273, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
      const v294 = stdlib.protect(ctc0, await interact.getVote(), {
        at: './index.rsh:49:42:application',
        fs: ['at ./index.rsh:48:15:application call to [unknown function] (defined at: ./index.rsh:48:19:function exp)'],
        msg: 'getVote',
        who: 'Alice'
        });
      const v295 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:50:54:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:48:15:application call to [unknown function] (defined at: ./index.rsh:48:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v296 = stdlib.digest(ctc1, [v295, v294]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v252, v253, v267, v280, v290, v296],
        evt_cnt: 1,
        funcNum: 4,
        lct: v273,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:52:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v299], secs: v301, time: v300, didSend: v62, from: v298 } = txn3;
          
          ;
          const v302 = stdlib.addressEq(v252, v298);
          ;
          const v305 = stdlib.sub(stdlib.UInt_max, v300);
          const v306 = stdlib.sub(v305, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
          const v307 = stdlib.ge(v306, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
          ;
          const v308 = stdlib.add(v300, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v290],
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v252, v253, v267, v280, v290],
          evt_cnt: 0,
          funcNum: 5,
          lct: v273,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v374, time: v373, didSend: v172, from: v372 } = txn4;
            
            ;
            const v375 = stdlib.addressEq(v252, v372);
            const v376 = stdlib.addressEq(v267, v372);
            const v377 = v375 ? true : v376;
            ;
            sim_r.txns.push({
              amt: v280,
              kind: 'from',
              to: v267,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v374, time: v373, didSend: v172, from: v372 } = txn4;
        ;
        const v375 = stdlib.addressEq(v252, v372);
        const v376 = stdlib.addressEq(v267, v372);
        const v377 = v375 ? true : v376;
        stdlib.assert(v377, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:53:43:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:34:33:application',
          fs: ['at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:25:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:32:32:function exp)', 'at ./index.rsh:53:43:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v299], secs: v301, time: v300, didSend: v62, from: v298 } = txn3;
        ;
        const v302 = stdlib.addressEq(v252, v298);
        stdlib.assert(v302, {
          at: './index.rsh:52:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v305 = stdlib.sub(stdlib.UInt_max, v300);
        const v306 = stdlib.sub(v305, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
        const v307 = stdlib.ge(v306, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v307, {
          at: 'reach standard library:562:15:application',
          fs: ['at reach standard library:570:29:application call to [unknown function] (defined at: reach standard library:559:55:function exp)', 'at ./index.rsh:59:19:application call to "relativeTime" (defined at: reach standard library:565:71:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v308 = stdlib.add(v300, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v308],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v252, v253, v267, v280, v299, v308],
            evt_cnt: 0,
            funcNum: 7,
            lct: v300,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v356, time: v355, didSend: v139, from: v354 } = txn5;
              
              ;
              const v357 = stdlib.addressEq(v252, v354);
              const v358 = stdlib.addressEq(v267, v354);
              const v359 = v357 ? true : v358;
              ;
              sim_r.txns.push({
                amt: v280,
                kind: 'from',
                to: v252,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v356, time: v355, didSend: v139, from: v354 } = txn5;
          ;
          const v357 = stdlib.addressEq(v252, v354);
          const v358 = stdlib.addressEq(v267, v354);
          const v359 = v357 ? true : v358;
          stdlib.assert(v359, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:59:43:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:34:33:application',
            fs: ['at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:25:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:32:32:function exp)', 'at ./index.rsh:59:43:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v314], secs: v316, time: v315, didSend: v72, from: v313 } = txn4;
          ;
          const v317 = stdlib.addressEq(v267, v313);
          stdlib.assert(v317, {
            at: './index.rsh:58:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v320 = stdlib.sub(stdlib.UInt_max, v315);
          const v321 = stdlib.sub(v320, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
          const v322 = stdlib.ge(v321, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v322, {
            at: 'reach standard library:562:15:application',
            fs: ['at reach standard library:570:29:application call to [unknown function] (defined at: reach standard library:559:55:function exp)', 'at ./index.rsh:64:19:application call to "relativeTime" (defined at: reach standard library:565:71:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v323 = stdlib.add(v315, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
          const txn5 = await (ctc.sendrecv({
            args: [v252, v253, v267, v280, v299, v314, v323, v295, v294],
            evt_cnt: 2,
            funcNum: 8,
            lct: v315,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:63:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v328, v329], secs: v331, time: v330, didSend: v82, from: v327 } = txn5;
              
              ;
              const v332 = stdlib.addressEq(v252, v327);
              ;
              const v333 = stdlib.digest(ctc1, [v328, v329]);
              const v334 = stdlib.digestEq(v299, v333);
              ;
              const v335 = stdlib.add(v329, v314);
              const cv272 = v335;
              const cv273 = v330;
              const cv280 = v280;
              
              await (async () => {
                const v272 = cv272;
                const v273 = cv273;
                const v280 = cv280;
                
                if (await (async () => {
                  const v284 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v284;})()) {
                  const v287 = stdlib.sub(stdlib.UInt_max, v273);
                  const v288 = stdlib.sub(v287, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
                  const v289 = stdlib.ge(v288, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
                  ;
                  const v290 = stdlib.add(v273, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
                  sim_r.isHalt = false;
                  }
                else {
                  const v390 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:68:16:decimal', stdlib.UInt_max, '2'), v253);
                  const v391 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v392 = v391 ? v252 : v267;
                  sim_r.txns.push({
                    amt: v390,
                    kind: 'from',
                    to: v392,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v323],
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v252, v253, v267, v280, v299, v314, v323],
              evt_cnt: 0,
              funcNum: 9,
              lct: v315,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v338, time: v337, didSend: v106, from: v336 } = txn6;
                
                ;
                const v339 = stdlib.addressEq(v252, v336);
                const v340 = stdlib.addressEq(v267, v336);
                const v341 = v339 ? true : v340;
                ;
                sim_r.txns.push({
                  amt: v280,
                  kind: 'from',
                  to: v267,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v338, time: v337, didSend: v106, from: v336 } = txn6;
            ;
            const v339 = stdlib.addressEq(v252, v336);
            const v340 = stdlib.addressEq(v267, v336);
            const v341 = v339 ? true : v340;
            stdlib.assert(v341, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:64:43:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:34:33:application',
              fs: ['at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:25:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:32:32:function exp)', 'at ./index.rsh:64:43:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v328, v329], secs: v331, time: v330, didSend: v82, from: v327 } = txn5;
            ;
            const v332 = stdlib.addressEq(v252, v327);
            stdlib.assert(v332, {
              at: './index.rsh:63:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v333 = stdlib.digest(ctc1, [v328, v329]);
            const v334 = stdlib.digestEq(v299, v333);
            stdlib.assert(v334, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:65:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v335 = stdlib.add(v329, v314);
            const cv272 = v335;
            const cv273 = v330;
            const cv280 = v280;
            
            v272 = cv272;
            v273 = cv273;
            v280 = cv280;
            
            continue;}
          
          }
        
        }
      
      }
    const v390 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:68:16:decimal', stdlib.UInt_max, '2'), v253);
    const v391 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v392 = v391 ? v252 : v267;
    ;
    stdlib.protect(ctc3, await interact.seeResult(v272), {
      at: './index.rsh:71:27:application',
      fs: ['at ./index.rsh:70:11:application call to [unknown function] (defined at: ./index.rsh:70:23:function exp)'],
      msg: 'seeResult',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v253], secs: v255, time: v254, didSend: v32, from: v252 } = txn1;
  ;
  const v260 = stdlib.sub(stdlib.UInt_max, v254);
  const v261 = stdlib.sub(v260, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
  const v262 = stdlib.ge(v261, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v262, {
    at: 'reach standard library:562:15:application',
    fs: ['at reach standard library:570:29:application call to [unknown function] (defined at: reach standard library:559:55:function exp)', 'at ./index.rsh:43:17:application call to "relativeTime" (defined at: reach standard library:565:71:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v263 = stdlib.add(v254, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
  stdlib.protect(ctc1, await interact.acceptStake(v253), {
    at: './index.rsh:41:29:application',
    fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:17:function exp)'],
    msg: 'acceptStake',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v252, v253, v263],
    evt_cnt: 0,
    funcNum: 1,
    lct: v254,
    onlyIf: true,
    out_tys: [],
    pay: [v253, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v269, time: v268, didSend: v41, from: v267 } = txn2;
      
      const v271 = stdlib.add(v253, v253);
      sim_r.txns.push({
        amt: v253,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v272 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v273 = v268;
      const v280 = v271;
      
      if (await (async () => {
        const v284 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v284;})()) {
        const v287 = stdlib.sub(stdlib.UInt_max, v273);
        const v288 = stdlib.sub(v287, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
        const v289 = stdlib.ge(v288, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
        ;
        const v290 = stdlib.add(v273, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
        sim_r.isHalt = false;
        }
      else {
        const v390 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:68:16:decimal', stdlib.UInt_max, '2'), v253);
        const v391 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v392 = v391 ? v252 : v267;
        sim_r.txns.push({
          amt: v390,
          kind: 'from',
          to: v392,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v263],
    tys: [ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v252, v253, v263],
      evt_cnt: 0,
      funcNum: 2,
      lct: v254,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v405, time: v404, didSend: v217, from: v403 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v253,
          kind: 'from',
          to: v252,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v405, time: v404, didSend: v217, from: v403 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:34:33:application',
      fs: ['at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:25:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:32:32:function exp)', 'at ./index.rsh:43:41:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v269, time: v268, didSend: v41, from: v267 } = txn2;
    const v271 = stdlib.add(v253, v253);
    ;
    let v272 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v273 = v268;
    let v280 = v271;
    
    while (await (async () => {
      const v284 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v284;})()) {
      const v287 = stdlib.sub(stdlib.UInt_max, v273);
      const v288 = stdlib.sub(v287, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
      const v289 = stdlib.ge(v288, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v289, {
        at: 'reach standard library:562:15:application',
        fs: ['at reach standard library:570:29:application call to [unknown function] (defined at: reach standard library:559:55:function exp)', 'at ./index.rsh:53:19:application call to "relativeTime" (defined at: reach standard library:565:71:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v290 = stdlib.add(v273, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v290],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v252, v253, v267, v280, v290],
          evt_cnt: 0,
          funcNum: 5,
          lct: v273,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v374, time: v373, didSend: v172, from: v372 } = txn4;
            
            ;
            const v375 = stdlib.addressEq(v252, v372);
            const v376 = stdlib.addressEq(v267, v372);
            const v377 = v375 ? true : v376;
            ;
            sim_r.txns.push({
              amt: v280,
              kind: 'from',
              to: v267,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v374, time: v373, didSend: v172, from: v372 } = txn4;
        ;
        const v375 = stdlib.addressEq(v252, v372);
        const v376 = stdlib.addressEq(v267, v372);
        const v377 = v375 ? true : v376;
        stdlib.assert(v377, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:53:43:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:34:33:application',
          fs: ['at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:25:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:32:32:function exp)', 'at ./index.rsh:53:43:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v299], secs: v301, time: v300, didSend: v62, from: v298 } = txn3;
        ;
        const v302 = stdlib.addressEq(v252, v298);
        stdlib.assert(v302, {
          at: './index.rsh:52:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v305 = stdlib.sub(stdlib.UInt_max, v300);
        const v306 = stdlib.sub(v305, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
        const v307 = stdlib.ge(v306, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v307, {
          at: 'reach standard library:562:15:application',
          fs: ['at reach standard library:570:29:application call to [unknown function] (defined at: reach standard library:559:55:function exp)', 'at ./index.rsh:59:19:application call to "relativeTime" (defined at: reach standard library:565:71:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v308 = stdlib.add(v300, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
        const v312 = stdlib.protect(ctc0, await interact.getVote(), {
          at: './index.rsh:57:52:application',
          fs: ['at ./index.rsh:56:15:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
          msg: 'getVote',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v252, v253, v267, v280, v299, v308, v312],
          evt_cnt: 1,
          funcNum: 6,
          lct: v300,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:58:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v314], secs: v316, time: v315, didSend: v72, from: v313 } = txn4;
            
            ;
            const v317 = stdlib.addressEq(v267, v313);
            ;
            const v320 = stdlib.sub(stdlib.UInt_max, v315);
            const v321 = stdlib.sub(v320, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
            const v322 = stdlib.ge(v321, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
            ;
            const v323 = stdlib.add(v315, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v308],
          tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v252, v253, v267, v280, v299, v308],
            evt_cnt: 0,
            funcNum: 7,
            lct: v300,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v356, time: v355, didSend: v139, from: v354 } = txn5;
              
              ;
              const v357 = stdlib.addressEq(v252, v354);
              const v358 = stdlib.addressEq(v267, v354);
              const v359 = v357 ? true : v358;
              ;
              sim_r.txns.push({
                amt: v280,
                kind: 'from',
                to: v252,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v356, time: v355, didSend: v139, from: v354 } = txn5;
          ;
          const v357 = stdlib.addressEq(v252, v354);
          const v358 = stdlib.addressEq(v267, v354);
          const v359 = v357 ? true : v358;
          stdlib.assert(v359, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:59:43:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:34:33:application',
            fs: ['at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:25:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:32:32:function exp)', 'at ./index.rsh:59:43:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v314], secs: v316, time: v315, didSend: v72, from: v313 } = txn4;
          ;
          const v317 = stdlib.addressEq(v267, v313);
          stdlib.assert(v317, {
            at: './index.rsh:58:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v320 = stdlib.sub(stdlib.UInt_max, v315);
          const v321 = stdlib.sub(v320, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
          const v322 = stdlib.ge(v321, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v322, {
            at: 'reach standard library:562:15:application',
            fs: ['at reach standard library:570:29:application call to [unknown function] (defined at: reach standard library:559:55:function exp)', 'at ./index.rsh:64:19:application call to "relativeTime" (defined at: reach standard library:565:71:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v323 = stdlib.add(v315, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '30'));
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v323],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v252, v253, v267, v280, v299, v314, v323],
              evt_cnt: 0,
              funcNum: 9,
              lct: v315,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v338, time: v337, didSend: v106, from: v336 } = txn6;
                
                ;
                const v339 = stdlib.addressEq(v252, v336);
                const v340 = stdlib.addressEq(v267, v336);
                const v341 = v339 ? true : v340;
                ;
                sim_r.txns.push({
                  amt: v280,
                  kind: 'from',
                  to: v267,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v338, time: v337, didSend: v106, from: v336 } = txn6;
            ;
            const v339 = stdlib.addressEq(v252, v336);
            const v340 = stdlib.addressEq(v267, v336);
            const v341 = v339 ? true : v340;
            stdlib.assert(v341, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:64:43:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:34:33:application',
              fs: ['at ./index.rsh:33:13:application call to [unknown function] (defined at: ./index.rsh:33:25:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:32:32:function exp)', 'at ./index.rsh:64:43:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v328, v329], secs: v331, time: v330, didSend: v82, from: v327 } = txn5;
            ;
            const v332 = stdlib.addressEq(v252, v327);
            stdlib.assert(v332, {
              at: './index.rsh:63:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v333 = stdlib.digest(ctc3, [v328, v329]);
            const v334 = stdlib.digestEq(v299, v333);
            stdlib.assert(v334, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:65:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v335 = stdlib.add(v329, v314);
            const cv272 = v335;
            const cv273 = v330;
            const cv280 = v280;
            
            v272 = cv272;
            v273 = cv273;
            v280 = cv280;
            
            continue;}
          
          }
        
        }
      
      }
    const v390 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:68:16:decimal', stdlib.UInt_max, '2'), v253);
    const v391 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v392 = v391 ? v252 : v267;
    ;
    stdlib.protect(ctc1, await interact.seeResult(v272), {
      at: './index.rsh:71:27:application',
      fs: ['at ./index.rsh:70:11:application call to [unknown function] (defined at: ./index.rsh:70:23:function exp)'],
      msg: 'seeResult',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAPAAEeSAUJIAf///////////8BAghweFAoJgMBAAEBACI1ADEYQQRzKmRJIls1ASEKWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAhxJIQcMQAEqSSEKDEAA00khBQxAAFYhBRJEIQU0ARJENARJIhJMNAISEUQoZClkUEk1A1coIDX/gASiBWaOsDIGNAMhDFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyVbsggjshA0/7IHs0IDiUghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf9JNQVJIls1/iEKWzX9gAQ1GirQNP4WUDT9FlCwMgY0AyEMWwxENP8xABJENANXUCA0/hY0/RZQARJENP80AyEGWzQDVyggNP00AyELWwgyBjQDJVtCAq5IIQc0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gATiG7OpsDIGNAMhC1sPRDT/MQASNANXKCAxABIRRLEisgE0AyVbsggjshA0/7IHs0ICw0mBBgxAAJRIIQc0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQZbNf5XKCA1/SVbNfxXUCA1+0k1BRc1+oAEcO3vejT6FlCwMgY0AyELWwxENP0xABJEIQgyBgkkCSIPRDIGJAg1+TT/NP4WUDT9UDT8FlA0+1A0+hZQNPkWUChLAVcAf2cpSwFXfwFnSCEFNQEyBjUCQgJESCEENAESRDQESSISTDQCEhFEKGRJNQNXKCA1/4AEzJmSXLAyBjQDIQ1bD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCAdhJIQkMQADJSYEEDEAAgUghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEGWzX+VyggNf0lWzX8STUFNfuABDiwIy00+1CwMgY0AyENWwxENP8xABJEIQgyBgkkCSIPRDIGJAg1+jT/NP4WUDT9UDT8FlA0+1A0+hZQKEsBVwB4Z0ghBzUBMgY1AkIBZSEJEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ5bD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgEISSMMQABDSCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhDlsMRDT/iAErNANXACA0/zEAIzIGNP9JCEIAWkgiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULCBoI0GiADvNP+IAOohCDIGCSQJIg9EMgYkCDX+MQA0/xZQNP4WUChLAVcAMGdIIzUBMgY1AkIAgTX/Nf41/TX8Nfs1+jT9IxJBADQhCDT+CSQJIg9ENP4kCDX5NPo0+xZQNPxQNP8WUDT5FlAoSwFXAFhnSCEENQEyBjUCQgA6sSKyASEJNPsLsggjshA0/DT6NP0hCRJNsgezQgAAMRkhBBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v253",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v253",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v314",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v328",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v329",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v314",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v328",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v329",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001aed38038062001aed83398101604081905262000026916200021e565b60008080554360035560408051602080820183529281528151338152845181850152928401515183830152905190917f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d919081900360600190a16020820151516200009590341460076200014e565b620000c16000601e620000ab43600019620002d6565b620000b79190620002d6565b101560086200014e565b620000ce601e43620002f0565b8152604080516060808201835260006020808401828152848601838152338087528984015151835288518252600194859055439094558651928301939093525194810194909452519083015290608001604051602081830303815290604052600290805190602001906200014492919062000178565b5050505062000348565b81620001745760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000186906200030b565b90600052602060002090601f016020900481019282620001aa5760008555620001f5565b82601f10620001c557805160ff1916838001178555620001f5565b82800160010185558215620001f5579182015b82811115620001f5578251825591602001919060010190620001d8565b506200020392915062000207565b5090565b5b8082111562000203576000815560010162000208565b60008183036040808212156200023357600080fd5b80518082016001600160401b0380821183831017156200026357634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200027d57600080fd5b835194506020850191508482108183111715620002aa57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b634e487b7160e01b600052601160045260246000fd5b600082821015620002eb57620002eb620002c0565b500390565b60008219821115620003065762000306620002c0565b500190565b600181811c908216806200032057607f821691505b602082108114156200034257634e487b7160e01b600052602260045260246000fd5b50919050565b61179580620003586000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063980b6eac14610128578063a209ad4e1461013b578063ab53f2c61461014e578063bf2c5b2414610171578063de7369981461018457005b80631e93b0f1146100a35780632c10a159146100c75780637eea518c146100da57806383230757146100ed5780638328d4c41461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611389565b610197565b6100a16100e8366004611389565b610322565b3480156100f957600080fd5b506001546100b4565b6100a16101103660046113ac565b6104a0565b6100a1610123366004611389565b6106ab565b6100a1610136366004611389565b610846565b6100a1610149366004611389565b610ad2565b34801561015a57600080fd5b50610163610d18565b6040516100be9291906113be565b6100a161017f366004611389565b610db5565b6100a1610192366004611389565b610f4c565b6101a7600160005414600a6110a2565b6101c1813515806101ba57506001548235145b600b6110a2565b6000808055600280546101d39061141b565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff9061141b565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050806020019051810190610264919061146c565b905061027781604001514310600c6110a2565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516102a89291906114db565b60405180910390a16102c18160200151341460096110a2565b6102c9611249565b815181516001600160a01b03909116905260208083018051835183015282513360409091015281830180516001905251439201919091525161030b908061152e565b60208201516040015261031d816110c7565b505050565b610332600160005414600e6110a2565b61034c8135158061034557506001548235145b600f6110a2565b60008080556002805461035e9061141b565b80601f016020809104026020016040519081016040528092919081815260200182805461038a9061141b565b80156103d75780601f106103ac576101008083540402835291602001916103d7565b820191906000526020600020905b8154815290600101906020018083116103ba57829003601f168201915b50505050508060200190518101906103ef919061146c565b9050610403816040015143101560106110a2565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516104349291906114db565b60405180910390a16104483415600d6110a2565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610485573d6000803e3d6000fd5b506000808055600181905561049c9060029061129b565b5050565b6104b0600960005414602b6110a2565b6104ca813515806104c357506001548235145b602c6110a2565b6000808055600280546104dc9061141b565b80601f01602080910402602001604051908101604052809291908181526020018280546105089061141b565b80156105555780601f1061052a57610100808354040283529160200191610555565b820191906000526020600020905b81548152906001019060200180831161053857829003601f168201915b505050505080602001905181019061056d9190611546565b90506105808160c001514310602d6110a2565b604080513381528335602080830191909152840135818301529083013560608201527f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e9060800160405180910390a16105db341560286110a2565b80516105f3906001600160a01b0316331460296110a2565b6040805161063f9161061991602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826080015114602a6110a2565b610647611249565b815181516001600160a01b039182169052602080840151835190910152604080840151835192169181019190915260a08301516106869185013561152e565b6020808301805192909252815143910152606083015190516040015261031d816110c7565b6106bb600560005414601a6110a2565b6106d5813515806106ce57506001548235145b601b6110a2565b6000808055600280546106e79061141b565b80601f01602080910402602001604051908101604052809291908181526020018280546107139061141b565b80156107605780601f1061073557610100808354040283529160200191610760565b820191906000526020600020905b81548152906001019060200180831161074357829003601f168201915b505050505080602001905181019061077891906115e4565b905061078c8160800151431015601c6110a2565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516107bd9291906114db565b60405180910390a16107d1341560186110a2565b8051610805906001600160a01b031633146107fb5760408201516001600160a01b031633146107fe565b60015b60196110a2565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015610485573d6000803e3d6000fd5b61085660076000541460206110a2565b6108708135158061086957506001548235145b60216110a2565b6000808055600280546108829061141b565b80601f01602080910402602001604051908101604052809291908181526020018280546108ae9061141b565b80156108fb5780601f106108d0576101008083540402835291602001916108fb565b820191906000526020600020905b8154815290600101906020018083116108de57829003601f168201915b5050505050806020019051810190610913919061166e565b905061092b6040518060200160405280600081525090565b61093c8260a00151431060226110a2565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c338460405161096d929190611702565b60405180910390a16109813415601d6110a2565b604082015161099c906001600160a01b03163314601e6110a2565b6109c26000601e6109af43600019611729565b6109b99190611729565b1015601f6110a2565b6109cd601e4361152e565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a01518189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260096000554360015589519b8c019c909c529851978a01979097529451909916928701929092525190850152945190830152925191810191909152905160e0820152610100015b60405160208183030381529060405260029080519060200190610acb9291906112d8565b5050505050565b610ae260056000541460156110a2565b610afc81351580610af557506001548235145b60166110a2565b600080805560028054610b0e9061141b565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3a9061141b565b8015610b875780601f10610b5c57610100808354040283529160200191610b87565b820191906000526020600020905b815481529060010190602001808311610b6a57829003601f168201915b5050505050806020019051810190610b9f91906115e4565b9050610bb76040518060200160405280600081525090565b610bc88260800151431060176110a2565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051610bf9929190611702565b60405180910390a1610c0d341560126110a2565b8151610c25906001600160a01b0316331460136110a2565b610c4b6000601e610c3843600019611729565b610c429190611729565b101560146110a2565b610c56601e4361152e565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a01518189019081528b8601356080808b019182528b5160a0808d019182526007600055436001558751998a019a909a52965195880195909552925190971690850152945190830152925191810191909152905160c082015260e001610aa7565b600060606000546002808054610d2d9061141b565b80601f0160208091040260200160405190810160405280929190818152602001828054610d599061141b565b8015610da65780601f10610d7b57610100808354040283529160200191610da6565b820191906000526020600020905b815481529060010190602001808311610d8957829003601f168201915b50505050509050915091509091565b610dc560076000541460256110a2565b610ddf81351580610dd857506001548235145b60266110a2565b600080805560028054610df19061141b565b80601f0160208091040260200160405190810160405280929190818152602001828054610e1d9061141b565b8015610e6a5780601f10610e3f57610100808354040283529160200191610e6a565b820191906000526020600020905b815481529060010190602001808311610e4d57829003601f168201915b5050505050806020019051810190610e82919061166e565b9050610e968160a0015143101560276110a2565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610ec79291906114db565b60405180910390a1610edb341560236110a2565b8051610f0f906001600160a01b03163314610f055760408201516001600160a01b03163314610f08565b60015b60246110a2565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610485573d6000803e3d6000fd5b610f5c60096000541460306110a2565b610f7681351580610f6f57506001548235145b60316110a2565b600080805560028054610f889061141b565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb49061141b565b80156110015780601f10610fd657610100808354040283529160200191611001565b820191906000526020600020905b815481529060010190602001808311610fe457829003601f168201915b50505050508060200190518101906110199190611546565b905061102d8160c0015143101560326110a2565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd338360405161105e9291906114db565b60405180910390a16110723415602e6110a2565b8051610805906001600160a01b0316331461109c5760408201516001600160a01b0316331461109f565b60015b602f5b8161049c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516020810190915260008152602082015151600114156111e4576111146000601e8460200151602001516000196111019190611729565b61110b9190611729565b101560116110a2565b601e826020015160200151611129919061152e565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b03908116808c528e5189015188528e518d0151821687528e8901518d015185528d5183526005909955436001558b51808901999099529551888c0152935190941691860191909152519184019190915251828401528451808303909301835260c0909101909352805191926111de92600292909101906112d8565b50505050565b6020820151516002146111fc57815160400151611200565b8151515b6001600160a01b03166108fc83600001516020015160026112219190611740565b6040518115909202916000818181858888f19350505050158015610485573d6000803e3d6000fd5b6040805160a0810182526000918101828152606082018390526080820192909252908190815260200161129660405180606001604052806000815260200160008152602001600081525090565b905290565b5080546112a79061141b565b6000825580601f106112b7575050565b601f0160209004906000526020600020908101906112d5919061135c565b50565b8280546112e49061141b565b90600052602060002090601f016020900481019282611306576000855561134c565b82601f1061131f57805160ff191683800117855561134c565b8280016001018555821561134c579182015b8281111561134c578251825591602001919060010190611331565b5061135892915061135c565b5090565b5b80821115611358576000815560010161135d565b60006040828403121561138357600080fd5b50919050565b60006040828403121561139b57600080fd5b6113a58383611371565b9392505050565b60006060828403121561138357600080fd5b82815260006020604081840152835180604085015260005b818110156113f2578581018301518582016060015282016113d6565b81811115611404576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061142f57607f821691505b6020821081141561138357634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461146757600080fd5b919050565b60006060828403121561147e57600080fd5b6040516060810181811067ffffffffffffffff821117156114af57634e487b7160e01b600052604160045260246000fd5b6040526114bb83611450565b815260208301516020820152604083015160408201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461150957600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561154157611541611518565b500190565b600060e0828403121561155857600080fd5b60405160e0810181811067ffffffffffffffff8211171561158957634e487b7160e01b600052604160045260246000fd5b60405261159583611450565b8152602083015160208201526115ad60408401611450565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600060a082840312156115f657600080fd5b60405160a0810181811067ffffffffffffffff8211171561162757634e487b7160e01b600052604160045260246000fd5b60405261163383611450565b81526020830151602082015261164b60408401611450565b604082015260608301516060820152608083015160808201528091505092915050565b600060c0828403121561168057600080fd5b60405160c0810181811067ffffffffffffffff821117156116b157634e487b7160e01b600052604160045260246000fd5b6040526116bd83611450565b8152602083015160208201526116d560408401611450565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b6001600160a01b0383168152606081016113a5602083018480358252602090810135910152565b60008282101561173b5761173b611518565b500390565b600081600019048311821515161561175a5761175a611518565b50029056fea26469706673582212201251de6d84299ce824e0b6206ce2f6756829c6e99f35e16324429d7fd52c6e2364736f6c634300080c0033`,
  BytecodeLen: 6893,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:39:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:43:41:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:69:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:47:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:53:43:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:54:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:59:43:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:60:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:64:43:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
