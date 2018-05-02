## 解决ajax处理服务器端返回结果responseText中是JSON的数据。

* ### 第一，json格式的文件内容如下：

~~~
  {  
    "city":"ShangHai",  
    "telephone":"123456789"  
  }  
~~~
* ### 第二，服务器端返回的json数据就是上述的内容在responseText中，现在要取出来，方法有两种：
方法1：
~~~
  var json=JSON.parse(request.responseText);  
  alert(json.city);  
~~~
方法2
~~~
  var result = request.responseText;  
  var jsonObject=eval("("+result+")");  
  alert(jsonObject.telephone);  
~~~
