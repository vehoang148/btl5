var data=[
    {
        ID:"100",
        NAME:"Duy",
        PHONE:"09292922",
        ADDRESS:"Hà Nam"
    },
    {
        ID:"62",
        NAME:"Dũng",
        PHONE:"34343434535",
        ADDRESS:"Hà Nam"
    },
    {
        ID:"41",
        NAME:"Dung",
        PHONE:"3434343",
        ADDRESS:"Hà Nam"
    },
];
//add
function add()
{
    var id = document.getElementById("form-id").value
    var name = document.getElementById("form-name").value
    var phone = document.getElementById("form-phone").value
    var address = document.getElementById("form-address").value

    var item = 
    {  
        ID:id,
        NAME:name,
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
                    PHONE:list[i].PHONE,
                    ADDRESS:list[i].ADDRESS
                }
                kq.push(itemSearch);               
                table = `<tr>
                <th>Stt</th>
                <th>Mã</th>
                <th>Tên</th>
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


