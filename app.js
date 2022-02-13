const submitButton = document.getElementById('detail-submit-btn');
submitButton.addEventListener('click',function(){
    console.log('clicked', submitButton);
    const buyerDetiles =document.getElementById('buyer-details-input');
    const buyerDetilesInfo = document.getElementById('buyer-info').innerText=buyerDetiles.value;
    buyerDetiles.value='';
    
})


const addButton=document.getElementById('add-details-btn');

addButton.addEventListener('click',function(){
    const tableInfo=document.getElementById('info-table');
    console.log('table info', tableInfo);
    const itemName = document.getElementById('item-name-input');
    // itemName.value='';
    console.log('name', itemName);
    const itemPrice =document.getElementById('item-price-input');
    // itemPrice.value='';
    console.log('item price', itemPrice);
    const itemQuantity=document.getElementById('item-quantity-input');
    // itemQuantity.value='';
    console.log('quantity', itemQuantity);

//     <!-- <tr>
//     <th >1</th>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
//     </tr> -->

// multipication quantity and price

    const totalPrice=parseInt(itemPrice.value) * parseInt(itemQuantity.value);

// just Elemnet create 
    const tableRow =document.createElement('tr'); // ei table row er shte javascrpt diya je elment 
    // console.log('create element ', tr);            // create kora hoise ei table row er shte add kora hoise
    const tableHead =document.createElement('th');
    const tableData1=document.createElement('td');
    const tableData2 = document.createElement('td');
    const tableData3 =document.createElement('td');

    

    // Dainamuc class add 

    // tableData1.classList.add('item-price');
    tableData3.classList.add('item-total');
    
    // set value of Element
   
    tableHead.innerText=itemName.value;
    tableData1.innerText=itemPrice.value;
    tableData2.innerText=itemQuantity.value;
    tableData3.innerText=totalPrice;


    // set javascript create Element tr er shte add
    tableRow.appendChild(tableHead);
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);

//all javascript  create Element html a set kora hoilo

    tableInfo.appendChild(tableRow);
    totalCalculate();
    // calcutationSubTotal();
    // calcutationPriceTotal();
});

function totalCalculate(){
    const prevousPrice = calcutationSubTotal();
    const subTotalAdd=document.getElementById('sub-total');

    subTotalAdd.innerText=prevousPrice;
    const tax = prevousPrice * .2 ;
    document.getElementById('tax').innerText=tax.toFixed(2); //doshomic er pore koi shokha hobe ta toFixed
                                                            //diya nidishto kora jai
    const grantTotal=document.getElementById('grand-total');
    grantTotal.innerText=prevousPrice + tax;

    document.getElementById('grand-total-2').innerText=prevousPrice + tax;

    
}


function calcutationSubTotal(){
    let subTotal=0;
    const cost =document.getElementsByClassName('item-total');
    for(let i =0; i < cost.length; i++){
        const element = cost[i];
        const price= parseInt(element.innerText);

        subTotal=subTotal+price;
    }
    return subTotal;

};

