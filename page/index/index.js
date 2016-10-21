/**
 * 主页index
 * @author Perlou
 */

 Page({
    data: {
        text: 'init data',
        array: [{
            text: 'init data'
        }],
        object: {
            text: 'init data'
        },
        item: {
            index: 0,
            msg: 'this is a tpl',
            time: '2016'
        }
    },
    changeText: function(){
        this.setData({
            text: 'changed data'
        })
    },
    changeItemInArray: function(){
        this.setData({
           'array[0].text': 'changed data' 
        })
    },
    changeItemInObject: function(){
        this.setData({
            'object.text': 'changed data'
        })
    },
    addNewField: function(){
        this.setData({
            'newField.text': 'new data'
        })
    }
 })