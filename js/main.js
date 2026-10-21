var NUM="5521973751213";
function wa(t){return "https://wa.me/"+NUM+"?text="+encodeURIComponent(t)}
document.querySelectorAll(".wa").forEach(function(a){a.href=wa(a.dataset.msg);a.target="_blank";a.rel="noopener"});
var ph='<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M21 16l-5-5-8 8"/></svg>';
var cats=[["Mountain bikes (MTB)","Para trilhas, estradas de terra e aventuras fora do asfalto."],["Bicicletas urbanas","Praticidade e conforto para o dia a dia na cidade."],["Bicicletas para crianças","Opções para os primeiros pedais e para a diversão da família."],["Bicicletas elétricas (e-bikes)","Mais autonomia e facilidade para rotina e passeios."],["Acessórios e equipamentos","Itens para pedalar com mais segurança e conforto."],["Peças e componentes","Reposição e melhorias para manter sua bike em dia."]];
document.getElementById("cats").innerHTML=cats.map(function(c,i){return '<article class="card"><div class="ph" data-img="'+["mtb","urbana","infantil","eletrica","acessorios","pecas"][i]+'"><div>'+ph+'Foto: '+c[0]+'</div></div><h3>'+c[0]+'</h3><p>'+c[1]+'</p><a class="btn btn-o wa" style="margin-top:18px" target="_blank" rel="noopener" href="'+wa("Olá! Gostaria de consultar a disponibilidade de: "+c[0]+".")+'">Consultar disponibilidade</a></article>'}).join("");
var sv=[["Revisão e manutenção","Verificação geral para manter sua bike segura e confortável.","M14.5 6.500a4 4 0 0 0-5 5L4 17l3 3 5.500-5.500a4 4 0 0 0 5-5l-2.500 2.500-2.500-.5-.5-2.500z"],["Ajustes de freios e marchas","Regulagem para frear com confiança e trocar de marcha com suavidade.","M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8v4l3 2"],["Avaliação de componentes","Análise do desgaste das peças para indicar o que precisa de atenção.","M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5"],["Montagem e regulagem","Bike montada e ajustada para o seu uso e o seu tamanho.","M4 20l6-6M14 4l6 6-8 8-6-6z"],["Orientação para conservação","Dicas de limpeza e cuidados para a bike durar mais.","M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"]];
document.getElementById("servs").innerHTML=sv.map(function(s){return '<article class="card"><svg class="ic" viewBox="0 0 24 24"><path d="'+s[2]+'"/></svg><h3>'+s[0]+'</h3><p>'+s[1]+'</p><a class="link" target="_blank" rel="noopener" href="'+wa("Olá! Gostaria de solicitar atendimento: "+s[0]+".")+'">Solicitar atendimento</a></article>'}).join("");
var g=["Passeios de bicicleta","Bicicletas e produtos","Experiências de clientes","Momentos da equipe","Ciclismo urbano","Trilhas"];
document.getElementById("gal").innerHTML=g.map(function(x,i){return '<div class="ph" data-img="galeria-'+(i+1)+'"><div>'+ph+x+'</div></div>'}).join("");
document.getElementById("y").textContent=new Date().getFullYear();
var b=document.querySelector(".burger"),m=document.getElementById("menu");
b.addEventListener("click",function(){var o=m.classList.toggle("open");b.setAttribute("aria-expanded",o)});
m.addEventListener("click",function(e){if(e.target.tagName==="A"){m.classList.remove("open");b.setAttribute("aria-expanded","false")}});
document.getElementById("f").addEventListener("submit",function(e){
e.preventDefault();var f=e.target,ok=true;
["n","t","a","m"].forEach(function(id){var el=f.elements[id],er=el.parentNode.querySelector(".err"),v=el.value.trim(),msg="";
if(!v)msg="Preencha este campo.";else if(id==="t"&&v.replace(/\D/g,"").length<10)msg="Informe um telefone com DDD.";
er.textContent=msg;el.setAttribute("aria-invalid",msg?"true":"false");if(msg)ok=false});
var s=document.getElementById("fs");
if(!ok){s.textContent="Corrija os campos destacados para continuar.";s.style.color="#ff8a7a";return}
s.style.color="";s.textContent="Abrindo o WhatsApp com sua mensagem. Confirme o envio por lá.";
window.open(wa("Olá! Meu nome é "+f.n.value.trim()+" (tel. "+f.t.value.trim()+").\nAssunto: "+f.a.value.trim()+"\n"+f.m.value.trim()),"_blank","noopener");
});

/* Fotos reais: coloque em assets/img/ com os nomes do README (jpg, webp ou png) e elas substituem os espaços reservados. */
(function(){var ex=["jpg","webp","png"];
function load(n,ok){(function t(i){if(i>=ex.length)return;var im=new Image();im.onload=function(){ok(im)};im.onerror=function(){t(i+1)};im.src="assets/img/"+n+"."+ex[i]})(0)}
document.querySelectorAll("[data-img]").forEach(function(el){var l=el.textContent.trim();load(el.dataset.img,function(im){el.classList.add("has-img");im.alt=l;im.loading="lazy";el.innerHTML="";el.appendChild(im)})});
var h=document.getElementById("heroart");load("hero",function(im){im.alt="Bicicleta e ciclismo — Cicle do Vitor";im.className="hero-img";h.innerHTML="";h.appendChild(im)});
var hd=document.querySelector("header");function sc(){hd.classList.toggle("scrolled",scrollY>20)}sc();addEventListener("scroll",sc,{passive:true});
var links=document.querySelectorAll('.links a[href^="#"]');
if("IntersectionObserver" in window){var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.toggleAttribute("aria-current",a.getAttribute("href")==="#"+e.target.id)})}})},{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("main section[id]").forEach(function(x){o.observe(x)})}
})();
