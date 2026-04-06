"use client";

import Iridescence from "@/components/reactbits/Iridescence";

export default function IridescenceBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <Iridescence
        color={[0.55, 0.45, 0.85]}
        mouseReact={false}
        amplitude={0.06}
        speed={0.35}
      />
      <div className="absolute inset-0 bg-black/45" />
    </div>
  );
}
