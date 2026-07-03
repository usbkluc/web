import { useState } from 'react';
import { Shield, BookOpen, ChevronDown, CheckCircle2, AlertTriangle, Download, Info } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export function SafetyGuide() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      q: 'Čo je to SteamRip?',
      a: 'SteamRip je populárna a overená platforma, ktorá ponúka tzv. "Pre-installed" PC hry. To znamená, že hry sú už plne nainštalované a pripravené na hranie. Nemusíte spúšťať žiadne zložité inštalačné programy - stačí hru stiahnuť, rozbaliť zo ZIP archívu a spustiť.'
    },
    {
      q: 'Prečo môj antivírus (alebo Windows Defender) hru zablokoval?',
      a: 'Ide o tzv. "False Positive" (falošný poplach). Antivírusové programy automaticky označujú herné cracky, emulátory licencií (napr. Goldberg Steam Emulator) alebo prepisovače API súborov (ako steam_api64.dll) ako vírusy, pretože obchádzajú DRM ochranu hry. Súbory z oficiálneho SteamRip sú stopercentne čisté. Ak vám antivírus súbor vymaže, musíte ho obnoviť z karantény a pridať celú zložku hry do výnimiek (Exclusions) vášho antivírusu.'
    },
    {
      q: 'Čo mám robiť, ak mi po spustení hry chýba .dll súbor?',
      a: 'Ak vám hra hlási chyby ako "VCRUNTIME140.dll missing" alebo "MSVCP140.dll not found", znamená to, že nemáte nainštalované systémové knižnice Windows. Každé stiahnutie z SteamRip obsahuje priečinok s názvom "_Redist" alebo "CommonRedist". Otvorte ho a nainštalujte všetky prítomné programy (DirectX, Visual C++ Redistributables z rokov 2005-2022). Po reštarte PC hra pobeží bez problémov.'
    },
    {
      q: 'Ako sa vyhnúť vírusom na sťahovacích stránkach?',
      a: 'Vždy používajte spoľahlivý adblocker (odporúčame bezplatný uBlock Origin). Sťahovacie servery majú veľa vyskakovacích okien (pop-up reklám). Keď kliknete na tlačidlo sťahovania a otvorí sa vám nová karta s neznámou stránkou, okamžite ju zatvorte! Skutočný odkaz na stiahnutie (napr. na Buzzheavier, Qiwi, MegaDB) sa zvyčajne objaví až po kliknutí na správne tlačidlo, alebo po uplynutí krátkeho časovača.'
    },
    {
      q: 'Hra sa nespustí alebo neukladá postup, čo s tým?',
      a: 'Prevažná väčšina hier vyžaduje pre správny zápis save-ov a prístup k súborom administrátorské práva. Na hlavný spúšťací .exe súbor kliknite pravým tlačidlom myši, prejdite do "Vlastnosti" -> "Kompatibilita" a zaškrtnite políčko "Spustiť tento program ako správca".'
    }
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 backdrop-blur-sm" id="safety-guide">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Side: Key Tips */}
        <div className="w-full md:w-5/12 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Bezpečnosť nadovšetko</span>
              <h3 className="text-xl font-bold text-white">Ako sťahovať bezpečne</h3>
            </div>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed">
            Sťahovanie z internetu môže byť nebezpečné, ak neviete, na čo si dávať pozor. Dodržujte tieto základné zlaté pravidlá pre bezstarostný herný zážitok.
          </p>

          <div className="space-y-3">
            <div className="flex gap-3 text-xs bg-slate-950/30 p-3 rounded-xl border border-slate-800/60">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="text-slate-200 block">Používajte uBlock Origin</strong>
                <span className="text-slate-400">Najlepší bezplatný blokátor otravných a nebezpečných reklám na svete.</span>
              </div>
            </div>

            <div className="flex gap-3 text-xs bg-slate-950/30 p-3 rounded-xl border border-slate-800/60">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="text-slate-200 block">Sťahujte cez bezpečné servery</strong>
                <span className="text-slate-400">Buzzheavier, Qiwi, a MegaDB neobmedzujú rýchlosť a sú najspoľahlivejšie.</span>
              </div>
            </div>

            <div className="flex gap-3 text-xs bg-slate-950/30 p-3 rounded-xl border border-slate-800/60">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="text-slate-200 block">Spúšťajte ako správca</strong>
                <span className="text-slate-400">Zabraňuje chybám pri ukladaní herného postupu (Save Game).</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Expandable FAQ */}
        <div className="w-full md:w-7/12 space-y-3">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <BookOpen className="h-4 w-4 text-cyan-400" />
            <span>Často kladené otázky (FAQ)</span>
          </div>

          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/20 transition-all duration-200 hover:border-slate-700"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-4 text-left transition-colors cursor-pointer text-slate-200 hover:text-white"
                >
                  <span className="font-semibold text-sm leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-800 bg-slate-950/40 p-4 text-xs leading-relaxed text-slate-400">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
