'use client';

import { useState, useEffect, useRef, useCallback, type KeyboardEvent, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEthereum } from 'react-icons/fa';
import { SiSolidity, SiWeb3Dotjs, SiTypescript, SiRust } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { useMounted } from '@/hooks';

interface CommandHistory {
  command: string;
  output: ReactNode;
  timestamp: number;
}

// 文件系统模拟
const fileSystem = {
  'about.md':
    "👋 Hi, I'm Dexter Ellis\n- 🔭 Web3 Technical Director\n- 💡 Blockchain Enthusiast\n- 🌱 DeFi Builder",
  'skills.txt':
    '- Smart Contract Development\n- DeFi Protocol Design\n- Blockchain Architecture\n- Full-stack Web3 Development',
  'projects/': {
    'defi-protocol.sol': 'A next-gen DeFi protocol',
    'nft-marketplace.ts': 'NFT trading platform',
    'dao-governance.rs': 'DAO governance system',
  },
  'contact.json':
    '{\n  "email": "dexter@web3.dev",\n  "telegram": "@dexterdev",\n  "discord": "dexter#1234"\n}',
  'README.md':
    "# Welcome to Dexter's Terminal\n\nAvailable commands:\n- ls: List files and directories\n- cat: View file contents\n- pwd: Show current directory\n- help: Show available commands\n- clear: Clear terminal\n- cd: Change directory",
};

// 定义可用命令
type CommandFunction = (...args: string[]) => ReactNode;

interface AvailableCommands {
  [key: string]: CommandFunction;
}

const createAvailableCommands = (currentDirectory: string): AvailableCommands => ({
  help: () => (
    <div className="space-y-1">
      <span className="text-blue-400 font-bold">Available commands:</span>
      <div className="text-gray-300">
        - <span className="text-yellow-400">ls</span> [path]: List files and directories
        - <span className="text-yellow-400">cat</span> &lt;file&gt;: View file contents
        - <span className="text-yellow-400">pwd</span>: Show current directory
        - <span className="text-yellow-400">clear</span>: Clear terminal
        - <span className="text-yellow-400">cd</span> &lt;dir&gt;: Change directory
        - <span className="text-yellow-400">whoami</span>: Display user info
        - <span className="text-yellow-400">date</span>: Show current date
        - <span className="text-yellow-400">echo</span> &lt;text&gt;: Display text
      </div>
    </div>
  ),

  ls: (path = '.') => {
    if (path === '.') {
      return (
        <div className="flex flex-wrap gap-2">
          {Object.keys(fileSystem).map((file) => (
            <span key={file}>
              {file.endsWith('/') ? (
                <span className="text-blue-400">{file}</span>
              ) : (
                <span className="text-yellow-400">{file}</span>
              )}
            </span>
          ))}
        </div>
      );
    }
    if (path === 'projects') {
      return (
        <div className="flex flex-wrap gap-2">
          {Object.keys(fileSystem['projects/']).map((file) => (
            <span key={file} className="text-yellow-400">
              {file}
            </span>
          ))}
        </div>
      );
    }
    return <span className="text-red-400">ls: cannot access {path}: No such file or directory</span>;
  },

  cat: (file: string) => {
    if (file === 'about.md') {
      return (
        <div className="space-y-2">
          <span className="text-green-400 text-lg">👋 Hi, I&apos;m Dexter Ellis</span>
          <div className="text-blue-400">
            <div>🔭 Web3 Technical Director</div>
            <div>💡 Blockchain Enthusiast</div>
            <div>🌱 DeFi Builder</div>
          </div>
        </div>
      );
    }

    if (file === 'skills.txt') {
      return (
        <div className="space-y-1">
          {[
            'Smart Contract Development',
            'DeFi Protocol Design',
            'Blockchain Architecture',
            'Full-stack Web3 Development',
          ].map((skill) => (
            <div key={skill} className="text-yellow-400">
              - {skill}
            </div>
          ))}
        </div>
      );
    }

    if (file === 'README.md') {
      return (
        <div className="space-y-2">
          <div className="text-green-400 text-lg font-bold"># Welcome to Dexter&apos;s Terminal</div>
          <div className="text-blue-400 font-bold">Available commands:</div>
          <div className="text-gray-300 space-y-1">
            - <span className="text-yellow-400">ls</span>: List files and directories
            - <span className="text-yellow-400">cat</span>: View file contents
            - <span className="text-yellow-400">pwd</span>: Show current directory
            - <span className="text-yellow-400">help</span>: Show available commands
            - <span className="text-yellow-400">clear</span>: Clear terminal
            - <span className="text-yellow-400">cd</span>: Change directory
          </div>
        </div>
      );
    }

    if (file === 'contact.json') {
      return (
        <div className="text-blue-400 whitespace-pre-wrap">
          {`{
  "email": "dexter@web3.dev",
  "telegram": "@dexterdev",
  "discord": "dexter#1234"
}`}
        </div>
      );
    }

    if (file.startsWith('projects/')) {
      const projectFile = file.slice(9);
      if (projectFile in fileSystem['projects/']) {
        const content = fileSystem['projects/'][projectFile as keyof typeof fileSystem['projects/']];
        return <div className="text-green-400">{content}</div>;
      }
    }

    return <span className="text-red-400">cat: {file}: No such file or directory</span>;
  },

  pwd: () => <span className="text-blue-400">/home/dexter{currentDirectory}</span>,

  whoami: () => <span className="text-green-400">dexter - Web3 Technical Director</span>,

  date: () => <span className="text-yellow-400">{new Date().toString()}</span>,

  echo: (...args: string[]) => <span className="text-green-400">{args.join(' ')}</span>,

  cd: (dir: string) => {
    if (dir === 'projects' || dir === 'projects/') {
      return '';
    }
    if (dir === '..' || dir === '../') {
      return '';
    }
    return <span className="text-red-400">cd: {dir}: No such directory</span>;
  },
});

export function Hero() {
  const mounted = useMounted();
  const [isTerminalFocused, setIsTerminalFocused] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentDirectory, setCurrentDirectory] = useState('');

  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  const handleCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const args = trimmedCmd.split(' ');
    const command = args[0];
    const commandArgs = args.slice(1);

    let output: ReactNode = 'Command not found: ' + command;

    if (command === 'clear') {
      setCommandHistory([]);
      return;
    }

    setCurrentDirectory((prevDir) => {
      const commands = createAvailableCommands(prevDir);
      if (command in commands) {
        const commandFn = commands[command as keyof typeof commands];
        output = commandFn(...commandArgs);
      }

      setCommandHistory((prev) => [
        ...prev,
        {
          command: trimmedCmd,
          output,
          timestamp: Date.now(),
        },
      ]);

      // Handle cd command
      if (command === 'cd') {
        if (commandArgs[0] === 'projects') {
          return '/projects';
        } else if (commandArgs[0] === '..' || commandArgs[0] === '../') {
          return '';
        }
      }
      return prevDir;
    });
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // 自动聚焦到输入框
    inputRef.current?.focus();

    // 防止重复初始化
    if (!initializedRef.current) {
      initializedRef.current = true;
      // 显示初始的README内容和个人信息
      handleCommand('cat README.md');
      setTimeout(() => {
        handleCommand('cat about.md');
      }, 500);
    }
  }, [mounted, handleCommand]);

  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
      setCurrentInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex].command);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex].command);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  const handleTerminalClick = () => {
    setIsTerminalFocused(true);
    inputRef.current?.focus();
  };

  // 在客户端挂载前显示加载状态
  if (!mounted) {
    return (
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto w-full relative">
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg border border-gray-700 overflow-hidden shadow-2xl w-full">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center text-sm text-gray-400">~/dexter</div>
            </div>
            <div className="p-6 h-[400px] flex items-center justify-center">
              <span className="text-gray-500 font-mono">Loading terminal...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto w-full relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg border ${
            isTerminalFocused ? 'border-blue-500/50' : 'border-gray-700'
          } overflow-hidden shadow-2xl transition-colors duration-300 w-full`}
          ref={terminalRef}
          onClick={handleTerminalClick}
        >
          {/* Terminal Header */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 text-center text-sm text-gray-400">~/dexter{currentDirectory}</div>
          </div>

          {/* Terminal Content */}
          <div ref={terminalContentRef} className="p-6 space-y-2 h-[400px] overflow-y-auto">
            <AnimatePresence mode="popLayout">
              {commandHistory.map((item, index) => (
                <motion.div
                  key={`cmd-${item.timestamp}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="font-mono text-sm sm:text-base"
                >
                  <div className="flex items-center text-green-400">
                    <span className="mr-2">$</span>
                    <span>{item.command}</span>
                  </div>
                  <div className="text-gray-400 ml-4 whitespace-pre-wrap">{item.output}</div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Current Input Line */}
            <div className="flex items-center text-green-400 font-mono">
              <span className="mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-green-400 font-mono"
                onBlur={() => setIsTerminalFocused(false)}
                onFocus={() => setIsTerminalFocused(true)}
              />
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 text-2xl text-gray-400 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
            <FaEthereum title="Ethereum" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
            <SiSolidity title="Solidity" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
            <SiWeb3Dotjs title="Web3.js" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
            <TbBrandNextjs title="Next.js" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
            <SiTypescript title="TypeScript" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
            <SiRust title="Rust" />
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center space-x-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaGithub className="text-xl" />
            <span className="text-sm font-mono">github/dexter</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin className="text-xl" />
            <span className="text-sm font-mono">linkedin/dexter</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
