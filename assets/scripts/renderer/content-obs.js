const a0_0x31b7=['mt5','getItem','config.server_url','mail.google.com','96520rIGIHp','backgroundColor','%c\x20DTools:\x20%c\x20','href','runtime','find','loadData','search','auto','borderRadius','Google\x20Account:\x20','/trading.html','transition','1195293YNqeBc','1nOKmHC','200px','(www\x5c.)?','boxShadow','280451bqMOEi','fixed','Resetting\x20Endpoint','1.1.8','length','bot','delete','client.accounts','green','/assets/images/icon.png\x22\x20/>\x0a\x20\x20\x20\x20','width','parse','style','\x20SERVER\x20URL:','debug_service_worker','is_dashboard','position','opacity','build','bottom','34249CIpZen','removeItem','hash','DTools\x20is\x20now\x20version\x20','868546HXhsnw','storage','reload','.binaryws.com','aria-label','dtools-toast-container','substring','config.default_app_id','replace','toString','slice','8BXcWRE','#000','\x0a\x20\x20\x20\x20\x20\x20<img\x20style=\x22height:20px;margin-right:\x2010px;\x22\x20src=\x22','center','querySelectorAll','localStorage','split','hostname','test','all\x200.5s\x20ease-out','qa_server','fontSize','div','resetEndPoint','location','set','color:white','4px','9999999999','57125ZEtgIB','config.app_id','height','src','11LQRewu','pathname','setItem','active_loginid','show','fetchEndPoint','-500px','getAttribute','right','keys','SMARTTRADER_PRODUCTION','blue','minWidth','alignItems','createElement','#bbb\x200px\x200px\x2013px','app_id','i18n_language','933782WohJzO','flex','color','0.9','map','Changing\x20Endpoint\x20into\x20APP_ID:','[aria-label^=\x22Google\x20Account\x22]\x20img','dtools_version','fontWeight','local','get','prepend','10px'];const a0_0x18e778=a0_0x4f3d;(function(_0x492ce0,_0x2730c1){const _0x193715=a0_0x4f3d;while(!![]){try{const _0x30fa5f=parseInt(_0x193715(0x1b9))+-parseInt(_0x193715(0x172))*parseInt(_0x193715(0x185))+-parseInt(_0x193715(0x19b))+parseInt(_0x193715(0x167))+parseInt(_0x193715(0x1ac))+-parseInt(_0x193715(0x189))*parseInt(_0x193715(0x163))+-parseInt(_0x193715(0x1be))*-parseInt(_0x193715(0x1ba));if(_0x30fa5f===_0x2730c1)break;else _0x492ce0['push'](_0x492ce0['shift']());}catch(_0x37862c){_0x492ce0['push'](_0x492ce0['shift']());}}}(a0_0x31b7,0xa4609));function a0_0x4f3d(_0x15cec8,_0x2bb65b){return a0_0x4f3d=function(_0x31b7d6,_0x4f3ded){_0x31b7d6=_0x31b7d6-0x156;let _0x1d37ac=a0_0x31b7[_0x31b7d6];return _0x1d37ac;},a0_0x4f3d(_0x15cec8,_0x2bb65b);}const version=a0_0x18e778(0x1c1),feature_version='b',hostname=window['location'][a0_0x18e778(0x179)],log=_0x266674=>{const _0x40261b=a0_0x18e778;console['log'](_0x40261b(0x1ae)+_0x266674+'\x20','color:\x20#ff444f;font-weight:bold',_0x40261b(0x182));};messagehandler=(_0x4914a2,_0x2a05db,_0x4d8e53)=>{const _0x165d01=a0_0x18e778,{action:_0x2c2008,data:_0x1d89d8}=_0x4914a2;switch(_0x2c2008){case'changeEndPoint':const {app_id:_0x5099ba,server_url:_0x239be1,is_dashboard:_0x221fa8,debug_service_worker:_0x391cee}=_0x1d89d8;log(_0x165d01(0x1a0)+_0x5099ba+_0x165d01(0x15c)+_0x239be1),localStorage['setItem']('config.app_id',_0x5099ba),localStorage['setItem'](_0x165d01(0x1aa),_0x239be1),localStorage[_0x165d01(0x18b)](_0x165d01(0x15e),_0x221fa8),localStorage[_0x165d01(0x18b)]('debug_service_worker',_0x391cee),location[_0x165d01(0x169)]();break;case _0x165d01(0x17f):log(_0x165d01(0x1c0)),localStorage[_0x165d01(0x164)](_0x165d01(0x186)),localStorage['removeItem']('config.server_url'),location[_0x165d01(0x169)]();break;case _0x165d01(0x18e):fetchEndPoint();break;}},chrome[a0_0x18e778(0x1b0)]['onMessage']['addListener'](function(_0x26184e,_0x55d172,_0x30d09e){messagehandler(_0x26184e,_0x55d172,_0x30d09e);});const domain_app_ids={'deriv.app':0x4221,'app.deriv.com':0x4221,'myapps.deriv.com':0x583,'app.deriv.me':0x583,'binary.com':0x1},isBot=()=>/^\/bot/['test'](window['location'][a0_0x18e778(0x18a)])||/^\/(br_)/[a0_0x18e778(0x17a)](window[a0_0x18e778(0x180)][a0_0x18e778(0x18a)])&&window[a0_0x18e778(0x180)][a0_0x18e778(0x18a)]['split']('/')[0x2]===a0_0x18e778(0x1c3),isMT5=()=>/^\/mt5/[a0_0x18e778(0x17a)](window[a0_0x18e778(0x180)]['pathname'])||/^\/(br_)/[a0_0x18e778(0x17a)](window[a0_0x18e778(0x180)][a0_0x18e778(0x18a)])&&window[a0_0x18e778(0x180)]['pathname'][a0_0x18e778(0x178)]('/')[0x2]===a0_0x18e778(0x1a8),getCurrentProductionDomain=()=>!/^staging\./[a0_0x18e778(0x17a)](window[a0_0x18e778(0x180)][a0_0x18e778(0x179)])&&Object['keys'](domain_app_ids)[a0_0x18e778(0x1b1)](_0x47081b=>window[a0_0x18e778(0x180)][a0_0x18e778(0x179)]===_0x47081b),isProduction=()=>{const _0x2c60e1=a0_0x18e778,_0x3f201b=Object[_0x2c60e1(0x192)](domain_app_ids)[_0x2c60e1(0x19f)](_0x27e4bc=>_0x2c60e1(0x1bc)+_0x27e4bc[_0x2c60e1(0x16f)]('.','\x5c.'));return new RegExp('^('+_0x3f201b['join']('|')+')$','i')[_0x2c60e1(0x17a)](window[_0x2c60e1(0x180)]['hostname']);},isTestLink=()=>{const _0x886eae=a0_0x18e778;return/^((.*)\.binary\.sx)$/i[_0x886eae(0x17a)](window[_0x886eae(0x180)][_0x886eae(0x179)]);},getAppId=()=>{const _0xaec22f=a0_0x18e778;let _0x281d0c=null;const _0x4b5f76='',_0x44c0ac=window[_0xaec22f(0x177)][_0xaec22f(0x1a9)](_0xaec22f(0x186));if(_0x44c0ac)_0x281d0c=_0x44c0ac;else{if(_0x4b5f76[_0xaec22f(0x1c2)])window['localStorage'][_0xaec22f(0x18b)](_0xaec22f(0x16e),_0x4b5f76),_0x281d0c=_0x4b5f76;else{if(isStaging())window[_0xaec22f(0x177)][_0xaec22f(0x164)](_0xaec22f(0x16e)),_0x281d0c=isBot()?0x4aa8:0x3faf;else{if(/localhost/i[_0xaec22f(0x17a)](window[_0xaec22f(0x180)][_0xaec22f(0x179)]))_0x281d0c=0x4294;else{window['localStorage']['removeItem']('config.default_app_id');const _0x50e91b=getCurrentProductionDomain();_0x281d0c=(isBot()?0x4aa7:domain_app_ids[_0x50e91b])||0x4221;}}}}return _0x281d0c;},getSocketURL=()=>{const _0x1ac66e=a0_0x18e778,_0x206979=window['localStorage'][_0x1ac66e(0x1a9)]('config.server_url');if(_0x206979)return _0x206979;let _0x17b9cc;const _0x15227c=window[_0x1ac66e(0x180)][_0x1ac66e(0x1b3)];if(_0x15227c){const _0x3d3825=new URLSearchParams(document[_0x1ac66e(0x180)][_0x1ac66e(0x1b3)][_0x1ac66e(0x16d)](0x1));_0x17b9cc=_0x3d3825[_0x1ac66e(0x1a5)]('acct1');}const _0x4f298c=window[_0x1ac66e(0x177)][_0x1ac66e(0x1a9)]('active_loginid')||_0x17b9cc,_0x199b22=_0x4f298c&&!/^VRT/['test'](_0x4f298c),_0x25ae6a=_0x199b22?_0x1ac66e(0x157):_0x1ac66e(0x194),_0x3caf15=_0x25ae6a+_0x1ac66e(0x16a);return _0x3caf15;},checkAndSetEndpointFromUrl=()=>{const _0x88f05=a0_0x18e778;if(isStaging()||isTestLink()){const _0x3b2739=new URLSearchParams(location['search'][_0x88f05(0x171)](0x1));if(_0x3b2739['has'](_0x88f05(0x17c))&&_0x3b2739['has']('app_id')){const _0x2bee51=_0x3b2739[_0x88f05(0x1a5)](_0x88f05(0x17c)),_0x22f6a3=_0x3b2739[_0x88f05(0x1a5)]('app_id');_0x3b2739[_0x88f05(0x1c4)]('qa_server'),_0x3b2739[_0x88f05(0x1c4)](_0x88f05(0x199));/^(www\.binaryqa[0-9]{1,2}\.com|(.*)\.binaryws\.com)$/['test'](_0x2bee51)&&/^[0-9]+$/[_0x88f05(0x17a)](_0x22f6a3)&&(localStorage[_0x88f05(0x18b)](_0x88f05(0x186),_0x22f6a3),localStorage['setItem'](_0x88f05(0x1aa),_0x2bee51));const _0x42612d=_0x3b2739[_0x88f05(0x170)](),_0x15c1e6=location[_0x88f05(0x165)];location[_0x88f05(0x1af)]=location['protocol']+'//'+location[_0x88f05(0x179)]+location[_0x88f05(0x18a)]+(_0x42612d?'?'+_0x42612d:'')+(_0x15c1e6||'');}}},getUrlSmartTrader=()=>{const _0x24083b=a0_0x18e778,{is_staging_deriv_app:_0x3f2676}=getPlatformFromUrl(),_0x14acf6=window[_0x24083b(0x177)]['getItem'](_0x24083b(0x19a))||'en';let _0x2c8a69='';return _0x3f2676?_0x2c8a69=deriv_urls['SMARTTRADER_STAGING']:_0x2c8a69=deriv_urls[_0x24083b(0x193)],_0x2c8a69+'/'+_0x14acf6['toLowerCase']()+_0x24083b(0x1b7);},getPlatformFromUrl=(_0x1c35f0=window[a0_0x18e778(0x180)]['hostname'])=>{const _0x2b0cc1=a0_0x18e778,_0x5d379c={'is_staging_deriv_app':/^staging-app\.deriv\.com$/i[_0x2b0cc1(0x17a)](_0x1c35f0),'is_deriv_app':/^app\.deriv\.com$/i['test'](_0x1c35f0),'is_test_link':/^(.*)\.binary\.sx$/i[_0x2b0cc1(0x17a)](_0x1c35f0)};return{..._0x5d379c,'is_staging':_0x5d379c['is_staging_deriv_app']};},isStaging=(_0x5c6505=window[a0_0x18e778(0x180)][a0_0x18e778(0x179)])=>{const {is_staging_deriv_app:_0x130e98}=getPlatformFromUrl(_0x5c6505);return _0x130e98;},fetchEndPoint=()=>{const _0x333bd6=a0_0x18e778,_0x1bf8df=localStorage[_0x333bd6(0x18c)],_0x32a9b4=JSON[_0x333bd6(0x15a)](localStorage[_0x333bd6(0x156)]);chrome[_0x333bd6(0x168)][_0x333bd6(0x1a4)]['set']({'app_id':getAppId()}),chrome['storage'][_0x333bd6(0x1a4)][_0x333bd6(0x181)]({'server_url':getSocketURL()}),chrome['storage'][_0x333bd6(0x1a4)][_0x333bd6(0x181)]({'account_id':_0x1bf8df}),chrome[_0x333bd6(0x168)][_0x333bd6(0x1a4)]['set']({'client_details':_0x32a9b4[_0x1bf8df]}),chrome[_0x333bd6(0x168)][_0x333bd6(0x1a4)][_0x333bd6(0x181)]({'is_dashboard':localStorage[_0x333bd6(0x15e)]}),chrome['storage'][_0x333bd6(0x1a4)]['set']({'debug_service_worker':localStorage[_0x333bd6(0x15d)]});},profileBuilder=()=>{const _0x136afd=a0_0x18e778;if(hostname==_0x136afd(0x1ab)){const _0x9b77f3=document[_0x136afd(0x176)]('[aria-label^=\x22Google\x20Account\x22]')[0x0],_0x1ed6b0=document[_0x136afd(0x176)](_0x136afd(0x1a1))[0x0];if(_0x9b77f3&&_0x1ed6b0){const _0x1b6430=_0x9b77f3[_0x136afd(0x190)](_0x136afd(0x16b)),_0x54c128=_0x1b6430[_0x136afd(0x16f)](_0x136afd(0x1b6),'')[_0x136afd(0x178)]('\x0a'),_0x389f4a=_0x54c128[0x0],_0x254a19=_0x54c128[0x1],_0x3ee573=_0x1ed6b0[_0x136afd(0x188)];_0x3ee573&&_0x389f4a&&_0x254a19&&chrome[_0x136afd(0x168)][_0x136afd(0x1a4)][_0x136afd(0x181)]({'dtools_profile_name':_0x389f4a,'dtools_profile_email':_0x254a19,'dtools_profile_photo':_0x3ee573});}}},toast={'build':()=>{const _0x48c28b=a0_0x18e778,_0x68ef15=document[_0x48c28b(0x197)](_0x48c28b(0x17e));return _0x68ef15['id']=_0x48c28b(0x16c),_0x68ef15[_0x48c28b(0x15b)][_0x48c28b(0x15f)]=_0x48c28b(0x1bf),_0x68ef15['style']['zIndex']=_0x48c28b(0x184),_0x68ef15[_0x48c28b(0x15b)][_0x48c28b(0x162)]='10px',_0x68ef15[_0x48c28b(0x15b)][_0x48c28b(0x191)]=_0x48c28b(0x18f),_0x68ef15[_0x48c28b(0x15b)][_0x48c28b(0x159)]=_0x48c28b(0x1b4),_0x68ef15[_0x48c28b(0x15b)][_0x48c28b(0x195)]=_0x48c28b(0x1bb),_0x68ef15[_0x48c28b(0x15b)][_0x48c28b(0x187)]=_0x48c28b(0x1b4),_0x68ef15[_0x48c28b(0x15b)]['backgroundColor']='#ff444f',_0x68ef15[_0x48c28b(0x15b)][_0x48c28b(0x160)]=_0x48c28b(0x19e),_0x68ef15[_0x48c28b(0x15b)][_0x48c28b(0x1b5)]=_0x48c28b(0x183),_0x68ef15['style'][_0x48c28b(0x1bd)]=_0x48c28b(0x198),_0x68ef15[_0x48c28b(0x15b)][_0x48c28b(0x1ad)]=_0x48c28b(0x173),_0x68ef15[_0x48c28b(0x15b)]['display']=_0x48c28b(0x19c),_0x68ef15['style']['padding']=_0x48c28b(0x1a7),_0x68ef15[_0x48c28b(0x15b)][_0x48c28b(0x19d)]='white',_0x68ef15[_0x48c28b(0x15b)][_0x48c28b(0x17d)]='15px',_0x68ef15[_0x48c28b(0x15b)][_0x48c28b(0x1a3)]='bold',_0x68ef15['style'][_0x48c28b(0x196)]=_0x48c28b(0x175),_0x68ef15[_0x48c28b(0x15b)][_0x48c28b(0x1b8)]=_0x48c28b(0x17b),document['body'][_0x48c28b(0x1a6)](_0x68ef15),_0x68ef15;},'show':(_0xb79631,_0x415b1e)=>{const _0x26ec86=a0_0x18e778,_0x12b70b=_0x415b1e?_0x415b1e:0x2710,_0x118f3f=toast[_0x26ec86(0x161)]();setTimeout(()=>{const _0x5ff894=_0x26ec86;_0x118f3f[_0x5ff894(0x15b)]['right']=_0x5ff894(0x1a7);},0x12c),setTimeout(()=>{const _0xec7460=_0x26ec86;_0x118f3f['style'][_0xec7460(0x160)]='0';},_0x12b70b);const _0x5f54f1=_0x26ec86(0x174)+url+_0x26ec86(0x158);_0x118f3f['innerHTML']=_0x5f54f1+''+_0xb79631;}},versionChecker={'dtools_version':null,'dtools_last_updated':null,'loadData':async()=>{['dtools_version','dtools_last_updated']['map'](_0x1ba89e=>{const _0x1fc7b0=a0_0x4f3d;chrome[_0x1fc7b0(0x168)][_0x1fc7b0(0x1a4)][_0x1fc7b0(0x1a5)](_0x1ba89e,function(_0x485463){const _0x219813=_0x485463[_0x1ba89e];versionChecker[_0x1ba89e]=_0x219813;});});},'run':()=>{const _0x5548b5=a0_0x18e778;versionChecker[_0x5548b5(0x1b2)](),setTimeout(()=>{const _0x28592d=_0x5548b5,_0x26fa37=versionChecker[_0x28592d(0x1a2)];_0x26fa37!=version&&(toast[_0x28592d(0x18d)](_0x28592d(0x166)+version),chrome[_0x28592d(0x168)][_0x28592d(0x1a4)][_0x28592d(0x181)]({'dtools_version':version}));},0x5dc);}};profileBuilder(),versionChecker['run']();