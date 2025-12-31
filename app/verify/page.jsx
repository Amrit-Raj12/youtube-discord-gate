'use client';

import { useState } from 'react';
import { Youtube, Check, ExternalLink } from 'lucide-react';

export default function VerificationGate() {
  const [step, setStep] = useState(1);
  const [showDiscord, setShowDiscord] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Replace these with your actual links
  const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@IamElixirYt';
  const DISCORD_INVITE_LINK = 'https://discord.gg/XX3muU8KdG';

  const handleSubscribeClick = () => {
    // Open YouTube in new tab
    window.open(YOUTUBE_CHANNEL_URL, '_blank');
    setIsLoading(true);
    // Wait 20 seconds before showing step 2
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 10000);
  };

  const handleVerifyClick = () => {
    setShowDiscord(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(DISCORD_INVITE_LINK);
    alert('Discord link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        {!showDiscord ? (
          <>
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
                <Youtube className="w-12 h-12 text-red-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Join Our Community
              </h1>
              <p className="text-gray-600">
                Subscribe to our YouTube channel to get access to our Discord server!
              </p>
            </div>

            {step === 1 && !isLoading && (
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-lg text-gray-800">Step 1</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Click the button below to open our YouTube channel and subscribe
                </p>
                <button
                  onClick={handleSubscribeClick}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Youtube className="w-5 h-5" />
                  Subscribe on YouTube
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            )}

            {isLoading && (
              <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200 text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-700 font-semibold mb-2">Please wait...</p>
                <p className="text-gray-600 text-sm">
                  Make sure you subscribe to the channel!
                </p>
              </div>
            )}

            {step === 2 && (
              <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-lg text-gray-800">Step 2</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Click to reveal the Discord link
                </p>
                <button
                  onClick={handleVerifyClick}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 cursor-pointer"
                >
                 Subscribed!
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Check className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Welcome! 🎉
              </h1>
              <p className="text-gray-600">
                Thank you for subscribing! Here's your Discord invite link:
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-4">
              <p className="text-sm text-gray-600 mb-2 font-semibold">Your Discord Invite:</p>
              <div className="bg-white rounded-lg p-3 break-all text-sm font-mono text-purple-700">
                {DISCORD_INVITE_LINK}
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={DISCORD_INVITE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
              >
                Open Discord
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={copyToClipboard}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition duration-200"
              >
                Copy Link
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              See you in the server! 👋
            </p>
          </>
        )}
      </div>
    </div>
  );
}