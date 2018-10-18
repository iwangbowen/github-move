import { TextInput, SelectInput, ToggleInput } from '../../inputs/inputs';
import { inputTypeNames } from '../inputTypes';
import { dataComponentId, dataConfigInfo, dataCalendarId } from '../common';
import {
    cloneWithoutOnclick, getDateFmt, getParsedConfigInfo,
    setDataConfigInfo, setOnclickAttr
} from '../../util/dataAttr';
import input from './input';
import { calendarid } from './ids';
import { property as tooltipProperty } from '../tooltip';
import _ from 'lodash';

const datetimeinputcustom = _.extend({}, input, {
    name: "Datetime Input",
    attributes: { "type": inputTypeNames },
    image: "icons/calendar.svg",
    html: `<div ${dataComponentId}="${calendarid}" class="everyOutbox-right draggable">
            <div class="btn-group">
                <div class="dailyBox">
                    <input ${dataCalendarId} ${dataConfigInfo}="{'dateFmt': 'yyyy-MM-dd HH:mm'}" ${dataComponentId}="${calendarid}" lustyle="height: 2.8rem;width:13rem "
                    type="text" class="form-control Wdate"/>
                 </div>
            </div>
           </div>`,
    properties: [{
        name: "Value",
        key: "value",
        htmlAttr: "value",
        inputtype: new TextInput()
    }, {
        name: "Placeholder",
        key: "placeholder",
        htmlAttr: "placeholder",
        inputtype: new TextInput()
    }, {
        name: 'Name',
        key: 'name',
        htmlAttr: 'name',
        inputtype: new TextInput()
    }, {
        name: "Date Format",
        key: "dateFmt",
        inputtype: new SelectInput(),
        init: getDateFmt,
        onChange: function (node, value) {
            const configInfo = getParsedConfigInfo(node)
            configInfo.dateFmt = value;
            setDataConfigInfo(node, configInfo);

            if (node.attr('onclick')) {
                return setOnclickAttr(cloneWithoutOnclick(node));
            }
            return node;
        },
        data: {
            options: [{
                value: 'yyyy-MM-dd HH:mm',
                text: 'yyyy-MM-dd HH:mm'
            }, {
                value: 'yyyy-MM-dd HH:mm:ss',
                text: 'yyyy-MM-dd HH:mm:ss'
            }, {
                value: 'yyyy-MM-dd',
                text: 'yyyy-MM-dd'
            }, {
                value: 'yyyyMMdd',
                text: 'yyyyMMdd'
            }, {
                value: 'yyyyMM',
                text: 'yyyyMM'
            }, {
                value: 'yyyy',
                text: 'yyyy'
            }]
        }
    }, {
        name: "Show Datetime",
        key: "showDatetime",
        validValues: ["table-responsive"],
        inputtype: new ToggleInput(),
        onChange(node, value) {
            if (value == 'on') {
                setOnclickAttr(node);
            } else {
                cloneWithoutOnclick(node);
            }
        },
        data: {
            on: 'on',
            off: 'off'
        }
    }, {
        name: "Required",
        key: "required",
        htmlAttr: 'required',
        validValues: ["required"],
        noValueAttr: true,
        inputtype: new ToggleInput(),
        data: {
            on: 'required',
            off: ''
        }
    }, tooltipProperty]
});

export default datetimeinputcustom;