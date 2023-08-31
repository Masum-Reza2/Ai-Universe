fetch('https://openapi.programming-hero.com/api/ai/tools')
.then(res => res.json())
.then(res => console.log(res.data.tools[0]))