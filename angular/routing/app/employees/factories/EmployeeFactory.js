angular
.module("EmployeeApp")
.factory("EmployeeFactory", function ($http) {
    return Object.create(null, {
        "list": {
            value: function () {
                return $http({
                    method: "GET",
                    url: "https://employee-db-1670b.firebaseio.com/.json"
                }).then(response => {
                    const data = response.data

                    // Make an array of objects so we can use filters
                    return Object.keys(data).map(key => {
                        data[key].id = key
                        return data[key]
                    })
                })
            }
        },
        "single": {
            value: function (key) {
                return $http({
                    method: "GET",
                    url: `https://employee-db-1670b.firebaseio.com/${key}/.json`
                }).then(response => {
                    return response.data
                })
            }
        },
        "add": {
            value: function (employee) {
                return $http({
                    method: "POST",
                    url: "https://employee-db-1670b.firebaseio.com/.json",
                    data: {
                        "firstName": employee.firstName,
                        "lastName": employee.lastName,
                        "employmentStart": Date.now(),
                        "employmentEnd": 0
                    }
                })
            }
        }
    })
})