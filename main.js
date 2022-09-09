var listaConvidadosArray=[];
function submit() 
    {
        var displayConvidadoArray=[];
        var nomeConvidado=document.getElementById("nomeConvidado").value;
        listaConvidadosArray.push(nomeConvidado);
        var lengthConvidadosArray= listaConvidadosArray.length;

        document.getElementById("displayNameWithCommas").innerHTML=listaConvidadosArray;
        var removeCommas=displayConvidadoArray.join(" ");
        document.getElementById("displayNameWithoutCommas").innerHTML=removeCommas;
        document.getElementById("sortButton").style.display="inline-block";
    }
    function sorting()
    {
        listaConvidadosArray.sort();
        var displayConvidadoArraySorting=[];

        var lengthConvidadosArray=listaConvidadosArray.length;
        for(var k = 0; k < lengthConvidadosArray; k++)
        {
            displayConvidadoArraySorting.push("<h4>Convidado(a):" + listaConvidadosArray[k] + "</h4>");

        }

        var removeCommas= displayConvidadoArraySorting.join(" ");

        document.getElementById("displayNameWithoutCommasSorting").innerHTML=removeCommas;
    }
    function searching()
    {
        var s=document.getElementById("s1").value;
        var found=0;

        listaConvidadosArray.forEach(element => {
            if(element == s){
                found++;
            }
        });

        document.getElementById("p2").innerHTML="Nome encontrado "+found+" vez(es)";
    }
 
