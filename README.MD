# TSCONFIG.json
 - O arquivo tsconfig.json é um arquivo de configuração utilizado pelo typescript para controlar como o compilador(tsc) deve processar o código do seu projeto.

 - O CompilerOptions que é uma propriedade do objeto de configuração do arquivo tsconfig.json. É nele que definimos as opções para o compilador TypeScript, como o destino do javascript gerado, a estrutura de módulos, os diretórios de saída, etc.
   
 - O Include e Exclude, definem quais arquivos ou pastas o TypeScript deve incluir ou ignorar durante o processo de compilação.

 - Target: Define a versão do javascript que será gerado. No momento, estou usando a configuração do ESNEXT, que gera código com suporte ás últimas funcionalidades do javascript.

 - Module: Especifica o sistema de módulos utilizado. O que estou usando, NodeNext, é utilizado para compatibilidade com o node.js moderno(que suporta ES Modules e Commomjs).

 - outDir:  Especifica o diretório onde os arquivos compilados serão gerados.

 - Strict: Habilita todas as verificações estritas do TypeScript para maior segurança.


# Como funciona a ideia de instalação de pacotes usando o TypeScript?

 - 