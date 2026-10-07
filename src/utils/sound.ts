/**
 * Subtle tactile mechanical audio synthesizer for bespoke editorial interaction
 */
let audioCtx: AudioContext | null = null;
let isAudioMuted = false;

export const toggleAudioMute = (): boolean => {
  isAudioMuted = !isAudioMuted;
  if (!isAudioMuted) {
    playTactileClick();
  }
  return isAudioMuted;
};

export const getAudioMutedState = (): boolean => isAudioMuted;

export const playTactileClick = (pitch = 1800) => {
  if (isAudioMuted) return;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.035);

    gain.gain.setValueAtTime(0.035, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.035);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.04);
  } catch {
    // Ignore audio permission restrictions
  }
};
