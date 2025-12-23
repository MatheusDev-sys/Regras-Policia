import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyProps {
    onBack: () => void;
}

const Privacy: React.FC<PrivacyProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#0F1116] text-gray-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors mb-8"
                >
                    <ArrowLeft size={20} />
                    Voltar
                </button>

                <h1 className="text-4xl font-bold text-white mb-4">Política de Privacidade</h1>
                <p className="text-gray-400 mb-8">Última atualização: 23 de dezembro de 2025</p>

                <div className="space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Informações que Coletamos</h2>
                        <p className="leading-relaxed mb-4">
                            O portal de regras do Brasil Roleplay coleta e processa as seguintes informações:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Informações de Conta:</strong> Email e credenciais de autenticação</li>
                            <li><strong>Dados de Perfil:</strong> Cargo, função e permissões dentro da organização policial</li>
                            <li><strong>Dados de Uso:</strong> Páginas acessadas, tempo de navegação e interações com o portal</li>
                            <li><strong>Informações Técnicas:</strong> Endereço IP, tipo de navegador e dispositivo utilizado</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Como Usamos Suas Informações</h2>
                        <p className="leading-relaxed mb-4">
                            Utilizamos as informações coletadas para:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Autenticar e gerenciar o acesso ao portal</li>
                            <li>Personalizar a experiência do usuário de acordo com seu cargo</li>
                            <li>Manter a segurança e integridade do sistema</li>
                            <li>Melhorar e otimizar o funcionamento do portal</li>
                            <li>Comunicar atualizações importantes sobre regras e procedimentos</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Compartilhamento de Informações</h2>
                        <p className="leading-relaxed mb-4">
                            Suas informações pessoais não são vendidas ou compartilhadas com terceiros, exceto:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Com administradores e desenvolvedores autorizados do Brasil Roleplay</li>
                            <li>Quando exigido por lei ou processo legal</li>
                            <li>Para proteger os direitos, propriedade ou segurança do servidor</li>
                            <li>Com provedores de serviços que auxiliam na operação do portal (ex: Supabase para banco de dados)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Armazenamento e Segurança</h2>
                        <p className="leading-relaxed">
                            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. Os dados são armazenados em servidores seguros com criptografia e acesso restrito.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Cookies e Tecnologias Similares</h2>
                        <p className="leading-relaxed">
                            Utilizamos cookies e tecnologias similares para melhorar a funcionalidade do portal, manter sua sessão ativa e analisar padrões de uso. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Seus Direitos</h2>
                        <p className="leading-relaxed mb-4">
                            Você tem o direito de:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Acessar e revisar suas informações pessoais</li>
                            <li>Solicitar correção de dados incorretos ou incompletos</li>
                            <li>Solicitar a exclusão de sua conta e dados associados</li>
                            <li>Retirar o consentimento para processamento de dados (quando aplicável)</li>
                            <li>Receber uma cópia de seus dados em formato estruturado</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Retenção de Dados</h2>
                        <p className="leading-relaxed">
                            Mantemos suas informações pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Alterações nesta Política</h2>
                        <p className="leading-relaxed">
                            Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas através do portal ou por email. Recomendamos que você revise esta página regularmente.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Contato</h2>
                        <p className="leading-relaxed">
                            Para questões sobre privacidade, exercício de direitos ou preocupações relacionadas aos seus dados, entre em contato através do Discord oficial do Brasil Roleplay ou com o desenvolvedor Matheus Dev.
                        </p>
                    </section>
                </div>

                <div className="mt-12 p-6 bg-[#1a1d23] border border-gray-800 rounded-lg">
                    <p className="text-sm text-gray-400 text-center">
                        © 2025 Brasil Roleplay. Desenvolvido por <strong className="text-green-400">Matheus Dev</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
