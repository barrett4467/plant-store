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
                data+="<td>"+ (i+1) + ". "+ this.plants[0] + "</td>";
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
        var plant = el.value;
        console.log(plant);
        if(plant){
            this.plants.push(plant.trim());
            el.value="";
            this.FetchAll();
        }
    };

    this.Edit = function(item) {
        el = document.querySelector("#edit-plant");
        el.value = this.plants[item]
        document.querySelector("#edit-box").style.display = "block";
        self=this;

        document.querySelector("#save-edit").onsubmit = function(){
            var plant = el.value;
            if(plant){
                self.plants.splice(item, 1, plant.trim());
                self.FetchAll();
                CloseInput();
            }
        }
    };
    this.Delete = function(item){
        this.plants.splice(item, 1);

        this.FetchAll();
    };

    this.Count = function(data){
        var el = document.querySelector("#counter");
        var name = "Plants";
        if(data){
            if(data == 1){
                name= "Plant";
            }
            el.innerHTML = data+" "+ name;
        } 
        else {
            el.innerHTML = "No " + name;
        }
    };
}

app.FetchAll();

function CloseInput() {
    document.querySelector("#edit-box").style.display = "none";
}