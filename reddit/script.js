

    function get_before_after(month, year) {          
      function month_timestamps(year, month) {
        const base = new Date(year, month, 1, 0, 0, 0);
        const after = base - 1;
        base.setMonth(base.getMonth() + 1);
        const before = base - 1;
        return [after, before].map(x => Math.round(x / 1000));
      }
      const timeStamps = month_timestamps(year, month - 1);
      let after = timeStamps[0];
      let before = timeStamps[1];
      if (month == "") {
        after = month_timestamps(year, 0)[0];
        before = month_timestamps(year, 11)[1];
      }          
      return {after: after, before: before};
    }
      
    class Chooser extends React.Component {
      render() {
        return (
          <div id="chooser-hover">
            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal">Search Options</button>
            <h3>Reddit Search</h3>
            <div id="modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <form class="container-fluid" onSubmit={this.props.submitFunc}>
                    <div class="modal-header">
                      <h5 class="modal-title">Search Options</h5>
                      <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div class="form-group row my-3">
                      <label for="q" class="col-md-4">Query</label>
                      <div class="col-md-8">
                        <input class="form-control" id="q" name="q" autocomplete="off" value={this.props.q} onChange={this.props.changeFunc} />
                      </div>
                    </div>
                    <div class="form-group row mb-3">
                      <label for="subreddit" class="col-md-4">Subreddit</label>
                      <div class="col-md-8">
                        <input class="form-control" id="subreddit" name="subreddit" autocomplete="off" value={this.props.subreddit} onChange={this.props.changeFunc} />
                      </div>
                    </div>
                    <div class="form-group row mb-3">
                      <label for="year" class="col-md-4">Month</label>
                      <div class="col-md-8 row">
                        <div class="col-6">
                          <input class="form-control" name="month" type="number" min="1" max="12" autocomplete="off" value={this.props.month} onChange={this.props.changeFunc} />
                        </div>
                        <div class="col-6">
                          <input class="col-6 form-control" id="year" name="year" type="number" min="2000" autocomplete="off" max={new Date().getFullYear()} value={this.props.year} onChange={this.props.changeFunc} />
                        </div>
                      </div>
                    </div>
                    <div class="form-group row mb-3">
                      <label for="size" class="col-md-4">Size</label>
                      <div class="col-md-8">
                        <input class="form-control" id="size" name="size" id="size" type="number" min="1" max="500" autocomplete="off" value={this.props.size} onChange={this.props.changeFunc} />
                      </div>
                    </div>
                    <div class="form-group row mb-3">
                      <label for="sort_type" class="col-md-4">Sort</label>
                      <div class="col-md-8">
                        <select class="form-control" id="sort_type" name="sort_type" value={this.props.sort_type} onChange={this.props.changeFunc} >
                          <option value="num_comments">Comments</option>
                          <option value="score">Score</option>
                          <option value="created_utc">Date</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group row mb-3">
                      <label for="newTab" class="col-md-4">New Tab</label>
                      <div class="col-md-8">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="newTab" name="newTab" checked={this.props.newTab} onChange={this.props.changeFunc} />
                          <label class="form-check-label" for="newTab">Open link in new tab</label>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button className="btn btn-primary" type="submit" onClick={() => $("#modal").modal("hide")} >Submit & Search</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
		);
      }
    }
    
    class Row extends React.Component {
      render() {
        const d = this.props.data;
        return (
          <tr>
            <td>{d.score.toLocaleString()}</td>
            <td>{d.num_comments.toLocaleString()}</td>
            {this.props.show_sub ? <td>{d.subreddit}</td> : null}
            <td>
              <a href={d.full_link} target={this.props.newTab ? "_blank" : ""} rel="noopener noreferrer">{d.title}</a>
            </td>
          </tr>
        );
      }
    }
    
    class Table extends React.Component {
      cols = this.props.show_sub ? "4" : "3";
    
      no_results = (
        <tr>
          <td colSpan={this.cols}>No results</td>
        </tr>
      );
    
      is_loading = (
        <tr>
          <td colSpan={this.cols}>
            <div class="spinner-border text-primary m-2" role="status"></div>
          </td>
        </tr>
      );
	  
    
      render() {
        return (
		<div>
          <table id="table" className="table table-bordered table-striped table-hover table-sm table-responsive table-light mb-0">
            <thead className="thead-light">
              <tr>
                <th>Score</th>
                <th>Comments</th>
                {this.props.show_sub ? <th>Subreddit</th> : null}
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {this.props.is_loading
                ? this.is_loading
                : this.props.data.length > 0
                ? this.props.data.map((x, i) => (<Row key={i} data={x}  show_sub={this.props.show_sub}  newTab={this.props.newTab} />))
                : this.no_results}
            </tbody>
          </table>
		  {(this.props.data.length > 0 && !this.props.is_loading) ? (<p style={{"text-align": "right"}}><small>Showing top {this.props.data.length} results.</small></p>) : null}
		  </div>
        );
      }
    }
    
    class App extends React.Component {
      ROOT = "https://api.pushshift.io/reddit/submission/search?";
      QUERY_PARAMS = ["q", "subreddit", "size", "sort_type"]
      DEFAULT_API_ARGS = {
        sort: "desc",
        fields: "score,num_comments,title,full_link,subreddit",
      };
      DEFAULT_ARGS = {
          q: "",
          subreddit: "",
          year: `${new Date().getFullYear()}`,
          month: "",
          size: "100",
          sort_type: "num_comments",
          data: [],
          is_loading: false,
          show_sub: true,
          newTab: true,
        }
    
      constructor(props) {
        super(props);
        const qObj = Object.fromEntries(new URLSearchParams(window.location.search).entries()) 
        this.state = Object.assign({}, this.DEFAULT_ARGS, qObj);
      }

      componentDidMount() {
          window.addEventListener('load', () => {
            if (window.location.search.replace("?","").length > 0) {
              this.submit()
            }
          });
      }
    
      getData = (origArgs, onComplete) => {
        const args = { ...origArgs };
        for (let v in args) {args[v] = encodeURIComponent(args[v]);}
        const argObj = Object.assign({}, this.DEFAULT_API_ARGS, args);
        let qString = Object.entries(argObj).map(e => e[0] + "=" + e[1]).join("&");
        const xhttp = new XMLHttpRequest();
        xhttp.onload = () => onComplete(JSON.parse(xhttp.responseText).data);
        xhttp.open("GET", this.ROOT + qString, true);
        xhttp.send();
      };
    
      choose = event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        this.setState({ [event.target.name]: value });
      };
    
      submit = e => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }  

        const newState = {is_loading: true, show_sub: this.state.subreddit.trim() == ""};
        const before_after = get_before_after(this.state.month, this.state.year)      
        this.setState(newState, () => {
          let queryParams = {}
          for (let value of ["before","after"]) {queryParams[value] = before_after[value]}
          for (let value of this.QUERY_PARAMS) {queryParams[value] = this.state[value]}
          this.getData(queryParams, data => {
            this.setState({ data: data, is_loading: false }) 
            for (let value of ["month","year"]) {queryParams[value] = this.state[value]}
            for (let value of ["before","after"]) {delete queryParams[value]}
              for (let k in queryParams) {
                if (queryParams[k] == this.DEFAULT_ARGS[k]) {delete queryParams[k];}
              }
              history.pushState({}, "", window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + new URLSearchParams(queryParams).toString())
          });
        });
        return false;
      };
    
      render = () => {
        return (
          <div className="container-md">
            <Chooser changeFunc={this.choose} submitFunc={this.submit} {...this.state} />
            <Table data={this.state.data} is_loading={this.state.is_loading} show_sub={this.state.show_sub} newTab={this.state.newTab} />
          </div>
        );
      };
    }
    
    ReactDOM.render(<App />, document.getElementById("root")); 