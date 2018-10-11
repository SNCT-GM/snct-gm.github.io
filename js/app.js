function render(tipo_atividade){
    var tmp = "";

    for(var i=0; i < programacao[tipo_atividade].length; i++){
        const dia = programacao[tipo_atividade][i];

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

render("palestras")
render("minicursos")