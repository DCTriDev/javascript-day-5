//Kiem Tra Dau Rot
let diemChuanEl = document.querySelector('#diem-chuan')
let mon1El = document.querySelector('#mon-1')
let mon2El = document.querySelector('#mon-2')
let mon3El = document.querySelector('#mon-3')
let khuVucEl = document.querySelector('#khu-vuc')
let doiTuongEl = document.querySelector('#doi-tuong')
let btnKiemTraDauRot = document.querySelector('#btn-dau-rot')
let ketQuaDauRot = document.querySelector('#ket-qua-dau-rot')

btnKiemTraDauRot.addEventListener('click', function () {
    let diemChuan = diemChuanEl.value * 1
    let mon1 = mon1El.value * 1
    let mon2 = mon2El.value * 1
    let mon3 = mon3El.value * 1
    let khuVuc = khuVucEl.value
    let doiTuong = doiTuongEl.value
    let dauRot
    let tongDiem

    if (mon1 > 0 && mon2 > 0 && mon3 > 0) {
        tongDiem = mon1 + mon2 + mon3 + KiemTraKhuVuc(khuVuc) + KiemTraDoiTuong(doiTuong)
        if(tongDiem >= diemChuan){
            dauRot = 'Bạn đã ĐẬU. Tổng số điểm đạt được là: ' + tongDiem
        }else
            dauRot = 'Bạn đã RỚT. Tổng số điểm đạt được là: ' + tongDiem
    }else{
        dauRot = 'Bạn đã RỚT vì có môn 0 điểm.'
    }
    ketQuaDauRot.innerHTML = dauRot

    function KiemTraKhuVuc(khuVuc) {
        switch (khuVuc) {
            case 'A':
                return 2
            case 'B':
                return 1
            case 'C':
                return 0.5
            default:
                return 0
        }
    }

    function KiemTraDoiTuong(doiTuong) {
        switch (doiTuong) {
            case '1':
                return 2.5
            case '2':
                return 1.5
            case '3':
                return 1
            default:
                return 0
        }
    }
})


//Tinh Tien Dien
let sokwEl = document.querySelector('#kw-tieu-thu')
let btnTinhTienDien = document.querySelector('#tinh-tien')
let tienDien = document.querySelector('#thanh-tien')

btnTinhTienDien.addEventListener('click', function () {
    const LEVEL1 = 500
    const LEVEL2 = 650
    const LEVEL3 = 850
    const LEVEL4 = 1100
    const LEVEL5 = 1300
    const PRICE1 = 50 * LEVEL1
    const PRICE2 = PRICE1 + 50 * LEVEL2
    const PRICE3 = PRICE2 + 100 * LEVEL3
    const PRICE4 = PRICE3 + 150 * LEVEL4

    let soKwTieuThu = sokwEl.value * 1
    if(soKwTieuThu>=0) {
        let thanhTien
        if (soKwTieuThu <= 50) {
            thanhTien = soKwTieuThu * LEVEL1
        } else if (soKwTieuThu <= 100) {
            thanhTien = PRICE1 + (soKwTieuThu - 50) * LEVEL2
        } else if (soKwTieuThu <= 200) {
            thanhTien = PRICE2 + (soKwTieuThu - 100) * LEVEL3
        } else if (soKwTieuThu <= 350) {
            thanhTien = PRICE3 + (soKwTieuThu - 200) * LEVEL4
        } else {
            thanhTien = PRICE4 + (soKwTieuThu - 350) * LEVEL5
        }
        tienDien.value = thanhTien.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' vnd'
    }else alert("Vui lòng nhập lại số Kw Tiêu Thụ!")
})

//======================================================================
//Tinh Thue Thu Nhap Ca Nhan
let thuNhapEl = document.querySelector('#thu-nhap')
let nguoiPhuThuocEl = document.querySelector('#nguoi-phu-thuoc')
let btnTinhThue = document.querySelector('#tinh-thue')
let tienThueEl = document.querySelector('#tien-thue')
btnTinhThue.addEventListener('click', function () {
    let thuNhap = thuNhapEl.value * 1
    let nguoiPhuThuoc = nguoiPhuThuocEl.value * 1
    if(thuNhap>=0 && nguoiPhuThuoc>=0) {
        let thuNhapChiuThue = thuNhap - (nguoiPhuThuoc * 1600000) - 4000000
        if (thuNhapChiuThue < 0) {
            tienThueEl.value = "0 vnd"
        } else {
            let tienThue = thuNhapChiuThue * ThueSuat(thuNhapChiuThue)
            tienThueEl.value = tienThue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' vnd'
        }
    }else alert("Vui lòng nhập lại Thu Nhập, Số Người Phụ Thuộc!")
})


function ThueSuat(thuNhapChiuThue) {
    if (thuNhapChiuThue <= 60000000)
        return 5 / 100
    else if (thuNhapChiuThue <= 120000000)
        return 10 / 100
    else if (thuNhapChiuThue <= 210000000)
        return 15 / 100
    else if (thuNhapChiuThue <= 384000000)
        return 20 / 100
    else if (thuNhapChiuThue <= 624000000)
        return 25 / 100
    else if (thuNhapChiuThue <= 960000000)
        return 10 / 100
    else return 35 / 100
}

//==========================================================================
//Tinh Tien Cap
const DOANH_NGHIEP = 'doanh-nghiep'
const CA_NHAN = 'ca-nhan'
let soKetNoiEl = document.querySelector('#so-ket-noi')
let soKenhCCEl = document.querySelector('#so-kenh-cc')
let btnTinhTienCap = document.querySelector('#tinh-tien-cap')
let tienCapEl = document.querySelector('#tien-cap')
let radioDoanhNghiep = document.querySelector('#doanh-nghiep-radio')
let radioCaNhan = document.querySelector('#ca-nhan-radio')

//DOANH NGHIEP ACTIVE
radioDoanhNghiep.addEventListener('click', function () {
    document.querySelector('#is-doanh-nghiep').style.visibility = "visible"
})
radioCaNhan.addEventListener('click', function () {
    document.querySelector('#is-doanh-nghiep').style.visibility = "hidden"
})


//TinhTien
btnTinhTienCap.addEventListener('click', function () {
    TinhTienCap()
})

function TinhTienCap() {
    const CA_NHAN_PHI_XU_LY = 4.5
    const CA_NHAN_DV_CO_BAN = 20.5
    const CA_NHAN_KENH_CC = 7.5

    const DOANH_NGHIEP_PHI_XU_LY = 15
    const DOANH_NGHIEP_KENH_CC = 50
    const GIA_KET_NOI_1_TO_10 = 7.5
    const GIA_KET_NOI_TREN_10 = 5

    let loaiKhachHangEl = document.querySelector('input[name="loai-kh"]:checked')
    let loaiKH = loaiKhachHangEl.value
    let soKetNoi = soKetNoiEl.value * 1
    let soKenhCC = soKenhCCEl.value * 1
    let tienCap
    if(soKetNoi>=0 && soKenhCC >=0) {
        if (loaiKH == DOANH_NGHIEP) {
            tienCap = DOANH_NGHIEP_PHI_XU_LY + TinhTienSoKetNoi(soKetNoi) + soKenhCC * DOANH_NGHIEP_KENH_CC
        } else {
            tienCap = CA_NHAN_PHI_XU_LY + CA_NHAN_DV_CO_BAN + soKenhCC * CA_NHAN_KENH_CC
        }
        tienCapEl.value = tienCap.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }else alert("Vui lòng nhập lại Số Kênh Cao Cấp, Số Kết Nối")

    function TinhTienSoKetNoi(soKetNoi) {
        if (soKetNoi <= 10)
            return soKetNoi * GIA_KET_NOI_1_TO_10
        else return 75 + (soKetNoi - 10) * GIA_KET_NOI_TREN_10
    }
}

