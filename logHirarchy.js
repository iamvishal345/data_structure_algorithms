const employeesData = [
  {
    id: 2,
    name: "Abhishek (CTO)",
    reportees: [6],
  },
  {
    id: 3,
    name: "Abhiram (COO)",
    reportees: [],
  },
  {
    id: 6,
    name: "Abhimanyu (Engineering Manager)",
    reportees: [9],
  },
  {
    id: 9,
    name: "Abhinav (Senior Engineer)",
    reportees: [],
  },
  {
    id: 10,
    name: "Abhijeet (CEO)",
    reportees: [2, 3],
  },
];

/*
A (CEO)
---------B (CTO)
-------------D (Engineering Manager)
-----------------E (Senior Software Engineer)
---------C (COO)
*/

const findCeo = (currentEmp) => {
  let parentEmployee = employeesData.find(
    (emp) => emp.reportees.indexOf(currentEmp.id) > -1
  );
  if (parentEmployee) {
    return findCeo(parentEmployee);
  } else {
    return currentEmp;
  }
};

const logHierarchy = (currentEmp, indent) => {
  console.log("-".repeat(indent) + currentEmp.name);
  indent += 4;
  for (let i = 0; i < currentEmp.reportees.length; i++) {
    let employee = employeesData.find(
      (emp) => emp.id === currentEmp.reportees[i]
    );
    logHierarchy(employee, indent);
  }
};

const traverse = (employee) => {
  let ceo = findCeo(employee);
  logHierarchy(ceo, 0);
};

traverse(employeesData[0]);
