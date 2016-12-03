angular.module("APP",[])
.controller("myCtrl",["$scope",function($scope){
    var table=[
        {
            name:"DANY",
            names:"vane",
            number:1233.5,
            spice:1233.5,
            time:1480677590000
        },
        {
            name:"BACA",
            names:"kdaw",
            number:66880.5,
            spice:66880.5,
            time:1120677590000
        },
        {
            name:"ARETG",
            names:"aswf",
            number:232334.2,
            spice:232334.2,
            time:1260677590000
        },
        {
            name:"CSDW",
            names:"fsed",
            number:68000.0,
            spice:68000.0,
            time:134677590000
        }
    ];
    $scope.table=table;
    $scope.one=function(type){
        $scope.sort=type;
    }
    $scope.two=function(type){
        $scope.sort=type;
    }
    $scope.three=function(type){
        $scope.sort=type;
    }
    $scope.four=function(type){
        $scope.sort=type;
    }
}])








