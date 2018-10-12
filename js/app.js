function render(tipo_atividade, programacao){
    var tmp = "";

    for(var i=0; i < programacao.length; i++){
        const dia = programacao[i];

        tmp += '<tr><th colspan="3">'+ dia.data +'</th></tr>';

        for(var j=0; j < dia.atividades.length; j++){
            const atividade = dia.atividades[j]

            tmp += '<tr>'
            tmp += '<td class="horario">'+ atividade.horario +'</td>';
            tmp += '<td>'+ atividade.titulo +'</td>';
            tmp += '<td>'+ atividade.convidado +'</td>';
            tmp += '</tr>';
        }

    }

    document.querySelector("#"+tipo_atividade).innerHTML = tmp;
}

fetch("./programacao.json")
.then(function(res){
    return res.json();
})
.then(function(programacao){
    render("palestras", programacao.palestras);
    render("minicursos", programacao.minicursos);
});

const banner = document.querySelector(".banner");
banner.src = banner.getAttribute("img-src")

const header = document.querySelector("header");
header.style.backgroundImage = "url('./img/bg_header.png')"