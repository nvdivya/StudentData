function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";
  
    var name = document.getElementById("name_row" + no);
    var ids = document.getElementById("ids_row" + no);
    var marks = document.getElementById("marks_row" + no);
  
    var name_data = name.innerHTML;
    var ids_data = ids.innerHTML;
    var marks_data = marks.innerHTML;
  
    name.innerHTML =
      "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
    ids.innerHTML =
      "<input type='number' id='ids_text" + no + "' value='" + ids_data + "'>";
    marks.innerHTML =
      "<input type='number' id='marks_text" +
      no +
      "' value='" +
      marks_data +
      "'>";
  }
  
  function save_row(no) {
    var name_val = document.getElementById("name_text" + no).value;
    var ids_val = document.getElementById("ids_text" + no).value;
    var marks_val = document.getElementById("marks_text" + no).value;
  
    document.getElementById("name_row" + no).innerHTML = name_val;
    document.getElementById("ids_row" + no).innerHTML = ids_val;
    document.getElementById("marks_row" + no).innerHTML = marks_val;
  
    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
  }
  
  function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
  }
  
  function add_row() {
    var new_name = document.getElementById("new_name").value;
    var new_ids = document.getElementById("new_ids").value;
    var new_marks = document.getElementById("new_marks").value;
  
    var table = document.getElementById("data_table");
    var table_len = table.rows.length - 1;
    var row = (table.insertRow(table_len).outerHTML =
      "<tr id='row" +
      table_len +
      "'><td id='name_row" +
      table_len +
      "'>" +
      new_name +
      "</td><td id='ids_row" +
      table_len +
      "'>" +
      new_ids +
      "</td><td id='marks_row" +
      table_len +
      "'>" +
      new_marks +
      "</td><td><input type='button' id='edit_button" +
      table_len +
      "' value='Edit' class='edit' onclick='edit_row(" +
      table_len +
      ")'> <input type='button' id='save_button" +
      table_len +
      "' value='Save' class='save' onclick='save_row(" +
      table_len +
      ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" +
      table_len +
      ")'></td></tr>");
  
    document.getElementById("new_name").value = "";
    document.getElementById("new_ids").value = "";
    document.getElementById("new_marks").value = "";
  }