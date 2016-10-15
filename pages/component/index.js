/**
 * author Perlou
 * component index
 */

Page({
    data: {
        list: [
            {
                id: 'view',
                name: '视图内容',
                open: false,
                pages: ['view', 'scroll-view', 'swiper']
            }, {
                id: 'content',
                name: '基础内容',
                open: false,
                pages: ['text', 'icon', 'progress']
            }, {
                id: 'form',
                name: '表单组件',
                open: false,
                pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch']
            }, {
                id: 'feedback',
                name: '操作反馈',
                open: false,
                pages: ['action-sheet', 'modal', 'toast', 'loading']
            }, {
                id: 'nav',
                name: '导航',
                open: false,
                pages: ['navigator']
            }, {
                id: 'media',
                name: '媒体组件',
                open: false,
                pages: ['image', 'audio', 'video']
            }, {
                id: 'map',
                name: '地图',
                pages: ['map']
            }, {
                id: 'canvas',
                name: '画布',
                pages: ['canvas']
            }
        ]       
    }
}) 