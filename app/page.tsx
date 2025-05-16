import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [wallet, setWallet] = useState(null);
  const [balanceCheck, setBalanceCheck] = useState(null);
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        const res = await window.solana.connect();
        setWallet(res.publicKey.toString());
      } catch (err) {
        console.error("Wallet connection failed", err);
      }
    } else {
      alert("Phantom Wallet tidak ditemukan. Silakan instal terlebih dahulu.");
    }
  };

  const fakeBalanceCheck = async () => {
    setLoading(true);
    setAiResponse("");
    setTimeout(() => {
      const randomBalance = Math.random() * 100;
      setBalanceCheck(randomBalance.toFixed(2));

      let response = "";
      if (randomBalance >= 90) {
        response = "🤖 Kamu pasti datang dari masa depan! Wallet-mu mengandung kekuatan tak terhingga! 💫💎";
      } else if (randomBalance >= 70) {
        response = "🤖 Sultan detected! Tolong donasi dong, AI mau beli server baru 🚀💰";
      } else if (randomBalance >= 50) {
        response = "🤖 Mantap! Dompetmu cukup sehat buat belanja NFT aneh 😎📦";
      } else if (randomBalance >= 30) {
        response = "🤖 Lumayan... kamu bisa traktir AI kopi instan ☕😉";
      } else if (randomBalance >= 20) {
        response = "🤖 Modal pas-pasan, semangat tetap maksimal! 💪🪙";
      } else if (randomBalance >= 10) {
        response = "🤖 Ini wallet atau celengan ayam plastik? 🐔🤣";
      } else if (randomBalance >= 5) {
        response = "🤖 Dompet kamu kurus kering, tapi semangatmu gemuk! 😤📉";
      } else {
        response = "🤖 Waduh... saldo kamu bikin AI pengen nangis di pojokan 😭🪙";
      }

      setAiResponse(response);
      setLoading(false);
    }, 2000);
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white p-6 space-y-10">
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-4">🤖 HUGAI KOMUNITAS</h1>
        <p className="text-xl">
          Tempat berkumpulnya pecinta AI, meme, dan absurditas terorganisir. Kalau kamu ngerti joke ini, kamu Hugai sejati.
        </p>
      </section>

      <section className="w-full max-w-2xl bg-black/50 p-6 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-2">📢 Komunitas Hugai</h2>
        <ul className="space-y-2">
          <li>💬 Discord: <a className="text-blue-400 underline" href="https://discord.gg/hugai" target="_blank">discord.gg/hugai</a></li>
          <li>🐦 Twitter: <a className="text-blue-400 underline" href="https://twitter.com/hugai_coin" target="_blank">@hugai_coin</a></li>
          <li>🎭 Meme War Forum (segera hadir)</li>
        </ul>
      </section>

      <section className="w-full max-w-2xl bg-black/50 p-6 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-2">📖 Tentang Hugai</h2>
        <p className="mb-2">Hugai adalah koin AI pertama yang bahkan AI-nya sendiri tidak paham kenapa dia ada.</p>
        <p>Terinspirasi oleh semangat open source dan kolaborasi Hugging Face, kami menciptakan Hugai untuk komunitas absurd yang ingin bersenang-senang dengan teknologi dan meme.</p>
      </section>

      <section className="w-full max-w-2xl bg-black/50 p-6 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-2">💸 Dukung Hugai</h2>
        <p className="mb-4">Semua sumbangan akan dipakai untuk bikin meme AI yang lebih kacau dan memperkuat komunitas.</p>
        <Button onClick={connectWallet} className="mb-2 text-lg px-6 py-3">
          {wallet ? `Wallet Tersambung: ${wallet.slice(0, 6)}...${wallet.slice(-4)}` : "📲 Connect Wallet untuk Donasi"}
        </Button>
        <p className="text-sm text-gray-400">
          Donasi bisa dikirim ke wallet Hugai: <code className="bg-gray-800 px-2 py-1 rounded">HUGAI1234567890EXAMPLE</code>
        </p>
      </section>

      <section className="w-full max-w-2xl bg-black/50 p-6 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-2">🧠 Tes Isi Dompetmu oleh AI</h2>
        <p className="mb-4">Bayar 1$ ke AI dan dapatkan reaksi AI: bisa berupa pujian membahana atau ejekan sarkas yang bikin ketawa 🤖💥</p>
        <Button onClick={connectWallet} className="mb-2 text-lg px-6 py-3">
          {wallet ? `Wallet Tersambung: ${wallet.slice(0, 6)}...${wallet.slice(-4)}` : "📲 Connect Wallet"}
        </Button>
        <Button onClick={fakeBalanceCheck} disabled={!wallet || loading} className="mb-2 text-lg px-6 py-3">
          {loading ? "🔍 Mengecek..." : "💰 Cek Isi Wallet (1$)"}
        </Button>
        {balanceCheck && (
          <p className="text-sm text-green-300">Simulasi saldo: ${balanceCheck}</p>
        )}
        {aiResponse && (
          <p className="mt-4 text-xl font-semibold text-yellow-300 text-center">{aiResponse}</p>
        )}
      </section>

      <footer className="text-center text-xs text-gray-400 mt-10">
        © 2025 HUGAI Komunitas Absurd. Dibangun dengan logika setengah sadar.
      </footer>
    </main>
  );
}
