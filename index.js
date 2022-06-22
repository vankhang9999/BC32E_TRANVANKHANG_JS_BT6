//Bài tập 1:
document.getElementById('btnKetQua').onclick=function(){
    var dem=0;
    var N=0;
    var tong=0;
    while(tong<=10000){
        dem++;
        tong+=dem;
        if(tong>10000){
            N+=dem;
        }
    }
    document.getElementById('ketQua_b1').innerHTML='Số nguyên dương lớn nhất là: '+N;
}
//Bài Tập 2:
document.getElementById('btnTinhTong').onclick=function(){//in
    var soX=Number(document.getElementById('nhapSoX').value);
    var soN=Number(document.getElementById('nhapSoN').value);
    //out
    var s=0;
    //progr
    var dem=1;
    while(dem<=soN){
        s+=Math.pow(soX, dem);
        dem++;

    }
    document.getElementById('ketQua_b2').innerHTML='Tổng: '+s;
}
//Bài 3: Tính giai thừa
document.getElementById('tinhGiaiThua').onclick=function(){
    //in
    var nhapN=Number(document.getElementById('nhapN').value);
    //out
    ketqua=1;
    //progress
    dem=1;
    while(dem<=nhapN){
        ketqua*=dem;
        dem++;
    }
    document.getElementById('ketQua_b3').innerHTML='Giai thừa: '+ketqua;
}
//Bài 4:
document.getElementById('btnTaoThe').onclick=function(){
    //in:10
    //out:
    var ketqua='';
    //progress
    var kiemtra=true;
    var dem=1;
    while(dem<=10){
        if(dem%2===0){
            kiemtra=false;
        }else{
            kiemtra=true;
        }
        
        if(kiemtra){
            ketqua+='<div style="background-color:green; color:white">Div lẻ</div>';
        }else{
            ketqua+='<div style="background-color:red; color:white">Div chẳn</div>';
        }
        dem++;
    }
    


document.getElementById('ketQua_b4').innerHTML=ketqua;

}