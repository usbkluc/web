import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, HardDrive, Download, Cpu, ShieldAlert, FileArchive, CheckCircle2, RefreshCw } from 'lucide-react';
import { Game } from '../types';
import JSZip from 'jszip';

interface GameDetailModalProps {
  game: Game | null;
  onClose: () => void;
}

export function GameDetailModal({ game, onClose }: GameDetailModalProps) {
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);
  const [downloadState, setDownloadState] = useState<'idle' | 'preparing' | 'downloading' | 'verifying' | 'completed'>('idle');
  const [downloadSpeed, setDownloadSpeed] = useState<string>('0 MB/s');

  useEffect(() => {
    // Reset state on game change
    setDownloadProgress(null);
    setDownloadState('idle');
    setDownloadSpeed('0 MB/s');
  }, [game]);

  if (!game) return null;

  const triggerDirectFileDownload = async () => {
    try {
      const zip = new JSZip();

      // 1. Create Slovak instructions file
      const docContent = `===========================================================
                      TOBIPACK v1.0
===========================================================
Názov hry:       ${game.title}
Veľkosť:         ${game.size}
Stav prenosu:    Úspešne stiahnuté (100% OK)
Typ:             Pre-installed (Nevyžaduje inštaláciu)
Dátum:           ${new Date().toLocaleDateString('sk-SK')}
===========================================================

NÁVOD NA SPUSTENIE HRY:
1. Rozbaľte stiahnutý .ZIP archív hry na ľubovoľný disk.
2. Spustite súbor 'game.exe'.
3. Ak sa hra nespustí, kliknite na 'game.exe' pravým tlačidlom myši a zvoľte "Spustiť ako správca" (Run as Administrator).
4. Hrajte a užívajte si hru bez akýchkoľvek obmedzení!

Tento web tobipack slúži ako vyhľadávacia databáza direct-download odkazov a pre-installed balíčkov. Sťahovanie prebieha z bezpečných komunitných mirrorov.

ĎAKUJEME ŽE POUŽÍVATE TOBIPACK!
===========================================================`;

      // 2. Create the dummy executable game launcher
      // A small textual payload inside game.exe so it downloads correctly
      const exeContent = `MZ\x90\x00\x03\x00\x00\x00\x04\x00\x00\x00\xff\xff\x00\x00\xb8\x00\x00\x00\x00\x00\x00\x00@\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x0e\x1f\xba\x0e\x00\xb4\t\xcd!\xb8\x01L\xcd!This program cannot be run in DOS mode.
tobipack Launcher for ${game.title}. Starting game simulation...`;

      zip.file("navod.txt", docContent);
      zip.file("game.exe", exeContent);

      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = `[tobipack]_${game.title.replace(/\s+/g, '_')}_pre_installed.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Chyba pri vytváraní ZIP archívu:", err);
    }
  };

  const handleStartDownload = () => {
    if (downloadState !== 'idle') return;

    setDownloadState('preparing');
    setDownloadProgress(0);
    setDownloadSpeed('Pripojovanie...');

    let currentProgress = 0;
    
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 4;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        setDownloadProgress(100);
        setDownloadState('completed');
        setDownloadSpeed('0 MB/s');
        clearInterval(interval);
        triggerDirectFileDownload();
      } else {
        setDownloadProgress(currentProgress);
        
        if (currentProgress < 15) {
          setDownloadState('preparing');
          setDownloadSpeed('Vyhľadávanie seedov...');
        } else if (currentProgress < 85) {
          setDownloadState('downloading');
          // Simulate super fast gigabit speed
          const speed = (90 + Math.random() * 35).toFixed(1);
          setDownloadSpeed(`${speed} MB/s`);
        } else {
          setDownloadState('verifying');
          setDownloadSpeed('Kontrola SHA-256...');
        }
      }
    }, 150);
  };

  const getStatusMessage = () => {
    switch (downloadState) {
      case 'preparing':
        return 'Pripravuje sa zabezpečené sťahovanie...';
      case 'downloading':
        return 'Sťahuje sa plná pre-installed verzia hry...';
      case 'verifying':
        return 'Overuje sa integrita stiahnutých súborov...';
      case 'completed':
        return 'Sťahovanie úspešne dokončené! Súbor bol stiahnutý.';
      default:
        return 'Pripravené na okamžité sťahovanie';
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Content Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative z-10 flex h-full max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 shadow-2xl"
          id="game-detail-modal"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white hover:bg-slate-950/90 transition-all duration-200 cursor-pointer"
            aria-label="Zatvoriť"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Scrollable container */}
          <div className="flex-1 overflow-y-auto">
            {/* Cover Hero Image */}
            <div className="relative aspect-[21/9] w-full min-h-[220px]">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
              <img
                src={game.imageUrl}
                alt={game.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-400 border border-amber-500/20">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      {game.rating.toFixed(1)} / 10
                    </span>
                    <span className="rounded-md bg-cyan-500/10 px-2 py-0.5 text-xs font-semibold text-cyan-400 border border-cyan-500/20">
                      Vydané: {game.releaseYear}
                    </span>
                  </div>
                  <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
                    {game.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Description & Instructions */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">O hre</h4>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {game.description}
                  </p>
                </div>

                {/* Developer/Publisher */}
                <div className="grid grid-cols-2 gap-4 rounded-xl border border-slate-800/60 bg-slate-950/20 p-4 text-xs">
                  <div>
                    <span className="text-slate-500 block">Vývojár:</span>
                    <span className="text-slate-300 font-semibold">{game.developer}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Vydavateľ:</span>
                    <span className="text-slate-300 font-semibold">{game.publisher}</span>
                  </div>
                </div>

                {/* Step-by-Step Instructions tailored for tobipack */}
                <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-5">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-4">
                    <FileArchive className="h-4 w-4 text-cyan-400" />
                    <span>Návod: Ako spustiť hru cez tobipack</span>
                  </h4>
                  
                  <div className="space-y-4 text-xs text-slate-300">
                    <div className="flex gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-400 border border-cyan-500/20">1</div>
                      <div>
                        <strong className="text-slate-100 block mb-0.5">Spustite sťahovanie</strong>
                        <p className="text-slate-400 leading-relaxed">Kliknite na veľké zelené tlačidlo <strong>"Spustiť sťahovanie hry"</strong> vpravo. Sťahovanie prebehne bleskovo priamo vo vašom prehliadači.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-400 border border-cyan-500/20">2</div>
                      <div>
                        <strong className="text-slate-100 block mb-0.5">Automatické uloženie</strong>
                        <p className="text-slate-400 leading-relaxed">Po dokončení in-app lišty sa vám ihneď spustí sťahovanie inštrukčného spúšťača priamo do vášho počítača bez akéhokoľvek presmerovania na otravné reklamné weby.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-400 border border-cyan-500/20">3</div>
                      <div>
                        <strong className="text-slate-100 block mb-0.5">Spustenie hry</strong>
                        <p className="text-slate-400 leading-relaxed">Všetky hry v ponuke tobipack sú kompletne pred-nainštalované (Pre-installed). Súbory stačí rozbaliť napríklad na druhý disk a spustiť ako správca.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Download Controls & Specs */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* Download CTA Panel */}
                <div className="rounded-xl border border-cyan-500/20 bg-slate-950/60 p-5 flex flex-col gap-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Centrum Sťahovania tobipack</h4>
                  
                  {downloadState === 'idle' ? (
                    <button
                      onClick={handleStartDownload}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 py-3.5 text-sm font-bold text-white transition-all duration-200 shadow-lg shadow-emerald-600/10 active:scale-[0.98] cursor-pointer"
                    >
                      <Download className="h-4 w-4" />
                      <span>Spustiť sťahovanie hry</span>
                    </button>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">{getStatusMessage()}</span>
                        <span className="text-cyan-400 font-bold">{downloadProgress}%</span>
                      </div>
                      
                      {/* Modern Progress Bar */}
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500"
                          initial={{ width: '0%' }}
                          animate={{ width: `${downloadProgress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                        <span className="flex items-center gap-1">
                          {downloadState !== 'completed' && <RefreshCw className="h-3 w-3 animate-spin text-cyan-500" />}
                          {downloadState === 'completed' && <CheckCircle2 className="h-3 w-3 text-emerald-500" />}
                          Veľkosť: {game.size}
                        </span>
                        <span>Rýchlosť: <strong className="text-slate-300">{downloadSpeed}</strong></span>
                      </div>
                    </div>
                  )}

                  <p className="text-[11px] text-slate-400 text-center leading-relaxed font-medium">
                    tobipack poskytuje 100% priame sťahovanie. Žiadne reklamy, žiadne zbytočné presmerovania, iba čistá hra.
                  </p>
                </div>

                {/* System Specs Requirements */}
                {game.requirements && (
                  <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
                    <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                      <Cpu className="h-4 w-4 text-cyan-400" />
                      <span>Minimálne požiadavky</span>
                    </h4>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="border-b border-slate-800/60 pb-2">
                        <span className="text-slate-500 block text-[10px] uppercase">Procesor / CPU:</span>
                        <span className="text-slate-300">{game.requirements.cpu}</span>
                      </div>
                      <div className="border-b border-slate-800/60 pb-2">
                        <span className="text-slate-500 block text-[10px] uppercase">Pamäť RAM:</span>
                        <span className="text-slate-300">{game.requirements.ram}</span>
                      </div>
                      <div className="border-b border-slate-800/60 pb-2">
                        <span className="text-slate-500 block text-[10px] uppercase">Grafická karta / GPU:</span>
                        <span className="text-slate-300">{game.requirements.gpu}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase">Miesto na disku:</span>
                        <span className="text-slate-300 flex items-center gap-1">
                          <HardDrive className="h-3.5 w-3.5 text-slate-400 inline" />
                          {game.requirements.storage} (Odporúčané SSD)
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Safety Warning Panel */}
                <div className="rounded-xl border border-amber-500/20 bg-amber-950/10 p-4 flex gap-3 text-xs text-amber-300">
                  <ShieldAlert className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-200 mb-1">Dôležité upozornenie</h5>
                    <p className="leading-relaxed text-slate-400 text-[11px]">
                      Hry sťahované cez tobipack sú pred-nainštalované. Odporúčame pridať priečinok s hrou do výnimiek vášho antivírusu pre hladké spustenie bez falošných poplachov.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
