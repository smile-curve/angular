angular.module("myapp",["ngRoute","ngAnimate","ctrls","sevices"])
    /*.run(function($remplateCache){
        $remplateCache.put("list.html","<div>myname</div>");
    })*/
.config(function ($routeProvider) {
  $routeProvider.when("/", {
      templateUrl:"index.html",
      controller:"index"
  }).when("/list/:id", {
      templateUrl:"list.html",
      controller:"list"
  }).when("/list",{
      templateUrl:"list.html",
      controller:"list"
  }).when("/show",{
      templateUrl:"show.html",
      controller:"list"
  }).otherwise("/")
})




