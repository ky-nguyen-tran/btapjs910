function NhanVien (_taiKhoan,_hoTen,_email,_matKhau,_ngayLam,_luong,_chucVu,_gioLam){
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luong = _luong;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = function (){
        if (this.chucVu === "Sếp"){
            return this.luong * 3;

        }
        else if (this.chucVu === "Trưởng phòng") {
            return this.luong * 2;
        }
        else {
            return this.luong
        }

    }
    this.xepLoai = function(){
        if(this.gioLam >= 192){
            return "nhân viên xuất sắc"
        }
        else if (this.gioLam >= 176){
            return "nhân viên giỏi"
        }
        else if (this.gioLam >=160){
            return "nhân viên khá"
        }
        else {
            return "nhân viên trung bình"
        }
    }
}