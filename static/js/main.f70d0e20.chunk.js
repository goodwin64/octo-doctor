(this["webpackJsonpocto-doctor"]=this["webpackJsonpocto-doctor"]||[]).push([[0],{115:function(e,a,t){e.exports=t(128)},120:function(e,a,t){},121:function(e,a,t){},128:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(9),l=t.n(s),i=(t(120),t(36)),o=(t(121),t(33)),h=t(15),d=t(78),M=t(62),c=t(167),m=t(183),u=t(174),g=t(80),T=t.n(g),R=t(81),x=t.n(R),E=t(82),S=t.n(E),p=t(182),H=t(103),y=t(8),f=t(164),w=t(187),b=t(18),P=Object(f.a)((function(e){return Object(w.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(y.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(y.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(b.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(y.a)({cursor:"pointer",padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:0},e.breakpoints.up("sm"),{width:0,"&:focus":{width:200}})})})),D=["list","tiles"];function v(e){var a=e.sortBy,t=e.sortByItems,r=e.handleSortByChange,s=e.view,l=(e.viewItems,e.handleViewChange),i=e.search,o=e.handleSearchChange,h=P();return n.a.createElement(c.a,{container:!0},n.a.createElement(c.a,{item:!0,xs:12,sm:4},n.a.createElement(m.a,{value:a,onChange:function(e){return r(e.target.value)},disabled:!0},t.map((function(e){return n.a.createElement(u.a,{key:e,value:e},e)})))),n.a.createElement(c.a,{item:!0,xs:12,sm:4},n.a.createElement(c.a,{container:!0,justify:"center"},n.a.createElement(T.a,{color:s===D[0]?"primary":"inherit",onClick:function(){return l(D[0])},style:{cursor:"pointer"}}),n.a.createElement(p.a,{mr:1}),n.a.createElement(x.a,{color:s===D[1]?"primary":"inherit",onClick:function(){return l(D[1])},style:{cursor:"pointer"}}))),n.a.createElement(c.a,{item:!0,xs:12,sm:4},n.a.createElement(c.a,{container:!0,justify:"flex-end"},n.a.createElement("div",{className:h.search},n.a.createElement("div",{className:h.searchIcon},n.a.createElement(S.a,null)),n.a.createElement(H.a,{placeholder:"Search\u2026",classes:{root:h.inputRoot,input:h.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return o(e.target.value)},value:i})))))}var N=t(67),V=t(83),C=t.n(V),I=t(60),j=t.n(I),_=Object(f.a)((function(e){return Object(w.a)({table:{borderSpacing:0,borderCollapse:"collapse",width:"100%","& thead":{backgroundColor:e.palette.grey[400],"& th":{padding:e.spacing(2,5,2,0),position:"relative",textTransform:"uppercase",textAlign:"left","&:last-child":{textAlign:"right",padding:e.spacing(2,5,2,2)},"&::selection":{backgroundColor:"transparent"},"& span":{position:"absolute",right:e.spacing(1),top:"50%",transform:"translateY(-50%)",height:e.spacing(3)}}},"& > tbody":{"& > tr":{borderBottom:"1px solid",borderBottomColor:e.palette.grey[100],backgroundColor:e.palette.background.paper,"&:hover":{backgroundColor:e.palette.primary.light,boxShadow:e.shadows[1],borderBottomColor:"transparent"},"& > td":{padding:e.spacing(1,0),"&:first-child":{paddingLeft:e.spacing(1)},"&:last-child":{paddingRight:e.spacing(1),textAlign:"right"}}}}}})}));function O(e){var a=e.columns,t=e.data,r=Object(N.b)({columns:a,data:t},N.a),s=r.getTableProps,l=r.getTableBodyProps,i=r.headerGroups,o=r.rows,h=r.prepareRow,d=_(),M=o.slice(0,20);return n.a.createElement(n.a.Fragment,null,n.a.createElement("table",Object.assign({},s(),{className:d.table}),n.a.createElement("thead",null,i.map((function(e){return n.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return n.a.createElement("th",e.getHeaderProps(e.getSortByToggleProps()),e.render("Header"),n.a.createElement("span",null,e.isSorted?e.isSortedDesc?n.a.createElement(j.a,null):n.a.createElement(C.a,null):""))})))}))),n.a.createElement("tbody",l(),M.map((function(e,a){return h(e),n.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return n.a.createElement("td",e.getCellProps(),e.render("Cell"))})))})))),n.a.createElement("br",null),n.a.createElement("div",null,"Showing the first 20 results of ",o.length," rows"))}var Z=t(189),k=t(175),L=t(50),F=t.n(L),B=Object(f.a)((function(e){return Object(w.a)({patientActions:{position:"relative","tr & .action-icons":{background:"linear-gradient(90deg, ".concat(e.palette.background.paper,"0 0%, ").concat(e.palette.primary.light," 15%, ").concat(e.palette.primary.light," 100%)"),opacity:0,padding:e.spacing(1),position:"absolute",right:"50%",top:"50%",transform:"translateY(-50%)",width:e.spacing(16)},"tr:hover & .action-icons":{opacity:1},"tr & .action-icons .icon":{cursor:"pointer"},"tr & .action-icons .icon:hover":{cursor:"pointer"}}})})),A=t(84),G=t.n(A),Y=t(85),z=t.n(Y),J=t(86),W=t.n(J),K=t(87),Q=t.n(K);function U(e){var a=e.rows,t=e.onRemovePatient,n=B(),s=r.useMemo((function(){return[{Header:"",Cell:function(e){var a=e.row.original,t=a.firstName,n=a.last_name;return r.createElement(Z.a,null,t[0],n[0])},accessor:"avatar"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"last_name"},{Header:"Age",accessor:"age"},{Header:"Gender",accessor:"gender"},{Header:"Height",accessor:"height"},{Header:"Weight",accessor:"wight"},{Header:"Status",accessor:"status"},{Header:"Last Measurement",accessor:function(e){return+F()(e.lastMeasurement)},Cell:function(e){var a=e.row.original.lastMeasurement;return F()(a).format("MMM DD, YYYY, HH:mm A")}},{Header:"",accessor:"actions",Cell:function(e){var a=e.row.original.Id;return r.createElement("div",{className:n.patientActions},r.createElement(c.a,{container:!0,alignItems:"center",justify:"flex-end",className:"action-icons"},r.createElement(p.a,{pr:1,className:"icon edit"},r.createElement(G.a,{color:"primary"})),r.createElement(p.a,{pr:1,className:"icon delete",onClick:function(){return t(a)}},r.createElement(z.a,{color:"primary"})),r.createElement(p.a,{pr:1,className:"icon refresh"},r.createElement(W.a,{color:"primary"}))),r.createElement("div",{className:"hint"},r.createElement(Q.a,null)))}}]}),[n.patientActions,t]);return r.createElement(k.a,null,r.createElement(O,{columns:s,data:a}))}var q={Name:"firstName","Last Name":"last_name",Age:"age",Gender:"Gender",Height:"height",Weight:"wight",Status:"status","Last Measurement":"lastMeasurement"},X=Object.keys(q),$=X.map((function(e){return q[e]}));function ee(){var e=n.a.useState(d),a=Object(h.a)(e,2),t=a[0],r=a[1],s=n.a.useState("Name"),l=Object(h.a)(s,2),i=l[0],o=l[1],c=n.a.useState(D[0]),m=Object(h.a)(c,2),u=m[0],g=m[1],T=n.a.useState(""),R=Object(h.a)(T,2),x=R[0],E=R[1],S=function(e,a){return a?e.filter((function(e){return Boolean(String(e.Id).toLowerCase().includes(a.toLowerCase())||String(e.firstName).toLowerCase().includes(a.toLowerCase())||String(e.last_name).toLowerCase().includes(a.toLowerCase())||String(e.age).toLowerCase().includes(a.toLowerCase())||String(e.gender).toLowerCase().includes(a.toLowerCase())||String(e.height).toLowerCase().includes(a.toLowerCase())||String(e.wight).toLowerCase().includes(a.toLowerCase())||String(e.status).toLowerCase().includes(a.toLowerCase())||String(e.lastMeasurement).toLowerCase().includes(a.toLowerCase()))})):e}(t,x);return n.a.createElement(n.a.Fragment,null,n.a.createElement(M.a,{variant:"h3"},"Patients (",t.length,")"),n.a.createElement(p.a,{py:4},n.a.createElement(v,{sortBy:i,sortByItems:X,handleSortByChange:function(e,a){o(e)},view:u,handleViewChange:g,search:x,handleSearchChange:E})),n.a.createElement(U,{rows:S,columnNames:X,columnDataKeys:$,onRemovePatient:function(e){r(t.filter((function(a){return a.Id!==e})))}}))}var ae=t(29),te=t(185),re=Object(f.a)((function(e){var a={transition:e.transitions.create("height"),boxShadow:e.shadows[5]};return Object(w.a)({barsContainer:{height:e.spacing(15),width:e.spacing(6),borderTopLeftRadius:e.spacing(6),borderTopRightRadius:e.spacing(6),overflow:"hidden","& .alert-bar":Object(ae.a)({},a,{backgroundColor:e.palette.error.light}),"& .norm-bar":Object(ae.a)({},a,{backgroundColor:e.palette.primary.main})},tooltipContentContainer:{width:e.spacing(20),"& .circle-alert":{color:e.palette.error.main,fontSize:32},"& .circle-norm":{color:e.palette.primary.main,fontSize:32}}})})),ne=t(190);function se(){var e=n.a.useState({alerts:14,norm:221}),a=Object(h.a)(e,2),t=a[0],r=a[1],s=t.alerts+t.norm,l=function(e,a){r((function(t){return Object(ae.a)({},t,Object(y.a)({},e,a))}))},i=re(),o=t.alerts/s*100,d=t.norm/s*100;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement(te.a,{value:t.alerts,onChange:function(e){return l("alerts",e.target.valueAsNumber)},label:"alerts",type:"number"}),n.a.createElement(te.a,{value:t.norm,onChange:function(e){return l("norm",e.target.valueAsNumber)},label:"norm",type:"number"})),n.a.createElement(c.a,{container:!0,justify:"center",alignItems:"center"},n.a.createElement(p.a,{p:10},n.a.createElement(ne.a,{title:n.a.createElement("div",{className:i.tooltipContentContainer},n.a.createElement(M.a,{variant:"body1"},F()().format("MMM DD, YYYY")),n.a.createElement(M.a,{variant:"body1"},"Total ",s),n.a.createElement(c.a,{container:!0,alignItems:"center",justify:"space-between"},n.a.createElement("span",{className:"circle-alert"},"\u25cb"),n.a.createElement(M.a,{variant:"body2"},"Alerts"),n.a.createElement(M.a,{variant:"body1"},t.alerts),n.a.createElement(M.a,{variant:"caption"},o.toFixed(1)+"%")),n.a.createElement(c.a,{container:!0,alignItems:"center",justify:"space-between"},n.a.createElement("span",{className:"circle-norm"},"\u25cb"),n.a.createElement(M.a,{variant:"body2"},"Norm"),n.a.createElement(M.a,{variant:"body1"},t.norm),n.a.createElement(M.a,{variant:"caption"},d.toFixed(1)+"%"))),placement:"top",arrow:!0},n.a.createElement("div",{className:i.barsContainer},n.a.createElement("div",{className:"alert-bar",style:{height:o+"%"}}),n.a.createElement("div",{className:"norm-bar",style:{height:d+"%"}}))))))}function le(){return n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/health-controller"},n.a.createElement(se,null)),n.a.createElement(o.a,{path:["/","/patients"]},n.a.createElement(ee,null)))}var ie=Object(f.a)((function(e){return Object(w.a)({root:{backgroundColor:e.palette.background.default}})}));function oe(e){var a=e.children,t=ie();return n.a.createElement(p.a,{p:4,className:t.root},a)}var he,de=t(186),Me=t(173),ce=t(130),me=t(178),ue=t(179),ge=t(90),Te=t.n(ge),Re=t(91),xe=t.n(Re),Ee=t(92),Se=t.n(Ee),pe=t(93),He=t.n(pe),ye=t(94),fe=t.n(ye),we=t(176),be=t(95),Pe=t.n(be),De=Object(f.a)((function(e){return Object(w.a)({sidebar:{width:e.spacing(10)},drawerHeader:Object(ae.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),menuButton:{margin:e.spacing(0,2)},hide:{display:"none"},drawer:{width:je},drawerPaper:{width:je}})})),ve=t(177),Ne=t(96),Ve=t.n(Ne),Ce=["Overview","Patients","Alerts","Notes","Reports"],Ie=(he={},Object(y.a)(he,Ce[0],Te.a),Object(y.a)(he,Ce[1],xe.a),Object(y.a)(he,Ce[2],Se.a),Object(y.a)(he,Ce[3],He.a),Object(y.a)(he,Ce[4],fe.a),he),je=240;function _e(){var e=n.a.useState(!1),a=Object(h.a)(e,2),t=a[0],r=a[1],s=De();return n.a.createElement(p.a,{component:"aside",className:s.sidebar},n.a.createElement(we.a,{color:"inherit","aria-label":"open drawer",onClick:function(){r(!0)},edge:"start",className:s.menuButton},n.a.createElement(Pe.a,null)),n.a.createElement(de.a,{open:t,onClose:function(){return r(!1)},className:s.drawer,classes:{paper:s.drawerPaper}},n.a.createElement("div",{className:s.drawerHeader},n.a.createElement(we.a,{onClick:function(){r(!1)}},n.a.createElement(Ve.a,null))),n.a.createElement(ve.a,null),n.a.createElement(Me.a,null,Ce.map((function(e){var a=Ie[e];return n.a.createElement(ce.a,{button:!0,key:e,disabled:e!==Ce[1],component:i.b,to:e===Ce[1]?"/patients":void 0},n.a.createElement(me.a,null,n.a.createElement(a,{color:e===Ce[1]?"primary":"disabled"})),n.a.createElement(ue.a,{primary:e}))})))))}var Oe=t(180),Ze=Object(f.a)((function(e){return Object(w.a)({appBar:{padding:e.spacing(2),backgroundColor:e.palette.background.paper},logoContainer:{width:je},pageTitle:{paddingLeft:e.spacing(4)},actionButtons:{width:300}})})),ke=t(97),Le=t.n(ke),Fe=t(98),Be=t.n(Fe),Ae=t(99),Ge=t.n(Ae);function Ye(){var e=Ze();return n.a.createElement(Oe.a,{position:"static",className:e.appBar},n.a.createElement(c.a,{container:!0,alignItems:"center",justify:"space-between"},n.a.createElement(c.a,{container:!0,className:e.logoContainer,alignItems:"center",justify:"flex-start"},n.a.createElement("img",{src:Le.a,alt:"Logo"}),n.a.createElement(p.a,{mr:2}),n.a.createElement(M.a,{variant:"h5"},"Doctor")),n.a.createElement(M.a,{variant:"h5",className:e.pageTitle},"Patients"),n.a.createElement(c.a,{container:!0,alignItems:"center",justify:"space-between",className:e.actionButtons},n.a.createElement(Be.a,null),n.a.createElement(i.b,{to:"/health-controller"},n.a.createElement(Ge.a,null)),n.a.createElement(Z.a,null,"AW"),n.a.createElement(M.a,{variant:"body1"},"Dr. Andrew"),n.a.createElement(j.a,null))))}var ze=t(181),Je=t(61),We=t(100),Ke=Object(We.a)({palette:{primary:Object(ae.a)({},Je.a,{light:"#DDFDF0"}),secondary:{main:"#0C9EED"},background:{default:"#F4F7F9"}},status:{danger:"orange"}});var Qe=function(){return console.log("process.env.PUBLIC_URL","/octo-doctor"),n.a.createElement(ze.a,{theme:Ke},n.a.createElement(i.a,{basename:"".concat("/octo-doctor","/")},n.a.createElement("div",{className:"App test"},n.a.createElement(Ye,null),n.a.createElement(c.a,{container:!0},n.a.createElement(_e,null),n.a.createElement(p.a,{style:{flex:1}},n.a.createElement(oe,null,n.a.createElement(le,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(Qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e){e.exports=JSON.parse('[{"Id":1,"firstName":"Lazaro","last_name":"Bohin","age":85,"gender":"Male","height":177,"wight":132,"status":"normal","lastMeasurement":"2018-02-12T23:22:59Z","HRThresholdMin":37,"HRThresholdMax":88,"HRVThresholdMin":46,"HRVThresholdMax":63,"RESPThresholdMin":28,"RESPThresholdMax":47,"SysMin":30,"SysMax":163,"DiaMin":95,"DiaMax":166},{"Id":2,"firstName":"Cozmo","last_name":"Portinari","age":86,"gender":"Male","height":187,"wight":59,"status":"normal","lastMeasurement":"2018-10-01T11:27:20Z","HRThresholdMin":44,"HRThresholdMax":78,"HRVThresholdMin":31,"HRVThresholdMax":72,"RESPThresholdMin":28,"RESPThresholdMax":38,"SysMin":41,"SysMax":99,"DiaMin":166,"DiaMax":116},{"Id":3,"firstName":"Travus","last_name":"Querrard","age":38,"gender":"Male","height":188,"wight":135,"status":"normal","lastMeasurement":"2018-06-14T05:11:31Z","HRThresholdMin":30,"HRThresholdMax":79,"HRVThresholdMin":33,"HRVThresholdMax":94,"RESPThresholdMin":26,"RESPThresholdMax":41,"SysMin":51,"SysMax":161,"DiaMin":69,"DiaMax":175},{"Id":4,"firstName":"Gualterio","last_name":"Skuse","age":53,"gender":"Male","height":196,"wight":129,"status":"normal","lastMeasurement":"2019-04-23T04:47:31Z","HRThresholdMin":49,"HRThresholdMax":93,"HRVThresholdMin":41,"HRVThresholdMax":56,"RESPThresholdMin":21,"RESPThresholdMax":40,"SysMin":42,"SysMax":128,"DiaMin":108,"DiaMax":82},{"Id":5,"firstName":"Saree","last_name":"Nana","age":59,"gender":"Female","height":171,"wight":94,"status":"normal","lastMeasurement":"2018-10-07T19:01:02Z","HRThresholdMin":42,"HRThresholdMax":73,"HRVThresholdMin":49,"HRVThresholdMax":90,"RESPThresholdMin":29,"RESPThresholdMax":44,"SysMin":31,"SysMax":148,"DiaMin":172,"DiaMax":152},{"Id":6,"firstName":"Hernando","last_name":"Cadwallader","age":84,"gender":"Male","height":171,"wight":92,"status":"normal","lastMeasurement":"2018-12-16T22:04:12Z","HRThresholdMin":43,"HRThresholdMax":64,"HRVThresholdMin":47,"HRVThresholdMax":78,"RESPThresholdMin":22,"RESPThresholdMax":34,"SysMin":51,"SysMax":159,"DiaMin":123,"DiaMax":94},{"Id":7,"firstName":"Jacenta","last_name":"Meachen","age":34,"gender":"Female","height":185,"wight":97,"status":"normal","lastMeasurement":"2019-03-11T13:24:27Z","HRThresholdMin":31,"HRThresholdMax":98,"HRVThresholdMin":40,"HRVThresholdMax":97,"RESPThresholdMin":30,"RESPThresholdMax":43,"SysMin":45,"SysMax":164,"DiaMin":109,"DiaMax":73},{"Id":8,"firstName":"Boris","last_name":"Ratazzi","age":91,"gender":"Male","height":168,"wight":81,"status":"normal","lastMeasurement":"2019-07-25T21:01:54Z","HRThresholdMin":31,"HRThresholdMax":82,"HRVThresholdMin":34,"HRVThresholdMax":66,"RESPThresholdMin":30,"RESPThresholdMax":35,"SysMin":45,"SysMax":130,"DiaMin":79,"DiaMax":90},{"Id":9,"firstName":"Mickie","last_name":"McElwee","age":70,"gender":"Female","height":203,"wight":112,"status":"normal","lastMeasurement":"2019-02-23T22:37:08Z","HRThresholdMin":30,"HRThresholdMax":58,"HRVThresholdMin":33,"HRVThresholdMax":68,"RESPThresholdMin":20,"RESPThresholdMax":34,"SysMin":38,"SysMax":178,"DiaMin":88,"DiaMax":150},{"Id":10,"firstName":"Jacquelynn","last_name":"Paula","age":24,"gender":"Female","height":186,"wight":94,"status":"normal","lastMeasurement":"2018-10-03T17:52:50Z","HRThresholdMin":49,"HRThresholdMax":91,"HRVThresholdMin":47,"HRVThresholdMax":54,"RESPThresholdMin":27,"RESPThresholdMax":36,"SysMin":49,"SysMax":146,"DiaMin":154,"DiaMax":71},{"Id":11,"firstName":"Charlena","last_name":"Killelea","age":43,"gender":"Female","height":195,"wight":136,"status":"normal","lastMeasurement":"2018-05-04T14:28:33Z","HRThresholdMin":48,"HRThresholdMax":100,"HRVThresholdMin":34,"HRVThresholdMax":69,"RESPThresholdMin":20,"RESPThresholdMax":43,"SysMin":58,"SysMax":154,"DiaMin":180,"DiaMax":178},{"Id":12,"firstName":"Alard","last_name":"Hartgill","age":50,"gender":"Male","height":167,"wight":138,"status":"normal","lastMeasurement":"2019-11-02T01:40:37Z","HRThresholdMin":41,"HRThresholdMax":62,"HRVThresholdMin":38,"HRVThresholdMax":93,"RESPThresholdMin":24,"RESPThresholdMax":41,"SysMin":32,"SysMax":67,"DiaMin":147,"DiaMax":61},{"Id":13,"firstName":"Madlen","last_name":"Di Ruggero","age":93,"gender":"Female","height":180,"wight":121,"status":"normal","lastMeasurement":"2019-03-25T17:08:06Z","HRThresholdMin":34,"HRThresholdMax":95,"HRVThresholdMin":31,"HRVThresholdMax":62,"RESPThresholdMin":27,"RESPThresholdMax":44,"SysMin":46,"SysMax":93,"DiaMin":135,"DiaMax":91},{"Id":14,"firstName":"Adrien","last_name":"Boulding","age":59,"gender":"Male","height":185,"wight":73,"status":"normal","lastMeasurement":"2019-03-28T21:07:53Z","HRThresholdMin":38,"HRThresholdMax":97,"HRVThresholdMin":38,"HRVThresholdMax":76,"RESPThresholdMin":25,"RESPThresholdMax":35,"SysMin":55,"SysMax":141,"DiaMin":155,"DiaMax":126},{"Id":15,"firstName":"Cynde","last_name":"Kennelly","age":89,"gender":"Female","height":165,"wight":111,"status":"normal","lastMeasurement":"2019-11-25T00:09:17Z","HRThresholdMin":47,"HRThresholdMax":93,"HRVThresholdMin":36,"HRVThresholdMax":80,"RESPThresholdMin":24,"RESPThresholdMax":39,"SysMin":30,"SysMax":71,"DiaMin":63,"DiaMax":112},{"Id":16,"firstName":"Cookie","last_name":"Stenett","age":95,"gender":"Female","height":178,"wight":83,"status":"normal","lastMeasurement":"2019-04-14T20:16:58Z","HRThresholdMin":42,"HRThresholdMax":55,"HRVThresholdMin":50,"HRVThresholdMax":87,"RESPThresholdMin":27,"RESPThresholdMax":31,"SysMin":37,"SysMax":166,"DiaMin":101,"DiaMax":123},{"Id":17,"firstName":"Quinta","last_name":"Sherwyn","age":82,"gender":"Female","height":206,"wight":73,"status":"normal","lastMeasurement":"2019-11-04T18:17:58Z","HRThresholdMin":42,"HRThresholdMax":83,"HRVThresholdMin":48,"HRVThresholdMax":92,"RESPThresholdMin":27,"RESPThresholdMax":45,"SysMin":40,"SysMax":145,"DiaMin":64,"DiaMax":107},{"Id":18,"firstName":"Gustavus","last_name":"Ponton","age":84,"gender":"Male","height":186,"wight":76,"status":"normal","lastMeasurement":"2019-12-01T00:54:26Z","HRThresholdMin":34,"HRThresholdMax":57,"HRVThresholdMin":48,"HRVThresholdMax":57,"RESPThresholdMin":20,"RESPThresholdMax":39,"SysMin":33,"SysMax":142,"DiaMin":112,"DiaMax":175},{"Id":19,"firstName":"Thadeus","last_name":"Lurner","age":67,"gender":"Male","height":196,"wight":101,"status":"normal","lastMeasurement":"2018-12-06T11:27:26Z","HRThresholdMin":48,"HRThresholdMax":53,"HRVThresholdMin":32,"HRVThresholdMax":100,"RESPThresholdMin":26,"RESPThresholdMax":47,"SysMin":33,"SysMax":151,"DiaMin":170,"DiaMax":63},{"Id":20,"firstName":"Cordie","last_name":"Chapiro","age":41,"gender":"Female","height":148,"wight":97,"status":"normal","lastMeasurement":"2018-12-03T00:02:14Z","HRThresholdMin":40,"HRThresholdMax":54,"HRVThresholdMin":35,"HRVThresholdMax":56,"RESPThresholdMin":21,"RESPThresholdMax":32,"SysMin":35,"SysMax":111,"DiaMin":144,"DiaMax":123},{"Id":21,"firstName":"Pietrek","last_name":"Gillbard","age":18,"gender":"Male","height":183,"wight":82,"status":"normal","lastMeasurement":"2018-03-19T23:36:06Z","HRThresholdMin":43,"HRThresholdMax":83,"HRVThresholdMin":37,"HRVThresholdMax":100,"RESPThresholdMin":24,"RESPThresholdMax":46,"SysMin":60,"SysMax":73,"DiaMin":117,"DiaMax":116},{"Id":22,"firstName":"Trip","last_name":"Delafoy","age":53,"gender":"Male","height":197,"wight":96,"status":"normal","lastMeasurement":"2019-09-18T12:45:43Z","HRThresholdMin":44,"HRThresholdMax":77,"HRVThresholdMin":43,"HRVThresholdMax":71,"RESPThresholdMin":20,"RESPThresholdMax":40,"SysMin":43,"SysMax":177,"DiaMin":102,"DiaMax":180},{"Id":23,"firstName":"Wilhelm","last_name":"Pimley","age":46,"gender":"Male","height":168,"wight":115,"status":"normal","lastMeasurement":"2019-09-18T06:04:51Z","HRThresholdMin":49,"HRThresholdMax":65,"HRVThresholdMin":36,"HRVThresholdMax":87,"RESPThresholdMin":26,"RESPThresholdMax":41,"SysMin":60,"SysMax":111,"DiaMin":86,"DiaMax":69},{"Id":24,"firstName":"Iorgo","last_name":"Mannock","age":76,"gender":"Male","height":187,"wight":122,"status":"normal","lastMeasurement":"2019-09-15T14:59:19Z","HRThresholdMin":45,"HRThresholdMax":96,"HRVThresholdMin":42,"HRVThresholdMax":95,"RESPThresholdMin":27,"RESPThresholdMax":36,"SysMin":44,"SysMax":167,"DiaMin":89,"DiaMax":73},{"Id":25,"firstName":"Ban","last_name":"Gwynne","age":38,"gender":"Male","height":206,"wight":87,"status":"normal","lastMeasurement":"2019-07-18T17:23:40Z","HRThresholdMin":49,"HRThresholdMax":95,"HRVThresholdMin":37,"HRVThresholdMax":52,"RESPThresholdMin":24,"RESPThresholdMax":43,"SysMin":37,"SysMax":83,"DiaMin":98,"DiaMax":171},{"Id":26,"firstName":"Abie","last_name":"De Biaggi","age":97,"gender":"Male","height":198,"wight":126,"status":"normal","lastMeasurement":"2019-06-26T00:18:38Z","HRThresholdMin":43,"HRThresholdMax":92,"HRVThresholdMin":38,"HRVThresholdMax":63,"RESPThresholdMin":27,"RESPThresholdMax":31,"SysMin":39,"SysMax":70,"DiaMin":119,"DiaMax":163},{"Id":27,"firstName":"Cristionna","last_name":"Mordue","age":47,"gender":"Female","height":190,"wight":100,"status":"normal","lastMeasurement":"2018-10-26T12:00:26Z","HRThresholdMin":37,"HRThresholdMax":62,"HRVThresholdMin":50,"HRVThresholdMax":60,"RESPThresholdMin":24,"RESPThresholdMax":40,"SysMin":37,"SysMax":76,"DiaMin":64,"DiaMax":83},{"Id":28,"firstName":"Darcie","last_name":"Sline","age":88,"gender":"Female","height":151,"wight":77,"status":"normal","lastMeasurement":"2019-10-02T22:40:11Z","HRThresholdMin":31,"HRThresholdMax":90,"HRVThresholdMin":36,"HRVThresholdMax":83,"RESPThresholdMin":22,"RESPThresholdMax":46,"SysMin":38,"SysMax":61,"DiaMin":134,"DiaMax":116},{"Id":29,"firstName":"Kerri","last_name":"Adshede","age":92,"gender":"Female","height":208,"wight":96,"status":"normal","lastMeasurement":"2019-07-03T17:09:09Z","HRThresholdMin":47,"HRThresholdMax":70,"HRVThresholdMin":40,"HRVThresholdMax":76,"RESPThresholdMin":29,"RESPThresholdMax":39,"SysMin":53,"SysMax":131,"DiaMin":132,"DiaMax":96},{"Id":30,"firstName":"Richmound","last_name":"Portwaine","age":44,"gender":"Male","height":200,"wight":108,"status":"normal","lastMeasurement":"2019-11-06T23:24:36Z","HRThresholdMin":37,"HRThresholdMax":93,"HRVThresholdMin":32,"HRVThresholdMax":74,"RESPThresholdMin":28,"RESPThresholdMax":34,"SysMin":59,"SysMax":155,"DiaMin":178,"DiaMax":78},{"Id":31,"firstName":"Elnore","last_name":"Medler","age":25,"gender":"Female","height":175,"wight":119,"status":"normal","lastMeasurement":"2018-06-09T23:59:52Z","HRThresholdMin":34,"HRThresholdMax":60,"HRVThresholdMin":43,"HRVThresholdMax":57,"RESPThresholdMin":24,"RESPThresholdMax":38,"SysMin":44,"SysMax":138,"DiaMin":132,"DiaMax":64},{"Id":32,"firstName":"Orelle","last_name":"Mottini","age":18,"gender":"Female","height":201,"wight":117,"status":"normal","lastMeasurement":"2018-12-20T09:54:31Z","HRThresholdMin":31,"HRThresholdMax":87,"HRVThresholdMin":35,"HRVThresholdMax":67,"RESPThresholdMin":23,"RESPThresholdMax":35,"SysMin":45,"SysMax":154,"DiaMin":109,"DiaMax":167},{"Id":33,"firstName":"Xenos","last_name":"Toppas","age":22,"gender":"Male","height":161,"wight":94,"status":"normal","lastMeasurement":"2018-03-26T11:37:27Z","HRThresholdMin":49,"HRThresholdMax":67,"HRVThresholdMin":33,"HRVThresholdMax":99,"RESPThresholdMin":22,"RESPThresholdMax":42,"SysMin":44,"SysMax":106,"DiaMin":122,"DiaMax":130},{"Id":34,"firstName":"Ethelbert","last_name":"Noton","age":38,"gender":"Male","height":161,"wight":92,"status":"normal","lastMeasurement":"2018-04-17T07:29:35Z","HRThresholdMin":46,"HRThresholdMax":78,"HRVThresholdMin":36,"HRVThresholdMax":54,"RESPThresholdMin":28,"RESPThresholdMax":33,"SysMin":31,"SysMax":89,"DiaMin":169,"DiaMax":65},{"Id":35,"firstName":"Brenda","last_name":"Fuke","age":62,"gender":"Female","height":198,"wight":125,"status":"normal","lastMeasurement":"2018-08-11T12:14:15Z","HRThresholdMin":46,"HRThresholdMax":99,"HRVThresholdMin":49,"HRVThresholdMax":95,"RESPThresholdMin":26,"RESPThresholdMax":38,"SysMin":52,"SysMax":119,"DiaMin":111,"DiaMax":63},{"Id":36,"firstName":"Muriel","last_name":"Ditty","age":43,"gender":"Female","height":165,"wight":89,"status":"normal","lastMeasurement":"2018-07-30T19:36:18Z","HRThresholdMin":35,"HRThresholdMax":80,"HRVThresholdMin":32,"HRVThresholdMax":100,"RESPThresholdMin":20,"RESPThresholdMax":40,"SysMin":34,"SysMax":132,"DiaMin":93,"DiaMax":151},{"Id":37,"firstName":"Ardene","last_name":"Raithmill","age":40,"gender":"Female","height":171,"wight":110,"status":"normal","lastMeasurement":"2018-12-27T13:52:43Z","HRThresholdMin":31,"HRThresholdMax":74,"HRVThresholdMin":40,"HRVThresholdMax":90,"RESPThresholdMin":24,"RESPThresholdMax":41,"SysMin":52,"SysMax":144,"DiaMin":119,"DiaMax":167},{"Id":38,"firstName":"Jordan","last_name":"Petru","age":36,"gender":"Female","height":207,"wight":111,"status":"normal","lastMeasurement":"2018-03-19T15:42:09Z","HRThresholdMin":33,"HRThresholdMax":92,"HRVThresholdMin":32,"HRVThresholdMax":59,"RESPThresholdMin":25,"RESPThresholdMax":34,"SysMin":44,"SysMax":121,"DiaMin":145,"DiaMax":142},{"Id":39,"firstName":"Celestyn","last_name":"Michelet","age":20,"gender":"Female","height":162,"wight":76,"status":"normal","lastMeasurement":"2018-09-25T21:59:54Z","HRThresholdMin":34,"HRThresholdMax":98,"HRVThresholdMin":50,"HRVThresholdMax":60,"RESPThresholdMin":24,"RESPThresholdMax":39,"SysMin":50,"SysMax":100,"DiaMin":83,"DiaMax":101},{"Id":40,"firstName":"Hazlett","last_name":"Lewins","age":41,"gender":"Male","height":163,"wight":110,"status":"normal","lastMeasurement":"2019-12-12T05:34:46Z","HRThresholdMin":37,"HRThresholdMax":99,"HRVThresholdMin":32,"HRVThresholdMax":69,"RESPThresholdMin":25,"RESPThresholdMax":34,"SysMin":38,"SysMax":88,"DiaMin":88,"DiaMax":159}]')},97:function(e,a,t){e.exports=t.p+"static/media/img-cubx-logo.ce436f26.svg"}},[[115,1,2]]]);
//# sourceMappingURL=main.f70d0e20.chunk.js.map