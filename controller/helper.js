function layGiaTriInput(){
    
    let _taiKhoan = document.getElementById("tknv").value;
    let _hoTen = document.getElementById("name").value ;
    let _email =  document.getElementById("email").value ;
    let _matKhau = document.getElementById("password").value ;
    let _ngayLam = document.getElementById("datepicker").value  ;
    let _luong = document.getElementById("luongCB").value ;
    let _chucVu = document.getElementById("chucvu").value ;
    let _gioLam = document.getElementById("gioLam").value * 1 ;
    
    let nhanVien = new NhanVien(_taiKhoan,_hoTen,_email,_matKhau,_ngayLam,_luong,_chucVu,_gioLam);
    return nhanVien


}

function setArrayNhanVienVaoStorage(arrayNhanVien){
localStorage.setItem("arrayNhanVien",JSON.stringify(arrayNhanVien))


}

function getArrayNhanVien(){
    let arrayNhanVienLocal = JSON.parse(localStorage.getItem("arrayNhanVien"));
    if (arrayNhanVienLocal != null){
        arrayNhanVien = arrayNhanVienLocal
    }
}

function timViTriNhanVien(taiKhoanNhanVien){
let viTri = -1 ;
arrayNhanVien.forEach(function(item,index){
    if (item.taiKhoan == taiKhoanNhanVien){
        viTri = index
    }
})
return viTri;
}


function ganGiaTriInput(taiKhoan,hoTen,email,matKhau,ngayLam,luong,chucVu,gioLam){
    
     document.getElementById("tknv").value = taiKhoan;
     document.getElementById("name").value = hoTen ;  
     document.getElementById("email").value = email;
 document.getElementById("password").value = matKhau;
 document.getElementById("datepicker").value = ngayLam; 
  document.getElementById("luongCB").value = luong ; 
  document.getElementById("chucvu").value = chucVu; 
  document.getElementById("gioLam").value = gioLam;
}












