const expDetails = [
  { 
    title:"Citizens Bank – Senior Full Stack Developer",
    text:`${`"""`}${`"""`}` + `
${`"""`}
` + 
`Spearheaded core banking modernization across SDLC…  
✓ Java 17, Microservices, DDD  
✓ AWS, Kubernetes, Docker  
✓ AI (RAG, NLP, ML models)  
✓ GraphQL, Angular 15  
✓ Kafka event-driven architecture  
✓ OAuth2/JWT security redesign  
✓ Spring Batch, Resilience4j, MongoDB  
✓ CI/CD with GitHub Actions  
${`"""`}`
  },
  {
    title: "Discovery – Senior Full Stack Developer",
    text: `
• Built cloud-native streaming platforms  
• Java 14, Spring Boot, GraphQL  
• Event-driven microservices with Kafka  
• Angular 14 + SCSS front-end  
• AWS EC2, Lambda, RDS, CloudFormation  
• Distributed caching & metadata APIs  
`
  },
  {
    title: "McKesson – Full Stack Developer",
    text: `
• Healthcare systems modernization  
• Java 11, Streams API, WebFlux  
• Azure VM + App Services  
• React UI modernization  
• PostgreSQL tuning, JPA/Hibernate  
• ActiveMQ, OpenShift, Docker  
`
  },
  {
    title: "Western Alliance Bank – Java Developer",
    text: `
• Spring Boot microservices  
• SQL Server stored procedures  
• Azure cloud deployments  
• Angular + TypeScript  
• RabbitMQ messaging  
`
  },
  {
    title:"Macy’s – Java Developer",
    text: `
• E-commerce backend systems  
• Spring MVC + Oracle  
• SOAP & REST integrations  
• UI using HTML, CSS, Bootstrap, Dojo  
• Selenium automation  
`
  }
];

function openExp(i){
  document.getElementById("exp-modal-title").innerText = expDetails[i].title;
  document.getElementById("exp-modal-text").innerText = expDetails[i].text;
  document.getElementById("exp-modal").style.display = "flex";
}

function closeExp(){
  document.getElementById("exp-modal").style.display = "none";
}
