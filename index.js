let b = 0;
var m = 0;
var a = 0;
var value = 0;
function deposit() {
    var bt = document.getElementById("buttons");
    bt.style.display = "none";
    var ok = document.getElementById("ok");
    ok.style.display = "block";
    document.getElementById("d1").innerText = "ENTER THE DEPOSIT AMOUNT"
    var d = document.getElementById("d2");
    d.style.display = "block";
    value = 1;
}
function withdrew() {
    document.getElementById("d1").innerText = "ENTER THE WITHDREWAL AMOUNT"
    var bt = document.getElementById("buttons");
    bt.style.display = "none";
    var ok = document.getElementById("ok");
    ok.style.display = "block";
    var d = document.getElementById("d2");
    d.style.display = "block";
    value = 2;
}
function balance() {
    document.getElementById("d1").innerText = "YOUR BALANCE\n" + m;
    var bt = document.getElementById("buttons");
    bt.style.display = "none";
    var ok = document.getElementById("ok");
    ok.style.display = "block";
    value = 3;
}
function quit() {
    var bt = document.getElementById("buttons");
    bt.style.display = "none";
    document.getElementById('d1').classList.add('fade')
    document.getElementById("d1").innerText = "THANK YOU FOR USING ATM";
   


}
function ok() {
    if (value === 1) {
        var b1 = document.getElementById("d2").value;
        if(b1!=""){
            b = parseInt(b1, 10)
            m = m + b;
            var ok = document.getElementById("ok");
            ok.style.display = "none";
            var d = document.getElementById("d2");
            d.style.display = "none";
            document.getElementById("d1").innerText = "TRANSACTION SUCCESSFUL"
            document.getElementById("d2").value = ""
            setTimeout(function () {
                document.getElementById("d1").classList.add('fade');
                setTimeout(function () {
                    document.getElementById("d1").classList.remove('fade');
                    document.getElementById("d1").innerText = "ENTER YOUR ACTION"
                    var bt = document.getElementById("buttons");
            bt.style.display = "block";
                },1000);
            }, 1000);
        }
        else{
            document.getElementById("d1").innerText = "ENTER THE AMOUNT"
        }
       
    }
    else if (value === 2) {
        var b1 = document.getElementById("d2").value;
        b = parseInt(b1, 10)
        if (b <= m) {
            m = m - b;
            
            var ok = document.getElementById("ok");
            ok.style.display = "none";
            var d = document.getElementById("d2");
            d.style.display = "none";
            document.getElementById("d1").innerText = "TRANSACTION SUCCESSFUL"
            document.getElementById("d2").value = ""
            setTimeout(function () {
                document.getElementById("d1").classList.add('fade');
                setTimeout(function () {
                    document.getElementById("d1").classList.remove('fade');
                    var bt = document.getElementById("buttons");
            bt.style.display = "block";
                    document.getElementById("d1").innerText = "ENTER YOUR ACTION"
                },1000);
            }, 1000);
        }
        else if(b1==""){
            document.getElementById("d1").innerText = "ENTER A AMOUNT";
        }
        else {
            document.getElementById("d1").innerText = "INSUFFICENT BALANCE";
        }


    }
    else if (value === 3) {
        var bt = document.getElementById("buttons");
        bt.style.display = "block";
        var ok = document.getElementById("ok");
        ok.style.display = "none";
        var d = document.getElementById("d2");
        d.style.display = "none";
        document.getElementById("d1").innerText = "ENTER YOUR ACTION"
    }
}


