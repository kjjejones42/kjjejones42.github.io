function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}!function(){class e extends React.Component{render(){return React.createElement("div",{id:"chooser-hover"},React.createElement("button",{type:"button",class:"btn btn-danger","data-toggle":"modal","data-target":"#modal"},"Search Options"),React.createElement("h3",null,"Reddit Search"),React.createElement("div",{id:"modal",class:"modal fade",tabindex:"-1",role:"dialog","aria-hidden":"true"},React.createElement("div",{class:"modal-dialog"},React.createElement("div",{class:"modal-content"},React.createElement("form",{class:"container-fluid",onSubmit:this.props.submitFunc},React.createElement("div",{class:"modal-header"},React.createElement("h5",{class:"modal-title"},"Search Options"),React.createElement("button",{type:"button",class:"btn-close","data-dismiss":"modal","aria-label":"Close"})),React.createElement("div",{class:"form-group row my-3"},React.createElement("label",{for:"q",class:"col-md-4"},"Query"),React.createElement("div",{class:"col-md-8"},React.createElement("input",{class:"form-control",id:"q",name:"q",autocomplete:"off",value:this.props.q,onChange:this.props.changeFunc}))),React.createElement("div",{class:"form-group row mb-3"},React.createElement("label",{for:"subreddit",class:"col-md-4"},"Subreddit"),React.createElement("div",{class:"col-md-8"},React.createElement("input",{class:"form-control",id:"subreddit",name:"subreddit",autocomplete:"off",value:this.props.subreddit,onChange:this.props.changeFunc}))),React.createElement("div",{class:"form-group row mb-3"},React.createElement("label",{for:"year",class:"col-md-4"},"Month"),React.createElement("div",{class:"col-md-8 row"},React.createElement("div",{class:"col-6"},React.createElement("input",{class:"form-control",name:"month",type:"number",min:"1",max:"12",autocomplete:"off",value:this.props.month,onChange:this.props.changeFunc})),React.createElement("div",{class:"col-6"},React.createElement("input",{class:"col-6 form-control",id:"year",name:"year",type:"number",min:"2000",autocomplete:"off",max:new Date().getFullYear(),value:this.props.year,onChange:this.props.changeFunc})))),React.createElement("div",{class:"form-group row mb-3"},React.createElement("label",{for:"size",class:"col-md-4"},"Size"),React.createElement("div",{class:"col-md-8"},React.createElement("input",{class:"form-control",id:"size",name:"size",type:"number",min:"1",max:"500",autocomplete:"off",value:this.props.size,onChange:this.props.changeFunc}))),React.createElement("div",{class:"form-group row mb-3"},React.createElement("label",{for:"sort",class:"col-md-4"},"Sort"),React.createElement("div",{class:"col-md-8"},React.createElement("select",{class:"form-control",id:"sort",name:"sort",value:this.props.sort,onChange:this.props.changeFunc},React.createElement("option",{value:"num_comments"},"Comments"),React.createElement("option",{value:"score"},"Score"),React.createElement("option",{value:"created_utc"},"Date")))),React.createElement("div",{class:"form-group row mb-3"},React.createElement("label",{for:"newTab",class:"col-md-4"},"New Tab"),React.createElement("div",{class:"col-md-8"},React.createElement("div",{class:"form-check"},React.createElement("input",{class:"form-check-input",type:"checkbox",id:"newTab",name:"newTab",checked:this.props.newTab,onChange:this.props.changeFunc}),React.createElement("label",{class:"form-check-label",for:"newTab"},"Open link in new tab")))),React.createElement("div",{class:"modal-footer"},React.createElement("button",{className:"btn btn-primary",type:"submit",onClick:()=>$("#modal").modal("hide")},"Submit & Search")))))))}}class t extends React.Component{render(){let e=this.props.data;return React.createElement("tr",null,React.createElement("td",null,e.score.toLocaleString()),React.createElement("td",null,e.num_comments.toLocaleString()),this.props.show_sub?React.createElement("td",null,e.subreddit):null,React.createElement("td",null,React.createElement("a",{href:e.full_link,target:this.props.newTab?"_blank":"",rel:"noopener noreferrer"},e.title)))}}class r extends React.Component{constructor(...e){super(...e),_defineProperty(this,"cols",this.props.show_sub?"4":"3"),_defineProperty(this,"no_results",React.createElement("tr",null,React.createElement("td",{colSpan:this.cols},"No results"))),_defineProperty(this,"is_loading",React.createElement("tr",null,React.createElement("td",{colSpan:this.cols},React.createElement("div",{class:"spinner-border text-primary m-2",role:"status"}))))}render(){let e=this.props.isDark?"table-dark":"table-light",r=`table table-bordered table-striped table-hover table-sm table-responsive ${e} mb-0`;return React.createElement("div",null,React.createElement("table",{id:"table",className:r},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Score"),React.createElement("th",null,"Comments"),this.props.show_sub?React.createElement("th",null,"Subreddit"):null,React.createElement("th",null,"Title"))),React.createElement("tbody",null,this.props.is_loading?this.is_loading:this.props.data.length>0?this.props.data.map((e,r)=>React.createElement(t,{key:r,data:e,show_sub:this.props.show_sub,newTab:this.props.newTab})):this.no_results)),this.props.data.length>0&&!this.props.is_loading?React.createElement("p",{style:{"text-align":"right"}},React.createElement("small",null,"Showing top ",this.props.data.length," results.")):null)}}class a extends React.Component{constructor(t){super(t),_defineProperty(this,"ROOT","https://api.pushshift.io/reddit/submission/search?"),_defineProperty(this,"QUERY_PARAMS",["q","subreddit","size","sort"]),_defineProperty(this,"DEFAULT_API_ARGS",{order:"desc",fields:"score,num_comments,title,full_link,subreddit"}),_defineProperty(this,"DEFAULT_ARGS",{q:"",subreddit:"",year:`${new Date().getFullYear()}`,month:"",size:"100",sort:"num_comments",data:[],is_loading:!1,show_sub:!0,newTab:!0,isDark:window.matchMedia("(prefers-color-scheme: dark)").matches}),_defineProperty(this,"getData",(e,t)=>{let r={...e};for(let a in r)r[a]=encodeURIComponent(r[a]);let s=Object.assign({},this.DEFAULT_API_ARGS,r),n=Object.entries(s).map(e=>e[0]+"="+e[1]).join("&"),l=new XMLHttpRequest;l.onload=()=>{200==l.status?t(JSON.parse(l.responseText).data):(this.setState({is_loading:!1}),console.log(l),alert(l.responseText))},l.open("GET",this.ROOT+n,!0),l.send()}),_defineProperty(this,"choose",e=>{let t="checkbox"===e.target.type?e.target.checked:e.target.value;this.setState({[e.target.name]:t})}),_defineProperty(this,"updateUrl",e=>{let t={...e};for(let r of["month","year"])t[r]=this.state[r];for(let a of["before","after"])delete t[a];for(let s in t)t[s]==this.DEFAULT_ARGS[s]&&delete t[s];let n=new URL(window.location);n.search=new URLSearchParams(t).toString(),history.pushState({},"",n.toString())}),_defineProperty(this,"submit",e=>{e&&(e.preventDefault(),e.stopPropagation());let t={is_loading:!0,show_sub:""==this.state.subreddit.trim()},r=function e(t,r){function a(e,t){let r=new Date(e,t,1,0,0,0);return r.setMonth(r.getMonth()+1),[r-1,r-1].map(e=>Math.round(e/1e3))}let s=a(r,t-1),n=s[0],l=s[1];return""==t&&(n=a(r,0)[0],l=a(r,11)[1]),{after:n,before:l}}(this.state.month,this.state.year);return this.setState(t,()=>{let e={};for(let t of["before","after"])e[t]=r[t];for(let a of this.QUERY_PARAMS)e[a]=this.state[a];this.updateUrl(e),this.getData(e,e=>{this.setState({data:e,is_loading:!1})})}),!1}),_defineProperty(this,"render",()=>React.createElement("div",{className:"container-md"},React.createElement(e,_extends({changeFunc:this.choose,submitFunc:this.submit},this.state)),React.createElement(r,{data:this.state.data,is_loading:this.state.is_loading,show_sub:this.state.show_sub,newTab:this.state.newTab,isDark:this.state.isDark})));let a=Object.fromEntries(new URLSearchParams(window.location.search).entries());this.state=Object.assign({},this.DEFAULT_ARGS,a)}componentDidMount(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{this.setState({isDark:e.matches})}),window.addEventListener("load",()=>{window.location.search.replace("?","").length>0&&this.submit()})}}ReactDOM.render(React.createElement(a,null),document.getElementById("root"))}();