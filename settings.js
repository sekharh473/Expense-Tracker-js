localStorage.removeItem("CTGWISEDATA")

var CtgData = JSON.parse(localStorage.getItem("CTGWISEDATA"));




// if(CtgData!==[]){
// for(i=0;i<CtgData.length;i++){
// CtgData.splice(i, 1, {
//   Catagory:CtgFromLS[i].Catagory,
//       Credit: creditDebit.credit,
//       Debit: creditDebit.debit,
// });
// localStorage.setItem("CTGWISEDATA", JSON.stringify(CtgData));
// }
// }





let Allcategories = JSON.parse(localStorage.getItem("Categories"));

let allexp = JSON.parse(localStorage.getItem("All_Expenses"));

let validateCtg = () => {
  let addedctg = document.getElementById("addedcategory").value;
  let addeddes = document.getElementById("adddescription").value;

  let addctgbox = document.getElementById("addedcategory");
  let adddesbox = document.getElementById("addedcategory");

  if (addedctg && addeddes) {
    let afteraddclosemodal = document.getElementById("addBTN");
    afteraddclosemodal.setAttribute("data-dismiss", "modal");

    addCtg();
  } else {
    if (!addedctg) {
      addctgbox.setAttribute("style", "border-color:red");
    }
    if (!addeddes) {
      adddesbox.setAttribute("style", "border-color:red");
    }
  }
};

let addCtg = () => {
  let categ = {
    Catagory: document.getElementById("addedcategory").value,
    Description: document.getElementById("adddescription").value,
  };
  console.log(categ);

  if (Allcategories) {
    Allcategories.push(categ);
  } else {
    Allcategories = [categ];
  }

  localStorage.setItem("Categories", JSON.stringify(Allcategories));

  console.log(JSON.parse(localStorage.getItem("Categories")));
  buildTable();
  reset();
};

let buildTable = () => {
  let tbody = document.getElementById("result");
  tbody.innerHTML = "";
  let CtgFromLS = JSON.parse(localStorage.getItem("Categories"));

  for (i = 0; i < CtgFromLS.length; i++) {
    // if(allexp.)
    let creditDebit = allexp.reduce(
      (acc, val) => {
        if (val.Catagory === CtgFromLS[i].Catagory) {
          switch (val.DorC) {
            case "credit":
              acc.credit += Number(val.Amount);
              break;

            case "debit":
              acc.debit += Number(val.Amount);
              break;

            default:
              break;
          }
        }
        return acc;
      },
      { credit: 0, debit: 0 }
    );
    console.log(creditDebit);

    var row = `<tr id="${i}" class="dataRows">
        <td class="text-center">${CtgFromLS[i].Catagory}</td>
        <td class="text-center">${CtgFromLS[i].Description}</td>
        <td class="text-center"><span style="color:#009900 ;padding-right: 20px;">${creditDebit.credit}</span><span style="color:red">${creditDebit.debit}</span></td>
        <td class="text-center">
       
        <button class="btn btn-danger" id="removebtn" type="button" onclick="deleteData(${i})"><i class="fa fa-trash"></i> <span  class="editAndDlt">Delete</span></button>
        
        </td>
        </tr>`;
    localStorage.setItem(`${CtgFromLS[i].Catagory}_credit`, creditDebit.credit);
    localStorage.setItem(`${CtgFromLS[i].Catagory}_debit`, creditDebit.debit);
    tbody.innerHTML += row;

    let CTGwiseLS={
      Catagory:CtgFromLS[i].Catagory,
      Credit: creditDebit.credit,
      Debit: creditDebit.debit,
    }

    

    if (CtgData) {
      CtgData.push(CTGwiseLS);
    } else {
      CtgData = [CTGwiseLS];
    }
  
    localStorage.setItem("CTGWISEDATA", JSON.stringify(CtgData));
  }
};

if (Allcategories) {
  buildTable();
} else {
}

let reset = () => {
  document.getElementById("addedcategory").value = "";
  document.getElementById("adddescription").value = "Not Neccessary";

  let addctgbox = document.getElementById("addedcategory");
  addctgbox.setAttribute("style", "");
};

let deleteData = (i) => {
  Allcategories.splice(i, 1);
  console.log(Allcategories);
  localStorage.setItem("Categories", JSON.stringify(Allcategories));
  buildTable();
};

let edit = (index) => {
  let u = document.getElementById("addBTN");
  u.setAttribute("onclick", "Update()");
  u.setAttribute("data-dismiss", "modal");
  u.setAttribute("class", "btn btn-primary");

  u.innerText = "UPDATE";

  document.getElementById("addedcategory").value =
    Allcategories[index].Catagory;
  document.getElementById("adddescription").value =
    Allcategories[index].Description;

  return i;
};
var Update = () => {
  console.log(i);
  Allcategories.splice(i, 1, {
    Catagory: document.getElementById("addedcategory").value,
    Description: document.getElementById("adddescription").value,
  });
  localStorage.setItem("Categories", JSON.stringify(Allcategories));

  buildTable();
  newExpAdd();
  reset();
};

var newExpAdd = () => {
  let u = document.getElementById("addBTN");
  u.setAttribute("onclick", "validateCtg()");
  u.setAttribute("class", "btn btn-success");
  u.innerText = "SUBMIT";
  // debitedBtn();
};
