function generateTeam(teamData) {
  // create managerCard template
  const managerCard = (manager) => {
    return `
     <div class="card m-4 w-30">
        <div class="card-title bg-primary p-2">
          <h3 class="text-light">${manager.getName()}</h3>
          <h4><i class="bi bi-person-badge me-3 text-light"></i>${manager.getRole()}</h4>
        </div>
        <div class="card-body rounded">
          <ul class="list-group list-group-flush rounded">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
          </ul>
        </div>
      </div>`;
  };

  // Create engineerCard template
  const engineerCard = (engineer) => {
    return `
      <div class="card m-4 w-30">
        <div class="card-title bg-primary p-2">
          <h3 class="text-light">${engineer.getName()}</h3>
          <h4><i class="bi bi-cpu me-3 text-light"></i>${engineer.getRole()}</h4>
        </div>
        <div class="card-body rounded">
          <ul class="list-group list-group-flush rounded">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
          </ul>
        </div>
      </div>
    `;
  };

  //Create internCard template
  const internCard = (intern) => {
    return `
      <div class="card m-4 w-30">
        <div class="card-title bg-primary p-2">
          <h3 class="text-light">${intern.getName()}</h3>
          <h4><i class="bi bi-stickies me-3 text-light"></i>${intern.getRole()}</h4>
        </div>
        <div class="card-body rounded">
          <ul class="list-group list-group-flush rounded">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">Education: ${intern.getSchool()}</li>
          </ul>
        </div>
      </div>
    `;
  };
  //Array to keep track of cards that'll be created
  const cardsGenerated = [];

  cardsGenerated.push(teamData.filter((employee) => employee.getRole() === "Manager").map((manager) => managerCard(manager)));

  cardsGenerated.push(teamData.filter((employee) => employee.getRole() === "Engineer").map((engineer) => engineerCard(engineer)));

  cardsGenerated.push(teamData.filter((employee) => employee.getRole() === "Intern").map((intern) => internCard(intern)));

  return cardsGenerated.join();
}

//Export the template to make it available anywhere w/ all the HTML
module.exports = (teamData) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Google fonts  -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans&family=Montserrat:wght@500&display=swap" rel="stylesheet" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />

    <title>Team Profile</title>
    <style>
      body {
        font-family: "Merriweather Sans", sans-serif;
      }
    </style>
  </head>
    <body>
    <header class="container-fluid bg-danger text-light p-4 text-center mb-5">
      <h2>My team profile</h2>
    </header>
    <main class="container d-flex flex-wrap justify-content-center align-content-center">
    
    // Update the html with the cards generated 
    ${generateTeam(teamData)}
      </main>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
  `;
};
