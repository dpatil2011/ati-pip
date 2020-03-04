import React, { Component } from 'react';
import $ from 'jquery';
class BloodGroup extends React.Component {

  bgrp(){
    var bgrp = $('#bldGrp').val();
    sessionStorage.setItem('bldGrp',bgrp);
  }
 render(){
  
 return (
   <div className="form-group col-md-6">
        <select id="bldGrp" name="bldGrp" onChange={this.bgrp.bind()} class="form-control">
        <option value="">-- Select Blood-Group --</option>
        <option value="A Positive">A Positive</option>
        <option value="A Negative">A Negative</option>
        <option value="A Unknown">A Unknown</option>
        <option value="B Positive">B Positive</option>
        <option value="B Negative">B Negative</option>
        <option value="B Unknown">B Unknown</option>
        <option value="AB Positive">AB Positive</option>
        <option value="AB Negative">AB Negative</option>
        <option value="AB Unknown">AB Unknown</option>
        <option value="O Positive">O Positive</option>
        <option value="O Negative">O Negative</option>
        <option value="O Unknown">O Unknown</option>
        <option value="Unknown">Unknown</option>
        </select>
</div>
    )
}
}
export default BloodGroup