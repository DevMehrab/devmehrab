import { Mail, ArrowUpRight } from "lucide-react";

export default function DirectRoute() {
  return (
    <div className="h-full flex flex-col justify-center p-8 rounded-2xl bg-zinc-900/10 border border-zinc-800/30">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
          <Mail className="w-5 h-5 text-zinc-400" />
        </div>
        <div>
          <h4 className="text-zinc-100 font-semibold">Direct Route</h4>
          <p className="font-mono text-xs text-zinc-500">#*&$@^$+%</p>
        </div>
      </div>

      <p className="text-zinc-400 text-sm leading-relaxed mb-8">
        You can reach me directly at the address below. I monitor this inbox
        regularly.
      </p>

      <a
        href="mailto:dev.mehrabhossain@gmail.com"
        className="group flex flex-col gap-2 p-4 rounded-xl bg-zinc-950/50 border border-zinc-800 hover:border-cyan-500/50 transition-colors"
      >
        <span className="font-mono text-xs text-zinc-500 group-hover:text-cyan-500 transition-colors flex justify-between items-center">
          MAIL_TO
          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </span>
        <span className="text-zinc-200 text-sm sm:text-base font-medium break-all">
          dev.mehrabhossain@gmail.com
        </span>
      </a>
    </div>
  );
}
