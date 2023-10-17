let TC = localStorage.getItem("totalCredit");
let TD = localStorage.getItem("totalDebit");

//! formation of select options---------------
let dropForDoughnut = document.getElementById("doughnut_select");
dropForDoughnut.innerHTML = "";
let li = `<option value="All" >All</option>`;
let Allctgs = JSON.parse(localStorage.getItem("Categories"));
Allctgs.forEach((element) => {

  li += `<option value="${element.Catagory}" >${element.Catagory}</option>`;
});
dropForDoughnut.innerHTML = li;

//! getting chart container id------------------
let doughnutcht = document.getElementById("doughnut").getContext("2d");
//! create just a blank chart-----------
let MyNewChart = new Chart(doughnutcht);



$('#doughnut_select').on("change", ()=>{
  //! trigger chart formation on select change--------------
  checkOption($('#doughnut_select').val())
})





let checkOption = (type) => {
  
  let d = localStorage.getItem(`${$('#doughnut_select').val()}_debit`);
  let c = localStorage.getItem(`${$('#doughnut_select').val()}_credit`);
  //! Before Forming chart , clear it by calling destroy---------- 
  MyNewChart.destroy()
  
  if(type === "All"){
    formChart(TC,TD)
  }else{
    formChart(c,d)
  }
          
};

function formChart(credit, debit){
  //! new chart formation----------------- 
  MyNewChart = new Chart(doughnutcht, {
    type: "doughnut",
    data: {
      labels: ["Credit", "Debit"],
      datasets: [
        {
          data: [credit, debit],
          backgroundColor: ["#73ff20", "#f55148"],
        },
      ],
    },
  });
}

checkOption("All");



//bar chart from here_________________________________________________________________________________________





let allExpList =JSON.parse(localStorage.getItem("All_Expenses"))

function getFields(input, field) {
  let output = [];
  for (var i=0; i < input.length ; ++i)
      output.push(input[i][field]);
  return output;
}
let all_exps=JSON.parse(localStorage.getItem("All_Expenses"))


let All_Exps_Dates = getFields(all_exps, "Date");


let All_DExps_values = [];
let All_CExps_values = [];
allExpList.forEach((element)=>{
  if (element.DorC==="credit") {
    All_CExps_values.push(element);
  }
  if (element.DorC==="debit") {
    All_DExps_values.push(element);
  }
})

console.log("All_DExps_values",All_DExps_values);
console.log("All_CExps_values",All_CExps_values);

let All_Exps_values = getFields(all_exps, "Amount");




let allCtgList=JSON.parse(localStorage.getItem("CTGWISEDATA"))

let Allctg=[];
let Allctg_credit=[]
let Allctg_debit=[]

for(i=0;i<allCtgList.length;i++){
  Allctg.push(allCtgList[i].Catagory)
  Allctg_credit.push(allCtgList[i].Credit)
  Allctg_debit.push(allCtgList[i].Debit)

  let ADV =  `${allCtgList[i].Catagory}_debit`;
 let ACV = `${allCtgList[i].Catagory}_credit`;
}

let barcht = document.getElementById("bar").getContext("2d");

let MyBarChart=new Chart(barcht,{
  type:"bar",
  data:{
    labels:Allctg,
    datasets:[
      {
        label: 'Credits',
      data:Allctg_credit,
       backgroundColor: ["#73ff20"],
      },
      {
        label: 'Debits',
        data:Allctg_debit,
        backgroundColor: ["#ff5148"],
        // backgroundColor: ["#73ff20", "#f55148","#ff5148"],
      }
  ]
  }
})


