import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsProps {
    onBack: () => void;
}

const Terms: React.FC<TermsProps> = ({ onBack }) => {
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

                <h1 className="text-4xl font-bold text-white mb-4">Termos de Uso</h1>
                <p className="text-gray-400 mb-8">Última atualização: 23 de dezembro de 2025</p>

                <div className="space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
                        <p className="leading-relaxed">
                            Ao acessar e usar o portal de regras do Brasil Roleplay, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deve usar este portal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Uso do Portal</h2>
                        <p className="leading-relaxed mb-4">
                            Este portal é destinado exclusivamente para membros da força policial do servidor Brasil Roleplay. O acesso e uso deste portal implica que você:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>É um membro ativo ou em processo de recrutamento da polícia do servidor</li>
                            <li>Utilizará as informações apenas para fins relacionados ao roleplay</li>
                            <li>Não compartilhará informações confidenciais com terceiros não autorizados</li>
                            <li>Respeitará todas as regras e procedimentos descritos neste portal</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Propriedade Intelectual</h2>
                        <p className="leading-relaxed">
                            Todo o conteúdo presente neste portal, incluindo textos, gráficos, logos, ícones e imagens, é propriedade do Brasil Roleplay e está protegido pelas leis de direitos autorais. É proibida a reprodução, distribuição ou modificação sem autorização prévia.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Responsabilidades do Usuário</h2>
                        <p className="leading-relaxed mb-4">
                            Como usuário deste portal, você é responsável por:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Manter a confidencialidade de suas credenciais de acesso</li>
                            <li>Notificar imediatamente sobre qualquer uso não autorizado de sua conta</li>
                            <li>Garantir que suas ações no servidor estejam em conformidade com as regras apresentadas</li>
                            <li>Atualizar-se regularmente sobre mudanças nas regras e procedimentos</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Modificações do Conteúdo</h2>
                        <p className="leading-relaxed">
                            O Brasil Roleplay reserva-se o direito de modificar, atualizar ou remover qualquer conteúdo deste portal a qualquer momento, sem aviso prévio. É responsabilidade do usuário verificar regularmente as atualizações.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Limitação de Responsabilidade</h2>
                        <p className="leading-relaxed">
                            O Brasil Roleplay não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de uso deste portal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Contato</h2>
                        <p className="leading-relaxed">
                            Para questões relacionadas a estes termos de uso, entre em contato através do Discord oficial do Brasil Roleplay.
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

export default Terms;
