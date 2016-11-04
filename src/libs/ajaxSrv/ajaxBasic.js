import $ from 'jquery';
import _ from 'underscore'


     /*
    {
        urlPrefix : // URL地址前缀
        urlPostfix : // URL地址后缀
    }
     */
    function ajaxBasic (option){
        var opt = $.extend (true, {}, option);
        _.isUndefined(opt.urlPrefix) && (opt.urlPrefix = "");
        _.isUndefined(opt.urlPostfix) && (opt.urlPostfix = "");
        this.option = opt;
    }

    /**
     * @brief 封装Ajax请求方法
     * @param[in] option = {
     *  method : 'post', 'get' 默认post
     *  , param : 向服务端发送的请求参数
     *  , resultFun : function/2 调用结果函数。第一个参数表示是否操作成功，成功时，第二个参数表示服务端返回的数据
     *                  ，失败时，表示错误信息。在失败时，有第三个参数，需要错误描述对象
     *  , success : function/1 回调接口，有一个参数，从服务端返回的数据
     *  , error : function/2 回调接口，有两个参数，第一个为错误原因。第二个错误描述对象包含state与message属性
     *  , preProcee : function/1 回调接口，数据预处理接口，此函数返回的数据将作为success回调接口的输入数据
     *  , successMsg : string 成功时，打印的日志信息
     *  , errorMsg : 失败时打印的日志信息
     * }
     */
    ajaxBasic.prototype.doRequest = function (option, url) {
        var rurl = this.option.urlPrefix + url + this.option.urlPostfix;
        console.debug (rurl + "  req:", option);
        var tparam = option.param || {};
        var param = "param=" + JSON.stringify(tparam);
        $.ajax ({
            type : !option.type && "POST"
            , data : param
            , url : rurl
			      , dataType:"json"
            , success : doSuccess
            , error : doError
        });


        function doSuccess (data) {
            data =typeof(data) == 'object' ? data : JSON.parse (data);
            console.debug (rurl + "  resp:", data);

            if (0 == data.status) {
                resultFun (true, data.data);
            }
            else {
                resultFun (false, data);
            }
        }

        function doError (data){
            console.debug (rurl + "  resp:", data);

            resultFun (false, {
                status : -1, message : data
            });
        }
        function resultFun (isSuccess, data) {
            if (isSuccess) {
                var rdata = data;
                // 如果定义了即处理函数，调用预处理函数
                if (!_.isUndefined (option.preProcee)) {
                    rdata = option.preProcee (data);
                }

                if (!_.isUndefined (option.success)) {
                    option.success (rdata);
                }

                if (!_.isUndefined (option.resultFun)) {
                    option.resultFun (true, rdata);
                }

                if (!_.isUndefined (option.successMsg)){
                    console.info (option.successMsg);
                }
            }
            else {
                var tdata = $.extend (true, {}, data);
                _.isUndefined (tdata.state) && (tdata.state = -1);
                _.isUndefined (tdata.message) && (tdata.message = "系统繁忙");

                if (!_.isUndefined (option.error)){
                    option.error (tdata.message, tdata);
                }

                if (!_.isUndefined (option.resultFun)) {
                    option.resultFun (false, tdata.message, tdata);
                }

                if (!_.isUndefined (option.errorMsg)){
                    console.warn (option.errorMsg);
                }
            }
        }
    };



export default ajaxBasic;
