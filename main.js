
document.getElementById("btnTinhTien").onclick = function (event) {
    event.preventDefault();
    var matHang = document.getElementById("select").value;
    var soLuong = document.getElementById("txtSoLuong1").value;
    var gia = document.getElementById("txtGia").value;
    if (soLuong >100) {
        var tongTien = (matHang*49*gia)+((matHang*51*gia)*92/100)+((matHang*(soLuong-100)*gia)*88/100);
    }else if (soLuong>=50){
        var tongTien = (matHang*49*gia)+((matHang*(soLuong-49)*gia)*92/100);
        
    } else {
        var tongTien = (matHang*soLuong*gia);
    }
    var info = "<div class='alert alert-success'>"+ tongTien +"</div>";
document.getElementById("footercard").innerHTML= info;
}
