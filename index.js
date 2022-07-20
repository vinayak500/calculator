function display(val){
   var editText =  document.getElementById("editText");
       editText.value = editText.value + val;
}


         function remove() {
            var editText =  document.getElementById("editText");
            editText.value= " ";
         }


         function result() {
            const result =  document.getElementById("editText").value;
            const answer = eval(result);
            document.getElementById("editText").value=answer;
         }