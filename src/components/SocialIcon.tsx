"use client";

interface SocialIconProps {
  icon: string;
  label: string;
  url: string;
  className?: string;
}

export function SocialIcon({ icon, label, url, className = "" }: SocialIconProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className={`text-gray-200 hover:text-red-600 transition-colors duration-200 transform hover:scale-110 ${className}`}
    >
      <i className={`fab fa-${icon} text-xl`}></i>
    </a>
  );
}

export const socialLinksData = [
  { icon: "instagram", url: "https://www.instagram.com/lamarshalada", label: "Instagram" },
  { icon: "x-twitter", url: "https://x.com/LaMarshalada", label: "X" },
  { icon: "twitch", url: "https://www.twitch.tv/marshalada", label: "Twitch" },
  { icon: "youtube", url: "https://www.youtube.com/channel/UCMhRv4plVTxn3Nbs8aOmhDQ", label: "YouTube" },
  { icon: "tiktok", url: "https://www.tiktok.com/@lamarshalada", label: "TikTok" },
  { icon: "discord", url: "https://discord.com/invite/CczFhBxedq", label: "Discord" },
];
