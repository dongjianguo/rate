(function($) {

    'use strict';

    $.fn.rate = function(config) {

        //获取启用rate的DOM结构
        var self = $(this);

        //默认配置定义
        if(config === undefined) {
            var deafault = {
                //默认配置，评分对应文字数组（由低往高）
                arrayData: ['很不满意', '不满意', '一般', '满意' ,'非常满意'],
                //默认配置，i标签的类名，依赖fonts字体图标文件
                icon: 'iconfont icon-favorite',
                //默认配置，初始评价等级(默认为0)
                init: 0,
                //默认配置，调试功能（默认关闭）
                debug: false,
            }

            config = deafault;

            //默认arrayData值
            if(config.arrayData === undefined) {
                config.arrayData = deafault.arrayData;
            }

            //默认icon值
            if(config.icon === undefined) {
                config.icon = deafault.icon;
            }

            //默认init值
            if(config.init === undefined) {
                config.init = 0;
            }

            //默认debug值
            if(config.debug === undefined) {
                config.debug = false;
            }

        }

        //调试信息输出config配置信息
        if(config.debug) {
            console.log(config);
        }

        //定义经处理后生成的模版数据信息,并存在srcData这一数组
        var srcData = [];
        for(var i = 0; i < config.arrayData.length; i++) {
            srcData.push({
                index: i,
                icon: config.icon,
                content: config.arrayData[i]
            });
        }

        //调试信息输出经处理后的srcData这一数组
        if(config.debug) {
            console.log(srcData);
        }

        //定义字符串扩展方法，处理模版生成
        String.prototype.temp = function(obj) {
            return this.replace(/\$\w+\$/gi, function(matchs) {
                var returns = obj[matchs.replace(/\$/g, "")];
                return (returns + "") == "undefined"? "": returns;
            });
        };

        //创造i标签,并为其赋予属性
        var icon = document.createElement('i');
        $(icon).attr('class', '$icon$');

        //创造a标签，并为其赋予属性，并将i放入里面
        var anchor = document.createElement('a');
        $(anchor).attr({class: 'rate-anchor', href: 'javascript:;'});
        $(anchor).attr('data-index', '$index$');
        $(anchor).attr('data-content', '$content$');
        $(anchor).html(icon);

        //创造template标签，并将a放入里面
        var template = document.createElement('div');
        $(template).html(anchor);

        //定义html模版,用于遍历生成图标
        var htmlTemplate = $(template).html();

        //调试信息输出html模版
        if(config.debug) {
            console.log(htmlTemplate);
        }

        //定义经过处理后的html结构
        var htmlList = '';
        srcData.forEach(function(obj) {
            htmlList += htmlTemplate.temp(obj);
        });

        //调试信息输出处理过后的结构
        if(config.debug) {
            console.log(htmlList);
        }

        //将生成的html结构填充到响应的容器内
        self.find('.rate-wrapper').html(htmlList);

        //设置初始化的评分等级
        if(config.init!==0 && config.init <= config.arrayData.length) {
            var index = config.init;
            self.data('value', index);
            var array = self.find('.rate-anchor');
            self.find('.rate-anchor').removeClass('active');
            for(var i = 0 ; i < array.length; i++) {
                $(array[i]).data('index') < index?$(array[i]).addClass('active'):$(array[i]).removeClass('active');
            }
            //self.find('.rate-anchor:lt(' + index + ')').addClass('active');
            var content = config.arrayData[index-1];
            self.find('.rate-text').html(content);
        }

        //绑定点击事件
        $('.rate-wrapper').on('click', '.rate-anchor', function() {

            //获取点击的index值
            var index = $(this).data('index') + 1;

            self.data('value', index);

            //调试信息输出点击的按钮的序号
            if(config.debug) {
                console.log('您点击了第'+ index + '个按钮');
            }

            //找到最近的父级元素.rate-wrapper,并将子元素按钮.rate-anchor的并让点击的加上active类名
            var wrapper = $(this).closest('.rate-wrapper');
            var array = self.find('.rate-anchor');
            wrapper.find('.rate-anchor').removeClass('active');
            for(var i = 0 ; i < array.length; i++) {
                $(array[i]).data('index') < index?$(array[i]).addClass('active'):$(array[i]).removeClass('active');
            }
            //wrapper.find('.rate-anchor:lt(' + index +')').addClass('active');

            //把点击的相应的文字描述赋值到.rate-text文本内
            var content = $(this).data('content');
            $(this).parent('.rate-wrapper').siblings('.rate-text').html(content);

            //调试信息输出点击的对应文字
            if(config.debug) {
                console.log(content);
            }

        });

    }


})(window.jQuery||window.Zepto);
