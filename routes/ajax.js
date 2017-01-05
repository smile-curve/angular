var express=require("express");
var router=express.Router();
router.use("/ajax",function (req,res) {
    var data=[
        {name:"张三",phone:"13283673350",en:"z"},
        {name:"李四",phone:"13283673350",en:"l"},
        {name:"王五",phone:"13283673350",en:"w"},
        {name:"徐六",phone:"13283673350",en:"x"},
        {name:"岳七",phone:"13283673350",en:"y"},
        {name:"张四",phone:"13283673350",en:"z"},
        {name:"李五",phone:"13283673350",en:"l"},
        {name:"王六",phone:"13283673350",en:"w"},
        {name:"徐七",phone:"13283673350",en:"x"},
        {name:"岳八",phone:"13283673350",en:"y"},
        {name:"张一",phone:"13283673350",en:"z"},
        {name:"李二",phone:"13283673350",en:"l"},
        {name:"王三",phone:"13283673350",en:"w"},
        {name:"徐四",phone:"13283673350",en:"x"},
        {name:"岳五",phone:"13283673350",en:"y"},
        {name:"张六",phone:"13283673350",en:"z"},
        {name:"李七",phone:"13283673350",en:"l"},
        {name:"王八",phone:"13283673350",en:"w"},
        {name:"徐九",phone:"13283673350",en:"x"},
        {name:"岳三",phone:"13283673350",en:"y"},
        {name:"张八",phone:"13283673350",en:"z"},
        {name:"李六",phone:"13283673350",en:"l"},
        {name:"王一",phone:"13283673350",en:"w"},
        {name:"徐二",phone:"13283673350",en:"x"},
        {name:"岳岳",phone:"13283673350",en:"y"}
    ]
    res.send(JSON.stringify(data));
})

module.exports=router;