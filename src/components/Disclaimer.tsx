
import React from 'react';
import { ShieldAlert } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <section className="section py-20" id="disclaimer">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4 title-gradient inline-block">Legal Disclaimer</h2>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center cyber-border">
            <ShieldAlert size={32} className="text-cyber-glow" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto glass-card rounded-xl p-6 md:p-8">
        <div className="space-y-6 text-sm text-gray-300">
          <p>
            <strong className="text-white">SERVICE DISCLAIMER:</strong> MULTITASKER GPT is provided "as is" without warranties of any kind, either express or implied. AI WEB TOOLS LLC makes no representations or warranties regarding the accuracy, functionality, or performance of MULTITASKER GPT.
          </p>
          
          <p>
            <strong className="text-white">DATA ACCURACY:</strong> While MULTITASKER GPT strives to provide accurate and up-to-date information through its web searches, we do not guarantee the completeness, reliability, or accuracy of this information. Users should independently verify any critical information before making decisions based on it.
          </p>
          
          <p>
            <strong className="text-white">THIRD-PARTY CONTENT:</strong> MULTITASKER GPT may access third-party websites and resources. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or resources.
          </p>
          
          <p>
            <strong className="text-white">LIMITATION OF LIABILITY:</strong> In no event shall AI WEB TOOLS LLC, its officers, directors, employees, or agents be liable for any indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with the use of MULTITASKER GPT.
          </p>
          
          <p>
            <strong className="text-white">USER RESPONSIBILITY:</strong> Users are solely responsible for their use of MULTITASKER GPT and for any decisions made based on information provided by the service. We recommend users exercise their own judgment and verification for critical tasks.
          </p>
          
          <p>
            <strong className="text-white">SERVICE CHANGES:</strong> AI WEB TOOLS LLC reserves the right to modify, suspend, or discontinue MULTITASKER GPT, whether temporarily or permanently, at any time without notice.
          </p>
          
          <p>
            <strong className="text-white">INDEMNIFICATION:</strong> Users agree to indemnify and hold harmless AI WEB TOOLS LLC from any claims, losses, liabilities, expenses, damages, and costs, including reasonable attorneys' fees, arising from or related to their use of MULTITASKER GPT.
          </p>
          
          <p>
            <strong className="text-white">GOVERNING LAW:</strong> This disclaimer is governed by the laws of the jurisdiction in which AI WEB TOOLS LLC operates, without regard to its conflict of law provisions.
          </p>
          
          <p>
            By using MULTITASKER GPT, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. If you do not agree with any part of this disclaimer, please refrain from using MULTITASKER GPT.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-6">By accessing MULTITASKER GPT, you acknowledge and accept these terms.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://openai.com/policies/privacy-policy/" 
            className="text-cyber-glow hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <span className="text-gray-600">|</span>
          <a 
            href="https://aiwebtools.ai/terms-of-services" 
            className="text-cyber-glow hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
