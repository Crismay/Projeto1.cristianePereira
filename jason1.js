/*objeto carro

const carro = {

   marca:"Fiat",
   modelo: "uno",
   motor: ["1.6","1.0","1.4"]
   ano: 2001,}

  //Converteu para texto o JASON
  let texto = JSON.stringify(carro);

  //Colocou o texto no nosso HTML
  document.getElementById('area').innerHTML = texto;

  //Converteu texto para objeto
  let Obj = JSON.parse(texto);

  //Pegou valor desse ojeto
  console.log(Obj.motor[2]);
  */
 function buscarCEP(){
   let input = document.getElementById("cep").value;

    const ajax = new XMLHttpRequest();
     ajax.open('Get','https://viacep.com.br/ws/' + input + '/json/');
    
     ajax.send();

     ajax.onload = function() {
        //document.getElementById('texto').innerHTML = this.responseText;
      
        
        //Transformei o texto em objeto
        let obj =JSON.parse(this.responseText);


        //Aqui peguei os valores que eu queria
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML = "Logradouro :"+ logradouro + "<br> Cidade :" + cidade + 
        " <br> Estado :" + estado;
   
    } 

 }

  