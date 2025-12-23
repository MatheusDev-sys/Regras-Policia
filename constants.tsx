import React from 'react';
// Imports are kept for compatibility/reference if needed, but we use strings now.

export const contentData = {
  "introducao": {
    title: "Introdução",
    category: "Início",
    iconName: 'BookOpen',
    contentHTML: `
      <div class="space-y-6 text-gray-300 leading-relaxed">
        <p>
          Nós, da <strong class="text-green-400">Brasil Roleplay</strong>, temos orgulho em construir uma comunidade diversa, acolhedora e inclusiva, onde cada indivíduo é respeitado e valorizado por sua singularidade. Reforçamos nosso compromisso com os valores que tornam este espaço seguro e harmonioso para todos. Aqui, cada pessoa deve sentir-se protegida, respeitada e amparada, independentemente de sua origem, orientação sexual, identidade de gênero, raça, etnia, religião ou condição física. A diversidade é a nossa maior força e enriquece todos os aspectos da nossa sociedade.
        </p>
        <p>
          Não toleramos qualquer forma de preconceito, incluindo, mas não se limitando a, transfobia, homofobia, racismo, capacitismo ou qualquer discurso que oprima, discrimine ou propague o ódio dentro e fora do servidor. Atitudes dessa natureza são inaceitáveis e acarretarão banimento irreversível. Nosso compromisso é garantir um ambiente pautado pelo respeito, empatia e igualdade.
        </p>
        <p>
          Temos a responsabilidade de promover uma sociedade justa e acolhedora, onde todos possam ser quem são sem medo de discriminação. Nossa cidade preza pela igualdade de direitos e pela liberdade de expressão, mas jamais permitiremos que esses valores sejam distorcidos para justificar qualquer discurso de intolerância. Repudiamos veementemente qualquer comportamento que vá contra esses princípios.
        </p>
        <p>
          Contamos com a colaboração e o comprometimento de cada um para preservar a essência inclusiva e respeitosa da nossa comunidade.
        </p>
      </div>`
  },
  "cidade-policia": {
    title: "Cidade/Polícia",
    category: "Capítulo I",
    iconName: 'Siren',
    contentHTML: `
      <div class="space-y-8 text-gray-300">
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">Proibições e Infrações</h3>
          <ol class="list-decimal pl-5 space-y-3 marker:text-green-500">
            <li><strong>Falsidade Policial</strong> – Fazer-se passar por policial na cidade (fake polícia) é estritamente proibido e sujeito a punições.</li>
            <li><strong>Forçar RP com a Polícia</strong> – Situações de RP forçadas podem ser consideradas RP medíocre e resultar em punição.</li>
            <li><strong>Uso Indevido de Vestimentas</strong> – Apenas membros oficiais de uma guarnição podem utilizar uniformes da polícia.</li>
            <li><strong>Furto ou Roubo de Veículos Policiais</strong> – É proibido pegar qualquer veículo policial, mesmo que esteja destrancado.</li>
            <li><strong>Interferência em Interações Policiais</strong> – Atrapalhar a abordagem de um policial a outros cidadãos resultará em punição.</li>
            <li><strong>Invasão de Áreas Restritas</strong> – Entrar em locais da polícia sem permissão será considerado invasão de área vermelha.</li>
            <li><strong>Chamados ou Denúncias Falsas</strong> – Fazer denúncias ou chamados falsos para enganar a polícia é proibido.</li>
            <li><strong>Uso Indevido de Veículos Não Policiais</strong> – Policiais em serviço não podem utilizar veículos pessoais ou de terceiros para ações.</li>
            <li><strong>Redução Proposital de Velocidade</strong> – Diminuir a velocidade propositalmente para ser atingido durante uma fuga é proibido.</li>
            <li><strong>Fuga para Facção</strong> – Fugir para dentro de uma facção durante perseguição permite que a polícia realize uma Ronda Ostensiva, caso haja provas.</li>
            <li><strong>Provocações e RP Forçado Durante Fuga</strong> – Xingar, bater ou forçar RP contra policiais durante uma fuga autoriza o uso do código 5.</li>
            <li><strong>Power-gaming Durante Fuga</strong> – O uso de estratégias irreais ou abusivas concede à polícia o direito de aplicar código 3 automaticamente.</li>
            <li><strong>"Ratão"</strong> – Qualquer tentativa de "ratão" está estritamente proibida.</li>
            <li><strong>Quebra de Regra de Ação + RDM</strong> – Caso o ilegal drope antes de 1 minuto de fuga, será considerado infração grave.</li>
          </ol>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">Ações Permitidas e Normas</h3>
          <ol class="list-decimal pl-5 space-y-3 marker:text-green-500">
            <li><strong>Manobra de PIT</strong> – Permitida, mas se resultar em "ratão", o policial responsável poderá ser preso por 1000 meses (RESP) ou 250 meses (prisão STAFF – resp ticket, mod, adm).</li>
            <li><strong>Área de Patrulhamento</strong> – A PRF tem permissão para patrulhar no norte, quanto ao sul fica a disposição das outras guarnições.</li>
            <li><strong>Aplicação do Código 5</strong> – Caso existam provas suficientes de que um ilegal ou fugitivo tenha solicitado QRR ilegal, a polícia pode aplicar o código 5 automaticamente.</li>
            <li><strong>Ronda Ostensiva em Facção</strong> – Caso haja provas de fuga para uma facção, a polícia pode realizar uma Ronda Ostensiva no local.</li>
            <li><strong>Incursão Policial</strong> – Se, durante uma Ronda Ostensiva, o ilegal atirar na polícia, a ronda poderá se transformar em uma incursão.</li>
            <li><strong>Resgate de Reféns</strong> – Policiais envolvidos em ações de resgate devem sempre priorizar a vida de todos os reféns.</li>
          </ol>
        </section>
      </div>`
  },
  "regras-departamento": {
    title: "Regras de Departamento",
    category: "Capítulo I",
    iconName: 'Building2',
    contentHTML: `
      <div class="space-y-8 text-gray-300">
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">1. Conduta no Departamento Policial</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-gray-500">
            <li>É estritamente proibido permanecer dentro do Departamento Policial apenas para farmar salário ou conversar no modo gritando sem necessidade.</li>
            <li>Ao chegar no DP, todos os policiais devem guardar seus veículos corretamente, evitando deixá-los espalhados ou obstruindo a área.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">2. Comportamento e Disciplina</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-gray-500">
            <li>Discussões, desrespeito e qualquer assunto que fuja do RP imersivo são proibidos.</li>
            <li>Brincadeiras como socos, uso de taser, “rolas” ou disparos sem motivos válidos, bem como derrubar colegas, não são permitidas.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">3. Acesso do Jurídico ao DP</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-gray-500">
            <li>Membros da OAB - Jurídico possuem livre acesso ao Departamento Policial, desde que estejam caracterizados e se identifiquem quando solicitados.</li>
            <li>Todos os membros do Jurídico devem manter conduta respeitosa dentro do DP.</li>
            <li>Caso um membro do Jurídico desrespeite ou desacate um policial, ele poderá e deverá ser preso por desacato.</li>
            <li>É permitido apenas UM advogado dentro da sela de prisão.</li>
          </ul>
        </section>
        
        <div class="bg-gray-800 p-4 rounded border-l-4 border-green-500 italic text-gray-400">
          <strong class="text-green-400 not-italic">Observação:</strong> Cada DP pode ter regras próprias, porém, estas diretrizes são gerais e devem ser seguidas por todas as delegacias.
        </div>
      </div>`
  },
  "prisoes": {
    title: "Prisões",
    category: "Capítulo I",
    iconName: 'Lock',
    contentHTML: `
      <div class="space-y-8 text-gray-300">
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">1. Infrações e Penalidades</h3>
          <ul class="space-y-4">
            <li>
              <strong class="text-white block mb-1">Leitura da Lei de Miranda:</strong>
              <ul class="list-disc pl-5 space-y-1 text-sm text-gray-400 marker:text-green-500">
                <li>É <strong>obrigatório</strong> que o policial leia a <strong>Lei de Miranda</strong> ao dar voz de prisão.</li>
                <li>Caso a leitura não seja realizada, a <strong>prisão será automaticamente anulada</strong>.</li>
              </ul>
            </li>
            <li>
              <strong class="text-white block mb-1">Chamado do Advogado:</strong>
              <ul class="list-disc pl-5 space-y-1 text-sm text-gray-400 marker:text-green-500">
                <li>O policial deve <strong>chamar um advogado pelo menos duas vezes</strong> e aguardar <strong>5 minutos</strong> para a chegada do mesmo.</li>
                <li>Caso essa regra não seja cumprida, o policial <strong>poderá ser processado pelo jurídico</strong>.</li>
              </ul>
            </li>
            <li>
              <strong class="text-white block mb-1">Local da Detenção:</strong>
              <p class="pl-5 text-sm text-gray-400"><strong>É proibido</strong> deter ou prender qualquer cidadão/criminoso <strong>fora da área de prisão da delegacia</strong>.</p>
            </li>
            <li>
              <strong class="text-white block mb-1">Recebimento de Fiança:</strong>
              <ul class="list-disc pl-5 space-y-1 text-sm text-gray-400 marker:text-green-500">
                <li>A fiança só pode ser recebida na presença de um advogado.</li>
                <li>Caso contrário, o policial será processado por Prevaricação.</li>
              </ul>
            </li>
            <li>
              <strong class="text-white block mb-1">Agressão a Detidos:</strong>
              <p class="pl-5 text-sm text-gray-400">Qualquer tipo de agressão a uma pessoa algemada é estritamente proibido.</p>
            </li>
            <li>
              <strong class="text-white block mb-1">Conduta durante a detenção:</strong>
              <p class="pl-5 text-sm text-gray-400">É proibido que o policial provoque, discuta ou troque ofensas com um preso que esteja sendo detido.</p>
            </li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">2. Obrigatoriedade de Registro</h3>
          <ul class="list-disc pl-5 marker:text-green-500">
            <li><strong>Todas as prisões realizadas devem ser devidamente registradas nos respectivos Discords de cada guarnição</strong>.</li>
          </ul>
        </section>
      </div>`
  },
  "proibicoes": {
    title: "Proibições",
    category: "Capítulo I",
    iconName: 'Ban',
    contentHTML: `
      <div class="space-y-8 text-gray-300">
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">1. Uso de Fardamento e Veículos</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-red-500">
            <li><strong>É estritamente proibido</strong> utilizar fardamentos da polícia que não correspondam à sua guarnição.</li>
            <li><strong>É proibido</strong> participar de ações utilizando <strong>veículos não policiais</strong> (sejam pessoais ou de terceiros).
              <ul class="list-circle pl-5 mt-1 text-sm text-gray-400">
                <li>Caso o policial perca sua <strong>QSV</strong>, deve-se dirigir <strong>imediatamente à sua DP</strong>.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">2. Conduta Policial</h3>
          <ul class="list-disc pl-5 space-y-3 marker:text-red-500">
            <li>Todos os policiais estão <strong>proibidos</strong> de realizar <strong>RP de miliciano ou de qualquer atividade ilegal</strong>.</li>
            <li><strong>Revistas devem respeitar o gênero:</strong>
              <ul class="list-none pl-4 mt-1 text-sm border-l border-gray-700">
                <li>- Policiais não podem revistar indivíduos do sexo oposto.</li>
                <li>- Caso não haja um(a) policial do mesmo sexo, deve-se utilizar o método da "caixinha".</li>
                <li>- Se o suspeito se recusar, poderá ser conduzido por ocultação de provas.</li>
              </ul>
            </li>
            <li><strong>É proibido levar criminosos para o hospital</strong> para <strong>reanimação e posterior prisão</strong>.
              <span class="block text-sm text-gray-400 ml-4">- A reanimação só pode ocorrer no local do abate.</span>
            </li>
            <li><strong>É terminantemente proibido</strong> que policiais deem <strong>ratão propositalmente</strong> durante um acompanhamento. (Caso ocorra, a penalidade será de 1.000 minutos de prisão administrativa.)</li>
            <li>Está liberado o bombeiro/medico reviver no local e ser encaminhado o RP para prisão, caso retorne de ''e'' a ação se da por encerrada.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">3. Proibições Relacionadas a Ações Policiais</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-red-500">
            <li><strong>É proibido marcar BLIPs</strong> de <strong>farm do ilegal</strong> ou <strong>dominas</strong>.
              <span class="text-sm text-gray-400 block ml-4">- Essa prática será considerada quebra de regra de ações e resultará em punição.</span>
            </li>
            <li>Não é permitido forjar <strong>falsas denúncias ou provas</strong> para justificar revistas, abordagens, prisões ou execuções.</li>
            <li><strong>É estritamente proibido</strong> que um policial <strong>pegue para si ou desvie</strong> qualquer um dos seguintes itens:
              <ul class="list-disc pl-5 mt-1 text-sm text-gray-400">
                <li>Itens pertencentes à polícia.</li>
                <li>Loot de players.</li>
                <li>Itens armazenados no baú da polícia.</li>
              </ul>
              <span class="block text-sm text-red-400 mt-1">Tal prática será considerada "Caixa 2" e punida conforme as regras.</span>
            </li>
            <li>Nenhum policial pode <strong>abordar, revistar, prender ou matar</strong> alguém sem um motivo válido.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">4. Regras sobre Código 3 e Perseguições</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-red-500">
            <li><strong>Código 3</strong> (disparos na lataria ou pneus) só pode ser aplicado após <strong>3 minutos</strong> de fuga, <strong>exceto em casos de powergaming.</strong></li>
            <li>Se um indivíduo do <strong>ilegal dropar antes de 1 minuto de fuga</strong>, será considerado <strong>quebra de regra de ação + RDM.</strong></li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">5. Conduta e Imersão no RP</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-red-500">
            <li><strong>É proibido qualquer tipo de discussão, falta de respeito ou assuntos que fujam do RP</strong>. Independentemente do tema, todas as interações devem ser imersivas.</li>
            <li><strong>Brincadeiras inadequadas são proibidas</strong>, incluindo: Socos, uso indevido do taser, empurrões, disparos sem motivo válido ou qualquer outra ação que perturbe o RP.</li>
            <li>É necessário que o individuo ao ser algemado esteja caido, seja por tazer ou ser derrubado no ''e'' corrida.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">6. Convites e Transferências Irregulares</h3>
          <p class="mb-2">É <strong>estritamente proibido</strong> que membros de qualquer departamento policial realizem <strong>recrutamento, convite ou oferta de cargo para oficiais de outros departamentos</strong>, com intuito de transferi-los para sua unidade. Essa prática inclui, <strong>mas não se limita a:</strong></p>
          <ul class="list-disc pl-5 mb-4 marker:text-red-500">
            <li><strong>Oferecer cargos, promoções ou vantagens</strong> em outro batalhão a policiais já vinculados a um departamento diferente;</li>
            <li><strong>Realizar abordagens diretas ou indiretas</strong> visando persuadir policiais de outras unidades a mudarem de departamento;</li>
            <li>Utilizar qualquer meio de comunicação para promover ou sugerir transferências em troca de benefícios.</li>
          </ul>
          <p class="text-red-400 italic font-bold">Penalidade: Qualquer policial que violar essa regra estará sujeito à exoneração imediata e receberá blacklist das forças policiais, independente do batalhão ao qual pertence.</p>
        </section>
      </div>`
  },
  "farm-dominas": {
    title: "Farm / Dominação",
    category: "Capítulo I",
    iconName: 'Skull',
    contentHTML: `
      <div class="space-y-6 text-gray-300">
        <section class="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 class="text-lg font-bold text-green-400 mb-2">1. Apreensão de Itens</h3>
          <ul class="list-disc pl-5 space-y-1">
            <li>Caso o valor dos itens apreendidos seja <strong>inferior a 200</strong>, o material será <strong>apreendido</strong> sem aplicação de multa ou prisão.</li>
            <li>Qualquer valor em farm se comprovado a nota fiscal deve ser liberado.</li>
          </ul>
        </section>

        <section class="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 class="text-lg font-bold text-green-400 mb-2">2. Aplicação de Multa</h3>
          <ul class="list-disc pl-5 space-y-1">
            <li>Qualquer valor entre 200 a 600 será aplicado uma multa no individuo de 150.000.</li>
          </ul>
        </section>

        <section class="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 class="text-lg font-bold text-green-400 mb-2">3. Prisão do Indivíduo</h3>
          <ul class="list-disc pl-5 space-y-1">
            <li>Caso o valor dos itens apreendidos seja <strong>superior a 600</strong>, o meliante será <strong>preso</strong>.</li>
          </ul>
        </section>
      </div>`
  },

  // --- CAPÍTULO II ---
  "transporte": {
    title: "Transporte de Prisioneiros",
    category: "Capítulo II",
    iconName: 'Car',
    contentHTML: `
      <div class="space-y-8 text-gray-300">
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">1. Solicitação de Transporte</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
            <li>O preso pode solicitar transporte especial até a prisão, justificando dentro do RP (ex: segurança, conforto, ameaças etc.).</li>
            <li>O pedido pode ser aceito ou recusado com base na disponibilidade dos policiais. (Lembrando que, caso seja comprovado que um policial recusou o transporte injustificadamente, mesmo com efetivo disponível, estará sujeito a 100 meses de prisão administrativa por quebra de regra de conduta e anti-RP.)</li>
            <li>Caso aceito, o tempo de pena será aumentado em 50% automaticamente, mesmo que já esteja no limite permitido.</li>
            <li><strong>É estritamente proibido que os itens do prisioneiro sejam apreendidos até que cheguem no local onde será realizada a prisão.</strong></li>
            <li><strong>O prisioneiro perde o direito ao transporte caso tenha cometido o crime de Desacato.</strong></li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">2. Direito à Comunicação</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
            <li>O preso terá direito a uma ligação adicional após a solicitação.</li>
            <li>Caso não possua meio de comunicação, a polícia deve fornecer rádio ou celular temporário.</li>
            <li>O detento ficará 5 minutos em cela privativa, com tempo para se organizar e possivelmente solicitar um resgate.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">3. Organização e Condições para Transporte</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
            <li>A rota do transporte será fixa e obrigatória.</li>
            <li>A saída da DP deve ser informada via 911 obrigatoriamente.</li>
            <li><strong>É proibido limpar os itens do preso nesse tipo de transporte.</strong></li>
            <li>A ação só poderá ocorrer com no mínimo <strong>10 policiais</strong> disponíveis na cidade.</li>
            <li>Blindados estão liberados para uso tanto da polícia quanto dos ilegais.</li>
            <li>O ratão está permitido para ambos os lados neste contexto.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">4. Limitações e Regras de Interferência</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
            <li>QRR de outras facções ou forças policiais que não participaram da prisão estão proibidos.</li>
            <li>Se for detectado que o resgate foi forjado propositalmente, haverá aumento de pena e punições administrativas.</li>
            <li>Se algum membro da polícia ou criminoso for abatido durante o resgate, não poderá ser reanimado. (A única exceção é o preso solicitante, que pode ser reanimado e preso novamente mesmo após ser desmaiado.)</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">5. Consequências de Rendimento</h3>
          <ul class="list-disc pl-5 marker:text-green-500">
            <li>Caso um policia consiga render qualquer outro individuo envolvido na ação de resgate, ele receberá uma punição fixa de 35 meses.</li>
          </ul>
        </section>
      </div>`
  },
  "rotas": {
    title: "Rotas Oficiais",
    category: "Capítulo II",
    iconName: 'Route',
    contentHTML: `
      <div class="space-y-4 text-gray-300">
        <h3 class="text-xl font-bold text-green-400 mb-2">Rotas de transporte</h3>
        <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
          <li>A polícia é obrigada a seguir a rota previamente estabelecida para o transporte do preso.</li>
          <li>Qualquer tentativa de desviar da rota estabelecida pode resultar em punições administrativas e consequências no RP.</li>
        </ul>
      </div>`
  },
  "areas": {
    title: "Áreas de Jurisdição",
    category: "Capítulo II",
    iconName: 'Map',
    contentHTML: `
      <div class="space-y-10 text-gray-300">
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Safe-Zone do Presídio</h3>
          <ul class="list-disc pl-5 mb-4 marker:text-green-500">
            <li>É terminantemente proibido entrar na área interna do presídio (safezone) durante um RP de resgate. Essa ação é considerada interferência direta no RP, já que a safe serve justamente para preservar a parte interna do presídio enquanto o resgate acontece do lado de fora.</li>
            <li>O descumprimento dessa regra poderá resultar em punições por fuga de ação para safe-zone.</li>
          </ul>
          <div class="border border-gray-700 rounded-lg overflow-hidden bg-black/40 p-2">
            <img 
              src="https://regrasaltarj.gitbook.io/~gitbook/image?url=https%3A%2F%2F2523550889-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FuGFTsywTqmGg7CrtjbtR%252Fuploads%252FPYyks92C6TkrOOD0s1CF%252Fsafezonepresidio.png%3Falt%3Dmedia%26token%3D5023f161-3e61-4c00-88d7-3cf22119727e&width=768&dpr=4&quality=100&sign=759ab02d&sv=2" 
              alt="Safe-Zone do Presídio" 
              class="w-full h-auto rounded opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Local de Prisão</h3>
          <ul class="list-disc pl-5 mb-4 marker:text-green-500">
            <li>Esse é o ponto onde vocês conseguem efetuar a prisão do prisioneiro. Basta se aproximar da área marcada e conseguirão realizar a prisão.</li>
            <li>Usem esse local sempre que forem finalizar o RP de transporte com a prisão do cidadão.</li>
          </ul>
          <div class="border border-gray-700 rounded-lg overflow-hidden bg-black/40 p-2">
            <img 
              src="https://regrasaltarj.gitbook.io/~gitbook/image?url=https%3A%2F%2F2523550889-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FuGFTsywTqmGg7CrtjbtR%252Fuploads%252FX2IlYvcCykeAqa2k4LuI%252Fareaprisao.png%3Falt%3Dmedia%26token%3D3c05ae35-5eef-4467-9e87-d963e613dd8a&width=768&dpr=4&quality=100&sign=8f6e5f08&sv=2" 
              alt="Local de Prisão" 
              class="w-full h-auto rounded opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </section>
      </div>`
  },
  "blitz": {
    title: "Blitz e Bloqueios",
    category: "Capítulo III",
    iconName: 'Cone',
    contentHTML: `
      <div class="space-y-6 text-gray-300">
        <ol class="list-decimal pl-5 space-y-4 marker:text-green-400 font-bold">
          <li>
            <span class="text-green-400">Anúncio da Blitz:</span>
            <p class="font-normal text-gray-300 mt-1">Todas as blitz devem ser devidamente anunciadas no <strong>911</strong> antes de serem iniciadas.</p>
          </li>
          <li>
            <span class="text-green-400">Efetivo Necessário:</span>
            <p class="font-normal text-gray-300 mt-1">A blitz deverá contar com, <strong>no mínimo, 10 policiais e, no máximo, 15 policiais.</strong></p>
          </li>
          <li>
            <span class="text-green-400">Procedimentos Durante a Blitz:</span>
            <p class="font-normal text-gray-300 mt-1">A abordagem deve se limitar à verificação: Dos documentos do veículo e do cidadão. À revista apenas do porta-malas do veículo.</p>
          </li>
          <li>
            <span class="text-green-400">Revista Pessoal:</span>
            <p class="font-normal text-gray-300 mt-1">O cidadão somente poderá ser revistado caso apresente uma das seguintes condições: Esteja fazendo <strong>uso de coldre.</strong> Utilize <strong>máscara.</strong> Conduza veículo com <strong>vidros escurecidos</strong> (insulfilm). Esteja em veículo <strong>visivelmente danificado</strong>.</p>
          </li>
          <li>
            <span class="text-green-400">Supervisão Obrigatória:</span>
            <p class="font-normal text-gray-300 mt-1">A blitz deverá ser realizada sob a supervisão de, pelo menos, <strong>1 Comando</strong> ou <strong>Sub Comando</strong>.</p>
          </li>
          <li>
            <span class="text-green-400">Código 3 e Código 5:</span>
            <ul class="list-disc pl-5 mt-1 font-normal text-gray-400">
              <li>Não deve ser aplicado codigo 3 caso fure o bloqueio, a prioridade deve ser sempre a fuga limpa.</li>
              <li>Caso o cidadão atropelhe um policial em alta velocidade, o Código 3 será liberado automaticamente.</li>
              <li>Caso o cidadão chame por QRR ou ameaçe policiais com arma em mão é liberado o codigo 5.</li>
            </ul>
          </li>
          <li>
            <span class="text-green-400">Fuga ao Avistar a Blitz:</span>
            <p class="font-normal text-gray-300 mt-1">Se um cidadão tentar fugir ao avistar a blitz, a polícia estará autorizada a seguir com a perseguição.</p>
          </li>
          <li>
             <span class="text-green-400">Participação de Recrutas e Soldados:</span>
             <p class="font-normal text-gray-300 mt-1">Recrutas e soldados somente poderão prestar apoio em blitz se estiverem em QSV.</p>
          </li>
          <li>
            <span class="text-green-400">Justificativa da Abordagem:</span>
            <p class="font-normal text-gray-300 mt-1">O motivo da abordagem deve ser comunicado ao cidadão de forma clara e objetiva.</p>
          </li>
          <li>
            <span class="text-green-400">Curso de Abordagem:</span>
            <p class="font-normal text-gray-300 mt-1">Para participar da realização de blitz, é obrigatório que o policial tenha concluído o Curso de Abordagem.</p>
          </li>
          <li>
            <span class="text-green-400">Equipamentos Permitidos:</span>
            <p class="font-normal text-gray-300 mt-1">Durante a blitz, será permitido o uso de: 6 cones. 6 barreiras.</p>
          </li>
          <li>
            <span class="text-green-400">Blitz em Conjunto:</span>
            <p class="font-normal text-gray-300 mt-1">Caso a blitz seja realizada em conjunto com outras guarnições, cada guarnição poderá participar com, no máximo, 5 policiais.</p>
          </li>
          <li>
            <span class="text-green-400">Blitz em Rodovias:</span>
            <ul class="list-disc pl-5 mt-1 font-normal text-gray-400">
               <li>Para realizar uma blitz em rodovias, é obrigatória a autorização da PRF.</li>
               <li>Caso ocorra sem a devida autorização, os responsáveis estarão sujeitos a punições disciplinares.</li>
               <li>A fiscalização em rodovias é considerada prioridade máxima da PRF.</li>
            </ul>
          </li>
          <li>
            <span class="text-green-400">Veículos Permitidos:</span>
            <p class="font-normal text-gray-300 mt-1">Durante a blitz, será permitido o uso máximo de: 4 QSVs. 2 motos. 1 helicóptero.</p>
          </li>
        </ol>
      </div>`
  },
  "investigacoes": {
    title: "Investigações",
    category: "Capítulo III",
    iconName: 'Search',
    contentHTML: `
      <div class="space-y-6 text-gray-300">
        <section>
          <h3 class="text-lg font-bold text-green-400 mb-2">1. Proibição de Camperar Farm</h3>
          <ul class="list-disc pl-5 space-y-1">
            <li>É expressamente proibido camperar farm, salvo se houver motivos legais devidamente justificados.</li>
            <li>Qualquer ação nesse sentido deve estar formalmente anexada a um inquérito policial e supervisionada pelo Delegado Geral.</li>
          </ul>
        </section>
        
        <section>
          <h3 class="text-lg font-bold text-green-400 mb-2">2. Apresentação de Provas</h3>
          <p class="pl-5">Todas as provas coletadas durante uma investigação devem ser apresentadas aos responsáveis pela polícia para garantir a continuidade dos trâmites legais.</p>
        </section>

        <section>
          <h3 class="text-lg font-bold text-green-400 mb-2">3. Regras para Interrogatórios</h3>
          <ul class="list-disc pl-5 space-y-1">
            <li>Interrogatórios podem ser conduzidos exclusivamente por policiais com o objetivo de coletar informações relevantes.</li>
            <li>Durante os interrogatórios, é estritamente proibido:
              <ul class="list-circle pl-5 mt-1 text-gray-400">
                <li>Matar o interrogado.</li>
                <li>Realizar “queima de arquivos” após a obtenção de informações.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h3 class="text-lg font-bold text-green-400 mb-2">4. Aceitação de Provas</h3>
          <p class="pl-5">Apenas provas coletadas dentro do Roleplay (RP) serão aceitas e consideradas válidas para os trâmites policiais.</p>
        </section>

        <section>
          <h3 class="text-lg font-bold text-green-400 mb-2">5. Sigilo da Identidade Policial</h3>
          <p class="pl-5">A identidade dos policiais da Polícia Judiciária é estritamente sigilosa e deve ser preservada em todas as circunstâncias.</p>
        </section>

        <section>
          <h3 class="text-lg font-bold text-green-400 mb-2">6. Proibição de Corrupção e Vazamento de Informações</h3>
          <ul class="list-disc pl-5 space-y-1">
            <li>Qualquer tipo de corrupção dentro da polícia é terminantemente proibida.</li>
            <li>O vazamento de informações privadas ou sigilosas da polícia também é considerado infração grave.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-lg font-bold text-green-400 mb-2">7. Permissão para Investigar Apologia ao Crime</h3>
          <p class="pl-5 mb-1">A polícia tem autorização para investigar indivíduos que pratiquem apologia ao crime, tais como:</p>
          <ul class="list-disc pl-10 text-gray-400">
             <li>Publicação de fotos com armas.</li>
             <li>Divulgação de imagens de pessoas mortas.</li>
             <li>Qualquer postagem que incentive ou faça referência a práticas criminosas.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-lg font-bold text-green-400 mb-2">8. Permissão para Investigar Anúncios de Produtos Ilícitos</h3>
          <p class="pl-5 mb-1">A polícia pode investigar pessoas que anunciem produtos ilegais em plataformas, incluindo:</p>
          <ul class="list-disc pl-10 text-gray-400">
             <li>Instagram</li>
             <li>OLX</li>
             <li>Twitter</li>
             <li>Tinder</li>
          </ul>
        </section>

        <section>
          <h3 class="text-lg font-bold text-green-400 mb-2">9. Investigação em Safe-zone</h3>
          <p class="pl-5">Caso um suspeito leve o RP para uma área considerada <strong>safezone</strong>, a investigação ou apreensão poderá ser continuada e concluída normalmente.</p>
        </section>

        <section>
          <h3 class="text-lg font-bold text-green-400 mb-2">10. Investigações Conjuntas</h3>
          <p class="pl-5">Diferentes Departamentos de Polícia podem colaborar e realizar investigações conjuntas sempre que necessário.</p>
        </section>
      </div>`
  },
  "ro": {
    title: "Registro de Ocorrência (R.O.)",
    category: "Capítulo III",
    iconName: 'FileText',
    contentHTML: `
      <div class="space-y-6 text-gray-300">
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Motivos Válidos para R.O.</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
             <li>Se, durante uma perseguição ou tentativa de fuga, o indivíduo em questão buscar refúgio dentro de uma favela ou QG.</li>
             <li>Se policiais forem alvejados ao passarem próximos a favelas ou QG’s por pessoas que estejam nesses locais.</li>
             <li>Caso haja 8 QRU de disparo dentro da area ilegal.</li>
          </ul>
        </section>

        <div class="border-t border-gray-700 my-4"></div>

        <ol class="list-decimal pl-5 space-y-4 marker:text-green-400 font-bold">
          <li>
            <span class="text-green-400">Comunicação e Autorização:</span>
            <ul class="list-disc pl-5 font-normal text-gray-400 mt-1">
              <li>É necessário anunciar o R.O no 911 e no avisopm com 5 minutos de antecedencia.</li>
              <li>O pedido de QRR no 911 para todas as guarnições só será permitido caso o R.O se transforme em uma incursão. Antes disso, apenas a guarnição que enviou a prova do R.O poderá solicitar reforço.</li>
              <li>Fica proibido fazer o R.O entre os horarios 13h30 ás 15h30 e 19h30 ás 22h00.</li>
            </ul>
          </li>
          <li>
            <span class="text-green-400">Início e Preparação:</span>
            <ul class="list-disc pl-5 font-normal text-gray-400 mt-1">
               <li>A guarnição deve retornar à Delegacia de Polícia (DP) para alinhar a equipe antes de iniciar o R.O.</li>
               <li>O R.O só poderá ser iniciado com, no mínimo, 10 policiais da mesma guarnição.</li>
            </ul>
          </li>
          <li>
            <span class="text-green-400">Prazo para Execução:</span>
            <p class="font-normal text-gray-300 mt-1">O R.O só poderá ser realizado em até 1 hora após o ocorrido, desde que ainda existam as devidas provas.</p>
          </li>
          <li>
            <span class="text-green-400">Fugitivos em Facções:</span>
            <ul class="list-disc pl-5 font-normal text-gray-400 mt-1">
              <li>Caso um fugitivo da prisão fuja para o território de uma facção, a polícia deverá solicitar a entrega do indivíduo.</li>
              <li>Se a facção se recusar a entregá-lo, a situação se tornará automaticamente um R.O.</li>
            </ul>
          </li>
          <li>
            <span class="text-green-400">Provas:</span>
            <ul class="list-disc pl-5 font-normal text-gray-400 mt-1">
               <li>As provas devem ser anexadas na aba "provas-ro" no discord antes do início da ação ou em até 15 minutos após o término.</li>
               <li>Provas fora dos padrões ou a ausência delas poderão resultar em punição por invasão de área vermelha.</li>
            </ul>
          </li>
          <li>
            <span class="text-green-400">Limitação de Veículos:</span>
            <p class="font-normal text-gray-300 mt-1">Durante o R.O, será permitido o uso de no máximo: 1 helicóptero.</p>
          </li>
          <li>
            <span class="text-green-400">Incursão e QRR:</span>
            <ul class="list-disc pl-5 font-normal text-gray-400 mt-1">
               <li>O pedido de QRR no 911 para outra guarnição só será permitido caso o R.O se transforme em uma incursão. Antes disso, apenas a guarnição que enviou a prova do R.O poderá solicitar reforço.</li>
               <li>O reforço por ser de até no maximo +10 policiais a depender do tamanho e da quantia de bandidos.</li>
            </ul>
          </li>
          <li>
            <span class="text-green-400">Conduta e Penalidades:</span>
            <ul class="list-disc pl-5 font-normal text-gray-400 mt-1">
               <li>Matar civis ou pessoas não relacionadas à ação será considerado RDM, resultando em punições.</li>
               <li>Após 1 hora de operação, o maior contingente presente deverá avançar para finalizar a ação.</li>
               <li>É proibido retornar à operação após morrer.</li>
            </ul>
          </li>
          <li>
            <span class="text-green-400">Limitação de R.O:</span>
            <ul class="list-disc pl-5 font-normal text-gray-400 mt-1">
               <li>Cada guarnição poderá realizar no máximo 5 R.O por semana.</li>
               <li>Uma guarnição não poderá realizar mais de 1 R.O por semana na mesma facção.</li>
               <li>Caso identifiquem problemas em uma facção já invadida, devem reunir provas para solicitar uma pacificação, em vez de realizar outro R.O.</li>
            </ul>
          </li>
          <li>
            <span class="text-green-400">Diretrizes Gerais:</span>
            <ul class="list-disc pl-5 font-normal text-gray-400 mt-1">
               <li>O objetivo principal do R.O é verificar atividades ilegais, não atirar indiscriminadamente em todos os presentes.</li>
               <li>Abuso de poder ou mortes sem justificativa serão consideradas RDM e resultarão em punições.</li>
               <li>Em caso de reincidência, poderá haver punição da organização (ORG).</li>
            </ul>
          </li>
        </ol>
      </div>`
  },
  "incursoes": {
    title: "Incursões e Operações",
    category: "Capítulo III",
    iconName: 'Crosshair',
    contentHTML: `
      <div class="space-y-6 text-gray-300">
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Motivos Válidos para Incursão</h3>
          <p className="text-gray-300">Uma incursão policial poderá ser realizada somente caso haja início de uma troca de tiros durante um R.O.</p>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Regras para Incursão</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
            <li>É imprescindível que haja motivos válidos, devidamente acompanhados de provas, para que uma incursão seja iniciada. Essas provas devem ser enviadas no canal <strong>📑・provas-incursão</strong> dentro do prazo estipulado, garantindo a legitimidade da ação. Essa exigência não se aplica aos casos em que um R.O. evolua naturalmente para uma incursão.</li>
            <li>O prazo máximo para a disponibilização das provas no canal designado é de até 15 minutos após o encerramento da incursão.</li>
            <li>Durante uma incursão policial, é expressamente proibido que os criminosos deixem portões ou portas, sejam elas internas ou externas, trancadas.</li>
            <li>Assim que a incursão for iniciada, os integrantes da favela não podem armazenar itens em baús ou repassá-los para terceiros.</li>
            <li>Durante a incursão, a polícia deverá sempre realizar o avanço (rush).</li>
            <li>É proibido retornar à mesma ação após ser eliminado.</li>
            <li>QRU de disparo isolado não configura um motivo válido para incursão policial.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Regras Complementares sobre QRU de Disparo</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
             <li>A polícia pode utilizar provas de QRU de disparos de uma FAC/ORG como um dos sete elementos de prova necessários para justificar uma possível pacificação.</li>
             <li>Para que um QRU de disparo seja considerado uma dessas sete provas, é necessário que haja três prints de QRU de disparo ocorrendo dentro da FAC/ORG.</li>
          </ul>
        </section>
      </div>`
  },
  "pacificacoes": {
    title: "Pacificações",
    category: "Capítulo III",
    iconName: 'Flag',
    contentHTML: `
      <div class="space-y-8 text-gray-300">
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Mandado de Pacificação</h3>
          <p class="mb-2">A pacificação exige um trabalho investigativo prévio realizado pela polícia.</p>
          <ul class="list-disc pl-5 marker:text-green-500">
            <li>O mandado de pacificação deve ser aprovado pelo Comandos, Desembargador, Ministros de defesa e Resp ilegal.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Provas Necessárias para Aprovação</h3>
          <p class="mb-2">Para que o mandado seja autorizado, devem ser apresentadas provas obrigatórias e complementares, incluindo:</p>
          <ul class="list-disc pl-5 space-y-1 marker:text-green-500">
             <li>Fotos da localização do baú da FAC/ORG. Fotos da bancada da FAC/ORG.</li>
             <li>Gravação dos investigados afirmando que realizam assalto, sequestro ou ação.</li>
             <li>Gravação dos investigados dizendo o que vendem. Rota de FARM dos investigados (não obrigatória).</li>
             <li>Características dos investigados (mochila, cor da roupa, etc.).</li>
             <li>Nome dos líderes e, se possível, o passaporte de ambos.</li>
             <li>Fotos dos líderes da FAC/ORG.</li>
             <li>Três fotos de QRU de disparo no interior da localidade.</li>
             <li>Gravação comprando itens fabricados por membros da FAC/ORG.</li>
             <li>Mapeamento 360º da área comum a ser pacificada.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Aviso da Pacificação</h3>
          <ul class="list-disc pl-5 marker:text-green-500">
            <li>O aviso de pacificação deve ser feito com <strong>no mínimo 48 horas de antecedência</strong>.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Contingente da Pacificação</h3>
          <ul class="list-disc pl-5 space-y-1 marker:text-green-500">
            <li><strong>Máximo:</strong> 30 defensores (bandidos) e 40 policiais.</li>
            <li><strong>Mínimo:</strong> 15 defensores (bandidos) e 25 policiais.</li>
            <li>A quantidade de participantes pode ser ajustada pela equipe da staff, conforme o QG/Favela envolvido.</li>
            <li>Caso o contingente mínimo não seja atingido pelo grupo ilegal, a polícia será declarada vencedora por <strong>W.O.</strong></li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Informação de Contingente</h3>
          <ul class="list-disc pl-5 space-y-1 marker:text-green-500">
            <li>Os bandidos devem informar <strong>6 horas antes</strong> ao Responsável Ilegal o número de participantes.</li>
            <li>O Responsável Ilegal deve comunicar a polícia <strong>até 2 horas antes</strong> da pacificação.</li>
            <li>Se não houver comunicação, a polícia poderá ir com o <strong>contingente máximo permitido</strong>.</li>
          </ul>
        </section>
        
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Tolerância de Atraso</h3>
          <ul class="list-disc pl-5 space-y-1 marker:text-green-500">
             <li>O tempo máximo de atraso permitido para ambos os lados é de <strong>20 minutos</strong>.</li>
             <li>Caso ultrapasse esse tempo, o lado infrator perderá por <strong>W.O.</strong></li>
             <li>Após a saída do comboio policial da DP, não será mais considerado atraso.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Restrições e Proibições</h3>
          <div class="bg-red-900/20 p-4 rounded border-l-4 border-red-500">
            <h4 class="font-bold text-red-400">Proibido:</h4>
            <ul class="list-disc pl-5 space-y-1 text-red-200 mt-2">
              <li>Retirar <strong>itens ou dinheiro</strong> dos baús, painel da facção (painelfac) ou craft após o aviso de pacificação.</li>
              <li>Utilizar <strong>binds de animação</strong> ou comandos /me em <strong>caixa alta e cores destacadas</strong>.</li>
              <li>Bandidos ficarem <strong>fora da área vermelha</strong> da FAC/ORG durante a pacificação.</li>
              <li><strong>Deixar portões e portas trancadas.</strong></li>
            </ul>
            <p class="font-bold text-red-500 mt-3">Qualquer pessoa que cometer qualquer uma dessas infrações, tomará /kill.</p>
          </div>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Uso de Helicópteros</h3>
          <ul class="list-disc pl-5 space-y-1 marker:text-green-500">
            <li>Permitido <strong>1 helicóptero</strong> para a FAC/ORG (<strong>os jogadores dentro contam como defensores</strong>).
              <ul class="list-circle pl-5 text-gray-400">
                <li>O helicóptero pode sobrevoar até <strong>1 quarteirão</strong> do local.</li>
                <li><strong>Proibido pousar</strong> fora da área vermelha demarcada.</li>
              </ul>
            </li>
            <li>Permitido <strong>1 helicóptero</strong> para a polícia (<strong>os policiais dentro contam como pacificadores</strong>).</li>
            <li><strong>Proibido reparar ou substituir helicópteros após o FF.</strong></li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Regras de Combate</h3>
          <ul class="list-disc pl-5 space-y-1 marker:text-green-500">
            <li>Após <strong>30 minutos de ação</strong>, o <strong>maior contingente</strong> deverá realizar o <strong>rush</strong>.</li>
            <li>O rush será revezado entre bandidos e polícia a cada <strong>5 minutos</strong>.</li>
            <li>Se o maior contingente não realizar o rush dentro de <strong>10 minutos</strong>, a vitória será concedida ao adversário.</li>
            <li><strong>Proibido retornar à pacificação após morrer.</strong></li>
            <li>Quem tentar "assistir" à pacificação será enviado para a <strong>garagem mais próxima</strong> e poderá ser punido pela staff.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Pausas, Bugs e Crash</h3>
           <ul class="list-disc pl-5 space-y-1 marker:text-green-500">
             <li>A pacificação pode ser pausada <strong>apenas</strong> se houver consenso entre os <strong>Responsáveis Polícia e Ilegal</strong>.</li>
             <li>Exemplos: <strong>ataque de hackers, bugs graves.</strong></li>
             <li>Se um jogador trocar de posição durante a pausa, a <strong>vitória será concedida ao lado oposto</strong>.</li>
             <li>Jogadores que sofrerem <strong>crash</strong> <strong>não poderão retornar à ação</strong>.</li>
             <li>O prazo para reportar problemas ou abuso de bug é de <strong>até 2 horas após o término da pacificação</strong>.</li>
           </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">Recompensas e Penalidades</h3>
          <p class="font-bold text-green-500 mb-2">Se a polícia vencer:</p>
          <ul class="list-disc pl-5 space-y-1 marker:text-green-500">
            <li>Todos os itens e dinheiro armazenados nos baús da facção e no painel da fac serão apreendidos.</li>
            <li>Cada policial receberá R$1,000.000 em dinheiro limpo.</li>
            <li>Liberado o farm (dentro das regras de farm).</li>
            <li>O controle da facção por 24 horas, sendo proibido a venda e a utilização de armas.</li>
          </ul>
        </section>
      </div>`
  },
  "recrutamentos": {
    title: "Recrutamentos",
    category: "Capítulo IV",
    iconName: 'UserPlus',
    contentHTML: `
      <div class="space-y-8 text-gray-300">
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-4">Escala de Recrutamento Semanal</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-700 text-sm">
              <thead class="bg-gray-800 text-green-400">
                <tr>
                  <th class="border border-gray-700 p-2">Dia da Semana</th>
                  <th class="border border-gray-700 p-2">Força</th>
                  <th class="border border-gray-700 p-2">1° Horário</th>
                  <th class="border border-gray-700 p-2">2° Horário</th>
                </tr>
              </thead>
              <tbody>
                <tr><td class="border border-gray-700 p-2">Segunda-feira</td><td class="border border-gray-700 p-2 font-bold text-center">PMERJ</td><td class="border border-gray-700 p-2 text-center">15:15</td><td class="border border-gray-700 p-2 text-center">20:00</td></tr>
                <tr><td class="border border-gray-700 p-2">Terça-feira</td><td class="border border-gray-700 p-2 font-bold text-center">PF</td><td class="border border-gray-700 p-2 text-center">15:00</td><td class="border border-gray-700 p-2 text-center">19:30</td></tr>
                <tr><td class="border border-gray-700 p-2">Quarta-feira</td><td class="border border-gray-700 p-2 font-bold text-center">PRF</td><td class="border border-gray-700 p-2 text-center">15:00</td><td class="border border-gray-700 p-2 text-center">19:30</td></tr>
                <tr><td class="border border-gray-700 p-2">Quinta-feira</td><td class="border border-gray-700 p-2 font-bold text-center">ROTA</td><td class="border border-gray-700 p-2 text-center">15:00</td><td class="border border-gray-700 p-2 text-center">18:00</td></tr>
                <tr><td class="border border-gray-700 p-2">Sexta-feira</td><td class="border border-gray-700 p-2 font-bold text-center">PCESP</td><td class="border border-gray-700 p-2 text-center">15:15</td><td class="border border-gray-700 p-2 text-center">20:00</td></tr>
                <tr><td class="border border-gray-700 p-2">Sábado</td><td class="border border-gray-700 p-2 font-bold text-center">BOPE</td><td class="border border-gray-700 p-2 text-center">15:00</td><td class="border border-gray-700 p-2 text-center">20:30</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-blue-900/20 border-l-4 border-blue-500 p-4 text-sm">
            <p class="font-bold text-blue-400 mb-1">Requisitos:</p>
            <ul class="list-disc pl-4 space-y-1">
              <li>Cada força deve realizar 2 recrutamentos por semana.</li>
              <li>Horários disponíveis: das 18h às 22h.</li>
              <li>Duração mínima: 1 hora.</li>
              <li>Obrigatória presença de um responsável (RESP PM) ou deve ser gravado.</li>
            </ul>
          </div>
          <div class="bg-red-900/20 border-l-4 border-red-500 p-4 text-sm flex items-center">
            <p>Todos os conscritos devem estar sem qualquer tipo de maquiagem, tatuagem ou cabelo pintado (somente cores naturais); Os homens devem estar com o cabelo raspado e as mulheres de cabelo preso.</p>
          </div>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-4">Roupa de Conscritos</h3>
          <div class="flex flex-col md:flex-row gap-6 items-start">
            <div class="w-full md:w-1/3 border border-gray-700 rounded-lg overflow-hidden bg-black/40 p-2">
               <img 
                 src="https://regrasaltarj.gitbook.io/~gitbook/image?url=https%3A%2F%2F2523550889-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FuGFTsywTqmGg7CrtjbtR%252Fuploads%252FDpvU7LsIcxKokOEOEEQe%252Fimage.png%3Falt%3Dmedia%26token%3Da69227bc-00d5-4503-98e2-8e75709a3fc0&width=768&dpr=4&quality=100&sign=aa9cf089&sv=2" 
                 alt="Fardamento Conscrito" 
                 class="w-full h-auto rounded"
               />
            </div>
            <div class="flex-1 space-y-4">
              <div class="bg-gray-800 p-4 rounded border border-gray-700">
                <h4 class="font-bold text-white mb-2">Fardamento Feminino</h4>
                <code class="text-xs text-green-400 bg-black p-2 rounded block break-all">jaqueta 117 0; calca 212 0; blusa 9 0; sapatos 25 0; oculos 2 0; acessorios 17 0; chapeu -1 -1; colete 0 0; mascara 0 0; maos 11 0;</code>
              </div>
              <div class="bg-gray-800 p-4 rounded border border-gray-700">
                <h4 class="font-bold text-white mb-2">Fardamento Masculino</h4>
                <code class="text-xs text-green-400 bg-black p-2 rounded block break-all">jaqueta 238 0; calca 33 0; blusa 15 0; sapatos 25 0; oculos -1 -1; acessorio 34 0; chapeu -1 -1; colete 0 0; mascara 0 0; maos 5 0;</code>
              </div>
            </div>
          </div>
        </section>
      </div>`
  },
  "transferencia": {
    title: "Transferência",
    category: "Capítulo IV",
    iconName: 'ArrowRightLeft',
    contentHTML: `
      <div class="space-y-8 text-gray-300">
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">1. Prazos para Solicitação</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
            <li>O oficial somente poderá solicitar transferência para outra guarnição após <strong class="text-yellow-400">15 dias de seu recrutamento</strong>.</li>
            <li>Caso o oficial seja transferido, ele só poderá solicitar nova transferência após <strong class="text-yellow-400">15 dias da última movimentação</strong>.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">2. Transferência após Atuação no Ilegal</h3>
          <p class="mb-3">Se o policial sair da corporação para atuar no ilegal, ele deverá seguir as seguintes regras para retorno:</p>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
            <li><strong>Prazo de retorno:</strong> <strong class="text-blue-400">3 dias</strong> para retornar à sua guarnição.</li>
            <li><strong>Reintegração de patente:</strong> <strong class="text-blue-400">24 horas</strong> para ser reintegrado à mesma patente em que estava.</li>
            <li><strong>Nova solicitação de transferência:</strong> Apenas após <strong class="text-yellow-400">15 dias de sua volta</strong>.</li>
            <li><strong class="text-red-400">Saída definitiva:</strong> Caso o policial saia da corporação pela <strong class="text-red-400">terceira vez</strong>, ele <strong class="text-red-400">não poderá retornar</strong> e será automaticamente incluído na <strong class="text-red-400">Blacklist (BL)</strong>.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">3. Rebaixamento Obrigatório</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
            <li>Ao ser transferido, o oficial será <strong class="text-yellow-400">obrigatoriamente rebaixado o equivalente a uma patente</strong>.</li>
            <li>A permanência em <strong>forças especiais</strong> após a transferência ficará a critério do Comando.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">4. Aprovação e Registro</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
            <li>Toda solicitação de transferência deve ser aprovada por pelo menos <strong class="text-green-400">um membro do Comando</strong> (ou equivalente) de cada uma das guarnições envolvidas.</li>
            <li>Todas as transferências devem ser <strong>registradas obrigatoriamente</strong> no canal designado no Discord da Polícia ALTA RJ.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">5. Advertências e Restrições</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
            <li>Caso o policial possua uma <strong class="text-red-400">advertência ativa</strong>, ele deverá aguardar seu término para poder solicitar transferência.</li>
            <li>Advertências <strong class="text-red-400">não poderão ser revogadas</strong> apenas para possibilitar a transferência.</li>
          </ul>
        </section>

        <div class="mt-6 p-4 bg-blue-900/20 border-l-4 border-blue-500 text-sm">
          <p class="font-bold text-blue-400 mb-2">ℹ️ Informação Importante:</p>
          <p>Todas as transferências devem seguir rigorosamente os prazos estabelecidos e passar pela aprovação do Comando de ambas as guarnições envolvidas.</p>
        </div>
      </div>`
  },
  "blacklist": {
    title: "Blacklist",
    category: "Capítulo IV",
    iconName: 'FileWarning',
    contentHTML: `
      <div class="space-y-8 text-gray-300">
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">1. Inclusão na Blacklist</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
             <li>A <strong class="text-red-400">Blacklist da polícia</strong> é um registro de membros que foram permanentemente excluídos da corporação por descumprimento grave das regras.</li>
             <li>A inclusão de um jogador na <strong class="text-red-400">Blacklist</strong> <strong>só poderá ser solicitada exclusivamente pelo Alto Escalão</strong>.</li>
             <li>A entrada na Blacklist é uma penalidade <strong class="text-red-400">severa e definitiva</strong>, aplicada apenas em casos devidamente justificados.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">2. Remoção da Blacklist</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
             <li>Jogadores que forem adicionados à <strong class="text-red-400">Blacklist</strong> <strong>somente poderão ser removidos</strong> ao adquirir a <strong class="text-yellow-400">remoção na loja do servidor</strong>.</li>
             <li>Após a compra da remoção, o jogador deverá entrar em contato com um dos <strong class="text-green-400">Responsáveis Polícia</strong> para que o <strong>cargo "BlacklistPolicia" seja retirado</strong> do jogo.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">3. Retorno à Polícia após Remoção da Blacklist</h3>
          <p class="mb-3">Caso o jogador removido da <strong class="text-red-400">Blacklist</strong> deseje <strong>retornar à corporação</strong>, ele deverá obrigatoriamente <strong class="text-yellow-400">recomeçar sua carreira do zero</strong>.</p>
          <p class="mb-2 font-semibold">O retorno será feito da seguinte forma:</p>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
            <li>O jogador será <strong class="text-green-400">setado na patente mais baixa</strong>.</li>
            <li>Deverá <strong>seguir o fluxo normal de promoções</strong>, respeitando as regras hierárquicas.</li>
            <li><strong class="text-red-400">É estritamente proibido</strong> setar um ex-integrante da Blacklist <strong>diretamente em cargos acima do inicial</strong>.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">4. Considerações Finais</h3>
          <ul class="list-disc pl-5 space-y-2 marker:text-green-500">
            <li>A Blacklist é uma penalidade grave, aplicada <strong>apenas quando há justificativa comprovada</strong>.</li>
            <li>O registro da Blacklist será mantido no canal <strong class="text-purple-400">💀・blacklist</strong> para controle e transparência.</li>
          </ul>
        </section>

        <div class="mt-6 p-4 bg-red-900/20 border-l-4 border-red-500 text-sm">
          <p class="font-bold text-red-400 mb-2">⚠️ Aviso Importante:</p>
          <p>A Blacklist é uma medida extrema e permanente. Certifique-se de seguir todas as regras da corporação para evitar essa penalidade.</p>
        </div>
      </div>`
  },
  "sets": {
    title: "Sets e Unidades",
    category: "Capítulo IV",
    iconName: 'Users',
    contentHTML: `
      <div class="space-y-6 text-gray-300">
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">1. Restrições de Setagem</h3>
          <ul class="list-disc pl-5 space-y-1 marker:text-green-500">
             <li><strong>É expressamente proibido</strong> setar membros do <strong>ilegal diretamente em patentes altas</strong> dentro da corporação policial.</li>
             <li><strong>Não é permitido</strong> setar membros do <strong>ilegal para participar de eventos da polícia</strong>, independentemente da circunstância.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">2. Respeito à Hierarquia e ao Processo de Recrutamento</h3>
          <ul class="list-disc pl-5 space-y-1 marker:text-green-500">
             <li>Nenhuma pessoa, seja do <strong>ilegal ou do legal</strong>, pode ser <strong>setada diretamente em patentes altas</strong>.</li>
             <li>Todo jogador que ingressar na corporação <strong>deve obrigatoriamente seguir a hierarquia e o processo de recrutamento</strong>, sem exceções.</li>
          </ul>
        </section>
      </div>`
  },
  "discord": {
    title: "Discord e Comunicação",
    category: "Capítulo IV",
    iconName: 'MessageSquare',
    contentHTML: `
      <div class="space-y-6 text-gray-300">
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">1. Respeito e Conduta</h3>
          <ul class="list-disc pl-5 space-y-1 marker:text-green-500">
            <li>O respeito deve estar acima de tudo. Ofensas, xingamentos ou qualquer tipo de ataque pessoal são proibidos.</li>
            <li>Todos têm o direito de se expressar, mas sem faltar com o respeito.</li>
            <li>Discussões tóxicas não serão toleradas. Debates saudáveis são bem-vindos, mas brigas e desentendimentos serão moderados.</li>
            <li>Se não conhecer a pessoa, evite brincadeiras de mau gosto ou tentativas forçadas de interação.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">2. Comunicação Adequada</h3>
          <ul class="list-disc pl-5 space-y-1 marker:text-green-500">
            <li>Críticas destrutivas não serão aceitas. Reclamações sobre a polícia ou outras áreas devem ser feitas pelos canais apropriados.</li>
            <li>O chat não é o local para difamação ou disseminação de negatividade.</li>
            <li>Evite flood e spam. Mensagens repetitivas ou desnecessárias atrapalham a comunicação e devem ser evitadas.</li>
            <li>Seja responsável com suas palavras. Caso tenha alguma denúncia ou problema sério, utilize os canais formais ou entre em contato diretamente com os responsáveis.</li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">3. Respeito às Diretrizes e Responsáveis</h3>
          <ul class="list-disc pl-5 space-y-1 marker:text-green-500">
            <li>Caso um responsável solicite a mudança de assunto ou o encerramento de uma conversa, a orientação deve ser seguida sem resistência.</li>
            <li>Não chame responsáveis diretamente pelo chat geral. Utilize a aba apropriada para isso.</li>
          </ul>
        </section>
        
        <section>
          <h3 class="text-xl font-bold text-green-400 mb-2">4. Penalidades</h3>
          <ul class="list-disc pl-5 space-y-1 marker:text-green-500">
            <li>O descumprimento dessas regras pode resultar em punições, como restrições no Discord ou prisão dentro da cidade.</li>
          </ul>
        </section>
      </div>`
  },
  "valor-acoes": {
    title: "Valor das Ações",
    category: "Capítulo V",
    iconName: 'DollarSign',
    contentHTML: `
      <div class="space-y-4 text-gray-300">
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Nióbio</span>
          <span class="text-gray-400">R: 220.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Banco Central</span>
          <span class="text-gray-400">R: 200.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Banco Paleto</span>
          <span class="text-gray-400">R: 200.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Galinheiro</span>
          <span class="text-gray-400">R: 130.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Joalheria</span>
          <span class="text-gray-400">R: 130.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Açougue</span>
          <span class="text-gray-400">R: 130.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Observatório</span>
          <span class="text-gray-400">R: 130.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Faculdade</span>
          <span class="text-gray-400">R: 130.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Ammunation</span>
          <span class="text-gray-400">R: 100.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Bebidas</span>
          <span class="text-gray-400">R: 100.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">China</span>
          <span class="text-gray-400">R: 100.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Lojinha</span>
          <span class="text-gray-400">R: 100.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Festa Junina</span>
          <span class="text-gray-400">R: 100.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">LifeInvader</span>
          <span class="text-gray-400">R: 100.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Fast Food</span>
          <span class="text-gray-400">R: 100.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Hamburgueria</span>
          <span class="text-gray-400">R: 100.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Antena</span>
          <span class="text-gray-400">R: 100.000 para cada PM</span>
        </div>
        <div class="flex justify-between items-center border-b border-gray-800 pb-2">
          <span class="font-bold text-green-400">Lucky Purguer</span>
          <span class="text-gray-400">R: 100.000 para cada PM</span>
        </div>
      </div>`
  },
  "info-acoes": {
    title: "Info Ações",
    category: "Capítulo V",
    iconName: 'Info',
    contentHTML: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
        <div class="bg-gray-800 p-4 rounded border border-gray-700">
          <h4 class="font-bold text-green-400 mb-2">BANCO PALETO</h4>
          <div class="text-sm space-y-1">
            <p><span class="text-gray-500">Armamento:</span> Pistola, SMG e Fuzil</p>
            <p><span class="text-gray-500">Bandidos (Min/Máx):</span> 15/20</p>
            <p><span class="text-gray-500">Policiais (Min/Máx):</span> 18/22</p>
          </div>
        </div>
        <div class="bg-gray-800 p-4 rounded border border-gray-700">
          <h4 class="font-bold text-green-400 mb-2">BANCO CENTRAL</h4>
          <div class="text-sm space-y-1">
            <p><span class="text-gray-500">Armamento:</span> Pistola, SMG e Fuzil</p>
            <p><span class="text-gray-500">Bandidos (Min/Máx):</span> 15/20</p>
            <p><span class="text-gray-500">Policiais (Min/Máx):</span> 18/22</p>
          </div>
        </div>
        <div class="bg-gray-800 p-4 rounded border border-gray-700">
          <h4 class="font-bold text-green-400 mb-2">NIÓBIO</h4>
          <div class="text-sm space-y-1">
            <p><span class="text-gray-500">Armamento:</span> Pistola, SMG e Fuzil</p>
            <p><span class="text-gray-500">Bandidos (Min/Máx):</span> 15/20</p>
            <p><span class="text-gray-500">Policiais (Min/Máx):</span> 18/22</p>
          </div>
        </div>
        <div class="bg-gray-800 p-4 rounded border border-gray-700">
          <h4 class="font-bold text-green-400 mb-2">JOALHERIA</h4>
          <div class="text-sm space-y-1">
            <p><span class="text-gray-500">Armamento:</span> Pistola, SMG e Fuzil</p>
            <p><span class="text-gray-500">Bandidos (Min/Máx):</span> 10/15</p>
            <p><span class="text-gray-500">Policiais (Min/Máx):</span> 12/18</p>
          </div>
        </div>
        <div class="bg-gray-800 p-4 rounded border border-gray-700">
          <h4 class="font-bold text-green-400 mb-2">GALINHEIRO</h4>
          <div class="text-sm space-y-1">
            <p><span class="text-gray-500">Armamento:</span> Pistola, SMG e Fuzil</p>
            <p><span class="text-gray-500">Bandidos (Min/Máx):</span> 10/15</p>
            <p><span class="text-gray-500">Policiais (Min/Máx):</span> 12/18</p>
          </div>
        </div>
        <div class="bg-gray-800 p-4 rounded border border-gray-700">
          <h4 class="font-bold text-green-400 mb-2">AÇOUGUE</h4>
          <div class="text-sm space-y-1">
            <p><span class="text-gray-500">Armamento:</span> Pistola, SMG e Fuzil</p>
            <p><span class="text-gray-500">Bandidos (Min/Máx):</span> 10/15</p>
            <p><span class="text-gray-500">Policiais (Min/Máx):</span> 12/18</p>
          </div>
        </div>
        <div class="bg-gray-800 p-4 rounded border border-gray-700">
          <h4 class="font-bold text-green-400 mb-2">FACULDADE</h4>
          <div class="text-sm space-y-1">
            <p><span class="text-gray-500">Armamento:</span> Pistola, SMG e Fuzil</p>
            <p><span class="text-gray-500">Bandidos (Min/Máx):</span> 10/15</p>
            <p><span class="text-gray-500">Policiais (Min/Máx):</span> 12/18</p>
          </div>
        </div>
        <div class="bg-gray-800 p-4 rounded border border-gray-700">
          <h4 class="font-bold text-green-400 mb-2">AMMUNATION</h4>
          <div class="text-sm space-y-1">
            <p><span class="text-gray-500">Armamento:</span> Apenas pistolas</p>
            <p><span class="text-gray-500">Bandidos (Min/Máx):</span> 3/6</p>
            <p><span class="text-gray-500">Policiais (Min/Máx):</span> 4/7</p>
          </div>
        </div>
        <div class="bg-gray-800 p-4 rounded border border-gray-700">
          <h4 class="font-bold text-green-400 mb-2">LOJINHA</h4>
          <div class="text-sm space-y-1">
            <p><span class="text-gray-500">Armamento:</span> Apenas pistolas</p>
            <p><span class="text-gray-500">Bandidos (Min/Máx):</span> 3/6</p>
            <p><span class="text-gray-500">Policiais (Min/Máx):</span> 4/7</p>
          </div>
        </div>
        <div class="bg-gray-800 p-4 rounded border border-gray-700">
          <h4 class="font-bold text-green-400 mb-2">CHINA</h4>
          <div class="text-sm space-y-1">
            <p><span class="text-gray-500">Armamento:</span> Apenas pistolas</p>
            <p><span class="text-gray-500">Bandidos (Min/Máx):</span> 3/6</p>
            <p><span class="text-gray-500">Policiais (Min/Máx):</span> 4/7</p>
          </div>
        </div>
        <div class="bg-gray-800 p-4 rounded border border-gray-700">
          <h4 class="font-bold text-green-400 mb-2">FAST FOOD</h4>
          <div class="text-sm space-y-1">
            <p><span class="text-gray-500">Armamento:</span> Apenas pistolas</p>
            <p><span class="text-gray-500">Bandidos (Min/Máx):</span> 3/6</p>
            <p><span class="text-gray-500">Policiais (Min/Máx):</span> 4/7</p>
          </div>
        </div>
        <div class="bg-gray-800 p-4 rounded border border-gray-700">
          <h4 class="font-bold text-green-400 mb-2">LUCKY BURGER</h4>
          <div class="text-sm space-y-1">
            <p><span class="text-gray-500">Armamento:</span> Apenas pistolas</p>
            <p><span class="text-gray-500">Bandidos (Min/Máx):</span> 3/5</p>
            <p><span class="text-gray-500">Policiais (Min/Máx):</span> 4/6</p>
          </div>
        </div>
        <div class="bg-gray-800 p-4 rounded border border-gray-700">
          <h4 class="font-bold text-green-400 mb-2">ANTENA</h4>
          <div class="text-sm space-y-1">
            <p><span class="text-gray-500">Armamento:</span> Apenas pistolas</p>
            <p><span class="text-gray-500">Bandidos (Min/Máx):</span> 3/5</p>
            <p><span class="text-gray-500">Policiais (Min/Máx):</span> 4/6</p>
          </div>
        </div>
        <div class="bg-gray-800 p-4 rounded border border-gray-700">
          <h4 class="font-bold text-green-400 mb-2">FESTA JUNINA</h4>
          <div class="text-sm space-y-1">
            <p><span class="text-gray-500">Armamento:</span> Apenas pistolas</p>
            <p><span class="text-gray-500">Bandidos (Min/Máx):</span> 3/5</p>
            <p><span class="text-gray-500">Policiais (Min/Máx):</span> Mínimo 4</p>
          </div>
        </div>
        <div class="bg-gray-800 p-4 rounded border border-gray-700">
          <h4 class="font-bold text-green-400 mb-2">TREVOR</h4>
          <div class="text-sm space-y-1">
            <p><span class="text-gray-500">Armamento:</span> Apenas pistolas</p>
            <p><span class="text-gray-500">Bandidos (Min/Máx):</span> 3/5</p>
            <p><span class="text-gray-500">Policiais (Min/Máx):</span> 4/6</p>
          </div>
        </div>
      </div>`
  }
};