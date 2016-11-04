
import ajaxBasic from './ajaxBasic.js';
import $ from 'jquery';
import _ from 'underscore'



    var ajax = new ajaxBasic ({
        urlPrefix : "",
        urlPostfix : ""
    });

    var module = {};

    /**
     * @brief 加载数据库源组件
     */
    module.test = function (callback) {
        $.getJSON ("/data/test.json",callback);
    };


export default module
