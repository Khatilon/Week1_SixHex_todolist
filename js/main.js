window.onload=function(){

    console.log("hi");

    var content=document.getElementById("inputContent");
    var todo=document.getElementById("todoSubmit");
    var itemList=document.querySelector("#itemList");
    var clearall=document.getElementById("clearall");
    var totalTask=document.querySelector(".totalTask");

    var data=[];
    var string="";

    function updateData(){

        var nowContent=content.value;

        if(nowContent===""){
            alert("You can not input the empty data!!");
            return;
        }
        data.push(nowContent);
        content.value="";

        addItem(data);
    }

    function doItem(e){
        console.log(e.target);
        console.log(e.target.nextElementSibling);
        e.target.classList.toggle("finish");
        e.target.nextElementSibling.classList.toggle("done");

    }

    function removeData(e){
        let makesure=confirm("Are you sure to delete the item?");

        if(makesure){
            console.log(e.target.dataset.id);
            var nowid=e.target.dataset.id;

            data.splice(nowid,1);
            addItem();
        }

    }

    function addItem(){

        string="";
        var count=0;
        console.log(data);

        data.forEach(function(item,index){
            console.log(item,index);
            string=string+
            `<li class="d-flex">
                <div class="chkbox"></div>
                <div class="content flex-grow-1">
                    ${item}
                </div>
                <a href="#" class="delete" data-id="${index}">x</a>
            </li>`;
            count++;
            
        })

        totalTask.innerHTML=`總共有${count}筆資料`;
        itemList.innerHTML=string;

        var chkbox=document.querySelectorAll(".chkbox");
        var del=document.querySelectorAll(".delete");

        chkbox.forEach(function(ele,i){
            ele.addEventListener("click",doItem);
        })

        del.forEach(function(ele,i){
            ele.addEventListener("click",removeData);
        })

        
    }

    function clearallItems(){
        data=[];
        addItem(data);
    }

    addItem(data);
    todo.addEventListener("click",updateData);
    clearall.addEventListener("click",clearallItems);
}