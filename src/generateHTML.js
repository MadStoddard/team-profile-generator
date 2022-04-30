const lastProperty = (employee) => {
    if (employee.getRole() == "Manager") {
        return ` <li class="list-group-item">${employee.officeNumber}</li>`
    } else if (employee.getRole() == "Engineer") {
        return  `<li class="list-group-item">${employee.getGithub()}</li>`
    } else {
        return `<li class="list-group-item">${employee.getSchool()}</li>`
    }
}

const generateHTML = (employees) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    ${
        employees.map((employee) => {
            return `
            <div class="card" style="width: 18rem;">
            <div class="card-header">
            <h1>${employee.getName()}</h1>
            <h2>${employee.getRole()}</h2>
            </div>
            <ul class="list-group list-group-flush">
             <li class="list-group-item">${employee.getId()}</li>
            <li class="list-group-item">${employee.getEmail()}</li>
            ${lastProperty(employee)}
            </ul>
            </div>
            `
        })
    }
</body>
</html>
`
}

module.exports = generateHTML;

