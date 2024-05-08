export default function Lista(){
          // Array de dados estáticos
          const dados = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
        
          return (
            <div className="lista_estilizacao">
            <h2>Lista de Tarefas</h2>
<br />
                <ul className="ul-css">
                     <li>1 - Atividade de Revisão Keliven</li>
                     <li>2 - Protótipo de alta fidelidade</li>  
                </ul>
                <br />
                <ul className="ul-css2">
                     <li>1 - Avaliação Myagy </li>
                     <li>2 - Entrega do Trabalho de API</li>  
                     <li>3 - Site do App</li>  

                </ul>
            </div>
          );
        }
