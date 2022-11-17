window.onload = function () {
//ստեղծում եմ զանգվածը, որը պետք է լցնեմ վանդակների մեջ
    var agr = [' ',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 

//ստեղծում եմ զանգված, որը պետք է տա 1-15 ռանդոմ թվեր:Օգտագործեցի վերևի զանգվածը, որ 0-ի խոխարեն լինի դատարկ վանդակ
    const Array = [];
    while (Array.length < 16) {
        const rand = agr[Math.floor(Math.random() * 16)];
        if (!Array.includes(rand)) {
            Array.push(rand);
        }
    }
    //ստեղծել եմ կոճակները
    var pn = document.createElement('button');
    document.body.append(pn);
    pn.className = 'start'
    pn.innerHTML = 'Սկսել խաղը'


    var sf = document.createElement('button');
    document.body.append(sf);
    sf.innerHTML = 'Խառնել'

    var bt = document.createElement('button');
    document.body.append(bt);
    bt.innerHTML = 'Ստուգել'

    var od = document.createElement('button');
    document.body.append(od);
    od.innerHTML = 'Խարդախել'
    //ստեղծել եմ խաղը սկսելու ֆունկցիան 
    function myf() {
        //ստեղծել եմ սեղանը
        var tbl = document.createElement('table')
        tbl.style.borderCollapse = 'collapse'
        var tBody = document.createElement('tbody');
        tbl.append(tBody)


        document.body.appendChild(tbl);
            //ստեղծել եմ վանդակները
        for (let i = 0; i < 4; i++) {
            let row = document.createElement('tr')
            for (let j = 0; j < 4; j++) {
                let cell = document.createElement('td')
                //տվել եմ ամեն վանդակին id և տվել եմ չափսերը
                cell.id = 'cell-' + i + '-' + j;
                cell.style.height = '71px'
                cell.style.width = '71px'
                cell.style.backgroundColor = '#219fb6';
                //վանդակների մեջ ներմուծել եմ զանգվածի արժեքները պատահական սկզբունքով
                if (j == 0 && i == 0) {
                    cell.innerHTML = Array[0];
                }
                if (j == 1 && i == 0) {
                    cell.innerHTML = Array[1];
                }
                if (j == 2 && i == 0) {
                    cell.innerHTML = Array[2];
                }
                if (j == 3 && i == 0) {
                    cell.innerHTML = Array[3];
                }
                if (j == 0 && i == 1) {
                    cell.innerHTML = Array[4];
                }
                if (j == 1 && i == 1) {
                    cell.innerHTML = Array[5];
                }
                if (j == 2 && i == 1) {
                    cell.innerHTML = Array[6];
                }
                if (j == 3 && i == 1) {
                    cell.innerHTML = Array[7];
                }
                if (j == 0 && i == 2) {
                    cell.innerHTML = Array[8];
                }
                if (j == 1 && i == 2) {
                    cell.innerHTML = Array[9];
                }
                if (j == 2 && i == 2) {
                    cell.innerHTML = Array[10];
                }
                if (j == 3 && i == 2) {
                    cell.innerHTML = Array[11];
                }
                if (j == 0 && i == 3) {
                    cell.innerHTML = Array[12];
                }
                if (j == 1 && i == 3) {
                    cell.innerHTML = Array[13];
                }
                if (j == 2 && i == 3) {
                    cell.innerHTML = Array[14];
                }
                if (j == 3 && i == 3) {
                    cell.innerHTML = Array[15];
                }
                

                cell.onclick = function () {
                    //ամեն վանդակի համար փոփոխական եմ ստեղծել
                    var c1 = document.getElementById('cell-0-0')
                    var c2 = document.getElementById('cell-0-1')
                    var c3 = document.getElementById('cell-0-2')
                    var c4 = document.getElementById('cell-0-3')
                    var c5 = document.getElementById('cell-1-0')
                    var c6 = document.getElementById('cell-1-1')
                    var c7 = document.getElementById('cell-1-2')
                    var c8 = document.getElementById('cell-1-3')
                    var c9 = document.getElementById('cell-2-0')
                    var c10 = document.getElementById('cell-2-1')
                    var c11 = document.getElementById('cell-2-2')
                    var c12 = document.getElementById('cell-2-3')
                    var c13 = document.getElementById('cell-3-0')
                    var c14 = document.getElementById('cell-3-1')
                    var c15 = document.getElementById('cell-3-2')
                    var c16 = document.getElementById('cell-3-3')

                    // ամեն վանդակի համար գրել եմ տեղախոխվելու ֆունկցիան
                    c15.onclick = function () {
                        if (c15.innerHTML != ' ' && c16.innerHTML == ' ') {
                            var dab = c15.innerHTML;
                            c16.innerHTML = dab;
                            c15.innerHTML = ' ';
                        }
                        else if (c15.innerHTML != ' ' && c11.innerHTML == ' ') {

                            var dab = c15.innerHTML;
                            c11.innerHTML = dab;
                            c15.innerHTML = ' ';
                        }
                        else if (c15.innerHTML != ' ' && c14.innerHTML == ' ') {

                            var dab = c15.innerHTML;
                            c14.innerHTML = dab;
                            c15.innerHTML = ' ';
                        }
                    }
                    // 111111111111111111111111111111111111111111111111111111
                    c1.onclick = function () {
                        if (c1.innerHTML != ' ' && c2.innerHTML == ' ') {
                            var dab = c1.innerHTML;
                            c2.innerHTML = dab;
                            c1.innerHTML = ' ';
                        }
                        else if (c1.innerHTML != ' ' && c5.innerHTML == ' ') {

                            var dab = c1.innerHTML;
                            c5.innerHTML = dab;
                            c1.innerHTML = ' ';
                        }
                    }
                    // 22222222222222222222222222222222222222222222222222
                    c2.onclick = function () {
                        if (c2.innerHTML != ' ' && c1.innerHTML == ' ') {
                            var dab = c2.innerHTML;
                            c1.innerHTML = dab;
                            c2.innerHTML = ' ';
                        }
                        else if (c2.innerHTML != ' ' && c3.innerHTML == ' ') {

                            var dab = c2.innerHTML;
                            c3.innerHTML = dab;
                            c2.innerHTML = ' ';
                        }
                        else if (c2.innerHTML != ' ' && c6.innerHTML == ' ') {

                            var dab = c2.innerHTML;
                            c6.innerHTML = dab;
                            c2.innerHTML = ' ';
                        }
                    }
                    // 333333333333333333333333333333333333333333333333333333
                    c3.onclick = function () {
                        if (c3.innerHTML != ' ' && c2.innerHTML == ' ') {
                            var dab = c3.innerHTML;
                            c2.innerHTML = dab;
                            c3.innerHTML = ' ';
                        }
                        else if (c3.innerHTML != ' ' && c4.innerHTML == ' ') {

                            var dab = c3.innerHTML;
                            c4.innerHTML = dab;
                            c3.innerHTML = ' ';
                        }
                        else if (c3.innerHTML != ' ' && c7.innerHTML == ' ') {

                            var dab = c3.innerHTML;
                            c7.innerHTML = dab;
                            c3.innerHTML = ' ';
                        }
                    }
                    // 4444444444444444444444444444444444444444444444444444
                    c4.onclick = function () {
                        if (c4.innerHTML != ' ' && c3.innerHTML == ' ') {
                            var dab = c4.innerHTML;
                            c3.innerHTML = dab;
                            c4.innerHTML = ' ';
                        }
                        else if (c4.innerHTML != ' ' && c8.innerHTML == ' ') {

                            var dab = c4.innerHTML;
                            c8.innerHTML = dab;
                            c4.innerHTML = ' ';
                        }
                    }
                    // 555555555555555555555555555555555555555555555555
                    c5.onclick = function () {
                        if (c5.innerHTML != ' ' && c1.innerHTML == ' ') {
                            var dab = c5.innerHTML;
                            c1.innerHTML = dab;
                            c5.innerHTML = ' ';
                        }
                        else if (c5.innerHTML != ' ' && c6.innerHTML == ' ') {

                            var dab = c5.innerHTML;
                            c6.innerHTML = dab;
                            c5.innerHTML = ' ';
                        }
                        else if (c5.innerHTML != ' ' && c9.innerHTML == ' ') {

                            var dab = c5.innerHTML;
                            c9.innerHTML = dab;
                            c5.innerHTML = ' ';
                        }
                    }
                    // 6666666666666666666666666666666666666666666666666666
                    c6.onclick = function () {
                        if (c6.innerHTML != ' ' && c2.innerHTML == ' ') {
                            var dab = c6.innerHTML;
                            c2.innerHTML = dab;
                            c6.innerHTML = ' ';
                        }
                        else if (c6.innerHTML != ' ' && c5.innerHTML == ' ') {

                            var dab = c6.innerHTML;
                            c5.innerHTML = dab;
                            c6.innerHTML = ' ';
                        }
                        else if (c6.innerHTML != ' ' && c7.innerHTML == ' ') {

                            var dab = c6.innerHTML;
                            c7.innerHTML = dab;
                            c6.innerHTML = ' ';
                        }
                        else if (c6.innerHTML != ' ' && c10.innerHTML == ' ') {

                            var dab = c6.innerHTML;
                            c10.innerHTML = dab;
                            c6.innerHTML = ' ';
                        }
                    }
                    // d7777777777777777777777777777777777777777777777777777777d
                    c7.onclick = function () {
                        if (c15.innerHTML != ' ' && c3.innerHTML == ' ') {
                            var dab = c7.innerHTML;
                            c3.innerHTML = dab;
                            c7.innerHTML = ' ';
                        }
                        else if (c7.innerHTML != ' ' && c6.innerHTML == ' ') {

                            var dab = c7.innerHTML;
                            c6.innerHTML = dab;
                            c7.innerHTML = ' ';
                        }
                        else if (c7.innerHTML != ' ' && c8.innerHTML == ' ') {

                            var dab = c7.innerHTML;
                            c8.innerHTML = dab;
                            c7.innerHTML = ' ';
                        }
                        else if (c7.innerHTML != ' ' && c11.innerHTML == ' ') {

                            var dab = c7.innerHTML;
                            c11.innerHTML = dab;
                            c7.innerHTML = ' ';
                        }
                    }
                    // 88888888888888888888888888888888888888888888888888
                    c8.onclick = function () {
                        if (c8.innerHTML != ' ' && c4.innerHTML == ' ') {
                            var dab = c8.innerHTML;
                            c4.innerHTML = dab;
                            c8.innerHTML = ' ';
                        }
                        else if (c8.innerHTML != ' ' && c7.innerHTML == ' ') {

                            var dab = c8.innerHTML;
                            c7.innerHTML = dab;
                            c8.innerHTML = ' ';
                        }
                        else if (c8.innerHTML != ' ' && c12.innerHTML == ' ') {

                            var dab = c8.innerHTML;
                            c12.innerHTML = dab;
                            c8.innerHTML = ' ';
                        }
                    }
                    // 99999999999999999999999999999999999999999999999
                    c9.onclick = function () {
                        if (c9.innerHTML != ' ' && c5.innerHTML == ' ') {
                            var dab = c9.innerHTML;
                            c5.innerHTML = dab;
                            c9.innerHTML = ' ';
                        }
                        else if (c9.innerHTML != ' ' && c10.innerHTML == ' ') {

                            var dab = c9.innerHTML;
                            c10.innerHTML = dab;
                            c9.innerHTML = ' ';
                        }
                        else if (c9.innerHTML != ' ' && c13.innerHTML == ' ') {

                            var dab = c9.innerHTML;
                            c13.innerHTML = dab;
                            c9.innerHTML = ' ';
                        }
                    }
                    // 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 
                    c10.onclick = function () {
                        if (c10.innerHTML != ' ' && c6.innerHTML == ' ') {
                            var dab = c10.innerHTML;
                            c6.innerHTML = dab;
                            c10.innerHTML = ' ';
                        }
                        else if (c10.innerHTML != ' ' && c11.innerHTML == ' ') {

                            var dab = c10.innerHTML;
                            c11.innerHTML = dab;
                            c10.innerHTML = ' ';
                        }
                        else if (c10.innerHTML != ' ' && c9.innerHTML == ' ') {

                            var dab = c10.innerHTML;
                            c9.innerHTML = dab;
                            c10.innerHTML = ' ';
                        }
                        else if (c10.innerHTML != ' ' && c14.innerHTML == ' ') {

                            var dab = c10.innerHTML;
                            c14.innerHTML = dab;
                            c10.innerHTML = ' ';
                        }
                    }
                    // 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 
                    c11.onclick = function () {
                        if (c11.innerHTML != ' ' && c7.innerHTML == ' ') {
                            var dab = c11.innerHTML;
                            c7.innerHTML = dab;
                            c11.innerHTML = ' ';
                        }
                        else if (c11.innerHTML != ' ' && c10.innerHTML == ' ') {

                            var dab = c11.innerHTML;
                            c10.innerHTML = dab;
                            c11.innerHTML = ' ';
                        }
                        else if (c11.innerHTML != ' ' && c12.innerHTML == ' ') {

                            var dab = c11.innerHTML;
                            c12.innerHTML = dab;
                            c11.innerHTML = ' ';
                        }
                        else if (c11.innerHTML != ' ' && c15.innerHTML == ' ') {

                            var dab = c11.innerHTML;
                            c15.innerHTML = dab;
                            c11.innerHTML = ' ';
                        }
                    }
                    // 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 
                    c12.onclick = function () {
                        if (c12.innerHTML != ' ' && c8.innerHTML == ' ') {
                            var dab = c12.innerHTML;
                            c8.innerHTML = dab;
                            c12.innerHTML = ' ';
                        }
                        else if (c12.innerHTML != ' ' && c11.innerHTML == ' ') {

                            var dab = c12.innerHTML;
                            c11.innerHTML = dab;
                            c12.innerHTML = ' ';
                        }
                        else if (c12.innerHTML != ' ' && c16.innerHTML == ' ') {

                            var dab = c12.innerHTML;
                            c16.innerHTML = dab;
                            c12.innerHTML = ' ';
                        }
                    }
                    // 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 
                    c13.onclick = function () {
                        if (c13.innerHTML != ' ' && c9.innerHTML == ' ') {
                            var dab = c13.innerHTML;
                            c9.innerHTML = dab;
                            c13.innerHTML = ' ';
                        }
                        else if (c13.innerHTML != ' ' && c14.innerHTML == ' ') {

                            var dab = c13.innerHTML;
                            c14.innerHTML = dab;
                            c13.innerHTML = ' ';
                        }
                    }
                    // 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 
                    c14.onclick = function () {
                        if (c14.innerHTML != ' ' && c10.innerHTML == ' ') {
                            var dab = c14.innerHTML;
                            c10.innerHTML = dab;
                            c14.innerHTML = ' ';
                        }
                        else if (c14.innerHTML != ' ' && c13.innerHTML == ' ') {

                            var dab = c14.innerHTML;
                            c13.innerHTML = dab;
                            c14.innerHTML = ' ';
                        }
                        else if (c14.innerHTML != ' ' && c15.innerHTML == ' ') {

                            var dab = c14.innerHTML;
                            c15.innerHTML = dab;
                            c14.innerHTML = ' ';
                        }
                    }
                    // 16  16  16  16  16  16  16  16  16  16  16  16  16  16  16  16  16  16  16  16  16  
                    c16.onclick = function () {
                        if (c16.innerHTML != ' ' && c12.innerHTML == ' ') {
                            var dab = c16.innerHTML;
                            c12.innerHTML = dab;
                            c16.innerHTML = ' ';
                        }
                        else if (c16.innerHTML != ' ' && c15.innerHTML == ' ') {

                            var dab = c16.innerHTML;
                            c15.innerHTML = dab;
                            c16.innerHTML = ' ';
                        }
                    }
                    

                }
                row.appendChild(cell)
            }
            tBody.appendChild(row)
        }
        //ֆունկցիան անջատել եմ կոճակից, որ մի անգամ աշխատի
        pn.removeEventListener('click',myf)
    }
    //ստեղծելու կոճակին վերագրել եմ ֆունկցիան
    pn.addEventListener('click',myf)
    //ստուգելու կոճակի ֆունկցիան եմ ստեղծել(պետք է նայի, թե արդյոք ամեն td-ի մեջ գրված է համապատասխան թիվ)
    bt.onclick = function(){
        
        var c1 = document.getElementById('cell-0-0')
        var c2 = document.getElementById('cell-0-1')
        var c3 = document.getElementById('cell-0-2')
        var c4 = document.getElementById('cell-0-3')
        var c5 = document.getElementById('cell-1-0')
        var c6 = document.getElementById('cell-1-1')
        var c7 = document.getElementById('cell-1-2')
        var c8 = document.getElementById('cell-1-3')
        var c9 = document.getElementById('cell-2-0')
        var c10 = document.getElementById('cell-2-1')
        var c11 = document.getElementById('cell-2-2')
        var c12 = document.getElementById('cell-2-3')
        var c13 = document.getElementById('cell-3-0')
        var c14 = document.getElementById('cell-3-1')
        var c15 = document.getElementById('cell-3-2')
        //եթե այո, ապա կասի, որ հաղթել ես և էջը կթարմացնի
        if(c1.innerHTML == 1 && c2.innerHTML==2 && c3.innerHTML==3 && c4.innerHTML==4 && c5.innerHTML==5 && c6.innerHTML==6 && c7.innerHTML==7 && c8.innerHTML==8 && c9.innerHTML==9 && c10.innerHTML==10 && c11.innerHTML==11 && c12.innerHTML==12 && c13.innerHTML==13 && c14.innerHTML==14 && c15.innerHTML==15){
            alert('Դու հաղթեցիր!');
            function timedRefresh(timeoutPeriod) {
                setTimeout("location.reload(true);",timeoutPeriod);
            }
            
            window.onload = timedRefresh(1000);
        }
        //եթե ոչ, ապա կասի,որ պետք է շարունակես խաղալը
        else{
            alert('Շարունակիր խաղալ')
        }
    }
    //ստեղծել եմ խարդախության կոճակի ֆունկցիան(փոփոխում է ամեն td-ի արժեքն այնպես, որ մեկ քայլ մնա)
    od.onclick = function(){
        
        var c1 = document.getElementById('cell-0-0')
        c1.innerHTML = 1;
        var c2 = document.getElementById('cell-0-1')
        c2.innerHTML = 2;
        var c3 = document.getElementById('cell-0-2')
        c3.innerHTML = 3;
        var c4 = document.getElementById('cell-0-3')
        c4.innerHTML = 4;
        var c5 = document.getElementById('cell-1-0')
        c5.innerHTML = 5;
        var c6 = document.getElementById('cell-1-1')
        c6.innerHTML = 6;
        var c7 = document.getElementById('cell-1-2')
        c7.innerHTML = 7;
        var c8 = document.getElementById('cell-1-3')
        c8.innerHTML = 8;
        var c9 = document.getElementById('cell-2-0')
        c9.innerHTML = 9;
        var c10 = document.getElementById('cell-2-1')
        c10.innerHTML = 10;
        var c11 = document.getElementById('cell-2-2')
        c11.innerHTML = 11;
        var c12 = document.getElementById('cell-2-3')
        c12.innerHTML = 12;
        var c13 = document.getElementById('cell-3-0')
        c13.innerHTML = 13;
        var c14 = document.getElementById('cell-3-1')
        c14.innerHTML = 14;
        var c15 = document.getElementById('cell-3-2')
        c15.innerHTML = ' ';
        var c16 = document.getElementById('cell-3-3')
        c16.innerHTML = 15;
    }
    sf.onclick = function(){
        
            const Arrayt = [];
        while (Arrayt.length < 16) {
            const rand = agr[Math.floor(Math.random() * 16)];
            if (!Arrayt.includes(rand)) {
                Arrayt.push(rand);
            }
        }
        var c1 = document.getElementById('cell-0-0')
        c1.innerHTML = Arrayt[0];
        var c2 = document.getElementById('cell-0-1')
        c2.innerHTML = Arrayt[1];
        var c3 = document.getElementById('cell-0-2')
        c3.innerHTML = Arrayt[2];
        var c4 = document.getElementById('cell-0-3')
        c4.innerHTML = Arrayt[3];;
        var c5 = document.getElementById('cell-1-0')
        c5.innerHTML =  Arrayt[4];
        var c6 = document.getElementById('cell-1-1')
        c6.innerHTML = Arrayt[5];
        var c7 = document.getElementById('cell-1-2')
        c7.innerHTML = Arrayt[6];
        var c8 = document.getElementById('cell-1-3')
        c8.innerHTML = Arrayt[7];
        var c9 = document.getElementById('cell-2-0')
        c9.innerHTML = Arrayt[8];
        var c10 = document.getElementById('cell-2-1')
        c10.innerHTML =  Arrayt[9];
        var c11 = document.getElementById('cell-2-2')
        c11.innerHTML =  Arrayt[10];
        var c12 = document.getElementById('cell-2-3')
        c12.innerHTML =  Arrayt[11];
        var c13 = document.getElementById('cell-3-0')
        c13.innerHTML = Arrayt[12];
        var c14 = document.getElementById('cell-3-1')
        c14.innerHTML =  Arrayt[13];
        var c15 = document.getElementById('cell-3-2')
        c15.innerHTML =  Arrayt[14];
        var c16 = document.getElementById('cell-3-3')
        c16.innerHTML =  Arrayt[15];
    }
}