var data=[
    { 
        ID:"12",
        NAME:"Duy",
        COMPANY:"Cam",
        AMOUNT:2,
        PRICE:20000,
        PHONE:"09292922",
        ADDRESS:"Hà Nam"
    },
    { 
        ID:"25",
        NAME:"Thành",
        COMPANY:"Táo",
        AMOUNT:3,
        PRICE:30000,
        PHONE:"082929223",
        ADDRESS:"Nam Định"
    },
    { 
        ID:"35",
        NAME:"Dũng",
        COMPANY:"Táo",
        AMOUNT:1.5,
        PRICE:25000,
        PHONE:"09292922",
        ADDRESS:"Hà Nội"
    }
];
//add
function add()
{
    var id = document.getElementById("form-id").value
    var name = document.getElementById("form-name").value
    var price = document.getElementById("form-price").value
    var phone = document.getElementById("form-phone").value
    var address = document.getElementById("form-address").value
    var company = document.getElementById("form-company").value
    var amount = document.getElementById("form-amount").value
    var item = 
    {  
        ID:id,
        NAME:name,
        COMPANY:company,
        AMOUNT:amount,
        PRICE:price,
        PHONE:phone,
        ADDRESS:address
    }        
    var index = data.findIndex((c)=>c.ID==item.ID)
    if(index>=0)
    {
        data.splice(index,1,item)
    }
    else
    {
        data.push(item)
    }
    render();
    clear();
}

function render(){
    let order = 1;
    table = `<tr>
    <th>Stt</th>
    <th>Mã</th>
    <th>Tên</th>
    <th>Mua</th>
    <th>Số Lượng</th>
    <th>Thành Tiền</th>
    <th>Số Điện Thoại</th>
    <th>Địa Chỉ</th>
    <th>Sửa</th>
    <th>Xóa</th>
    </tr>`
    for(let i=0;i<data.length;i++)
    {
        table += `<tr>
          <td>${order++}</td>
          <td>${data[i].ID}</td>
          <td>${data[i].NAME}</td>
          <td>${data[i].COMPANY}</td>
          <td>${data[i].AMOUNT}/kg</td>
          <td>${data[i].PRICE}/đ</td>
          <td>${data[i].PHONE}</td>
          <td>${data[i].ADDRESS}</td>
          <th><button onclick="editItem(${data[i].ID})">SỬA</button></th>
          <th><button onclick="deleteItem(${data[i].ID})">XÓA</button></th>
        </tr>`
    }
    document.getElementById("render").innerHTML = table;
}

function clear()
{
    var id = document.getElementById("form-id").value=""
    var name = document.getElementById("form-name").value=""
    var company = document.getElementById("form-company").value=""
    var amount = document.getElementById("form-amount").value=""
    var price = document.getElementById("form-price").value=""
    var phone = document.getElementById("form-phone").value=""
    var address = document.getElementById("form-address").value=""
}

//edit
function editItem(x)
{
    for(let i=0;i<data.length;i++)
    {
        if(data[i].ID==x)
        {
            var id = document.getElementById("form-id").value=data[i].ID
            var name = document.getElementById("form-name").value=data[i].NAME
            var company = document.getElementById("form-company").value=data[i].COMPANY
            var amount = document.getElementById("form-amount").value=data[i].AMOUNT        
            var price = document.getElementById("form-price").value=data[i].PRICE
            var phone = document.getElementById("form-phone").value=data[i].PHONE
            var address = document.getElementById("form-address").value=data[i].ADDRESS
        }
    }
}
//delete
function deleteItem(x)
{
    for(let i=0;i<data.length;i++)
    {
        if(data[i].ID==x)
        {  
            var abc = confirm("Bạn muốn xóa không!")
            if(!abc) return
            data.splice(i,1); 
        }
        
    }
    render();
}
//search
function search()
{
    var search = document.getElementById("search-input").value;
    var list = this.data;
    var kq=[];
    if(search)
    {
        for(let i=0;i<list.length;i++)
        {
            var str = list[i].NAME;
            if(str.includes(search))
            {
                document.getElementById("renderSearch").style.display = "block";
                document.getElementById("render").style.display = "none";
                var itemSearch = 
                {
                    ID:list[i].ID,
                    NAME:list[i].NAME,
                    COMPANY:list[i].COMPANY,
                    AMOUNT:list[i].AMOUNT,
                    PRICE:list[i].PRICE,
                    PHONE:list[i].PHONE,
                    ADDRESS:list[i].ADDRESS
                }
                kq.push(itemSearch);               
                table = `<tr>
                <th>Stt</th>
                <th>Mã</th>
                <th>Tên</th>
                <th>Mua</th>
                <th>Số Lượng</th>
                <th>Thành Tiền</th>
                <th>Số Điện Thoại</th>
                <th>Địa Chỉ</th>
                <th>Sửa</th>
                <th>Xóa</th>
                </tr>`
                for(let i=0;i<kq.length;i++)
                {
                    let order = 1;
                    table += `<tr>
                      <td>${order++}</td>
                      <td>${kq[i].ID}</td>
                      <td>${kq[i].NAME}</td>
                      <td>${kq[i].COMPANY}</td>
                      <td>${kq[i].AMOUNT}/kg</td>
                      <td>${kq[i].PRICE}/đ</td>
                      <td>${kq[i].PHONE}</td>
                      <td>${kq[i].ADDRESS}</td>
                      <th><button onclick="editItem(${kq[i].ID})">SỬA</button></th>
                      <th><button onclick="deleteItem(${kq[i].ID})">XÓA</button></th>
                    </tr>`
                }
                document.getElementById("renderSearch").innerHTML = table;
            }
        }
    }
}


