function upload(input) {
    var head="<!DOCTYPE HTML>\n<head>\n<meta charset=\"UTF-8\">\n<title>Open Source Code - 代码库</title>\n</head>\n<p><a href=\"#\" onClick=\"javascript :history.back(-1);\">返回</a><p>\n<font face=\"Courier New\">";
    //支持chrome IE10
    if (window.FileReader) {
        var file = input.files[0];
        filename = file.name.split(".")[0];
        var reader = new FileReader();
        reader.onload = function() {
            //------------------------------------------------
            var str = this.result;
            var strcom="";
            strcom+=head;
            strcom+="<p>";
            for (var i=0;i<str.length;i++)
            {
                if(str[i]=='\"')strcom+="&quot;";
                else if(str[i]=='\'')strcom+="&apos;";
                else if(str[i]=='<')strcom+="&lt;";
                else if(str[i]=='&')strcom+="&amp;";
                else if(str[i]=='>')strcom+="&gt;";
                else if(str[i]==' ')strcom+="&nbsp;";
                else if(str[i]=='\n')strcom+="</p><p>";
                else if(str[i]=='\t')strcom+="&nbsp;&nbsp;&nbsp;&nbsp;";
                else strcom+=str[i];
            }
            strcom+="</p></font>";
            document.getElementById('cantupd').innerHTML = strcom;
            //------------------------------------------------
        }
        reader.readAsText(file);
    }
    //支持IE 7 8 9 10
    else if (typeof window.ActiveXObject != 'undefined'){
        var xmlDoc;
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.load(input.value);
        //------------------------------------------------
        var str = xmlDoc.xml;
        var strcom="";
        strcom+=head;
        strcom+="<p>";
        for (var i=0;i<str.length;i++)
        {
            if(str[i]=='\"')strcom+="&quot;";
            else if(str[i]=='\'')strcom+="&apos;";
            else if(str[i]=='<')strcom+="&lt;";
            else if(str[i]=='&')strcom+="&amp;";
            else if(str[i]=='>')strcom+="&gt;";
            else if(str[i]==' ')strcom+="&nbsp;";
            else if(str[i]=='\n')strcom+="</p><p>";
            else if(str[i]=='\t')strcom+="&nbsp;&nbsp;&nbsp;&nbsp;";
            else strcom+=str[i];
        }
        strcom+="</p></font>";
        document.getElementById('cantupd').innerHTML = strcom;
        //------------------------------------------------
    }
    //支持FF
    else if (document.implementation && document.implementation.createDocument) {
        var xmlDoc;
        xmlDoc = document.implementation.createDocument("", "", null);
        xmlDoc.async = false;
        xmlDoc.load(input.value);
        //------------------------------------------------
        var str = xmlDoc.xml;
        var strcom="";
        strcom+=head;
        strcom+="<p>";
        for (var i=0;i<str.length;i++)
        {
            if(str[i]=='\"')strcom+="&quot;";
            else if(str[i]=='\'')strcom+="&apos;";
            else if(str[i]=='<')strcom+="&lt;";
            else if(str[i]=='&')strcom+="&amp;";
            else if(str[i]=='>')strcom+="&gt;";
            else if(str[i]==' ')strcom+="&nbsp;";
            else if(str[i]=='\n')strcom+="</p><p>";
            else if(str[i]=='\t')strcom+="&nbsp;&nbsp;&nbsp;&nbsp;";
            else strcom+=str[i];
        }
        strcom+="</p></font>";
        document.getElementById('cantupd').innerHTML = strcom;
        //------------------------------------------------
    } else {
        document.getElementById('cantupd').innerHTML = "* 你尝试上传文件但没有反应";
    }
}