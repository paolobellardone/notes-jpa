define(['exports', 'preact'], (function(t,e){"use strict";class s extends e.Component{constructor(t){let e;super(t),e=t.in?"entering":null,this._appearStatus=e,this.state={status:"exited"},this._nextCallback=null}componentDidMount(){this._updateStatus(this._appearStatus)}componentDidUpdate(t){let e=null;if(t!==this.props){const{status:t}=this.state;this.props.in?"entering"!==t&&"entered"!==t&&(e="entering"):"entering"!==t&&"entered"!==t||(e="exiting")}this._updateStatus(e)}componentWillUnmount(){this._cancelNextCallback()}render(t){return t?.children}_setNextCallback(t){let e=!0;return this._nextCallback=(...s)=>{e&&(e=!1,this._nextCallback=null,t(...s))},this._nextCallback.cancel=()=>{e=!1},this._nextCallback}_cancelNextCallback(){this._nextCallback?.cancel?.(),this._nextCallback=null}_updateStatus(t){null!=t&&(this._cancelNextCallback(),"entering"===t?this._performEnter(this.base):this._performExit(this.base))}_performEnter(t){this.props.onEnter?.(t,this.props.metadata),this.setState({status:"entering"},(()=>{this.props.onEntering?.(t,this._setNextCallback((()=>{this.setState({status:"entered"},(()=>{this.props.onEntered?.(t,this.props.metadata)}))})),this.props.metadata)}))}_performExit(t){this.props.onExit?.(t,this.props.metadata),this.setState({status:"exiting"},(()=>{this.props.onExiting?.(t,this._setNextCallback((()=>{this.setState({status:"exited"},(()=>{this.props.onExited?.(t,this.props.metadata)}))})),this.props.metadata)}))}}t.Transition=s}));
//# sourceMappingURL=Transition-4c8a0bab.js.map
