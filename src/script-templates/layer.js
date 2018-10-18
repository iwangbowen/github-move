import { dataTableId } from "../components/common";

function template(el) {
    return `
    var addContent = '${document.getElementById('iframeId').contentWindow.getAddContent()}';
    function addData() {
        layer.open({
            type: 1,
            title: '增加',
            skin: 'layui-layer-rim', //加上边框
            area: ['290px', '400px'], //宽高
            scrollbar: false,
            zIndex: 15,
            content: addContent
          });
    }
    var editContent = '${document.getElementById('iframeId').contentWindow.getEditContent()}';
    function editData() {
        layer.open({
            type: 1,
            title: '修改',
            skin: 'layui-layer-rim', //加上边框
            area: ['290px', '400px'], //宽高
            scrollbar: false,
            zIndex: 15,
            content: editContent
          });
    }
    function exportData() {
        var gridOptionsIdentifier = window['gridOptions' + $('[${dataTableId}]').attr('${dataTableId}')];
        gridOptionsIdentifier.api.exportDataAsCsv();
    }
    function deleteData() {
        layer.confirm('确定删除吗', {
            btn: ['删除', '取消']
        });
    }
    `;
}

export default template;