# AmazeUI Rate 插件

## 插件说明

	这是一个基于AmazeUI扩展而来的评分插件，有自定义性强，容易使用的特点,依赖与AmazeUI和jQuery，以及集合在AmazeUI图标中的字体图标。用户只需要拷贝相应的HTML的DOM结构，调用.rate()方法即可生成一个默认配置的评分插件；若想要个性化的评分亦可在AmazeUI图标内选择相应的图标，记录下该图标的类名，并将该类名作为参数传入即可快速完成个性化的评分插件。若要更改插件的评分等级数以及对应的评分文字说明只要将评分文字说明由最低等级到最高等级排列的数组传入，即可达到个性化的评分插件。具体使用方法可以参考下列的几个例子，但不仅仅局限于下列例子。

## 插件依赖

	插件依赖于AmazeUI，首先我们必须引入AmazeUI的CSS文件以及对应的JS文件。由于AmazeUI依赖与jQuery，我们的插件也是基于jQuery扩展而来的，同时，插件亦依赖于AmazeUI中的字体图标。在使用插件前请核对如下依赖是否引入：

1.AmazeUI（包括css文件，js文件，以及css引入字体图标需要的fonts文件夹中的字体文件）

2.jQuery

## 插件自身文件

	插件自身的文件仅有两个，一个是css文件amazeui.rate.css，一个是js文件，amazeui.rate.js。使用之前请确保如下条件是否满足

1.引入amazeui.rate.css

2.确保在引入jQuery之后引入amazueui.rate.js

## 插件API

1.调用插件$(selector).rate(config),其中selector为jQuery的选择器，用于选中我们插件生成的具体的.am-rate的HTML结构，config参数，类型为对象，为非必要参数，若没传入参数直接调用.rate()则调用默认参数。

2.$(selector).rate(config)中，config参数说明：

|         名称   |       类型    | 默认值  |
| :-----------: |:-------------:| :----:|
|  config       |       对象     |＊config|

＊config： {
	
	//默认配置，评分对应文字数组（由低往高）
	
    arrayData: ['很不满意', '不满意', '一般', '满意' ,'非常满意'],
    
    //默认配置，i标签的类名，依赖amazeUI的fonts字体图标文件,以及对应的amazeUI中css文件
    
    icon: 'am-icon-star',
    
    //默认配置，初始化的等级（由最低级1开始依次递增，填入大于1且小于传入的arrayData的长度的数字即可）
    
    init: 0,
    
    //默认配置，调试功能（默认关闭）
    
    debug: false,
}

3.config中的参数说明

|         名称   |       类型    |      默认值    |
| :-----------: |:-------------:|    :----:     |
|  arrayData    |       数组     |  ＊arrayData  |
|      icon     |      字符串    | 'am-icon-star'|
|      init     |       数字     |       0      |
|      debug    |      布尔值    |     false     |

＊arrayData：

['很不满意', '不满意', '一般', '满意' ,'非常满意']

### arrayData
	类型为数组，数组每一项均为字符串；传入评分等级对应的文字说明字符串的数组，由最低级排到最高级，插件会根据数组长度生成相应的图标数目，默认值为['很不满意', '不满意', '一般', '满意' ,'非常满意']。
	
### icon
	类型为字符串，传入字体图标的类名，具体的字体图标库参考amazeUI的图标栏目，默认值为'.am-icon-star'，形状为星星的图标。
	
### init
	类型为数字，传入一个数字，这个数字指的是arrayData中的数组，由低到高的序号，由1开始。最低级是1，最大值是arrayData的数组长度。若小于1或者为大于arrayData数组的长度则会被忽略。设置完init之后，插件会把初始显示置于该等级。默认值为0，即不选择评分等级。
	
### dubug
	类型为布尔值，传入调试模式是否打开的配置信息，若为true则会输出插件中的调试信息，便于调试插件；若为false则不输出调试信息，默认为false。

## 自定义颜色
	若想更改未选中以及选中的颜色，仅需要更改插件自身的css文件'amazeui.rate.css'中的类即可：
	
	1.更改未选中时的颜色，文件第9行，.am-rate-wrapper a { color: #e5e5e5; },把'#e5e5e5'改为想要的颜色即可；
	
	2.更改选中后的颜色，文件第13行， .am-rate-wrapper .active { color: #0e90d2; },把'#0e90d2'改为想要的颜色即可；	