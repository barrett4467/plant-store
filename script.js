var app = new function() {
    //getting table body
    this.el = document.querySelector("#plants");
    //assigning to element
    this.plants=[];

    this.FetchAll = function() {
        var data= "";

        if(this.plants.length>0){
            for(i=0; i< this.plants.length; i++){
                data+="<tr>";
                data+="<td>"+(i+1)+". "+ this.task[i] + "</td>";
                data+='<td><button onclick="app.Edit('+i+')"class="btn btn-warning">Edit</button></td>';
                data+='<td><button onclick="app.Delete('+i+')"class="btn btn-danger">Delete</button></td>';
                data+="</tr>"
            }
        }
        this.Count(this.plants.length);
        return this.el.innerHTML = data;

    };

    this.Add = function() {
        el = document.querySelector("#add-plant");
        var task = el.value;
        if(task){
            this.plants.push(task.trim());
            el.value="";
            this.FetchAll();
        }
    };

    this.Edit = function(item) {

    };
    this.Delete = function(item){

    };

    this.Count = function(data){

    };
}

app.FetchAll();

function CloseInput() {
    document.querySelector(".edit-box").style.display = "none";
}