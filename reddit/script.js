"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
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

    return {
      after: after,
      before: before
    };
  }

  class Chooser extends React.Component {
    render() {
      return /*#__PURE__*/React.createElement("div", {
        id: "chooser-hover"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        class: "btn btn-danger",
        "data-toggle": "modal",
        "data-target": "#modal"
      }, "Search Options"), /*#__PURE__*/React.createElement("h3", null, "Reddit Search"), /*#__PURE__*/React.createElement("div", {
        id: "modal",
        class: "modal fade",
        tabindex: "-1",
        role: "dialog",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("div", {
        class: "modal-dialog"
      }, /*#__PURE__*/React.createElement("div", {
        class: "modal-content"
      }, /*#__PURE__*/React.createElement("form", {
        class: "container-fluid",
        onSubmit: this.props.submitFunc
      }, /*#__PURE__*/React.createElement("div", {
        class: "modal-header"
      }, /*#__PURE__*/React.createElement("h5", {
        class: "modal-title"
      }, "Search Options"), /*#__PURE__*/React.createElement("button", {
        type: "button",
        class: "btn-close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      })), /*#__PURE__*/React.createElement("div", {
        class: "form-group row my-3"
      }, /*#__PURE__*/React.createElement("label", {
        for: "q",
        class: "col-md-4"
      }, "Query"), /*#__PURE__*/React.createElement("div", {
        class: "col-md-8"
      }, /*#__PURE__*/React.createElement("input", {
        class: "form-control",
        id: "q",
        name: "q",
        autocomplete: "off",
        value: this.props.q,
        onChange: this.props.changeFunc
      }))), /*#__PURE__*/React.createElement("div", {
        class: "form-group row mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        for: "subreddit",
        class: "col-md-4"
      }, "Subreddit"), /*#__PURE__*/React.createElement("div", {
        class: "col-md-8"
      }, /*#__PURE__*/React.createElement("input", {
        class: "form-control",
        id: "subreddit",
        name: "subreddit",
        autocomplete: "off",
        value: this.props.subreddit,
        onChange: this.props.changeFunc
      }))), /*#__PURE__*/React.createElement("div", {
        class: "form-group row mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        for: "year",
        class: "col-md-4"
      }, "Month"), /*#__PURE__*/React.createElement("div", {
        class: "col-md-8 row"
      }, /*#__PURE__*/React.createElement("div", {
        class: "col-6"
      }, /*#__PURE__*/React.createElement("input", {
        class: "form-control",
        name: "month",
        type: "number",
        min: "1",
        max: "12",
        autocomplete: "off",
        value: this.props.month,
        onChange: this.props.changeFunc
      })), /*#__PURE__*/React.createElement("div", {
        class: "col-6"
      }, /*#__PURE__*/React.createElement("input", {
        class: "col-6 form-control",
        id: "year",
        name: "year",
        type: "number",
        min: "2000",
        autocomplete: "off",
        max: new Date().getFullYear(),
        value: this.props.year,
        onChange: this.props.changeFunc
      })))), /*#__PURE__*/React.createElement("div", {
        class: "form-group row mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        for: "size",
        class: "col-md-4"
      }, "Size"), /*#__PURE__*/React.createElement("div", {
        class: "col-md-8"
      }, /*#__PURE__*/React.createElement("input", {
        class: "form-control",
        id: "size",
        name: "size",
        id: "size",
        type: "number",
        min: "1",
        max: "500",
        autocomplete: "off",
        value: this.props.size,
        onChange: this.props.changeFunc
      }))), /*#__PURE__*/React.createElement("div", {
        class: "form-group row mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        for: "sort_type",
        class: "col-md-4"
      }, "Sort"), /*#__PURE__*/React.createElement("div", {
        class: "col-md-8"
      }, /*#__PURE__*/React.createElement("select", {
        class: "form-control",
        id: "sort_type",
        name: "sort_type",
        value: this.props.sort_type,
        onChange: this.props.changeFunc
      }, /*#__PURE__*/React.createElement("option", {
        value: "num_comments"
      }, "Comments"), /*#__PURE__*/React.createElement("option", {
        value: "score"
      }, "Score"), /*#__PURE__*/React.createElement("option", {
        value: "created_utc"
      }, "Date")))), /*#__PURE__*/React.createElement("div", {
        class: "form-group row mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        for: "newTab",
        class: "col-md-4"
      }, "New Tab"), /*#__PURE__*/React.createElement("div", {
        class: "col-md-8"
      }, /*#__PURE__*/React.createElement("div", {
        class: "form-check"
      }, /*#__PURE__*/React.createElement("input", {
        class: "form-check-input",
        type: "checkbox",
        id: "newTab",
        name: "newTab",
        checked: this.props.newTab,
        onChange: this.props.changeFunc
      }), /*#__PURE__*/React.createElement("label", {
        class: "form-check-label",
        for: "newTab"
      }, "Open link in new tab")))), /*#__PURE__*/React.createElement("div", {
        class: "modal-footer"
      }, /*#__PURE__*/React.createElement("button", {
        className: "btn btn-primary",
        type: "submit",
        onClick: () => $("#modal").modal("hide")
      }, "Submit & Search")))))));
    }

  }

  class Row extends React.Component {
    render() {
      const d = this.props.data;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, d.score.toLocaleString()), /*#__PURE__*/React.createElement("td", null, d.num_comments.toLocaleString()), this.props.show_sub ? /*#__PURE__*/React.createElement("td", null, d.subreddit) : null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
        href: d.full_link,
        target: this.props.newTab ? "_blank" : "",
        rel: "noopener noreferrer"
      }, d.title)));
    }

  }

  class Table extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "cols", this.props.show_sub ? "4" : "3");

      _defineProperty(this, "no_results", /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        colSpan: this.cols
      }, "No results")));

      _defineProperty(this, "is_loading", /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        colSpan: this.cols
      }, /*#__PURE__*/React.createElement("div", {
        class: "spinner-border text-primary m-2",
        role: "status"
      }))));
    }

    render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
        id: "table",
        className: "table table-bordered table-striped table-hover table-sm table-responsive table-light mb-0"
      }, /*#__PURE__*/React.createElement("thead", {
        className: "thead-light"
      }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Score"), /*#__PURE__*/React.createElement("th", null, "Comments"), this.props.show_sub ? /*#__PURE__*/React.createElement("th", null, "Subreddit") : null, /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, this.props.is_loading ? this.is_loading : this.props.data.length > 0 ? this.props.data.map((x, i) => /*#__PURE__*/React.createElement(Row, {
        key: i,
        data: x,
        show_sub: this.props.show_sub,
        newTab: this.props.newTab
      })) : this.no_results)), this.props.data.length > 0 && !this.props.is_loading ? /*#__PURE__*/React.createElement("p", {
        style: {
          "text-align": "right"
        }
      }, /*#__PURE__*/React.createElement("small", null, "Showing top ", this.props.data.length, " results.")) : null);
    }

  }

  class App extends React.Component {
    constructor(props) {
      super(props);

      _defineProperty(this, "ROOT", "https://api.pushshift.io/reddit/submission/search?");

      _defineProperty(this, "QUERY_PARAMS", ["q", "subreddit", "size", "sort_type"]);

      _defineProperty(this, "DEFAULT_API_ARGS", {
        sort: "desc",
        fields: "score,num_comments,title,full_link,subreddit"
      });

      _defineProperty(this, "DEFAULT_ARGS", {
        q: "",
        subreddit: "",
        year: `${new Date().getFullYear()}`,
        month: "",
        size: "100",
        sort_type: "num_comments",
        data: [],
        is_loading: false,
        show_sub: true,
        newTab: true
      });

      _defineProperty(this, "getData", (origArgs, onComplete) => {
        const args = { ...origArgs
        };

        for (let v in args) {
          args[v] = encodeURIComponent(args[v]);
        }

        const argObj = Object.assign({}, this.DEFAULT_API_ARGS, args);
        let qString = Object.entries(argObj).map(e => e[0] + "=" + e[1]).join("&");
        const xhttp = new XMLHttpRequest();

        xhttp.onload = () => onComplete(JSON.parse(xhttp.responseText).data);

        xhttp.open("GET", this.ROOT + qString, true);
        xhttp.send();
      });

      _defineProperty(this, "choose", event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        this.setState({
          [event.target.name]: value
        });
      });

      _defineProperty(this, "submit", e => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }

        const newState = {
          is_loading: true,
          show_sub: this.state.subreddit.trim() == ""
        };
        const before_after = get_before_after(this.state.month, this.state.year);
        this.setState(newState, () => {
          let queryParams = {};

          for (let value of ["before", "after"]) {
            queryParams[value] = before_after[value];
          }

          for (let value of this.QUERY_PARAMS) {
            queryParams[value] = this.state[value];
          }

          this.getData(queryParams, data => {
            this.setState({
              data: data,
              is_loading: false
            });

            for (let value of ["month", "year"]) {
              queryParams[value] = this.state[value];
            }

            for (let value of ["before", "after"]) {
              delete queryParams[value];
            }

            for (let k in queryParams) {
              if (queryParams[k] == this.DEFAULT_ARGS[k]) {
                delete queryParams[k];
              }
            }

            history.pushState({}, "", window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + new URLSearchParams(queryParams).toString());
          });
        });
        return false;
      });

      _defineProperty(this, "render", () => {
        return /*#__PURE__*/React.createElement("div", {
          className: "container-md"
        }, /*#__PURE__*/React.createElement(Chooser, _extends({
          changeFunc: this.choose,
          submitFunc: this.submit
        }, this.state)), /*#__PURE__*/React.createElement(Table, {
          data: this.state.data,
          is_loading: this.state.is_loading,
          show_sub: this.state.show_sub,
          newTab: this.state.newTab
        }));
      });

      const qObj = Object.fromEntries(new URLSearchParams(window.location.search).entries());
      this.state = Object.assign({}, this.DEFAULT_ARGS, qObj);
    }

    componentDidMount() {
      window.addEventListener('load', () => {
        if (window.location.search.replace("?", "").length > 0) {
          this.submit();
        }
      });
    }

  }

  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));
})();