angular.module("directives",[])
    .directive("abc",function () {
        return {
            restrict:"ECA",
            templateUrl:"demo.html",
            transclude:true,
            scope:[
                //修复bug  每个指令互相独立。不会相互影响
                //可写true false  @  &
            ],
            link:function ($scope,b,c) {
                $scope.data=[
                    {
                        name:"111",
                        son:[
                            {name:"1-1"},
                            {name:"1-2"},
                            {name:"1-3"},
                            {name:"1-4"},
                        ]
                    },
                    {
                        name:"222",
                        son:[
                            {name:"2-1"},
                            {name:"2-2"},
                            {name:"2-3"},
                            {name:"2-4"},
                        ]
                    },
                    {
                        name:"333",
                        son:[
                            {name:"3-1"},
                            {name:"3-2"},
                            {name:"3-3"},
                            {name:"3-4"},
                        ]
                    },
                ];

                $scope.a=0;
                $scope.change=function (id) {
                    $scope.a=id;
                }
            }
        }
    })