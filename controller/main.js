let arrayNhanVien = [];

getArrayNhanVien();
renderTable();
function renderTable(){
    let content = "";
    for (let i = 0; i < arrayNhanVien.length; i++){
        let nhanVien = new NhanVien();
        let nhanVienItem = arrayNhanVien[i];
        Object.assign(nhanVien,nhanVienItem);
        let tongLuong = nhanVien.tongLuong();
        let xepLoai = nhanVien.xepLoai();
        
        content += `<tr>
        <td>
        ${nhanVien.taiKhoan}
        </td>
        <td>
        ${nhanVien.hoTen}
        </td>
        <td>
        ${nhanVien.email}
        </td>
        <td>
        ${nhanVien.ngayLam}
        </td>
        <td>
        ${nhanVien.chucVu}
        </td>
        <td>
        ${tongLuong}
        </td><td>
        ${xepLoai}
        </td>
        <td>
        <button onclick="xoaNhanVien('${nhanVien.taiKhoan}')">Xoá</button>
        <button onclick="editNhanVien('${nhanVien.taiKhoan}')" data-toggle="modal" data-target="#myModal">Sửa</button>
        </td>

        </tr>`
    }
    document.getElementById("tableDanhSach").innerHTML = content
}

console.log(arrayNhanVien)






function themNhanVien(){
    let nhanVien = layGiaTriInput();
    if (
        nhanVien
    ) {
        arrayNhanVien.push(nhanVien);
        setArrayNhanVienVaoStorage(arrayNhanVien);
        renderTable();
        ganGiaTriInput("","","","","","","","")
    }

}
document.getElementById("btnThemNV").onclick = themNhanVien




// xoanv
function xoaNhanVien(taiKhoanNhanVien){
    const index = timViTriNhanVien(taiKhoanNhanVien);
    if(index != -1){
        arrayNhanVien.splice(index,1);
        setArrayNhanVienVaoStorage(arrayNhanVien);
        renderTable()
    }


}

function editNhanVien(taiKhoan){
const index = timViTriNhanVien(taiKhoan);
let nhanVien = arrayNhanVien[index];
console.log(nhanVien)
ganGiaTriInput(nhanVien.taiKhoan,nhanVien.hoTen,nhanVien.email,nhanVien.matKhau,nhanVien.ngayLam,nhanVien.luong,nhanVien.chucVu,nhanVien.gioLam)
document.getElementById("tknv").readOnly = true 
}



function update(){
    let nhanVienDaChinhSua = layGiaTriInput();
    let index = timViTriNhanVien(nhanVienDaChinhSua.taiKhoan);
    arrayNhanVien[index] = nhanVienDaChinhSua;
    setArrayNhanVienVaoStorage(arrayNhanVien);
    renderTable()

}
document.getElementById("btnCapNhat").onclick = update;



function search(){
    const searchValue = document.getElementById("searchName").value ;
    arrayNhanVien.filter((nhanVien)=>nhanVien.xepLoai === searchValue)
}
document.getElementById("btnTimNV").onclick = search
















