import { TextInput, SelectInput } from '../../inputs/inputs';
import { inputTypes, inputTypeNames } from '../inputTypes';
import { dataComponentId } from '../common';

const textinput = {
    name: "Text Input",
    attributes: { "type": inputTypeNames },
    image: "icons/text_input.svg",
    html: `<div class="everyOutbox-right draggable">
            <div class="btn-group">
                <div class="dailyBox">
                    <input ${dataComponentId}="html/textinput@oee" lustyle="height: 2.8rem;width:13rem " type="text" class="form-control"/>
                 </div>
            </div>
           </div>`,
    properties: [{
        name: "Value",
        key: "value",
        htmlAttr: "value",
        inputtype: TextInput
    }, {
        name: "Placeholder",
        key: "placeholder",
        htmlAttr: "placeholder",
        inputtype: TextInput
    }, {
        name: 'Name',
        key: 'name',
        htmlAttr: 'name',
        inputtype: TextInput
    }, {
        name: 'type',
        key: 'type',
        htmlAttr: 'type',
        inputtype: SelectInput,
        data: {
            options: inputTypes
        }
    }]
};

export default textinput;