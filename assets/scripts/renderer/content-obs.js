const a0_0x59ea=['debug_service_worker','changeEndPoint','map','reload','-500px','all\x200.5s\x20ease-out','minWidth','join','querySelectorAll','loadData','fontWeight','protocol','185343NQQvMx','\x0a\x20\x20\x20\x20\x20\x20<img\x20style=\x22height:20px;margin-right:\x2010px;\x22\x20src=\x22','display','1.1.3','build','#000','31uGDJLt','borderRadius','dtools_version','div','run','storage','has','alignItems','style','delete','is_staging_deriv_app','271811rBiEQp','height','green','boxShadow','SMARTTRADER_PRODUCTION','bold','(www\x5c.)?','Resetting\x20Endpoint','find','pathname','qa_server','local','fixed','config.app_id','set','hostname','location','toString','mt5','flex','resetEndPoint','padding','get','0.9','2617ZkYUVE','color:white','4px','aria-label','2043SaNEGV','split','auto','position','slice','config.server_url','15px','19703lFJpHB','color:\x20#ff444f;font-weight:bold','replace','mail.google.com','app_id','search','href','getItem','is_dashboard','1XBUsKh','Changing\x20Endpoint\x20into\x20APP_ID:','10px','382018PPeWcM','setItem','acct1','body','createElement','prepend','toLowerCase','123dPcoHF','blue','config.default_app_id','test','343313RDtyra','runtime','length','bot','.binaryws.com','keys','#bbb\x200px\x200px\x2013px','removeItem','white','/trading.html','localStorage','getAttribute','758yIyouI','show','active_loginid','right','opacity'];const a0_0x31aa73=a0_0x58e6;function a0_0x58e6(_0x5d2642,_0x77d9a){return a0_0x58e6=function(_0x59eafb,_0x58e68f){_0x59eafb=_0x59eafb-0x137;let _0x22fdd2=a0_0x59ea[_0x59eafb];return _0x22fdd2;},a0_0x58e6(_0x5d2642,_0x77d9a);}(function(_0x5d68a8,_0x5999db){const _0x6560af=a0_0x58e6;while(!![]){try{const _0x35b62a=-parseInt(_0x6560af(0x182))+parseInt(_0x6560af(0x142))+-parseInt(_0x6560af(0x189))*parseInt(_0x6560af(0x16b))+parseInt(_0x6560af(0x176))*-parseInt(_0x6560af(0x148))+-parseInt(_0x6560af(0x18d))+-parseInt(_0x6560af(0x153))*-parseInt(_0x6560af(0x17f))+-parseInt(_0x6560af(0x16f))*-parseInt(_0x6560af(0x199));if(_0x35b62a===_0x5999db)break;else _0x5d68a8['push'](_0x5d68a8['shift']());}catch(_0x1152db){_0x5d68a8['push'](_0x5d68a8['shift']());}}}(a0_0x59ea,0x54e55));const version=a0_0x31aa73(0x145),hostname=window[a0_0x31aa73(0x163)][a0_0x31aa73(0x162)],log=_0xcf3f4d=>{const _0x3854a8=a0_0x31aa73;console['log']('%c\x20DTools:\x20%c\x20'+_0xcf3f4d+'\x20',_0x3854a8(0x177),_0x3854a8(0x16c));};messagehandler=(_0x3b1616,_0x2432cc,_0x5d4229)=>{const _0x37de77=a0_0x31aa73,{action:_0x278372,data:_0x108d15}=_0x3b1616;switch(_0x278372){case _0x37de77(0x137):const {app_id:_0x281a32,server_url:_0x2e80b0,is_dashboard:_0x1fc274,debug_service_worker:_0x5580c8}=_0x108d15;log(_0x37de77(0x180)+_0x281a32+'\x20SERVER\x20URL:'+_0x2e80b0),localStorage['setItem'](_0x37de77(0x160),_0x281a32),localStorage[_0x37de77(0x183)](_0x37de77(0x174),_0x2e80b0),localStorage[_0x37de77(0x183)](_0x37de77(0x17e),_0x1fc274),localStorage[_0x37de77(0x183)](_0x37de77(0x19e),_0x5580c8),location[_0x37de77(0x139)]();break;case _0x37de77(0x167):log(_0x37de77(0x15a)),localStorage['removeItem'](_0x37de77(0x160)),localStorage['removeItem']('config.server_url'),location['reload']();break;case'fetchEndPoint':fetchEndPoint();break;}},chrome[a0_0x31aa73(0x18e)]['onMessage']['addListener'](function(_0xba4540,_0x5016c0,_0x52d44b){messagehandler(_0xba4540,_0x5016c0,_0x52d44b);});const domain_app_ids={'deriv.app':0x4221,'app.deriv.com':0x4221,'myapps.deriv.com':0x583,'app.deriv.me':0x583,'binary.com':0x1},isBot=()=>/^\/bot/[a0_0x31aa73(0x18c)](window[a0_0x31aa73(0x163)][a0_0x31aa73(0x15c)])||/^\/(br_)/[a0_0x31aa73(0x18c)](window[a0_0x31aa73(0x163)][a0_0x31aa73(0x15c)])&&window[a0_0x31aa73(0x163)][a0_0x31aa73(0x15c)][a0_0x31aa73(0x170)]('/')[0x2]===a0_0x31aa73(0x190),isMT5=()=>/^\/mt5/[a0_0x31aa73(0x18c)](window['location'][a0_0x31aa73(0x15c)])||/^\/(br_)/['test'](window[a0_0x31aa73(0x163)]['pathname'])&&window[a0_0x31aa73(0x163)]['pathname']['split']('/')[0x2]===a0_0x31aa73(0x165),getCurrentProductionDomain=()=>!/^staging\./[a0_0x31aa73(0x18c)](window[a0_0x31aa73(0x163)]['hostname'])&&Object[a0_0x31aa73(0x192)](domain_app_ids)[a0_0x31aa73(0x15b)](_0x50c64a=>window[a0_0x31aa73(0x163)][a0_0x31aa73(0x162)]===_0x50c64a),isProduction=()=>{const _0x5e15c3=a0_0x31aa73,_0x38b451=Object[_0x5e15c3(0x192)](domain_app_ids)[_0x5e15c3(0x138)](_0xac4923=>_0x5e15c3(0x159)+_0xac4923[_0x5e15c3(0x178)]('.','\x5c.'));return new RegExp('^('+_0x38b451[_0x5e15c3(0x13d)]('|')+')$','i')[_0x5e15c3(0x18c)](window['location'][_0x5e15c3(0x162)]);},isTestLink=()=>{const _0x235353=a0_0x31aa73;return/^((.*)\.binary\.sx)$/i[_0x235353(0x18c)](window[_0x235353(0x163)][_0x235353(0x162)]);},getAppId=()=>{const _0x4fb9b8=a0_0x31aa73;let _0x51d2fc=null;const _0x291d9e='',_0x5f0320=window[_0x4fb9b8(0x197)][_0x4fb9b8(0x17d)](_0x4fb9b8(0x160));if(_0x5f0320)_0x51d2fc=_0x5f0320;else{if(_0x291d9e[_0x4fb9b8(0x18f)])window['localStorage'][_0x4fb9b8(0x183)](_0x4fb9b8(0x18b),_0x291d9e),_0x51d2fc=_0x291d9e;else{if(isStaging())window['localStorage'][_0x4fb9b8(0x194)](_0x4fb9b8(0x18b)),_0x51d2fc=isBot()?0x4aa8:0x3faf;else{if(/localhost/i[_0x4fb9b8(0x18c)](window[_0x4fb9b8(0x163)][_0x4fb9b8(0x162)]))_0x51d2fc=0x4294;else{window['localStorage'][_0x4fb9b8(0x194)](_0x4fb9b8(0x18b));const _0x284613=getCurrentProductionDomain();_0x51d2fc=(isBot()?0x4aa7:domain_app_ids[_0x284613])||0x4221;}}}}return _0x51d2fc;},getSocketURL=()=>{const _0x452ec4=a0_0x31aa73,_0x42b37b=window['localStorage'][_0x452ec4(0x17d)]('config.server_url');if(_0x42b37b)return _0x42b37b;let _0xabc6ff;const _0x2346a9=window[_0x452ec4(0x163)][_0x452ec4(0x17b)];if(_0x2346a9){const _0x44522a=new URLSearchParams(document[_0x452ec4(0x163)][_0x452ec4(0x17b)]['substring'](0x1));_0xabc6ff=_0x44522a[_0x452ec4(0x169)](_0x452ec4(0x184));}const _0x11ea4d=window[_0x452ec4(0x197)][_0x452ec4(0x17d)](_0x452ec4(0x19b))||_0xabc6ff,_0xc8be1e=_0x11ea4d&&!/^VRT/[_0x452ec4(0x18c)](_0x11ea4d),_0xdd4c91=_0xc8be1e?_0x452ec4(0x155):_0x452ec4(0x18a),_0x320a00=_0xdd4c91+_0x452ec4(0x191);return _0x320a00;},checkAndSetEndpointFromUrl=()=>{const _0x365c56=a0_0x31aa73;if(isStaging()||isTestLink()){const _0x4c347f=new URLSearchParams(location[_0x365c56(0x17b)][_0x365c56(0x173)](0x1));if(_0x4c347f[_0x365c56(0x14e)]('qa_server')&&_0x4c347f['has'](_0x365c56(0x17a))){const _0x4c75b2=_0x4c347f['get'](_0x365c56(0x15d)),_0x341b03=_0x4c347f[_0x365c56(0x169)](_0x365c56(0x17a));_0x4c347f[_0x365c56(0x151)](_0x365c56(0x15d)),_0x4c347f[_0x365c56(0x151)](_0x365c56(0x17a));/^(www\.binaryqa[0-9]{1,2}\.com|(.*)\.binaryws\.com)$/[_0x365c56(0x18c)](_0x4c75b2)&&/^[0-9]+$/['test'](_0x341b03)&&(localStorage[_0x365c56(0x183)](_0x365c56(0x160),_0x341b03),localStorage['setItem'](_0x365c56(0x174),_0x4c75b2));const _0x4afe62=_0x4c347f[_0x365c56(0x164)](),_0x2acd08=location['hash'];location[_0x365c56(0x17c)]=location[_0x365c56(0x141)]+'//'+location[_0x365c56(0x162)]+location[_0x365c56(0x15c)]+(_0x4afe62?'?'+_0x4afe62:'')+(_0x2acd08||'');}}},getUrlSmartTrader=()=>{const _0x234f53=a0_0x31aa73,{is_staging_deriv_app:_0xf2c847}=getPlatformFromUrl(),_0x4515be=window[_0x234f53(0x197)][_0x234f53(0x17d)]('i18n_language')||'en';let _0x107df7='';return _0xf2c847?_0x107df7=deriv_urls['SMARTTRADER_STAGING']:_0x107df7=deriv_urls[_0x234f53(0x157)],_0x107df7+'/'+_0x4515be[_0x234f53(0x188)]()+_0x234f53(0x196);},getPlatformFromUrl=(_0x7b829b=window[a0_0x31aa73(0x163)][a0_0x31aa73(0x162)])=>{const _0x29179b=a0_0x31aa73,_0x515097={'is_staging_deriv_app':/^staging-app\.deriv\.com$/i['test'](_0x7b829b),'is_deriv_app':/^app\.deriv\.com$/i[_0x29179b(0x18c)](_0x7b829b),'is_test_link':/^(.*)\.binary\.sx$/i['test'](_0x7b829b)};return{..._0x515097,'is_staging':_0x515097[_0x29179b(0x152)]};},isStaging=(_0x6db1f=window[a0_0x31aa73(0x163)][a0_0x31aa73(0x162)])=>{const {is_staging_deriv_app:_0x370b76}=getPlatformFromUrl(_0x6db1f);return _0x370b76;},fetchEndPoint=()=>{const _0xcb1e2f=a0_0x31aa73;chrome['storage']['local'][_0xcb1e2f(0x161)]({'app_id':getAppId()}),chrome[_0xcb1e2f(0x14d)][_0xcb1e2f(0x15e)]['set']({'server_url':getSocketURL()}),chrome[_0xcb1e2f(0x14d)][_0xcb1e2f(0x15e)][_0xcb1e2f(0x161)]({'account_id':localStorage['active_loginid']}),chrome[_0xcb1e2f(0x14d)][_0xcb1e2f(0x15e)][_0xcb1e2f(0x161)]({'is_dashboard':localStorage[_0xcb1e2f(0x17e)]}),chrome[_0xcb1e2f(0x14d)][_0xcb1e2f(0x15e)]['set']({'debug_service_worker':localStorage[_0xcb1e2f(0x19e)]});},profileBuilder=()=>{const _0xadaf6a=a0_0x31aa73;if(hostname==_0xadaf6a(0x179)){const _0x21d7c1=document['querySelectorAll']('[aria-label^=\x22Google\x20Account\x22]')[0x0],_0x399787=document[_0xadaf6a(0x13e)]('[aria-label^=\x22Google\x20Account\x22]\x20img')[0x0];if(_0x21d7c1&&_0x399787){const _0x40538d=_0x21d7c1[_0xadaf6a(0x198)](_0xadaf6a(0x16e)),_0x3dfbcf=_0x40538d['replace']('Google\x20Account:\x20','')[_0xadaf6a(0x170)]('\x0a'),_0x14ccdf=_0x3dfbcf[0x0],_0xf8f66f=_0x3dfbcf[0x1],_0x433656=_0x399787['src'];_0x433656&&_0x14ccdf&&_0xf8f66f&&chrome['storage'][_0xadaf6a(0x15e)][_0xadaf6a(0x161)]({'dtools_profile_name':_0x14ccdf,'dtools_profile_email':_0xf8f66f,'dtools_profile_photo':_0x433656});}}},toast={'build':()=>{const _0x50d6f1=a0_0x31aa73,_0x26de98=document[_0x50d6f1(0x186)](_0x50d6f1(0x14b));return _0x26de98['id']='dtools-toast-container',_0x26de98[_0x50d6f1(0x150)][_0x50d6f1(0x172)]=_0x50d6f1(0x15f),_0x26de98['style']['zIndex']='9999999999',_0x26de98['style']['bottom']='10px',_0x26de98[_0x50d6f1(0x150)][_0x50d6f1(0x19c)]=_0x50d6f1(0x13a),_0x26de98[_0x50d6f1(0x150)]['width']=_0x50d6f1(0x171),_0x26de98['style'][_0x50d6f1(0x13c)]='200px',_0x26de98[_0x50d6f1(0x150)][_0x50d6f1(0x154)]=_0x50d6f1(0x171),_0x26de98['style']['backgroundColor']='#ff444f',_0x26de98[_0x50d6f1(0x150)][_0x50d6f1(0x19d)]=_0x50d6f1(0x16a),_0x26de98[_0x50d6f1(0x150)][_0x50d6f1(0x149)]=_0x50d6f1(0x16d),_0x26de98['style'][_0x50d6f1(0x156)]=_0x50d6f1(0x193),_0x26de98[_0x50d6f1(0x150)]['backgroundColor']=_0x50d6f1(0x147),_0x26de98[_0x50d6f1(0x150)][_0x50d6f1(0x144)]=_0x50d6f1(0x166),_0x26de98['style'][_0x50d6f1(0x168)]='10px',_0x26de98[_0x50d6f1(0x150)]['color']=_0x50d6f1(0x195),_0x26de98['style']['fontSize']=_0x50d6f1(0x175),_0x26de98[_0x50d6f1(0x150)][_0x50d6f1(0x140)]=_0x50d6f1(0x158),_0x26de98[_0x50d6f1(0x150)][_0x50d6f1(0x14f)]='center',_0x26de98[_0x50d6f1(0x150)]['transition']=_0x50d6f1(0x13b),document[_0x50d6f1(0x185)][_0x50d6f1(0x187)](_0x26de98),_0x26de98;},'show':(_0x3d9038,_0x3ff991)=>{const _0xd90b1d=a0_0x31aa73,_0x5cda05=_0x3ff991?_0x3ff991:0x2710,_0x26ab5f=toast[_0xd90b1d(0x146)]();setTimeout(()=>{const _0x245bdb=_0xd90b1d;_0x26ab5f[_0x245bdb(0x150)]['right']=_0x245bdb(0x181);},0x12c),setTimeout(()=>{const _0xbc4e12=_0xd90b1d;_0x26ab5f[_0xbc4e12(0x150)][_0xbc4e12(0x19d)]='0';},_0x5cda05);const _0x93a52e=_0xd90b1d(0x143)+url+'/assets/images/icon.png\x22\x20/>\x0a\x20\x20\x20\x20';_0x26ab5f['innerHTML']=_0x93a52e+''+_0x3d9038;}},versionChecker={'dtools_version':null,'dtools_last_updated':null,'loadData':async()=>{const _0x409f48=a0_0x31aa73;[_0x409f48(0x14a),'dtools_last_updated'][_0x409f48(0x138)](_0x4a8f0d=>{const _0x52bbf8=_0x409f48;chrome['storage'][_0x52bbf8(0x15e)][_0x52bbf8(0x169)](_0x4a8f0d,function(_0x2d7572){const _0x2fa96d=_0x2d7572[_0x4a8f0d];versionChecker[_0x4a8f0d]=_0x2fa96d;});});},'run':()=>{const _0x489486=a0_0x31aa73;versionChecker[_0x489486(0x13f)](),setTimeout(()=>{const _0x4b751f=_0x489486,_0x4f6f4a=versionChecker[_0x4b751f(0x14a)];_0x4f6f4a!=version&&(toast[_0x4b751f(0x19a)]('DTools\x20is\x20now\x20version\x20'+version),chrome['storage'][_0x4b751f(0x15e)][_0x4b751f(0x161)]({'dtools_version':version}));},0x5dc);}};profileBuilder(),versionChecker[a0_0x31aa73(0x14c)]();