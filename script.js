

    function showQuestion(question) {

        let divContent = document.getElementById('content');
        divContent.innerHTML = "";

        let tecnologies = [];

        if (question === "start") {

            divContent.innerHTML = "<h1>Você quer seguir na área de front-end ou back-end?</h1>";
            
            let button = document.createElement('button');
            button.innerHTML = "Front-End";
            button.onclick = () => showQuestion("front-end");
            divContent.appendChild(button);

            let button2 = document.createElement('button');
            button2.innerHTML = "Back-End";
            button2.onclick = () => showQuestion("back-end");
            divContent.appendChild(button2);

        } else if (question === "front-end") {

            divContent.innerHTML = "<h1>Você quer trabalhar com React ou Vue?</h1>";
            
            let button = document.createElement('button');
            button.innerHTML = "React";
            button.onclick = () => showQuestion("react");
            divContent.appendChild(button);

            let button2 = document.createElement('button');
            button2.innerHTML = "Vue";
            button2.onclick = () => showQuestion("vue");
            divContent.appendChild(button2);
            
        } else if (question === "back-end") {

            divContent.innerHTML = "<h1>Você quer trabalhar com C# ou Java?</h1>";
            
            let button = document.createElement('button');
            button.innerHTML = "C#";
            button.onclick = () => showQuestion("c_sharp"); 
            divContent.appendChild(button);

            let button2 = document.createElement('button');
            button2.innerHTML = "Java";
            button2.onclick = () => showQuestion("java");
            divContent.appendChild(button2);

        } else if (question === "react" || question === "vue" || question === "c_sharp" || question === "java" ) {

            divContent.innerHTML = "<h1>Tem mais alguma tecnologia que gostaria de aprender</h1>";

            let tecnologyInput = document.createElement('input');
            divContent.appendChild(tecnologyInput);

            
            let button = document.createElement('button');
            button.innerHTML = "Adicionar";
            button.onclick = () => {

                tecnologies.push(tecnologyInput.value);
                showQuestion(question);
            }

            divContent.appendChild(button);

            let button2 = document.createElement('button');
            button2.innerHTML = "Encerrar";
            button2.onclick = () => showQuestion("yes");
            divContent.appendChild(button2);

        } else if (question === "yes") {

            divContent.innerHTML = "<h1>Obrigado por responder o questionário</h1>";
        }
        
    }

    function startQuiz() {
        showQuestion("start");
    }

    document.addEventListener('DOMContentLoaded', startQuiz);
    

