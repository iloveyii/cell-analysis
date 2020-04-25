(this.webpackJsonpreact_dev=this.webpackJsonpreact_dev||[]).push([[0],{22:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(21),r=a.n(c),s=a(3),o=a(5),i=a(6),u=a(8),m=a(7),h=l.a.createContext(),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={isLightTheme:!0,light:{syntax:"#555",ui:"#ddd",bg:"#eee"},dark:{syntax:"#ddd",ui:"#333",bg:"#555"}},e.toggleTheme=function(){console.log("Inside isLightTheme"),e.setState({isLightTheme:!e.state.isLightTheme})},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(h.Provider,{value:Object(s.a)({},this.state,{toggleTheme:this.toggleTheme})},this.props.children)}}]),a}(l.a.Component),p=function(){var e=l.a.useContext(h),t=e.isLightTheme,a=e.light,n=e.dark,c=e.toggleTheme,r=t?a:n;return l.a.createElement("nav",{style:{background:r.bg,color:r.syntax}},l.a.createElement("ul",{className:"inline"},l.a.createElement("li",{style:{background:r.ui},className:"list-inline-item"},l.a.createElement("h1",null,"CELL ANALYSIS")),l.a.createElement("li",{style:{background:r.ui},className:"list-inline-item"},l.a.createElement("button",{onClick:c},"C"))))},f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"py-5 text-center"},l.a.createElement("img",{src:"/static/img/logo192.png",width:"200",alt:"img"}),l.a.createElement("br",null),l.a.createElement("a",{href:"/api/logout",className:"btn btn-warning"},"Logout"))}}]),a}(l.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(f,null),this.props.children)}}]),a}(l.a.Component),b=a(1),E={histogram1d:{heading:"Histogram 1 D",p:"\n                This is the histogram in one dimension for the FCS file\n            "},histogram2d:{heading:"Histogram 2 D",p:"This is the histogram in two dimensions for the FCS file. It is plotting using the provided two channels from the\n                select lists.\n            "},compensation:{heading:"Compensation",p:"This is obtained by interchanging channels data and multiplied\n                (by 0.15 for channel 1, by 0.32 form channel 2) and subtracted from respective channels.\n            "},custom_transformation:{heading:"Custom Transformation",p:"\n                This is custom transformation plot. The custom transformation is obtained by taking the log of each channel.\n            "},scatter:{heading:"Scatter plot",p:"\n                This is scatter plot for the two channels selected.\n            "},threshold_gate:{heading:"Threshold Gate",p:"\n                This is threshold gate plot. This is obtained by applying x and y gating on axes.\n            "}},v={histogram:{heading:"Histogram",p:"\n                The histogram of the two tubes which were treated with two different concentrations of Doxycycline.\n            "},gausian:{heading:"Gausian plot",p:"\n                The Gausian Machine learning model is used to separate the data into two/more populations. It uses a default\n                estimation method for parameters.\n            "},gausian_table:{heading:"Gausian Table",p:"\n                We applied GaussianMixtureModelOp method to add new piece of meta data to each event in the data set. The\n                events are labelled as Gauss_1 and Gauss_2 in the table.\n            "},gausian_posterior:{heading:"Gausian Posterior",p:"\n                Sometimes the mixtures are close enough to be separated and therefore we filtered the events by applying posterior probability.\n            "},gausian_posterior_table:{heading:"Gausian Posterior Table",p:"\n                The table shows the posterior probability of each event, marked as Gauss_1_ posterior and Gauss_2_posterior.\n            "},gausian_filtered_low_posterior:{heading:"Gausian filtered low posterior",p:"\n                The is the plot after filtering out the low posterior probability of each event.\n            "},gausian_mixture_model_two_channels:{heading:"Gausian mixture model two channels",p:"\n                The GaussianMixtureOp can work with multidimensions of channels. This is a plot of two channels workflow.\n            "},k_means:{heading:"K Means",p:"\n                The plot shows the K Means in the Gaussian mixture model. The centroids are marked with a star symbol.\n            "},k_means2:{heading:"K Means 3 clusters",p:"\n                The plot shows the K Means in the Gaussian mixture model. The centroids are marked with a star symbol.\n                The shows a more clear clustering by taking the log of the channels instead.\n            "}},y=function(e){var t=e.image,a=e.data_section,n="data_ml"===a?v:E,c=n[t.id]?n[t.id]:{heading:"Heading",p:"Para"},r=c.heading,s=c.p,o=t.id[0].toUpperCase()+t.id.slice(1).split("_").join(" ");return l.a.createElement("div",{className:"data_ml"===a?"col-sm-12 py-2":"col-sm-6 py-2"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},o),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("img",{className:"img-fluid",src:t.src,alt:t.id})),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h5",{className:"card-title"},r),l.a.createElement("p",{className:"card-text"},s))))))},O=function(e,t){switch(t.type){case"ADD_PLOTTINGS":return console.log("ADD_PLOTTINGS",t),Object(s.a)({},e,{},t.payload.plottings);default:return e}},w=l.a.createContext(),_=function(e){var t=l.a.useReducer(O,{}),a=Object(b.a)(t,2),n=a[0],c=a[1];return l.a.createElement(w.Provider,{value:{plottings:n,dispatch:c}},e.children)},N=a(4),j=a.n(N),T={read:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{channel1:"HDR-T",channel2:"FSC-A"};return j.a.get("/api/plottings?ch1="+e.channel1+"&ch2="+e.channel2).then((function(e){return e.data})).catch((function(e){return console.error(e)}))}},C=function(e,t){switch(t.type){case"ADD_BASIC":console.log("ADD_BASIC",t);var a=Object(s.a)({},e,{},t.payload);if(Array.isArray(a.channels)){var n={channel1:a.channels[0],channel2:a.channels[1]};a.current_channels=n}return a;case"SET_CHANNELS":return Object(s.a)({},e,{},t.payload);case"UPDATE_TS":return Object(s.a)({},e,{},t.payload,{ts:Date.now()});default:return e}},k=l.a.createContext(),D=function(e){var t=l.a.useReducer(C,{}),a=Object(b.a)(t,2),n=a[0],c=a[1];return l.a.createElement(k.Provider,{value:{basic:n,dispatch:c}},e.children)},S=function(){return l.a.createElement("img",{src:"/static/img/loading.gif",width:"150",alt:"Loading..."})},x=function(){var e=Object(n.useContext)(w),t=e.plottings,a=e.dispatch,c=Object(n.useContext)(k).basic,r=Object(n.useState)(!1),s=Object(b.a)(r,2),o=s[0],i=s[1];return Object(n.useEffect)((function(){i(!0),T.read(c.current_channels).then((function(e){return a({type:"ADD_PLOTTINGS",payload:{plottings:e}})}))}),[c]),Object(n.useEffect)((function(){i(!1)}),[t]),0===Object.keys(t).length?l.a.createElement(S,null):l.a.createElement("div",{className:"row py-3"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("h1",null,"Plottings")),o?l.a.createElement(S,null):Object.keys(t).map((function(e){return l.a.createElement(y,{key:e,image:{id:e,src:"/static/plots/plotting/"+t[e]},data_section:"data_plottings"})})))},A=function(e,t){switch(t.type){case"ADD_ML":return console.log("ADD_ML",t),Object(s.a)({},e,{},t.payload.ml);default:return e}},L=l.a.createContext(),G=function(e){var t=l.a.useReducer(A,{}),a=Object(b.a)(t,2),n=a[0],c=a[1];return l.a.createElement(L.Provider,{value:{ml:n,dispatch:c}},e.children)},I={read:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{channel1:"HDR-T",channel2:"FSC-A"};return console.log("ml api : ",e),j.a.get("/api/machine-learning?ch1="+e.channel1+"&ch2="+e.channel2).then((function(e){return e.data})).catch((function(e){return console.error(e)}))}},M=function(){var e=Object(n.useContext)(L),t=e.ml,a=e.dispatch,c=Object(n.useContext)(k).basic,r=Object(n.useState)(!1),s=Object(b.a)(r,2),o=s[0],i=s[1];console.log("ML basic",c);return Object(n.useEffect)((function(){i(!0),I.read(c.current_channels).then((function(e){return a({type:"ADD_ML",payload:{ml:e}})}))}),[c]),Object(n.useEffect)((function(){i(!1)}),[t]),0===Object.keys(t).length?l.a.createElement(S,null):l.a.createElement("div",{className:"row py-3"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("h1",null,"ML Plots")),o?l.a.createElement(S,null):Object.keys(t).map((function(e){return l.a.createElement(y,{key:e,image:{id:e,src:"/static/plots/machinelearning/"+t[e]},data_section:"data_ml"})})))},P={read:function(){return j.a.get("/api/basic").then((function(e){return e.data})).catch((function(e){return console.error(e)}))}},F=function(){var e=l.a.createRef(),t=Object(n.useContext)(k),a=(t.basic,t.dispatch);return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 order-md-0"},l.a.createElement("h2",{className:"mb-3"},"Upload FCS File"),l.a.createElement("form",{method:"post",encType:"multipart/form-data",action:"/api/upload"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"custom-file"},l.a.createElement("input",{ref:e,type:"file",className:"custom-file-input",id:"fcs_file",name:"fcs_file",multiple:!0,"aria-describedby":"fcs_file"}),l.a.createElement("label",{className:"custom-file-label",htmlFor:"fcs_file"},"Choose file")),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("input",{className:"btn btn-outline-secondary",type:"button",id:"upload",value:"Upload",onClick:function(t){t.preventDefault(),function(){var t=new FormData,n=e.current.files;t.append("fcs_file",n[0]),j.a.post("/api/upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log("File uploaded"),P.read().then((function(e){e&&(a({type:"ADD_BASIC",payload:{channels:e}}),window.location.reload(!1))}))})).catch((function(e){return console.log("Error occurred ",e)}))}()}}))))),l.a.createElement("hr",{className:"mb-4"}))))},B=a(11),H=function(e){var t=e.channels;return console.log("Options: ",e),t?t.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})):l.a.createElement("option",{value:"1"},"Loading...")},R=function(){var e=Object(n.useContext)(k),t=e.basic,a=e.dispatch,c=l.a.useState({channel1:"1",channel2:"22"}),r=Object(b.a)(c,2),o=(r[0],r[1]),i=l.a.useState([]),u=Object(b.a)(i,2),m=u[0],h=u[1],d=l.a.useState([]),p=Object(b.a)(d,2),f=p[0],g=p[1],E=l.a.useState({transformation:"hlog",bins:100}),v=Object(b.a)(E,2),y=v[0],O=v[1];Object(n.useEffect)((function(){console.log("useEffect 1",t),P.read().then((function(e){e&&(a({type:"ADD_BASIC",payload:{channels:e}}),o({channel1:e[0],channel2:e[1]}))}))}),[]),Object(n.useEffect)((function(){if(console.log("useEffect 2",t),t&&t.channels&&t.channels.length){var e=Object(B.a)(t.channels);h(e);var a=Object(B.a)(t.channels);a.shift(),g(a),console.log("useEffect 2 IF ",e,a)}}),[t]);var w=function(e){O(Object(s.a)({},y,{},e)),console.log("setStateAttributes",e,y)};return 0===Object.keys(t).length?l.a.createElement("p",null,"Loading..."):l.a.createElement("div",{className:"row",id:"basic-div"},l.a.createElement("div",{className:"col-md-12 order-md-0"},l.a.createElement("h1",null,"Basic info "),l.a.createElement("p",{className:"lead",id:"basic-info"}),l.a.createElement("select",{className:"form-control",id:"channel-names-1",onChange:function(e){return w({channel1:e.target.value})}},l.a.createElement(H,{channels:m})),l.a.createElement("br",null),l.a.createElement("select",{className:"form-control",id:"channel-names-2",onChange:function(e){return w({channel2:e.target.value})}},l.a.createElement(H,{channels:f})),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("select",{className:"form-control",id:"transformations",onChange:function(e){return w({transformation:e.target.value})}},l.a.createElement(H,{channels:["hlog","tlog"]}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("input",{type:"number",value:y.bins,className:"form-control",id:"bins",onChange:function(e){return w({bins:e.target.value})}}))),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){P.read().then((function(){return a({type:"SET_ATTRIBUTES",payload:{attributes:y}})}))},className:"btn btn-lg btn-success"},l.a.createElement("i",{className:"fas fa-chart-line"})," Display"),l.a.createElement("hr",{className:"mb-4"})))};var U=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null,l.a.createElement(p,null),l.a.createElement(g,null,l.a.createElement(D,null,l.a.createElement(F,null),l.a.createElement(R,null),l.a.createElement(_,null,l.a.createElement(x,null)),l.a.createElement(G,null,l.a.createElement(M,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.bbc9fea5.chunk.js.map