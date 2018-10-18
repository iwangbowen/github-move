import input from './input';
import { TextInput } from '../../inputs/inputs';
import { property as tooltipProperty } from '../tooltip';
import _ from 'lodash';

const fileinput = _.extend({}, input, {
  name: 'File Input',
  attributes: { 'type': 'file' },
  image: 'icons/upload.svg',
  html: `<div class="btn-group draggable">
			    <input type="file" class=".form-control-file" style="width:147px;">
        </div>`,
  properties: [{
    name: 'Name',
    key: 'name',
    htmlAttr: 'name',
    inputtype: new TextInput()
  }, {
    name: 'Data Url',
    key: 'dataUrl',
    htmlAttr: 'data-url',
    inputtype: new TextInput()
  }, tooltipProperty]
});

export default fileinput;