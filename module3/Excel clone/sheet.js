let addSheetBtn = document.querySelector(".add-sheet");
let sheetList = document.querySelector(".sheets-list");
// let updateSheet = document.querySelectorAll(".sheet #sheetId");

let sheetId = 0;


addSheetBtn.addEventListener("click",function(){
    sheetId++;
    let activeSheet = document.querySelector(".active-sheet");
    activeSheet.classList.remove("active-sheet");
    let sheetDiv = document.createElement("div");
    sheetDiv.classList.add("sheet");
    sheetDiv.classList.add("active-sheet");
    sheetDiv.setAttribute("sheetId",sheetId);
    sheetDiv.innerText = `Sheet ${sheetId+1}`;
    sheetList.append(sheetDiv);


    sheetDiv.addEventListener("click",e => {
        // console.log(e);
        let activeSheet = document.querySelector(".active-sheet");
        activeSheet.classList.remove("active-sheet");
        sheetDiv.classList.add("active-sheet");
    
    })
})



// updateSheet.addEventListener("click",function(){
//     console.log("clicked");
//     let activeSheet = document.querySelector(".active-sheet");
//     activeSheet.classList.remove("active-sheet");
//     updateSheet.classList.add("active-sheet");

// })


// function updateSheetE(sheetDiv){
//     let activeSheet = document.querySelector(".active-sheet");
//     activeSheet.classList.remove("active-sheet");
//     sheetDiv.classList.remove("active-sheet");
// }