# Explicações

- console do rabbitMQ fica na porta do docker nesse caso ficou (http://localhost:15672/)
- Dentro do console em Queues criei uma fila chamada (test);
- Se criar a fila de forma padrão a mesma ficará para sempre, então será apagada somente pela leitura ou algo do tipo dessa forma já vai existir uma validação de (lido). Vai bastar colocar uma cron de tempo ou no próprio código inserir um timer.
- Pra ler diretamente na fila e preciso ir em (Queues -> nome da fila -> Get message -> número de filas que quer ver -> get message);
- Codigo ACK serve para deletar da fila a ação ...
