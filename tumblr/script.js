"use strict";!function(){function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function t(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class a extends React.Component{render(){return React.createElement("div",{id:"chooser-hover"},React.createElement("button",{type:"button",class:"btn btn-danger","data-toggle":"modal","data-target":"#modal"},"Search Options"),React.createElement("h3",null,"Reddit Search"),React.createElement("div",{id:"modal",class:"modal fade",tabindex:"-1",role:"dialog","aria-hidden":"true"},React.createElement("div",{class:"modal-dialog"},React.createElement("div",{class:"modal-content"},React.createElement("form",{class:"container-fluid",onSubmit:this.props.submitFunc},React.createElement("div",{class:"modal-header"},React.createElement("h5",{class:"modal-title"},"Search Options"),React.createElement("button",{type:"button",class:"btn-close","data-dismiss":"modal","aria-label":"Close"})),React.createElement("div",{class:"form-group row my-3"},React.createElement("label",{for:"q",class:"col-md-4"},"Query"),React.createElement("div",{class:"col-md-8"},React.createElement("input",{class:"form-control",id:"q",name:"q",autocomplete:"off",value:this.props.q,onChange:this.props.changeFunc}))),React.createElement("div",{class:"form-group row mb-3"},React.createElement("label",{for:"subreddit",class:"col-md-4"},"Subreddit"),React.createElement("div",{class:"col-md-8"},React.createElement("input",{class:"form-control",id:"subreddit",name:"subreddit",autocomplete:"off",value:this.props.subreddit,onChange:this.props.changeFunc}))),React.createElement("div",{class:"form-group row mb-3"},React.createElement("label",{for:"year",class:"col-md-4"},"Month"),React.createElement("div",{class:"col-md-8 row"},React.createElement("div",{class:"col-6"},React.createElement("input",{class:"form-control",name:"month",type:"number",min:"1",max:"12",autocomplete:"off",value:this.props.month,onChange:this.props.changeFunc})),React.createElement("div",{class:"col-6"},React.createElement("input",{class:"col-6 form-control",id:"year",name:"year",type:"number",min:"2000",autocomplete:"off",max:(new Date).getFullYear(),value:this.props.year,onChange:this.props.changeFunc})))),React.createElement("div",{class:"form-group row mb-3"},React.createElement("label",{for:"size",class:"col-md-4"},"Size"),React.createElement("div",{class:"col-md-8"},React.createElement("input",{class:"form-control",id:"size",name:"size",id:"size",type:"number",min:"1",max:"500",autocomplete:"off",value:this.props.size,onChange:this.props.changeFunc}))),React.createElement("div",{class:"form-group row mb-3"},React.createElement("label",{for:"sort_type",class:"col-md-4"},"Sort"),React.createElement("div",{class:"col-md-8"},React.createElement("select",{class:"form-control",id:"sort_type",name:"sort_type",value:this.props.sort_type,onChange:this.props.changeFunc},React.createElement("option",{value:"num_comments"},"Comments"),React.createElement("option",{value:"score"},"Score"),React.createElement("option",{value:"created_utc"},"Date")))),React.createElement("div",{class:"form-group row mb-3"},React.createElement("label",{for:"newTab",class:"col-md-4"},"New Tab"),React.createElement("div",{class:"col-md-8"},React.createElement("div",{class:"form-check"},React.createElement("input",{class:"form-check-input",type:"checkbox",id:"newTab",name:"newTab",checked:this.props.newTab,onChange:this.props.changeFunc}),React.createElement("label",{class:"form-check-label",for:"newTab"},"Open link in new tab")))),React.createElement("div",{class:"modal-footer"},React.createElement("button",{className:"btn btn-primary",type:"submit",onClick:()=>$("#modal").modal("hide")},"Submit & Search")))))))}}class s extends React.Component{render(){const e=this.props.data;return React.createElement("tr",null,React.createElement("td",null,e.score.toLocaleString()),React.createElement("td",null,e.num_comments.toLocaleString()),this.props.show_sub?React.createElement("td",null,e.subreddit):null,React.createElement("td",null,React.createElement("a",{href:e.full_link,target:this.props.newTab?"_blank":"",rel:"noopener noreferrer"},e.title)))}}class n extends React.Component{constructor(...e){super(...e),t(this,"cols",this.props.show_sub?"4":"3"),t(this,"no_results",React.createElement("tr",null,React.createElement("td",{colSpan:this.cols},"No results"))),t(this,"is_loading",React.createElement("tr",null,React.createElement("td",{colSpan:this.cols},React.createElement("div",{class:"spinner-border text-primary m-2",role:"status"}))))}render(){return React.createElement("div",null,React.createElement("table",{id:"table",className:"table table-bordered table-striped table-hover table-sm table-responsive table-light mb-0"},React.createElement("thead",{className:"thead-light"},React.createElement("tr",null,React.createElement("th",null,"Score"),React.createElement("th",null,"Comments"),this.props.show_sub?React.createElement("th",null,"Subreddit"):null,React.createElement("th",null,"Title"))),React.createElement("tbody",null,this.props.is_loading?this.is_loading:this.props.data.length>0?this.props.data.map((e,t)=>React.createElement(s,{key:t,data:e,show_sub:this.props.show_sub,newTab:this.props.newTab})):this.no_results)),this.props.data.length>0&&!this.props.is_loading?React.createElement("p",{style:{"text-align":"right"}},React.createElement("small",null,"Showing top ",this.props.data.length," results.")):null)}}class c extends React.Component{constructor(s){super(s),t(this,"ROOT","https://api.pushshift.io/reddit/submission/search?"),t(this,"QUERY_PARAMS",["q","subreddit","size","sort_type"]),t(this,"DEFAULT_API_ARGS",{sort:"desc",fields:"score,num_comments,title,full_link,subreddit"}),t(this,"DEFAULT_ARGS",{q:"",subreddit:"",year:`${(new Date).getFullYear()}`,month:"",size:"100",sort_type:"num_comments",data:[],is_loading:!1,show_sub:!0,newTab:!0}),t(this,"getData",(e,t)=>{const a={...e};for(let e in a)a[e]=encodeURIComponent(a[e]);const s=Object.assign({},this.DEFAULT_API_ARGS,a);let n=Object.entries(s).map(e=>e[0]+"="+e[1]).join("&");const c=new XMLHttpRequest;c.onload=(()=>t(JSON.parse(c.responseText).data)),c.open("GET",this.ROOT+n,!0),c.send()}),t(this,"choose",e=>{const t="checkbox"===e.target.type?e.target.checked:e.target.value;this.setState({[e.target.name]:t})}),t(this,"submit",e=>{e&&(e.preventDefault(),e.stopPropagation());const t={is_loading:!0,show_sub:""==this.state.subreddit.trim()},a=function(e,t){function a(e,t){const a=new Date(e,t,1,0,0,0),s=a-1;return a.setMonth(a.getMonth()+1),[s,a-1].map(e=>Math.round(e/1e3))}const s=a(t,e-1);let n=s[0],c=s[1];return""==e&&(n=a(t,0)[0],c=a(t,11)[1]),{after:n,before:c}}(this.state.month,this.state.year);return this.setState(t,()=>{let e={};for(let t of["before","after"])e[t]=a[t];for(let t of this.QUERY_PARAMS)e[t]=this.state[t];this.getData(e,t=>{this.setState({data:t,is_loading:!1});for(let t of["month","year"])e[t]=this.state[t];for(let t of["before","after"])delete e[t];for(let t in e)e[t]==this.DEFAULT_ARGS[t]&&delete e[t];history.pushState({},"",window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+new URLSearchParams(e).toString())})}),!1}),t(this,"render",()=>React.createElement("div",{className:"container-md"},React.createElement(a,e({changeFunc:this.choose,submitFunc:this.submit},this.state)),React.createElement(n,{data:this.state.data,is_loading:this.state.is_loading,show_sub:this.state.show_sub,newTab:this.state.newTab})));const c=Object.fromEntries(new URLSearchParams(window.location.search).entries());this.state=Object.assign({},this.DEFAULT_ARGS,c)}componentDidMount(){window.addEventListener("load",()=>{window.location.search.replace("?","").length>0&&this.submit()})}}ReactDOM.render(React.createElement(c,null),document.getElementById("root"))}();