var data=[
    { 
        ID:"29",
        NAME:"Mận",
        PRICE:20000,
        DESC:23,
        REFER:30
    },
    { 
        ID:"12",
        NAME:"Cam",
        PRICE:20000,
        DESC:23,
        REFER:30
    },
    
];
//add
function add()
{
    var id = document.getElementById("form-id").value
    var name = document.getElementById("form-name").value
    var price = document.getElementById("form-price").value
    var desc = document.getElementById("form-desc").value
    var refer = document.getElementById("form-refer").value
    var item = 
    {  
        ID:id,
        NAME:name,
        PRICE:price,
        DESC:desc,
        REFER:refer
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
    <th>Tên Sản Phẩm</th> 
    <th>Giá Tiền</th>
    <th>Số Lượng Nhập</th>
    <th>Số Lượng Tồn</th>
    <th>Sửa</th>
    <th>Xóa</th>
    </tr>`
    for(let i=0;i<data.length;i++)
    {
        table += `<tr>
          <td>${order++}</td>
          <td>${data[i].ID}</td>
          <td>${data[i].NAME}</td>
          <td>${data[i].PRICE}/đ</td>
          <td>${data[i].DESC}</td>
          <td>${data[i].REFER}</td>
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
    var price = document.getElementById("form-price").value=""
    var desc = document.getElementById("form-desc").value=""
    var refer = document.getElementById("form-refer").value=""
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
            var price = document.getElementById("form-price").value=data[i].PRICE
            var desc = document.getElementById("form-desc").value=data[i].DESC
            var refer = document.getElementById("form-refer").value=data[i].REFER
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
                    PRICE:list[i].PRICE,
                    DESC:list[i].DESC,
                    REFER:list[i].REFER
                }
                kq.push(itemSearch);               
                let order = 1;
                table = `<tr>
                <th>Stt</th>
                <th>Mã</th>
                <th>Tên Sản Phẩm</th> 
                <th>Giá Tiền</th>
                <th>Số Lượng Nhập</th>
                <th>Số Lượng Tồn</th>
                <th>Sửa</th>
                <th>Xóa</th>
                </tr>`
                for(let i=0;i<kq.length;i++)
                {
                    table += `<tr>
                      <td>${order++}</td>
                      <td>${kq[i].ID}</td>
                      <td>${kq[i].NAME}</td>
                      <td>${kq[i].PRICE}/đ</td>
                      <td>${kq[i].DESC}</td>
                      <td>${kq[i].REFER}</td>
                      <th><button onclick="editItem(${kq[i].ID})">SỬA</button></th>
                      <th><button onclick="deleteItem(${kq[i].ID})">XÓA</button></th>
                    </tr>`
                }
                document.getElementById("renderSearch").innerHTML = table;
            }
        }
    }
}


