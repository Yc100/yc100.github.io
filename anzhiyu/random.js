var posts=["2023/05/26/20230526-1/","2023/05/31/20230531-1/","2023/05/27/20230601-1/","2023/06/05/20230605-1/","2023/06/08/20230608-1/","2024/05/27/20240527-1/","2024/05/23/20240523-1/","2021/06/03/hello-world/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};