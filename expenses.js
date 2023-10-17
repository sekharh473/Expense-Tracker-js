var expenseData = JSON.parse(localStorage.getItem("All_Expenses"));

let dateDataInput = () => {
  let datebox = document.getElementById("date");
  datebox.setAttribute("style", "");
};

let amountDataInput = () => {
  let amountbox = document.getElementById("amount");

  amountbox.setAttribute("style", "");
};

let validateFirst = () => {
  let date = document.getElementById("date").value;
  let Amount = document.getElementById("amount").value;
  // if(isNaN(Amount)) {
  //     console.log(" not a number");
  // }   else{
  //     console.log(" number");
  // }
  if (isNaN(Amount)) {
    let amountbox = document.getElementById("amount");
    amountbox.setAttribute("style", "border-color:red;color:red");
    amountbox.addEventListener("input", () => {
      amountDataInput();
    });
    return;
  } else {
    if (date && Amount) {
      let modalCloseBtninSbmt = document.getElementById("submit-btn");
      modalCloseBtninSbmt.setAttribute("data-dismiss", "modal");
      addExpense();
    } else {
      let modalCloseBtninSbmt = document.getElementById("submit-btn");
      modalCloseBtninSbmt.setAttribute("data-dismiss", "");
      if (!date) {
        let datebox = document.getElementById("date");
        datebox.setAttribute("style", "border-color:red;color:red");
        datebox.addEventListener("input", () => {
          dateDataInput();
        });
      }

      if (!Amount) {
        let amountbox = document.getElementById("amount");
        amountbox.setAttribute("style", "border-color:red;color:red");
        amountbox.addEventListener("input", () => {
          amountDataInput();
        });
      }
    }
  }
};

let addExpense = () => {
  // console.log("hello")
  let Exp = {
    DorC: document.getElementById("transaction").value,
    Date: document.getElementById("date").value,
    Catagory: document.getElementById("inputGroupSelect").value,
    Description: document.getElementById("description").value,
    Amount: document.getElementById("amount").value,
  };

  // switch(Exp.DorC){
  //     case "debit":
  //         Exp.Amount= `-${Exp.Amount}`
  //         break;
  //     case "credit":
  //         Exp.Amount= `+${Exp.Amount}`
  //         break;
  //     default:
  //         break
  // }
  // console.log(Exp.indexOf("credit"))
  if (expenseData) {
    expenseData.push(Exp);
  } else {
    expenseData = [Exp];
  }

  localStorage.setItem("All_Expenses", JSON.stringify(expenseData));

  // const items = expenseData.filter((item) => item.Catagory("Housing") !== -1);
  // console.log(items);
  //  console.log(localStorage.getItem("All_Expenses"));

  buildTable();
  newExpAdd();
  reset();
};

let buildTable = () => {
  var table = document.getElementById("result");
  table.innerHTML = "";
  let expenses = JSON.parse(localStorage.getItem("All_Expenses"));
  let creditDebit = {
    credit: 0,
    totalCredit: 0,
    debit: 0,
    totalDebit: 0,
  };

  for (i = 0; i < expenses.length; i++) {
    if (expenses[i].DorC === "debit") {
      creditDebit.debit++;
      creditDebit.totalDebit += Number(expenses[i].Amount);
    }
    if (expenses[i].DorC === "credit") {
      creditDebit.credit++;
      creditDebit.totalCredit += Number(expenses[i].Amount);
    }
    var row = `<tr id="${i}" class="dataRows">
        <td class="text-center ${expenses[i].DorC}row">${expenses[i].Date}</td>
        <td class="text-center ${expenses[i].DorC}row">${
      expenses[i].Catagory
    }</td>
        <td class="text-center ${expenses[i].DorC}row">${
      expenses[i].DorC === "debit" ? "-" : "+"
    } ${expenses[i].Amount}</td>
        <td class="text-center ${expenses[i].DorC}row">
        <button class="btn button" id="descriptionbtn"  type="button" onclick="description(${i})"><i class="fa fa-book"></i></button>

        <button class="btn btn-secondary" id="btnEdit" type="button" data-target="#addExpense" data-toggle="modal" onclick="edit(${i})"><i class="fa fa-pencil" aria-hidden="true"></i> <span class="editAndDlt">Edit</span></button>
        <button class="btn btn-danger" id="removebtn" type="button" onclick="deleteData(${i})"><i class="fa fa-trash"></i> <span  class="editAndDlt">Delete</span></button>
        
        </td>
        </tr>`;

    table.innerHTML += row;
  }

  // let credShow=document.getElementById("no_of_cred")
  // credShow.innerHTML=`${creditDebit.credit}`

  // let debShow=document.getElementById("no_of_deb")
  // debShow.innerHTML=`${creditDebit.debit}`

  document.getElementById(
    "total_credited"
  ).innerHTML = `Total Credit Rs ${creditDebit.totalCredit} /-<span class="badge cred_badge">${creditDebit.credit}</span>`;

  localStorage.setItem("totalCredit", creditDebit.totalCredit);

  document.getElementById(
    "total_debited"
  ).innerHTML = `Total Debit Rs ${creditDebit.totalDebit} /- <span class="badge deb_badge">${creditDebit.debit}</span>`;

  localStorage.setItem("totalDebit", creditDebit.totalDebit);
};

let reset = () => {
  document.getElementById("date").value = "";
  document.getElementById("inputGroupSelect").value = "Households";
  document.getElementById("amount").value = "";
};

// for initial check of expenses list
if (expenseData) {
  buildTable();
} else {
}

let deleteData = (index) => {
  expenseData.splice(index, 1);
  localStorage.setItem("All_Expenses", JSON.stringify(expenseData));
  buildTable();
};
let edit = (index) => {
  let u = document.getElementById("submit-btn");
  u.setAttribute("onclick", "Update()");
  u.setAttribute("class", "btn btn-primary");

  u.innerText = "UPDATE";

  document.getElementById("transaction").value = expenseData[index].DorC;
  document.getElementById("date").value = expenseData[index].Date;
  document.getElementById("inputGroupSelect").value =
    expenseData[index].Catagory;
  document.getElementById("description").value = expenseData[index].Description;
  document.getElementById("amount").value = expenseData[index].Amount;

  // to ensure the edited values
  console.log(document.getElementById("transaction").value);
  console.log(document.getElementById("date").value);
  console.log(document.getElementById("inputGroupSelect").value);
  console.log(document.getElementById("description").value);
  console.log(document.getElementById("amount").value);

  let transType = expenseData[index].DorC;
  let dtab = document.getElementById("debited-tab");
  let ctab = document.getElementById("credited-tab");
  switch (transType) {
    case "credit": {
      dtab.setAttribute("style", "background-color:#fff;color:#000");
      ctab.setAttribute("style", "background-color:green;color:#fff");
      break;
    }
    case "debit": {
      dtab.setAttribute("style", "background-color:red;color:#fff");
      ctab.setAttribute("style", "background-color:#fff;color:#000");
      break;
    }
    default:
      break;
  }
  // addcategory()

  i = index;
  return i;
};

var Update = () => {
  console.log(i);
  expenseData.splice(i, 1, {
    DorC: document.getElementById("transaction").value,
    Date: document.getElementById("date").value,
    Catagory: document.getElementById("inputGroupSelect").value,
    Description: document.getElementById("description").value,
    Amount: document.getElementById("amount").value,
  });
  localStorage.setItem("All_Expenses", JSON.stringify(expenseData));
  buildTable();
  newExpAdd();
  reset();
};

var newExpAdd = () => {
  let u = document.getElementById("submit-btn");
  u.setAttribute("onclick", "validateFirst()");
  u.setAttribute("class", "btn btn-success");
  u.innerText = "SUBMIT";
  debitedBtn();
};

let debitedBtn = () => {
  let dtab = document.getElementById("debited-tab");
  dtab.setAttribute("style", "background-color:red;color:white");

  let ctab = document.getElementById("credited-tab");
  ctab.setAttribute("style", "");
  if (dtab.hasAttribute("style", "background-color:red;color:white")) {
  }
  document.getElementById("transaction").value = "debit";
};

let creditedBtn = () => {
  let ctab = document.getElementById("credited-tab");
  ctab.setAttribute("style", "background-color:green;color:white");

  let dtab = document.getElementById("debited-tab");
  dtab.setAttribute("style", "");
  if (ctab.hasAttribute("style", "background-color:green;color:white")) {
  }
  document.getElementById("transaction").value = "credit";
};

let description = (index) => {
  let des = (document.getElementById("description").value =
    expenseData[index].Description);
  alert(des);
};

let countCredNo = () => {
  if (expenseData) {
    // console.log(expenseData);

    // let debitNumber=0;
    // let creditNumber=0;
    expenseData.forEach((element) => {
      if (element.DorC == "debit") {
        for (let i = 1; i < expenseData.length; i++) {
          console.log(i);
          const creditNumber = i;
        }
      }
      if (element.DorC == "credit") {
        for (let i = 1; i < expenseData.length; i++) {
          console.log(i);
          const debitNumber = i;
        }
      }
    });
  }
};

let addcategory = () => {
  let Ctgs = document.getElementById("inputGroupSelect");
  Ctgs.innerHTML = "<option selected>not specified</option>";
  let ctgFromLS = JSON.parse(localStorage.getItem("Categories"));
  for (i = 0; ctgFromLS.length; i++) {
    let datas = `<option id="${i}thCtgOption" >${ctgFromLS[i].Catagory}</option>`;
    Ctgs.innerHTML += datas;
  }
};
addcategory();
