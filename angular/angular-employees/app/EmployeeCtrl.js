const app = angular.module("EmployeeMngmt", [])

app.controller("EmployeeCtrl", function ($scope, $http) {
    // stupid title
    $scope.title = "'fix the glitch in payroll'";
    // empty object
    $scope.newEmployee = {}
    // empty array
    $scope.employees = []



    //Wizard teves code
    // GET
    const getEmployees = () => {
        // ajax request firebase
        $http
            .get("https://employee-db-1670b.firebaseio.com/.json")
            .then(
                function (response) {
                    // set employees to ajax response . data key
                    $scope.employees = response.data
                    // log for fun
                    console.log(response, "teehee i keep running and ruining everything!")
                }
            )
    }
    // POST
    const addEmployee = () => {
        debugger
        // ajax request firebase
        $http
            .post("https://employee-db-1670b.firebaseio.com/.json",
                // information to be stored into the object sent to firebase
                {
                    "firstName": $scope.newEmployee.firstName,
                    "lastName": $scope.newEmployee.lastName,
                    "employmentStart": Date.now(),
                    "employmentEnd": 0
                }
            )
            .then(() => {
                // Clear the form, invoke GET to refresh data on DOM
                $scope.newEmployee.firstName = ""
                $scope.newEmployee.lastName = ""
                // document.forms["hire"].reset()
                getEmployees()
            })
    }

    // DELETE (passing in employee and the key we are on)
    $scope.killEmployee = function (employee, key) {
        // set end of employment to current time
        employee.employmentEnd = Date.now()
        // ajax request firebase
        $http
            .put(`https://employee-db-1670b.firebaseio.com/${key}.json`,
                JSON.stringify(employee)
            )
            //call GET/refresh
            .then(getEmployees)
    }
    //init function called on page load. Requests db and populates.
    getEmployees()

})