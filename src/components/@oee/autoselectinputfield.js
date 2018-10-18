import { dataComponentId, sortableClass, formItemClass } from '../common';
import { autoselectinputfieldid } from './ids';
import formlabel from './formlabel';
import autoselectinput from './autoselectinput';
import _ from 'lodash';
import inputfield from './inputfield';

const autoselectinputfield = _.extend({}, inputfield, {
    name: "Auto Select Field",
    image: 'icons/select_input.svg',
    html: `<div class="${formItemClass} ${sortableClass}" ${dataComponentId}="${autoselectinputfieldid}">
               ${formlabel.html}
               ${autoselectinput.html}
           </div>`
});

export default autoselectinputfield;