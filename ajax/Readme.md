���ajax����������˷��ؽ��responseText����JSON�����ݡ�

��һ��json��ʽ���ļ��������£�

[plain] view plain copy
{  
    "city":"ShangHai",  
    "telephone":"123456789"  
}  

�ڶ����������˷��ص�json���ݾ���������������responseText�У�����Ҫȡ���������������֣�
����1��

[html] view plain copy
var json=JSON.parse(request.responseText);  
alert(json.city);  
����2��
[html] view plain copy
var result = request.responseText;  
var jsonObject=eval("("+result+")");  
alert(jsonObject.telephone);  