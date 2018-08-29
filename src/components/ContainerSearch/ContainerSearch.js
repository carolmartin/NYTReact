import React from "react";
import "./ContainerSearch.css";

const ContainerSearch = props => (
<div className="containerSearch">
<h1 >{props.children}</h1>

{/* -- Here we create an HTML Form for handling the inputs--> */}

<form role="form">


{/*-- Here we create the text box for capturing the search term--> */}
  <div className ="form-group">
    <label for="search">Search Term:</label>
    <input type="text" className="form-control" id="search-term"/>
  </div>

{/*  -- Here we capture the Start Year Parameter-- */}
  <div className="form-group">
    <label for="start-year">Start Year (Optional):</label>
    <input type="text" class="form-control" id="start-year" />
  </div>

{/*  -- Here we capture the End Year Parameter -- */}
  <div className="form-group">
    <label for="end-year">End Year (Optional):</label>
    <input type="text" className="form-control" id="end-year" />
  </div>

{/*  -- Here we have our final submit button -- */}
  <button type="submit" class="btn btn-default" id="run-search">
    <i className="fa fa-search"/> Search</button>
  <button className="btn btn-default" id="clear-all">
    <i className="fa fa-trash"/> Clear Results</button>
    </form>
    </div>
);

export default ContainerSearch;
