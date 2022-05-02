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
      3: [ctc0, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc0, ctc0, ctc1, ctc1],
      9: [ctc0, ctc1, ctc0, ctc0, ctc1, ctc2, ctc1],
      11: [ctc0, ctc1, ctc0, ctc0, ctc1, ctc2, ctc1, ctc1],
      13: [ctc0, ctc1, ctc0, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1]
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
  
  
  const v364 = stdlib.protect(ctc0, interact.stake, 'for Alice\'s interact field stake');
  
  const txn1 = await (ctc.sendrecv({
    args: [v364],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./vote-tutorial.rsh:38:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v364, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v368], secs: v370, time: v369, didSend: v29, from: v367 } = txn1;
      
      sim_r.txns.push({
        amt: v368,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v379 = stdlib.add(v369, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v368], secs: v370, time: v369, didSend: v29, from: v367 } = txn1;
  ;
  const v379 = stdlib.add(v369, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v379],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v367, v368, v379],
      evt_cnt: 0,
      funcNum: 2,
      lct: v369,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v609, time: v608, didSend: v329, from: v607 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v368,
          kind: 'from',
          to: v367,
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
    const {data: [], secs: v609, time: v608, didSend: v329, from: v607 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './vote-tutorial.rsh:35:33:application',
      fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:44:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v385, time: v384, didSend: v38, from: v383 } = txn2;
    const v387 = stdlib.add(v368, v368);
    ;
    const v394 = stdlib.add(v384, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: ['time', v394],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v367, v368, v383, v387, v394],
        evt_cnt: 0,
        funcNum: 4,
        lct: v384,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v592, time: v591, didSend: v295, from: v590 } = txn4;
          
          ;
          sim_r.txns.push({
            amt: v387,
            kind: 'from',
            to: v367,
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
      const {data: [], secs: v592, time: v591, didSend: v295, from: v590 } = txn4;
      ;
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './vote-tutorial.rsh:35:33:application',
        fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:49:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [], secs: v400, time: v399, didSend: v47, from: v398 } = txn3;
      const v402 = stdlib.add(v387, v368);
      ;
      let v403 = stdlib.checkedBigNumberify('./vote-tutorial.rsh:makeEnum', stdlib.UInt_max, '1');
      let v404 = v399;
      let v411 = v402;
      
      while (await (async () => {
        const v415 = stdlib.eq(v403, stdlib.checkedBigNumberify('./vote-tutorial.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v415;})()) {
        const v422 = stdlib.add(v404, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
        const v426 = stdlib.protect(ctc0, await interact.getVote(), {
          at: './vote-tutorial.rsh:55:42:application',
          fs: ['at ./vote-tutorial.rsh:54:15:application call to [unknown function] (defined at: ./vote-tutorial.rsh:54:19:function exp)'],
          msg: 'getVote',
          who: 'Alice'
          });
        const v427 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:53:31:application',
          fs: ['at ./vote-tutorial.rsh:56:54:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./vote-tutorial.rsh:54:15:application call to [unknown function] (defined at: ./vote-tutorial.rsh:54:19:function exp)'],
          msg: 'random',
          who: 'Alice'
          });
        const v428 = stdlib.digest(ctc1, [v427, v426]);
        
        const txn4 = await (ctc.sendrecv({
          args: [v367, v368, v383, v398, v411, v422, v428],
          evt_cnt: 1,
          funcNum: 6,
          lct: v404,
          onlyIf: true,
          out_tys: [ctc2],
          pay: [stdlib.checkedBigNumberify('./vote-tutorial.rsh:58:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v431], secs: v433, time: v432, didSend: v68, from: v430 } = txn4;
            
            ;
            const v434 = stdlib.addressEq(v367, v430);
            ;
            const v441 = stdlib.add(v432, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v422],
          tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc0, ctc2],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v367, v368, v383, v398, v411, v422],
            evt_cnt: 0,
            funcNum: 7,
            lct: v404,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v555, time: v554, didSend: v243, from: v553 } = txn5;
              
              ;
              const v556 = stdlib.addressEq(v367, v553);
              const v557 = stdlib.addressEq(v383, v553);
              const v558 = v556 ? true : v557;
              const v559 = stdlib.addressEq(v398, v553);
              const v560 = v558 ? true : v559;
              ;
              sim_r.txns.push({
                amt: v411,
                kind: 'from',
                to: v383,
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
            tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v555, time: v554, didSend: v243, from: v553 } = txn5;
          ;
          const v556 = stdlib.addressEq(v367, v553);
          const v557 = stdlib.addressEq(v383, v553);
          const v558 = v556 ? true : v557;
          const v559 = stdlib.addressEq(v398, v553);
          const v560 = v558 ? true : v559;
          stdlib.assert(v560, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./vote-tutorial.rsh:59:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './vote-tutorial.rsh:35:33:application',
            fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:59:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v431], secs: v433, time: v432, didSend: v68, from: v430 } = txn4;
          ;
          const v434 = stdlib.addressEq(v367, v430);
          stdlib.assert(v434, {
            at: './vote-tutorial.rsh:58:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v441 = stdlib.add(v432, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc0],
            timeoutAt: ['time', v441],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v367, v368, v383, v398, v411, v431, v441],
              evt_cnt: 0,
              funcNum: 9,
              lct: v432,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v533, time: v532, didSend: v204, from: v531 } = txn6;
                
                ;
                const v534 = stdlib.addressEq(v367, v531);
                const v535 = stdlib.addressEq(v383, v531);
                const v536 = v534 ? true : v535;
                const v537 = stdlib.addressEq(v398, v531);
                const v538 = v536 ? true : v537;
                ;
                sim_r.txns.push({
                  amt: v411,
                  kind: 'from',
                  to: v367,
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
              tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v533, time: v532, didSend: v204, from: v531 } = txn6;
            ;
            const v534 = stdlib.addressEq(v367, v531);
            const v535 = stdlib.addressEq(v383, v531);
            const v536 = v534 ? true : v535;
            const v537 = stdlib.addressEq(v398, v531);
            const v538 = v536 ? true : v537;
            stdlib.assert(v538, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./vote-tutorial.rsh:65:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './vote-tutorial.rsh:35:33:application',
              fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:65:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v447], secs: v449, time: v448, didSend: v78, from: v446 } = txn5;
            ;
            const v450 = stdlib.addressEq(v383, v446);
            stdlib.assert(v450, {
              at: './vote-tutorial.rsh:64:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v457 = stdlib.add(v448, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v457],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v367, v368, v383, v398, v411, v431, v447, v457],
                evt_cnt: 0,
                funcNum: 11,
                lct: v448,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v511, time: v510, didSend: v165, from: v509 } = txn7;
                  
                  ;
                  const v512 = stdlib.addressEq(v367, v509);
                  const v513 = stdlib.addressEq(v383, v509);
                  const v514 = v512 ? true : v513;
                  const v515 = stdlib.addressEq(v398, v509);
                  const v516 = v514 ? true : v515;
                  ;
                  sim_r.txns.push({
                    amt: v411,
                    kind: 'from',
                    to: v367,
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
                tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc2, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v511, time: v510, didSend: v165, from: v509 } = txn7;
              ;
              const v512 = stdlib.addressEq(v367, v509);
              const v513 = stdlib.addressEq(v383, v509);
              const v514 = v512 ? true : v513;
              const v515 = stdlib.addressEq(v398, v509);
              const v516 = v514 ? true : v515;
              stdlib.assert(v516, {
                at: 'reach standard library:189:11:dot',
                fs: ['at ./vote-tutorial.rsh:70:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc3, await interact.informTimeout(), {
                at: './vote-tutorial.rsh:35:33:application',
                fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:70:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v463], secs: v465, time: v464, didSend: v88, from: v462 } = txn6;
              ;
              const v466 = stdlib.addressEq(v398, v462);
              stdlib.assert(v466, {
                at: './vote-tutorial.rsh:69:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v473 = stdlib.add(v464, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
              const txn7 = await (ctc.sendrecv({
                args: [v367, v368, v383, v398, v411, v431, v447, v463, v473, v427, v426],
                evt_cnt: 2,
                funcNum: 12,
                lct: v464,
                onlyIf: true,
                out_tys: [ctc0, ctc0],
                pay: [stdlib.checkedBigNumberify('./vote-tutorial.rsh:74:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [v478, v479], secs: v481, time: v480, didSend: v98, from: v477 } = txn7;
                  
                  ;
                  const v482 = stdlib.addressEq(v367, v477);
                  ;
                  const v483 = stdlib.digest(ctc1, [v478, v479]);
                  const v484 = stdlib.digestEq(v431, v483);
                  ;
                  const v485 = stdlib.add(v479, v447);
                  const v486 = stdlib.add(v485, v463);
                  const cv403 = v486;
                  const cv404 = v480;
                  const cv411 = v411;
                  
                  await (async () => {
                    const v403 = cv403;
                    const v404 = cv404;
                    const v411 = cv411;
                    
                    if (await (async () => {
                      const v415 = stdlib.eq(v403, stdlib.checkedBigNumberify('./vote-tutorial.rsh:makeEnum', stdlib.UInt_max, '1'));
                      
                      return v415;})()) {
                      const v422 = stdlib.add(v404, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
                      sim_r.isHalt = false;
                      }
                    else {
                      const v575 = stdlib.mul(stdlib.checkedBigNumberify('./vote-tutorial.rsh:79:16:decimal', stdlib.UInt_max, '3'), v368);
                      const v576 = stdlib.eq(v403, stdlib.checkedBigNumberify('./vote-tutorial.rsh:makeEnum', stdlib.UInt_max, '2'));
                      const v577 = v576 ? v367 : v383;
                      sim_r.txns.push({
                        amt: v575,
                        kind: 'from',
                        to: v577,
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
                timeoutAt: ['time', v473],
                tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.sendrecv({
                  args: [v367, v368, v383, v398, v411, v431, v447, v463, v473],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v464,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v489, time: v488, didSend: v126, from: v487 } = txn8;
                    
                    ;
                    const v490 = stdlib.addressEq(v367, v487);
                    const v491 = stdlib.addressEq(v383, v487);
                    const v492 = v490 ? true : v491;
                    const v493 = stdlib.addressEq(v398, v487);
                    const v494 = v492 ? true : v493;
                    ;
                    sim_r.txns.push({
                      amt: v411,
                      kind: 'from',
                      to: v383,
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
                  tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v489, time: v488, didSend: v126, from: v487 } = txn8;
                ;
                const v490 = stdlib.addressEq(v367, v487);
                const v491 = stdlib.addressEq(v383, v487);
                const v492 = v490 ? true : v491;
                const v493 = stdlib.addressEq(v398, v487);
                const v494 = v492 ? true : v493;
                stdlib.assert(v494, {
                  at: 'reach standard library:189:11:dot',
                  fs: ['at ./vote-tutorial.rsh:75:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                ;
                stdlib.protect(ctc3, await interact.informTimeout(), {
                  at: './vote-tutorial.rsh:35:33:application',
                  fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:75:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Alice'
                  });
                
                return;
                
                }
              else {
                const {data: [v478, v479], secs: v481, time: v480, didSend: v98, from: v477 } = txn7;
                ;
                const v482 = stdlib.addressEq(v367, v477);
                stdlib.assert(v482, {
                  at: './vote-tutorial.rsh:74:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                const v483 = stdlib.digest(ctc1, [v478, v479]);
                const v484 = stdlib.digestEq(v431, v483);
                stdlib.assert(v484, {
                  at: 'reach standard library:58:17:application',
                  fs: ['at ./vote-tutorial.rsh:76:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                  msg: null,
                  who: 'Alice'
                  });
                const v485 = stdlib.add(v479, v447);
                const v486 = stdlib.add(v485, v463);
                const cv403 = v486;
                const cv404 = v480;
                const cv411 = v411;
                
                v403 = cv403;
                v404 = cv404;
                v411 = cv411;
                
                continue;}
              
              }
            
            }
          
          }
        
        }
      const v575 = stdlib.mul(stdlib.checkedBigNumberify('./vote-tutorial.rsh:79:16:decimal', stdlib.UInt_max, '3'), v368);
      const v576 = stdlib.eq(v403, stdlib.checkedBigNumberify('./vote-tutorial.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v577 = v576 ? v367 : v383;
      ;
      stdlib.protect(ctc3, await interact.seeResult(v403), {
        at: './vote-tutorial.rsh:82:27:application',
        fs: ['at ./vote-tutorial.rsh:81:11:application call to [unknown function] (defined at: ./vote-tutorial.rsh:81:26:function exp)'],
        msg: 'seeResult',
        who: 'Alice'
        });
      
      return;
      }
    
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
  const {data: [v368], secs: v370, time: v369, didSend: v29, from: v367 } = txn1;
  ;
  const v379 = stdlib.add(v369, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
  stdlib.protect(ctc1, await interact.acceptStake(v368), {
    at: './vote-tutorial.rsh:42:29:application',
    fs: ['at ./vote-tutorial.rsh:41:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:41:17:function exp)'],
    msg: 'acceptStake',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v367, v368, v379],
    evt_cnt: 0,
    funcNum: 1,
    lct: v369,
    onlyIf: true,
    out_tys: [],
    pay: [v368, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v385, time: v384, didSend: v38, from: v383 } = txn2;
      
      const v387 = stdlib.add(v368, v368);
      sim_r.txns.push({
        amt: v368,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v394 = stdlib.add(v384, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v379],
    tys: [ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v367, v368, v379],
      evt_cnt: 0,
      funcNum: 2,
      lct: v369,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v609, time: v608, didSend: v329, from: v607 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v368,
          kind: 'from',
          to: v367,
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
    const {data: [], secs: v609, time: v608, didSend: v329, from: v607 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './vote-tutorial.rsh:35:33:application',
      fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:44:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v385, time: v384, didSend: v38, from: v383 } = txn2;
    const v387 = stdlib.add(v368, v368);
    ;
    const v394 = stdlib.add(v384, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: ['time', v394],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v367, v368, v383, v387, v394],
        evt_cnt: 0,
        funcNum: 4,
        lct: v384,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v592, time: v591, didSend: v295, from: v590 } = txn4;
          
          ;
          sim_r.txns.push({
            amt: v387,
            kind: 'from',
            to: v367,
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
      const {data: [], secs: v592, time: v591, didSend: v295, from: v590 } = txn4;
      ;
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './vote-tutorial.rsh:35:33:application',
        fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:49:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [], secs: v400, time: v399, didSend: v47, from: v398 } = txn3;
      const v402 = stdlib.add(v387, v368);
      ;
      let v403 = stdlib.checkedBigNumberify('./vote-tutorial.rsh:makeEnum', stdlib.UInt_max, '1');
      let v404 = v399;
      let v411 = v402;
      
      while (await (async () => {
        const v415 = stdlib.eq(v403, stdlib.checkedBigNumberify('./vote-tutorial.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v415;})()) {
        const v422 = stdlib.add(v404, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v422],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v367, v368, v383, v398, v411, v422],
            evt_cnt: 0,
            funcNum: 7,
            lct: v404,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v555, time: v554, didSend: v243, from: v553 } = txn5;
              
              ;
              const v556 = stdlib.addressEq(v367, v553);
              const v557 = stdlib.addressEq(v383, v553);
              const v558 = v556 ? true : v557;
              const v559 = stdlib.addressEq(v398, v553);
              const v560 = v558 ? true : v559;
              ;
              sim_r.txns.push({
                amt: v411,
                kind: 'from',
                to: v383,
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
            tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v555, time: v554, didSend: v243, from: v553 } = txn5;
          ;
          const v556 = stdlib.addressEq(v367, v553);
          const v557 = stdlib.addressEq(v383, v553);
          const v558 = v556 ? true : v557;
          const v559 = stdlib.addressEq(v398, v553);
          const v560 = v558 ? true : v559;
          stdlib.assert(v560, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./vote-tutorial.rsh:59:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './vote-tutorial.rsh:35:33:application',
            fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:59:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v431], secs: v433, time: v432, didSend: v68, from: v430 } = txn4;
          ;
          const v434 = stdlib.addressEq(v367, v430);
          stdlib.assert(v434, {
            at: './vote-tutorial.rsh:58:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v441 = stdlib.add(v432, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
          const v445 = stdlib.protect(ctc0, await interact.getVote(), {
            at: './vote-tutorial.rsh:63:52:application',
            fs: ['at ./vote-tutorial.rsh:62:15:application call to [unknown function] (defined at: ./vote-tutorial.rsh:62:19:function exp)'],
            msg: 'getVote',
            who: 'Bob'
            });
          
          const txn5 = await (ctc.sendrecv({
            args: [v367, v368, v383, v398, v411, v431, v441, v445],
            evt_cnt: 1,
            funcNum: 8,
            lct: v432,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./vote-tutorial.rsh:64:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v447], secs: v449, time: v448, didSend: v78, from: v446 } = txn5;
              
              ;
              const v450 = stdlib.addressEq(v383, v446);
              ;
              const v457 = stdlib.add(v448, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v441],
            tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v367, v368, v383, v398, v411, v431, v441],
              evt_cnt: 0,
              funcNum: 9,
              lct: v432,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v533, time: v532, didSend: v204, from: v531 } = txn6;
                
                ;
                const v534 = stdlib.addressEq(v367, v531);
                const v535 = stdlib.addressEq(v383, v531);
                const v536 = v534 ? true : v535;
                const v537 = stdlib.addressEq(v398, v531);
                const v538 = v536 ? true : v537;
                ;
                sim_r.txns.push({
                  amt: v411,
                  kind: 'from',
                  to: v367,
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
              tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v533, time: v532, didSend: v204, from: v531 } = txn6;
            ;
            const v534 = stdlib.addressEq(v367, v531);
            const v535 = stdlib.addressEq(v383, v531);
            const v536 = v534 ? true : v535;
            const v537 = stdlib.addressEq(v398, v531);
            const v538 = v536 ? true : v537;
            stdlib.assert(v538, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./vote-tutorial.rsh:65:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './vote-tutorial.rsh:35:33:application',
              fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:65:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v447], secs: v449, time: v448, didSend: v78, from: v446 } = txn5;
            ;
            const v450 = stdlib.addressEq(v383, v446);
            stdlib.assert(v450, {
              at: './vote-tutorial.rsh:64:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v457 = stdlib.add(v448, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v457],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v367, v368, v383, v398, v411, v431, v447, v457],
                evt_cnt: 0,
                funcNum: 11,
                lct: v448,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v511, time: v510, didSend: v165, from: v509 } = txn7;
                  
                  ;
                  const v512 = stdlib.addressEq(v367, v509);
                  const v513 = stdlib.addressEq(v383, v509);
                  const v514 = v512 ? true : v513;
                  const v515 = stdlib.addressEq(v398, v509);
                  const v516 = v514 ? true : v515;
                  ;
                  sim_r.txns.push({
                    amt: v411,
                    kind: 'from',
                    to: v367,
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
                tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc2, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v511, time: v510, didSend: v165, from: v509 } = txn7;
              ;
              const v512 = stdlib.addressEq(v367, v509);
              const v513 = stdlib.addressEq(v383, v509);
              const v514 = v512 ? true : v513;
              const v515 = stdlib.addressEq(v398, v509);
              const v516 = v514 ? true : v515;
              stdlib.assert(v516, {
                at: 'reach standard library:189:11:dot',
                fs: ['at ./vote-tutorial.rsh:70:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './vote-tutorial.rsh:35:33:application',
                fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:70:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v463], secs: v465, time: v464, didSend: v88, from: v462 } = txn6;
              ;
              const v466 = stdlib.addressEq(v398, v462);
              stdlib.assert(v466, {
                at: './vote-tutorial.rsh:69:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v473 = stdlib.add(v464, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
              const txn7 = await (ctc.recv({
                didSend: false,
                evt_cnt: 2,
                funcNum: 12,
                out_tys: [ctc0, ctc0],
                timeoutAt: ['time', v473],
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.sendrecv({
                  args: [v367, v368, v383, v398, v411, v431, v447, v463, v473],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v464,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v489, time: v488, didSend: v126, from: v487 } = txn8;
                    
                    ;
                    const v490 = stdlib.addressEq(v367, v487);
                    const v491 = stdlib.addressEq(v383, v487);
                    const v492 = v490 ? true : v491;
                    const v493 = stdlib.addressEq(v398, v487);
                    const v494 = v492 ? true : v493;
                    ;
                    sim_r.txns.push({
                      amt: v411,
                      kind: 'from',
                      to: v383,
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
                  tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v489, time: v488, didSend: v126, from: v487 } = txn8;
                ;
                const v490 = stdlib.addressEq(v367, v487);
                const v491 = stdlib.addressEq(v383, v487);
                const v492 = v490 ? true : v491;
                const v493 = stdlib.addressEq(v398, v487);
                const v494 = v492 ? true : v493;
                stdlib.assert(v494, {
                  at: 'reach standard library:189:11:dot',
                  fs: ['at ./vote-tutorial.rsh:75:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './vote-tutorial.rsh:35:33:application',
                  fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:75:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Bob'
                  });
                
                return;
                
                }
              else {
                const {data: [v478, v479], secs: v481, time: v480, didSend: v98, from: v477 } = txn7;
                ;
                const v482 = stdlib.addressEq(v367, v477);
                stdlib.assert(v482, {
                  at: './vote-tutorial.rsh:74:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const v483 = stdlib.digest(ctc3, [v478, v479]);
                const v484 = stdlib.digestEq(v431, v483);
                stdlib.assert(v484, {
                  at: 'reach standard library:58:17:application',
                  fs: ['at ./vote-tutorial.rsh:76:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                  msg: null,
                  who: 'Bob'
                  });
                const v485 = stdlib.add(v479, v447);
                const v486 = stdlib.add(v485, v463);
                const cv403 = v486;
                const cv404 = v480;
                const cv411 = v411;
                
                v403 = cv403;
                v404 = cv404;
                v411 = cv411;
                
                continue;}
              
              }
            
            }
          
          }
        
        }
      const v575 = stdlib.mul(stdlib.checkedBigNumberify('./vote-tutorial.rsh:79:16:decimal', stdlib.UInt_max, '3'), v368);
      const v576 = stdlib.eq(v403, stdlib.checkedBigNumberify('./vote-tutorial.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v577 = v576 ? v367 : v383;
      ;
      stdlib.protect(ctc1, await interact.seeResult(v403), {
        at: './vote-tutorial.rsh:82:27:application',
        fs: ['at ./vote-tutorial.rsh:81:11:application call to [unknown function] (defined at: ./vote-tutorial.rsh:81:26:function exp)'],
        msg: 'seeResult',
        who: 'Bob'
        });
      
      return;
      }
    
    }
  
  
  
  };
export async function Cha(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Cha expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Cha expects to receive an interact object as its second argument.`));}
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
  const {data: [v368], secs: v370, time: v369, didSend: v29, from: v367 } = txn1;
  ;
  const v379 = stdlib.add(v369, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v379],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v367, v368, v379],
      evt_cnt: 0,
      funcNum: 2,
      lct: v369,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v609, time: v608, didSend: v329, from: v607 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v368,
          kind: 'from',
          to: v367,
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
    const {data: [], secs: v609, time: v608, didSend: v329, from: v607 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './vote-tutorial.rsh:35:33:application',
      fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:44:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Cha'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v385, time: v384, didSend: v38, from: v383 } = txn2;
    const v387 = stdlib.add(v368, v368);
    ;
    const v394 = stdlib.add(v384, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
    stdlib.protect(ctc1, await interact.acceptStake(v368), {
      at: './vote-tutorial.rsh:47:29:application',
      fs: ['at ./vote-tutorial.rsh:46:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:46:17:function exp)'],
      msg: 'acceptStake',
      who: 'Cha'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v367, v368, v383, v387, v394],
      evt_cnt: 0,
      funcNum: 3,
      lct: v384,
      onlyIf: true,
      out_tys: [],
      pay: [v368, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v400, time: v399, didSend: v47, from: v398 } = txn3;
        
        const v402 = stdlib.add(v387, v368);
        sim_r.txns.push({
          amt: v368,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        const v403 = stdlib.checkedBigNumberify('./vote-tutorial.rsh:makeEnum', stdlib.UInt_max, '1');
        const v404 = v399;
        const v411 = v402;
        
        if (await (async () => {
          const v415 = stdlib.eq(v403, stdlib.checkedBigNumberify('./vote-tutorial.rsh:makeEnum', stdlib.UInt_max, '1'));
          
          return v415;})()) {
          const v422 = stdlib.add(v404, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
          sim_r.isHalt = false;
          }
        else {
          const v575 = stdlib.mul(stdlib.checkedBigNumberify('./vote-tutorial.rsh:79:16:decimal', stdlib.UInt_max, '3'), v368);
          const v576 = stdlib.eq(v403, stdlib.checkedBigNumberify('./vote-tutorial.rsh:makeEnum', stdlib.UInt_max, '2'));
          const v577 = v576 ? v367 : v383;
          sim_r.txns.push({
            amt: v575,
            kind: 'from',
            to: v577,
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
      timeoutAt: ['time', v394],
      tys: [ctc4, ctc0, ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v367, v368, v383, v387, v394],
        evt_cnt: 0,
        funcNum: 4,
        lct: v384,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v592, time: v591, didSend: v295, from: v590 } = txn4;
          
          ;
          sim_r.txns.push({
            amt: v387,
            kind: 'from',
            to: v367,
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
      const {data: [], secs: v592, time: v591, didSend: v295, from: v590 } = txn4;
      ;
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './vote-tutorial.rsh:35:33:application',
        fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:49:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Cha'
        });
      
      return;
      
      }
    else {
      const {data: [], secs: v400, time: v399, didSend: v47, from: v398 } = txn3;
      const v402 = stdlib.add(v387, v368);
      ;
      let v403 = stdlib.checkedBigNumberify('./vote-tutorial.rsh:makeEnum', stdlib.UInt_max, '1');
      let v404 = v399;
      let v411 = v402;
      
      while (await (async () => {
        const v415 = stdlib.eq(v403, stdlib.checkedBigNumberify('./vote-tutorial.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v415;})()) {
        const v422 = stdlib.add(v404, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v422],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v367, v368, v383, v398, v411, v422],
            evt_cnt: 0,
            funcNum: 7,
            lct: v404,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v555, time: v554, didSend: v243, from: v553 } = txn5;
              
              ;
              const v556 = stdlib.addressEq(v367, v553);
              const v557 = stdlib.addressEq(v383, v553);
              const v558 = v556 ? true : v557;
              const v559 = stdlib.addressEq(v398, v553);
              const v560 = v558 ? true : v559;
              ;
              sim_r.txns.push({
                amt: v411,
                kind: 'from',
                to: v383,
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
            tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v555, time: v554, didSend: v243, from: v553 } = txn5;
          ;
          const v556 = stdlib.addressEq(v367, v553);
          const v557 = stdlib.addressEq(v383, v553);
          const v558 = v556 ? true : v557;
          const v559 = stdlib.addressEq(v398, v553);
          const v560 = v558 ? true : v559;
          stdlib.assert(v560, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./vote-tutorial.rsh:59:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Cha'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './vote-tutorial.rsh:35:33:application',
            fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:59:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Cha'
            });
          
          return;
          
          }
        else {
          const {data: [v431], secs: v433, time: v432, didSend: v68, from: v430 } = txn4;
          ;
          const v434 = stdlib.addressEq(v367, v430);
          stdlib.assert(v434, {
            at: './vote-tutorial.rsh:58:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Cha'
            });
          const v441 = stdlib.add(v432, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc0],
            timeoutAt: ['time', v441],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v367, v368, v383, v398, v411, v431, v441],
              evt_cnt: 0,
              funcNum: 9,
              lct: v432,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v533, time: v532, didSend: v204, from: v531 } = txn6;
                
                ;
                const v534 = stdlib.addressEq(v367, v531);
                const v535 = stdlib.addressEq(v383, v531);
                const v536 = v534 ? true : v535;
                const v537 = stdlib.addressEq(v398, v531);
                const v538 = v536 ? true : v537;
                ;
                sim_r.txns.push({
                  amt: v411,
                  kind: 'from',
                  to: v367,
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
              tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v533, time: v532, didSend: v204, from: v531 } = txn6;
            ;
            const v534 = stdlib.addressEq(v367, v531);
            const v535 = stdlib.addressEq(v383, v531);
            const v536 = v534 ? true : v535;
            const v537 = stdlib.addressEq(v398, v531);
            const v538 = v536 ? true : v537;
            stdlib.assert(v538, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./vote-tutorial.rsh:65:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Cha'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './vote-tutorial.rsh:35:33:application',
              fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:65:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Cha'
              });
            
            return;
            
            }
          else {
            const {data: [v447], secs: v449, time: v448, didSend: v78, from: v446 } = txn5;
            ;
            const v450 = stdlib.addressEq(v383, v446);
            stdlib.assert(v450, {
              at: './vote-tutorial.rsh:64:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Cha'
              });
            const v457 = stdlib.add(v448, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
            const v461 = stdlib.protect(ctc0, await interact.getVote(), {
              at: './vote-tutorial.rsh:68:52:application',
              fs: ['at ./vote-tutorial.rsh:67:15:application call to [unknown function] (defined at: ./vote-tutorial.rsh:67:19:function exp)'],
              msg: 'getVote',
              who: 'Cha'
              });
            
            const txn6 = await (ctc.sendrecv({
              args: [v367, v368, v383, v398, v411, v431, v447, v457, v461],
              evt_cnt: 1,
              funcNum: 10,
              lct: v448,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./vote-tutorial.rsh:69:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v463], secs: v465, time: v464, didSend: v88, from: v462 } = txn6;
                
                ;
                const v466 = stdlib.addressEq(v398, v462);
                ;
                const v473 = stdlib.add(v464, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v457],
              tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v367, v368, v383, v398, v411, v431, v447, v457],
                evt_cnt: 0,
                funcNum: 11,
                lct: v448,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v511, time: v510, didSend: v165, from: v509 } = txn7;
                  
                  ;
                  const v512 = stdlib.addressEq(v367, v509);
                  const v513 = stdlib.addressEq(v383, v509);
                  const v514 = v512 ? true : v513;
                  const v515 = stdlib.addressEq(v398, v509);
                  const v516 = v514 ? true : v515;
                  ;
                  sim_r.txns.push({
                    amt: v411,
                    kind: 'from',
                    to: v367,
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
                tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc2, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v511, time: v510, didSend: v165, from: v509 } = txn7;
              ;
              const v512 = stdlib.addressEq(v367, v509);
              const v513 = stdlib.addressEq(v383, v509);
              const v514 = v512 ? true : v513;
              const v515 = stdlib.addressEq(v398, v509);
              const v516 = v514 ? true : v515;
              stdlib.assert(v516, {
                at: 'reach standard library:189:11:dot',
                fs: ['at ./vote-tutorial.rsh:70:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'sender correct',
                who: 'Cha'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './vote-tutorial.rsh:35:33:application',
                fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:70:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'informTimeout',
                who: 'Cha'
                });
              
              return;
              
              }
            else {
              const {data: [v463], secs: v465, time: v464, didSend: v88, from: v462 } = txn6;
              ;
              const v466 = stdlib.addressEq(v398, v462);
              stdlib.assert(v466, {
                at: './vote-tutorial.rsh:69:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Cha'
                });
              const v473 = stdlib.add(v464, stdlib.checkedBigNumberify('./vote-tutorial.rsh:26:18:decimal', stdlib.UInt_max, '3000'));
              const txn7 = await (ctc.recv({
                didSend: false,
                evt_cnt: 2,
                funcNum: 12,
                out_tys: [ctc0, ctc0],
                timeoutAt: ['time', v473],
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.sendrecv({
                  args: [v367, v368, v383, v398, v411, v431, v447, v463, v473],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v464,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v489, time: v488, didSend: v126, from: v487 } = txn8;
                    
                    ;
                    const v490 = stdlib.addressEq(v367, v487);
                    const v491 = stdlib.addressEq(v383, v487);
                    const v492 = v490 ? true : v491;
                    const v493 = stdlib.addressEq(v398, v487);
                    const v494 = v492 ? true : v493;
                    ;
                    sim_r.txns.push({
                      amt: v411,
                      kind: 'from',
                      to: v383,
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
                  tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v489, time: v488, didSend: v126, from: v487 } = txn8;
                ;
                const v490 = stdlib.addressEq(v367, v487);
                const v491 = stdlib.addressEq(v383, v487);
                const v492 = v490 ? true : v491;
                const v493 = stdlib.addressEq(v398, v487);
                const v494 = v492 ? true : v493;
                stdlib.assert(v494, {
                  at: 'reach standard library:189:11:dot',
                  fs: ['at ./vote-tutorial.rsh:75:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Cha'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './vote-tutorial.rsh:35:33:application',
                  fs: ['at ./vote-tutorial.rsh:34:13:application call to [unknown function] (defined at: ./vote-tutorial.rsh:34:28:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./vote-tutorial.rsh:33:32:function exp)', 'at ./vote-tutorial.rsh:75:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Cha'
                  });
                
                return;
                
                }
              else {
                const {data: [v478, v479], secs: v481, time: v480, didSend: v98, from: v477 } = txn7;
                ;
                const v482 = stdlib.addressEq(v367, v477);
                stdlib.assert(v482, {
                  at: './vote-tutorial.rsh:74:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Cha'
                  });
                const v483 = stdlib.digest(ctc3, [v478, v479]);
                const v484 = stdlib.digestEq(v431, v483);
                stdlib.assert(v484, {
                  at: 'reach standard library:58:17:application',
                  fs: ['at ./vote-tutorial.rsh:76:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                  msg: null,
                  who: 'Cha'
                  });
                const v485 = stdlib.add(v479, v447);
                const v486 = stdlib.add(v485, v463);
                const cv403 = v486;
                const cv404 = v480;
                const cv411 = v411;
                
                v403 = cv403;
                v404 = cv404;
                v411 = cv411;
                
                continue;}
              
              }
            
            }
          
          }
        
        }
      const v575 = stdlib.mul(stdlib.checkedBigNumberify('./vote-tutorial.rsh:79:16:decimal', stdlib.UInt_max, '3'), v368);
      const v576 = stdlib.eq(v403, stdlib.checkedBigNumberify('./vote-tutorial.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v577 = v576 ? v367 : v383;
      ;
      stdlib.protect(ctc1, await interact.seeResult(v403), {
        at: './vote-tutorial.rsh:82:27:application',
        fs: ['at ./vote-tutorial.rsh:81:11:application call to [unknown function] (defined at: ./vote-tutorial.rsh:81:26:function exp)'],
        msg: 'seeResult',
        who: 'Cha'
        });
      
      return;
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAUAAFoILgXDQMHkAELCQiYAaABcARQSAIoJgMBAAEBACI1ADEYQQZZKmRJIls1ASELWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBwxAA05JgQoMQAHvSYEMDEAA5kkhBQxAAF8hBRJEIQU0ARJENARJIhJMNAISEUQoZClkUEk1A1coIDX/gAQin5cDsDIGNAMhDVsPRDQDVwAgMQASNP8xABIRNANXSCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IFZkghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf9JNQVJIls1/iELWzX9gATDqpDBNP4WUDT9FlCwMgY0AyENWwxENP8xABJENANXcCA0/hY0/RZQARJENP80AyVbNANXKCA0A1dIIDT9NAMhCFsINAMhDFsIMgY0AyRbQgSFSSEJDEAAXEghCTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOPZNjWwMgY0AyEMWw9ENP8xABI0A1coIDEAEhE0A1dIIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgSDSCEJNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8lWzX+VyggNf1XSCA1/CRbNftXcCA1+iEIWzX5STUFFzX4gASni8ILNPgWULAyBjQDIQxbDEQ0/DEAEkQyBiEECDX3NP80/hZQNP1QNPxQNPsWUDT6UDT5FlA0+BZQNPcWUChLAVcAf2cpSwFXfylnSCEFNQEyBjUCQgQASSELDEAA+EkhCgxAAFxIIQo0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gASiBWaOsDIGNAMhCFsPRDT/MQASNANXKCAxABIRNANXSCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IDekghCjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKVwAgNf8lWzX+VyggNf1XSCA1/CRbNftXcCA1+kk1BRc1+YAEL9rpHTT5FlCwMgY0AyEIWwxENP0xABJEMgYhBAg1+DT/NP4WUDT9UDT8UDT7FlA0+lA0+RZQNPgWUChLAVcAf2cpSwFXfyFnSCEJNQEyBjUCQgMBSCEHNAESRDQESSISTDQCEhFEKGRJNQNXKCA1/4AE4huzqbAyBjQDIQ5bD0Q0A1cAIDEAEjT/MQASETQDV0ggMQASEUSxIrIBNAMkW7III7IQNP+yB7NCAoxJIQYMQAEjSSEPDEAA0EmBBgxAAIdIIQc0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/JVs1/lcoIDX9V0ggNfwkWzX7STUFNfqABGnuOz40+lCwMgY0AyEOWwxENP8xABJEMgYhBAg1+TT/NP4WUDT9UDT8UDT7FlA0+lA0+RZQKEsBVwB/ZylLAVd/GWdIIQo1ATIGNQJCAgwhDxJEIQY0ARJENARJIhJMNAISEUQoZDUDgASRJzTzsDIGNAMhEFsPRLEisgE0AyERW7III7IQNANXACCyB7NCAa5IIQY0ARJENARJIhJMNAISEUQoZEk1AyVbNf+ABKdlxLSwMgY0AyEQWwxENP+IAdc0A1cAIDT/NANXKCAxACMyBjQDIRFbNP8IQgEBSSMMQACqSSESDEAAPUgjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIRNbD0SxIrIBNAMlW7III7IQNANXACCyB7NCARhIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/oAEmouRdLAyBjQDIRNbDEQ0/kkINf00/ogBNjIGIQQINfw0/zT+FlAxAFA0/RZQNPwWUChLAVcAWGdIIQY1ATIGNQJCAM5IIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwgaCNBogA4jT/iADdMgYhBAg1/jEANP8WUDT+FlAoSwFXADBnSCM1ATIGNQJCAH01/zX+Nf01/DX7Nfo1+TT9IxJBAC40/iEECDX4NPk0+hZQNPtQNPxQNP8WUDT4FlAoSwFXAHhnSCEHNQEyBjUCQgA6sSKyASEGNPoLsggjshA0+zT5NP0hEhJNsgezQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
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
                "name": "v368",
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
                "name": "v368",
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
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v463",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
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
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v479",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
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
        "internalType": "struct T5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v431",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
        "internalType": "struct T5",
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
                "name": "v447",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
        "internalType": "struct T5",
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
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v463",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
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
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v479",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
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
        "internalType": "struct T5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v431",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
        "internalType": "struct T5",
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
                "name": "v447",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
        "internalType": "struct T5",
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
  Bytecode: `0x6080604052604051620024f1380380620024f18339810160408190526200002691620001f3565b60008080554360035560408051602080820183529281528151338152845181850152928401515183830152905190917f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d919081900360600190a160208201515162000095903414600762000123565b620000a3610bb84362000295565b815260408051606080820183526000602080840182815284860183815233808752898401515183528851825260019485905543909455865192830193909352519481019490945251908301529060800160405160208183030381529060405260029080519060200190620001199291906200014d565b50505050620002f9565b81620001495760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015b90620002bc565b90600052602060002090601f0160209004810192826200017f5760008555620001ca565b82601f106200019a57805160ff1916838001178555620001ca565b82800160010185558215620001ca579182015b82811115620001ca578251825591602001919060010190620001ad565b50620001d8929150620001dc565b5090565b5b80821115620001d85760008155600101620001dd565b60008183036040808212156200020857600080fd5b80518082016001600160401b0380821183831017156200023857634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200025257600080fd5b8351945060208501915084821081831117156200027f57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b60008219821115620002b757634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002d157607f821691505b60208210811415620002f357634e487b7160e01b600052602260045260246000fd5b50919050565b6121e880620003096000396000f3fe6080604052600436106100e05760003560e01c80638323075711610084578063ab53f2c611610056578063ab53f2c6146101cd578063b608682e146101f0578063bf2c5b2414610203578063de7369981461021657005b8063832307571461017f5780638b9fadc814610194578063980b6eac146101a7578063a7661d54146101ba57005b80635471c5a8116100bd5780635471c5a81461013357806373b4522c1461014657806379b8ead7146101595780637eea518c1461016c57005b80631e93b0f1146100e957806329bdceb91461010d5780632c10a1591461012057005b366100e757005b005b3480156100f557600080fd5b506003545b6040519081526020015b60405180910390f35b6100e761011b366004611c6a565b610229565b6100e761012e366004611c6a565b6104cb565b6100e7610141366004611c6a565b6106f7565b6100e7610154366004611c6a565b6108ca565b6100e7610167366004611c8d565b610a6a565b6100e761017a366004611c6a565b610c96565b34801561018b57600080fd5b506001546100fa565b6100e76101a2366004611c6a565b610df9565b6100e76101b5366004611c6a565b610fac565b6100e76101c8366004611c6a565b6111f1565b3480156101d957600080fd5b506101e2611354565b604051610104929190611c9f565b6100e76101fe366004611c6a565b6113f1565b6100e7610211366004611c6a565b611687565b6100e7610224366004611c6a565b6117fd565b610239600960005414602461196f565b6102538135158061024c57506001548235145b602561196f565b60008080556002805461026590611cfc565b80601f016020809104026020016040519081016040528092919081815260200182805461029190611cfc565b80156102de5780601f106102b3576101008083540402835291602001916102de565b820191906000526020600020905b8154815290600101906020018083116102c157829003601f168201915b50505050508060200190518101906102f69190611d85565b905061030e6040518060200160405280600081525090565b61031f8260c001514310602661196f565b7f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de89683384604051610350929190611e2a565b60405180910390a16103643415602261196f565b604082015161037f906001600160a01b03163314602361196f565b61038b610bb843611e67565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b03908116825260208085015181840152604080860151831681850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e0840152600b6000554360015590516104a09183910160006101008201905060018060a01b0380845116835260208401516020840152806040850151166040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b604051602081830303815290604052600290805190602001906104c4929190611b23565b5050505050565b6104db600160005414600961196f565b6104f5813515806104ee57506001548235145b600a61196f565b60008080556002805461050790611cfc565b80601f016020809104026020016040519081016040528092919081815260200182805461053390611cfc565b80156105805780601f1061055557610100808354040283529160200191610580565b820191906000526020600020905b81548152906001019060200180831161056357829003601f168201915b50505050508060200190518101906105989190611e7f565b90506105b7604051806040016040528060008152602001600081525090565b6105c882604001514310600b61196f565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516105f9929190611eee565b60405180910390a160208201516106109080611e67565b81526020820151610624903414600861196f565b610630610bb843611e67565b81602001818152505061067d6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b82516001600160a01b0390811680835260208086015181850190815233604080870191825287516060808901918252898601516080808b01918252600360005543600155845197880198909852945192860192909252915190951694830194909452925191810191909152905160a082015260c0016104a0565b610707600d60005414603e61196f565b6107218135158061071a57506001548235145b603f61196f565b60008080556002805461073390611cfc565b80601f016020809104026020016040519081016040528092919081815260200182805461075f90611cfc565b80156107ac5780601f10610781576101008083540402835291602001916107ac565b820191906000526020600020905b81548152906001019060200180831161078f57829003601f168201915b50505050508060200190518101906107c49190611f2b565b90506107d9816101000151431015604061196f565b7f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f7900764298338360405161080a929190611eee565b60405180910390a161081e3415603c61196f565b805161086e906001600160a01b031633146108485760408201516001600160a01b0316331461084b565b60015b6108645760608201516001600160a01b03163314610867565b60015b603d61196f565b80604001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156108af573d6000803e3d6000fd5b50600080805560018190556108c690600290611ba7565b5050565b6108da600360005414601161196f565b6108f4813515806108ed57506001548235145b601261196f565b60008080556002805461090690611cfc565b80601f016020809104026020016040519081016040528092919081815260200182805461093290611cfc565b801561097f5780601f106109545761010080835404028352916020019161097f565b820191906000526020600020905b81548152906001019060200180831161096257829003601f168201915b50505050508060200190518101906109979190611fbb565b90506109aa81608001514310601361196f565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633836040516109db929190611eee565b60405180910390a16109f481602001513414601061196f565b6109fc611be4565b815181516001600160a01b039182169052602080840180518451830152604080860151855194169301929092528251336060918201528184018051600190525143920191909152905190830151610a539190611e67565b602082015160400152610a6581611994565b505050565b610a7a600d60005414603961196f565b610a9481351580610a8d57506001548235145b603a61196f565b600080805560028054610aa690611cfc565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad290611cfc565b8015610b1f5780601f10610af457610100808354040283529160200191610b1f565b820191906000526020600020905b815481529060010190602001808311610b0257829003601f168201915b5050505050806020019051810190610b379190611f2b565b9050610b4b8161010001514310603b61196f565b604080513381528335602080830191909152840135818301529083013560608201527f67f1c804af90d1a1d51d795a9796fb7e0cd7fdc00118103dfd79581713b75e4d9060800160405180910390a1610ba63415603661196f565b8051610bbe906001600160a01b03163314603761196f565b60408051610c0a91610be491602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260a0015114603861196f565b610c12611be4565b815181516001600160a01b0391821690526020808401518351909101526040808401518351908316908201526060808501518451931692019190915260e083015160c08401519091610c679190860135611e67565b610c719190611e67565b60208083018051929092528151439101526080830151905160400152610a6581611994565b610ca6600160005414600d61196f565b610cc081351580610cb957506001548235145b600e61196f565b600080805560028054610cd290611cfc565b80601f0160208091040260200160405190810160405280929190818152602001828054610cfe90611cfc565b8015610d4b5780601f10610d2057610100808354040283529160200191610d4b565b820191906000526020600020905b815481529060010190602001808311610d2e57829003601f168201915b5050505050806020019051810190610d639190611e7f565b9050610d778160400151431015600f61196f565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610da8929190611eee565b60405180910390a1610dbc3415600c61196f565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108af573d6000803e3d6000fd5b610e09600b60005414603361196f565b610e2381351580610e1c57506001548235145b603461196f565b600080805560028054610e3590611cfc565b80601f0160208091040260200160405190810160405280929190818152602001828054610e6190611cfc565b8015610eae5780601f10610e8357610100808354040283529160200191610eae565b820191906000526020600020905b815481529060010190602001808311610e9157829003601f168201915b5050505050806020019051810190610ec69190612045565b9050610eda8160e00151431015603561196f565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a5503383604051610f0b929190611eee565b60405180910390a1610f1f3415603161196f565b8051610f6f906001600160a01b03163314610f495760408201516001600160a01b03163314610f4c565b60015b610f655760608201516001600160a01b03163314610f68565b60015b603261196f565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108af573d6000803e3d6000fd5b610fbc600760005414601a61196f565b610fd681351580610fcf57506001548235145b601b61196f565b600080805560028054610fe890611cfc565b80601f016020809104026020016040519081016040528092919081815260200182805461101490611cfc565b80156110615780601f1061103657610100808354040283529160200191611061565b820191906000526020600020905b81548152906001019060200180831161104457829003601f168201915b505050505080602001905181019061107991906120f8565b90506110916040518060200160405280600081525090565b6110a28260a001514310601c61196f565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c33846040516110d3929190611e2a565b60405180910390a16110e73415601861196f565b81516110ff906001600160a01b03163314601961196f565b61110b610bb843611e67565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260096000554360015589519b8c019c909c529851978a019790975294518a1693880193909352905190971696850196909652945190830152925191810191909152905160e0820152610100016104a0565b611201600360005414601561196f565b61121b8135158061121457506001548235145b601661196f565b60008080556002805461122d90611cfc565b80601f016020809104026020016040519081016040528092919081815260200182805461125990611cfc565b80156112a65780601f1061127b576101008083540402835291602001916112a6565b820191906000526020600020905b81548152906001019060200180831161128957829003601f168201915b50505050508060200190518101906112be9190611fbb565b90506112d28160800151431015601761196f565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051611303929190611eee565b60405180910390a16113173415601461196f565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108af573d6000803e3d6000fd5b60006060600054600280805461136990611cfc565b80601f016020809104026020016040519081016040528092919081815260200182805461139590611cfc565b80156113e25780601f106113b7576101008083540402835291602001916113e2565b820191906000526020600020905b8154815290600101906020018083116113c557829003601f168201915b50505050509050915091509091565b611401600b60005414602e61196f565b61141b8135158061141457506001548235145b602f61196f565b60008080556002805461142d90611cfc565b80601f016020809104026020016040519081016040528092919081815260200182805461145990611cfc565b80156114a65780601f1061147b576101008083540402835291602001916114a6565b820191906000526020600020905b81548152906001019060200180831161148957829003601f168201915b50505050508060200190518101906114be9190612045565b90506114d66040518060200160405280600081525090565b6114e78260e001514310603061196f565b7fe4891dc1b339486b9840f8d0c004ee6b9adfc0e7f704831a66f664617244ab1f3384604051611518929190611e2a565b60405180910390a161152c3415602c61196f565b6060820151611547906001600160a01b03163314602d61196f565b611553610bb843611e67565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b03908116825260208085015181840152604080860151831681850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600d6000554360015590516104a09183910181516001600160a01b0390811682526020808401519083015260408084015182169083015260608084015191821690830152610120820190506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525092915050565b611697600760005414601f61196f565b6116b1813515806116aa57506001548235145b602061196f565b6000808055600280546116c390611cfc565b80601f01602080910402602001604051908101604052809291908181526020018280546116ef90611cfc565b801561173c5780601f106117115761010080835404028352916020019161173c565b820191906000526020600020905b81548152906001019060200180831161171f57829003601f168201915b505050505080602001905181019061175491906120f8565b90506117688160a00151431015602161196f565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051611799929190611eee565b60405180910390a16117ad3415601d61196f565b805161086e906001600160a01b031633146117d75760408201516001600160a01b031633146117da565b60015b6117f35760608201516001600160a01b031633146117f6565b60015b601e61196f565b61180d600960005414602961196f565b6118278135158061182057506001548235145b602a61196f565b60008080556002805461183990611cfc565b80601f016020809104026020016040519081016040528092919081815260200182805461186590611cfc565b80156118b25780601f10611887576101008083540402835291602001916118b2565b820191906000526020600020905b81548152906001019060200180831161189557829003601f168201915b50505050508060200190518101906118ca9190611d85565b90506118de8160c00151431015602b61196f565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd338360405161190f929190611eee565b60405180910390a16119233415602761196f565b8051610f6f906001600160a01b0316331461194d5760408201516001600160a01b03163314611950565b60015b6119695760608201516001600160a01b0316331461196c565b60015b60285b816108c65760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201515160011415611abe57610bb88260200151602001516119c79190611e67565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b0390811680835284516020908101518185019081528651604090810151851681870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526007600055436001558751998a019a909a5296519588019590955292518816918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190611ab8929190611b23565b50505050565b602082015151600214611ad657815160400151611ada565b8151515b6001600160a01b03166108fc8360000151602001516003611afb9190612193565b6040518115909202916000818181858888f193505050501580156108af573d6000803e3d6000fd5b828054611b2f90611cfc565b90600052602060002090601f016020900481019282611b515760008555611b97565b82601f10611b6a57805160ff1916838001178555611b97565b82800160010185558215611b97579182015b82811115611b97578251825591602001919060010190611b7c565b50611ba3929150611c3d565b5090565b508054611bb390611cfc565b6000825580601f10611bc3575050565b601f016020900490600052602060002090810190611be19190611c3d565b50565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001611c3860405180606001604052806000815260200160008152602001600081525090565b905290565b5b80821115611ba35760008155600101611c3e565b600060408284031215611c6457600080fd5b50919050565b600060408284031215611c7c57600080fd5b611c868383611c52565b9392505050565b600060608284031215611c6457600080fd5b82815260006020604081840152835180604085015260005b81811015611cd357858101830151858201606001528201611cb7565b81811115611ce5576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680611d1057607f821691505b60208210811415611c6457634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff81118282101715611d6357634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114611d8057600080fd5b919050565b600060e08284031215611d9757600080fd5b60405160e0810181811067ffffffffffffffff82111715611dc857634e487b7160e01b600052604160045260246000fd5b604052611dd483611d69565b815260208301516020820152611dec60408401611d69565b6040820152611dfd60608401611d69565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b038316815260608101611c86602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b60008219821115611e7a57611e7a611e51565b500190565b600060608284031215611e9157600080fd5b6040516060810181811067ffffffffffffffff82111715611ec257634e487b7160e01b600052604160045260246000fd5b604052611ece83611d69565b815260208301516020820152604083015160408201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214611f1c57600080fd5b80604085015250509392505050565b60006101208284031215611f3e57600080fd5b611f46611d31565b611f4f83611d69565b815260208301516020820152611f6760408401611d69565b6040820152611f7860608401611d69565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060a08284031215611fcd57600080fd5b60405160a0810181811067ffffffffffffffff82111715611ffe57634e487b7160e01b600052604160045260246000fd5b60405261200a83611d69565b81526020830151602082015261202260408401611d69565b604082015260608301516060820152608083015160808201528091505092915050565b600061010080838503121561205957600080fd5b6040519081019067ffffffffffffffff8211818310171561208a57634e487b7160e01b600052604160045260246000fd5b8160405261209784611d69565b8152602084015160208201526120af60408501611d69565b60408201526120c060608501611d69565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060c0828403121561210a57600080fd5b60405160c0810181811067ffffffffffffffff8211171561213b57634e487b7160e01b600052604160045260246000fd5b60405261214783611d69565b81526020830151602082015261215f60408401611d69565b604082015261217060608401611d69565b60608201526080830151608082015260a083015160a08201528091505092915050565b60008160001904831182151516156121ad576121ad611e51565b50029056fea2646970667358221220f8327943e065aa372880271ac9d95c81af7edc684d99c216d1fa1a91d237622a64736f6c634300080c0033`,
  BytecodeLen: 9457,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './vote-tutorial.rsh:40:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./vote-tutorial.rsh:44:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './vote-tutorial.rsh:45:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./vote-tutorial.rsh:49:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './vote-tutorial.rsh:80:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './vote-tutorial.rsh:53:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./vote-tutorial.rsh:59:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './vote-tutorial.rsh:60:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./vote-tutorial.rsh:65:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './vote-tutorial.rsh:66:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./vote-tutorial.rsh:70:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './vote-tutorial.rsh:71:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./vote-tutorial.rsh:75:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
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
  "Bob": Bob,
  "Cha": Cha
  };
export const _APIs = {
  };
