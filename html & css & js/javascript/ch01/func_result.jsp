<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <%
    <!-- 서유럽언어 인코딩 (iso-8859-1)을 다국적 인코딩으로 변환 -->
    <!-- 한국어 처리 -->
    request.setCharacterEncoding("utf-8");
    String name = request.getParameter("name");
    String position = request.getParameter("position");
    String str=name+" " +position+"님의 방문을 환영합니다.";
    out.println(str);
   %>

</body>

</html>